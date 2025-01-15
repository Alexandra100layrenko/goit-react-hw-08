import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css'


const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = e => {
    console.log('Input value:', e.target.value);
    dispatch(changeFilter(e.target.value));
  }


  return (
    <form className={s.searchBlock}>
      <label>
        <span>Find contacts by name</span>
        <input 
          id="search"
          type="text"
          name="search"
          className={s.search}
          value={filter}
          onChange={handleChange}
          autoComplete="name"
        />
      </label>
    </form>
  )
}

export default SearchBox;
