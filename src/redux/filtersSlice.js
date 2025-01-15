import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
		name: '',
	},
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.filters.name = action.payload;
    },
  },
});

// selectors
export const selectNameFilter = state => state.filters.filters.name;
export const selectFilter = state => state.filters.filters.name;
// actions, rducers
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;