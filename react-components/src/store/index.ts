import { cardAPI } from './../services/CardService';
import { configureStore } from '@reduxjs/toolkit';
import { cardReducer } from './cardsSlice';
import { searchBarReducer } from './searchBarSlice';
import { formReducer } from './formSlice';

// const rootReducer = combineReducers({
//   searchBarValue: searchBarReducer,
//   cardReducer,
//   [cardAPI.reducerPath]: cardAPI.reducer,
// })

// export const setUpStore = () => {
//   return configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware)
//   })
// }
export const store = configureStore({
  reducer: {
    searchBarValue: searchBarReducer,
    card: cardReducer,
    [cardAPI.reducerPath]: cardAPI.reducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(cardAPI.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
