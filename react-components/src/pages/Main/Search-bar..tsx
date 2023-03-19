import React from 'react';

const getValue = () => {
  const value = localStorage.getItem('value');
  return value ? value : '';
};

export class SearchBar extends React.Component<object, { value: string }> {
  constructor(props: object) {
    super(props);
    this.state = { value: getValue() };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ value: (e.target as HTMLInputElement)?.value });
  }

  componentWillUnmount() {
    localStorage.setItem('value', this.state.value);
  }

  render() {
    return (
      <input
        type="text"
        placeholder="Search here"
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}
