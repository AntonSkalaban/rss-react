import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pages } from '../../components/Header/Header';
import './style.css';

interface NavigationProps {
  onClick(page: string): void;
}

export const Navigation = ({ onClick }: NavigationProps) => {
  const setActive = ({ isActive }: { isActive: boolean }) => {
    return { color: isActive ? 'blue' : 'gray' };
  };

  return (
    <nav className="nav">
      <NavLink to="/" style={setActive} onClick={() => onClick(Pages.Main)}>
        {Pages.Main}
      </NavLink>
      <NavLink to="/about" style={setActive} onClick={() => onClick(Pages.AboutUs)}>
        {Pages.AboutUs}
      </NavLink>
      <NavLink to="/forms" style={setActive} onClick={() => onClick(Pages.Forms)}>
        {Pages.Forms}
      </NavLink>
    </nav>
  );
};
