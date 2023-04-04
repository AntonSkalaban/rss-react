import React from 'react';
import { describe, expect, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Card } from '../pages/Forms/Card';
import { Form } from '../pages/Forms/Form';

describe('Form tests', () => {
  test('inputs', async () => {
    render(<Form onSubmit={() => null} />);

    fireEvent.input(screen.getByLabelText('Name:'), {
      target: {
        value: 'John Cena',
      },
    });

    await userEvent.click(screen.getByText('I consent to my personal data'));

    expect((screen.getByLabelText('Name:') as HTMLInputElement).value).toBe('John Cena');
    expect(screen.getByLabelText('I consent to my personal data')).toBeChecked();
  });
});

describe('Accordion test', () => {
  test('Should show card', () => {
    render(
      <Card name="Test Card" image="url" country={''} date={''} benefits={[]} notifications={''} />
    );
    expect(screen.getByText(/Test Card/i)).toBeInTheDocument();
  });
});
