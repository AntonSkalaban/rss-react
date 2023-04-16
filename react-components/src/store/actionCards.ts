import { cardsFetching, cardsFetchingErrore, cardsFetchingSuccess } from './cardsSlice';
import { AppDispatch } from './index';

export const fetchCards = (value: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(cardsFetching());
    const response = await fetch(`https://rickandmortyapi.com/api/character?name=${value}`);
    const data = await response.json();
    dispatch(cardsFetchingSuccess(data.results));
  } catch (e) {
    dispatch(cardsFetchingErrore((e as Error).message));
  }
};
