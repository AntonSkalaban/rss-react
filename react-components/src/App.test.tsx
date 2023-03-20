import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('Accordion test', () => {
  test('Should show title', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Page/i)).toBeDeInTheDocument();
  });
});
