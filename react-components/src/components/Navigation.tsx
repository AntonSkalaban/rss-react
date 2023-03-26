import React from 'react';
import { NavLink } from 'react-router-dom';
import { Pages } from './Layout';
import './style.css';

interface INavigation {
  onClick(page: string): void;
}

export class Navigation extends React.Component<INavigation, object> {
  constructor(props: INavigation) {
    super(props);
  }

  setActive({ isActive }: { isActive: boolean }) {
    return { color: isActive ? 'blue' : 'gray' };
  }

  render() {
    return (
      <nav className="nav">
        <NavLink to="/" style={this.setActive} onClick={() => this.props.onClick(Pages.Main)}>
          {Pages.Main}
        </NavLink>
        <NavLink
          to="/about"
          style={this.setActive}
          onClick={() => this.props.onClick(Pages.AboutUs)}
        >
          {Pages.AboutUs}
        </NavLink>
        <NavLink to="/forms" style={this.setActive} onClick={() => this.props.onClick(Pages.Forms)}>
          {Pages.Forms}
        </NavLink>
      </nav>
    );
  }
}
