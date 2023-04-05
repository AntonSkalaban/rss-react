import React, { useEffect, useState } from 'react';

const getValue = () => {
  const value = localStorage.getItem('value');
  return value ? value : '';
};

export const SearchBar = () => {
  const [value, setValue] = useState(() => getValue());

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue((e.target as HTMLInputElement)?.value);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('value', value);
    };
  }, [value]);

  return <input type="text" placeholder="Search here" onChange={handleChange} value={value} />;
};
