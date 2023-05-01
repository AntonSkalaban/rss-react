import { createSlice } from '@reduxjs/toolkit';
import { ICharcater } from '../types';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [] as ICharcater[],
  },
  reducers: {
    saveCards(state, action) {
      state.cards = action.payload;
    },
  },
});

export const { saveCards } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
