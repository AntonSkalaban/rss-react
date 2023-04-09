import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { getData } from 'pages/Main/requests/requests';
import { CardsContainer } from 'pages/Main/components/CardsContainer/CardsContainer';
import { Main } from '../pages/Main/Main';

describe('Cards', () => {
  test('message', async () => {
    render(<Main />);
    // userEvent.type(screen.getByPlaceholderText('Search here'), 'Antenna');
    // userEvent.keyboard('{Enter}');

    // await userEvent.keyboard('{Enter}');
    expect(await screen.findByText(/Antenna Morty/i)).toBeInTheDocument();
  });
});
