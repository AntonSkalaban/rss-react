import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    form: [{ name: '', country: '', date: '', image: '', benefits: [], notification: '' }],
  },
  reducers: {
    updateForm(state, action) {
      console.log(action.payload);
      //state.form = action.payload;
      return;
    },
  },
});

export const { updateForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
