import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import { getData } from 'pages/Main/requests/requests';
import { CardsContainer } from '../pages/Main/components/CardsContainer/CardsContainer';
import { Main } from '../pages/Main/Main';
import { ICard } from '../pages/Main/type';
import { testsCards } from '../mocks/handlers';

// describe('Main page', () => {
//   test('RendersCards', async () => {
//     render(<Main />);
//     // userEvent.type(screen.getByPlaceholderText('Search here'), 'lkjlkmkm;m;');
//     // userEvent.keyboard('{Enter}');

//     fireEvent.input(screen.getByPlaceholderText('Search here'), {
//       target: {
//         value: 'lkjlkmkm',
//       },
//     });

//     await userEvent.keyboard('{Enter}');
//     expect(await screen.findByText(/An Morty/i)).toBeInTheDocument();
//   });
// });

describe('CardsContainer', () => {
  test('Renders testCards', async () => {
    render(<CardsContainer cards={testsCards} isLoading={false} error={false} />);
    const cards = screen.getAllByRole('small-card');
    expect(cards.length).toBe(2);
  });
});
