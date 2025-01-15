import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact,  editContact } from '../../redux/contacts/contactsOperations';
import { setFilter } from '../../redux/filters/filtersSlice';
import { useEffect, useState } from 'react';
import { Button, TextField, List, ListItem, Modal, Box } from '@mui/material';
import { toast } from 'react-hot-toast';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filters);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactToEdit, setContactToEdit] = useState(null);
  const [newContactData, setNewContactData] = useState({ name: '', phone: '' });

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.phone.includes(filter)
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id))
      .then(() => toast.success('Contact deleted'))
      .catch(() => toast.error('Failed to delete contact'));
  };

  const handleEdit = () => {
    dispatch(editContact({ id: contactToEdit.id, updates: newContactData }))
      .then(() => {
        toast.success('Contact updated');
        setModalOpen(false);
      })
      .catch(() => toast.error('Failed to update contact'));
  };

  return (
    <div>
      <TextField
        label="Search Contacts"
        variant="outlined"
        onChange={(e) => dispatch(setFilter(e.target.value))}
        value={filter}
        fullWidth
      />
      <List>
        {filteredContacts.map((contact) => (
          <ListItem key={contact.id}>
            <div>{contact.name} - {contact.phone}</div>
            <Button onClick={() => {
              setContactToEdit(contact);
              setModalOpen(true);
            }}>Edit</Button>
            <Button onClick={() => handleDelete(contact.id)}>Delete</Button>
          </ListItem>
        ))}
      </List>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box sx={{ ...style }}>
          <h2>Edit Contact</h2>
          <TextField
            label="Name"
            value={newContactData.name}
            onChange={(e) => setNewContactData({ ...newContactData, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Phone"
            value={newContactData.phone}
            onChange={(e) => setNewContactData({ ...newContactData, phone: e.target.value })}
            fullWidth
          />
          <Button onClick={handleEdit}>Save</Button>
        </Box>
      </Modal>
    </div>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'white',
  padding: '20px',
};

export default ContactsPage;
