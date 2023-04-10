import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';

export enum Pages {
  Main = 'Main',
  AboutUs = 'About Us',
  Forms = 'Forms',
  Error = 'Error',
}

const getPage = (path: string) => {
  switch (path) {
    case '/':
      return Pages.Main;
    case '/about':
      return Pages.AboutUs;
    case '/forms':
      return Pages.Forms;
    default:
      return Pages.Error;
  }
};

export const Layout = () => {
  const location = useLocation();
  const path = location.pathname;

  const [page, setPage] = useState(getPage(path));

  const handleClick = (page: Pages) => {
    setPage(page);
  };

  return (
    <>
      <header className="header">
        <Navigation onClick={handleClick} />
        <h2>You are on the {page} page</h2>
      </header>
      <Outlet />
    </>
  );
};
