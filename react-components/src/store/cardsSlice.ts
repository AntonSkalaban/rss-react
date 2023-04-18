import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRickAndMortyCard } from '../types';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [] as IRickAndMortyCard[],
  },
  reducers: {
    saveCards(state, action) {
      state.cards = action.payload;
    },
  },
});

export const { saveCards } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
