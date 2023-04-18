import { createSlice } from '@reduxjs/toolkit';
import { IFormCard } from '../types';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    formCards: [] as IFormCard[],
  },
  reducers: {
    addFormCard(state, action) {
      state.formCards = [...state.formCards, action.payload];
    },
  },
});

export const { addFormCard } = formSlice.actions;
export const formReducer = formSlice.reducer;
