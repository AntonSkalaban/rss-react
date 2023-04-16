import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/index';
import { changeSearchValue } from '../../../../store/searchBarSlice';
import { updateCards } from '../../../../store/cardsSlice';

import './style.css';

// interface SearchBarProps {
//   handleLoading: (value: boolean) => void;
//   handleError: (value: boolean) => void;
// }

export const SearchBar = () => {
  const dispatch = useDispatch();
  const updateSearchText = () => dispatch(changeSearchValue(value));

  const text = useSelector((state: RootState) => state.searchBarValue.value);
  const [value, setValue] = useState(text);

  //const getCards = (cards: ICard[]) => dispatch(updateCards(cards));

  // useEffect(() => {
  //   (async () => {
  //     await fillCardsList();
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const fillCardsList = async () => {
  //   try {
  //     handleLoading(true);
  //     const cards = await fetchCards(value);
  //     getCards(cards);
  //   } catch {
  //     handleError(true);
  //   } finally {
  //     handleLoading(false);
  //   }
  // };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement)?.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    updateSearchText();
    // handleError(false);
    // (async () => {
    //   await fillCardsList();
    // })();
  };

  return (
    <div className="search-bar-container">
      <input
        className="search-bar"
        type="text"
        placeholder="Search here"
        value={value}
        onChange={handleChange}
        onKeyDown={handleEnterPress}
      />
    </div>
  );
};
