import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/index';
import { changeSearchValue } from '../../../../store/searchBarSlice';

import './style.css';

interface SearchBarProps {
  getData: (value: string) => void;
}

export const SearchBar = ({ getData }: SearchBarProps) => {
  const dispatch = useDispatch();
  const updateSearchText = () => dispatch(changeSearchValue(value));
  const searchText = useSelector((state: RootState) => state.searchBarValue.value);

  const [value, setValue] = useState(searchText);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement)?.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    updateSearchText();
    getData(value);
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
