import React from 'react';
import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Card } from '../pages/Forms/Card';

import { checkNameValid } from '../pages/Forms/Form';
import { DateInput } from '../pages/Forms/FormComponents/DateInput';

describe('Accordion test', () => {
  test('Should show card', () => {
    render(
      <Card name="User Test" image="url" country={''} date={''} benefits={[]} notifications={''} />
    );
    expect(screen.getByText(/User Test/i)).toBeInTheDocument();
  });

  test("name doesn't be valid", () => {
    expect(checkNameValid('Mary')).toBeFalsy();
  });

  test('Should show Error', () => {
    render(<DateInput label={''} isValid={false} />);
    expect(screen.getByText(/Error/i)).toBeInTheDocument();
  });
});
