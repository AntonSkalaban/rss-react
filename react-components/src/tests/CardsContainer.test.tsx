import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { CardsContainer } from '../pages/Main/components/CardsContainer/CardsContainer';
import { Main } from '../pages/Main/Main';
import { testsCards } from '../mocks/handlers';

describe('Main page', () => {
  test('Render Cards', async () => {
    render(<Main />);

    const inputEl = screen.getByPlaceholderText('Search here');
    await userEvent.type(inputEl, 'Antenna Morty{enter}');

    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveValue('Antenna Morty');
    expect(await screen.findByText(/Antenna Morty/i)).toBeInTheDocument();
  });

  test('Render Error', async () => {
    render(<Main />);

    const inputEl = screen.getByPlaceholderText('Search here');
    await userEvent.type(inputEl, 'ErrorMessage{enter}');

    expect(await screen.findByText(/Not found/i)).toBeInTheDocument();
  });
});

describe('CardsContainer', () => {
  test('Renders testCards', async () => {
    render(<CardsContainer cards={testsCards} isLoading={false} error={false} />);
    const cards = screen.getAllByRole('small-card');
    expect(cards.length).toBe(2);
  });
});
