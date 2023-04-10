import React, { useEffect, useState } from 'react';
import { getData } from '../../requests/requests';
import { ICard } from '../../type';
import './style.css';

interface SearchBarProps {
  handleLoading: (value: boolean) => void;
  handleError: (value: boolean) => void;
  updateData: (cards: ICard[]) => void;
}

const getValue = () => {
  const value = localStorage.getItem('value');
  return value ? value : '';
};

export const SearchBar = ({ handleLoading, handleError, updateData }: SearchBarProps) => {
  const [value, setValue] = useState(() => getValue());

  useEffect(() => {
    (async () => {
      await handleFetch();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFetch = async () => {
    handleLoading(true);
    const cards = await getData(value);
    handleLoading(false);
    if (cards) {
      updateData(cards);
    } else {
      handleError(true);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement)?.value);
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    localStorage.setItem('value', value);
    handleError(false);
    (async () => {
      await handleFetch();
    })();
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
