/*файл слайсу для фільтрів*/
import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filterSlice',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
export const selectFilter = (state) => state.filter.filter;