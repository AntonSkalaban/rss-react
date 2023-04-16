import { createSlice } from '@reduxjs/toolkit';

const searchBarSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    changeSearchValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { changeSearchValue } = searchBarSlice.actions;
export const searchBarReducer = searchBarSlice.reducer;
