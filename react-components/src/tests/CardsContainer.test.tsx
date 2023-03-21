import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from '../pages/Main/Card';
import { CardsContainer } from '../pages/Main/CardsContainer';

describe('Accordion test', () => {
  test('Should include card', () => {
    render(
      <CardsContainer>
        <Card title="card" image="url" description="test" />
      </CardsContainer>
    );
    expect(screen.getByText(/card/i)).toBeInTheDocument();
  });
});
