import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Accordion test', () => {
  test('Should show title', () => {
    render(<Card title="card" image="url" description="test" />);
    expect(screen.getByText(/card/i)).toBeInTheDocument();
  });
});
