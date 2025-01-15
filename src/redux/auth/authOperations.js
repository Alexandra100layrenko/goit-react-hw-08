import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk('auth/register', async ({ name, email, password }) => {
  const response = await axios.post('https://connections-api.goit.global/users/signup', { name, email, password });
  return response.data;
});

export const logout = createAsyncThunk('auth/logout', async () => {
  await axios.post('/api/logout');
  return null;
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, { getState }) => {
  const state = getState();
  const token = state.auth.token;
  if (!token) throw new Error('No token found');
  const response = await axios.get('https://connections-api.goit.global/users/current', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});