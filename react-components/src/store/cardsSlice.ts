import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRickAndMortyCard } from '../types';

const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [] as IRickAndMortyCard[],
  },
  reducers: {
    updateCards(state, action) {
      state.cards = action.payload;
    },
    // cardsFetching(state) {
    //   state.isLoading = true;
    // },
    // cardsFetchingSuccess(state, action) {
    //   state.isLoading = false;
    //   state.error = '';
    //   state.cards = action.payload;
    // },
    // cardsFetchingErrore(state, action: PayloadAction<string>) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  },
});

export const { updateCards } = cardSlice.actions;
export const cardReducer = cardSlice.reducer;
