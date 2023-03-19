import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

const getPathPage = () => {
  const path = window.location.pathname;
  let page = '';
  if (path === '/') {
    page = 'Home';
  } else if (path === '/about') {
    page = 'About Us';
  } else {
    page = 'Error';
  }

  return page;
};

export class Layout extends React.Component<object, { page: string }> {
  constructor(props: object) {
    super(props);
    this.state = { page: getPathPage() };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(page: string) {
    this.setState({ page: page });
  }
  render() {
    return (
      <>
        <header className="header">
          <Navigation onClick={this.handleClick} />
          <h2>You are on the {this.state.page} page</h2>
        </header>
        <Outlet />
      </>
    );
  }
}
