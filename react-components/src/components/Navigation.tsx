import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/" style={this.setActive} onClick={() => this.props.onClick('Main')}>
          Main
        </NavLink>
        <NavLink to="/about" style={this.setActive} onClick={() => this.props.onClick('About Us')}>
          About
        </NavLink>
      </nav>
    );
  }
}
