import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pages } from './Layout';
import './style.css';

interface INavigation {
  onClick(page: string): void;
}

export const Navigation = (props: INavigation) => {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return { color: isActive ? 'blue' : 'gray' };
  };

  return (
    <nav className="nav">
      <NavLink to="/" style={setActive} onClick={() => props.onClick(Pages.Main)}>
        {Pages.Main}
      </NavLink>
      <NavLink to="/about" style={setActive} onClick={() => props.onClick(Pages.AboutUs)}>
        {Pages.AboutUs}
      </NavLink>
      <NavLink to="/forms" style={setActive} onClick={() => props.onClick(Pages.Forms)}>
        {Pages.Forms}
      </NavLink>
    </nav>
  );
};
