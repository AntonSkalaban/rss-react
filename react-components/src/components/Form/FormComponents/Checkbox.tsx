import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface CheckboxProps {
  name: Path<IFormValues>;
  value: string;
  label: string;
  register: UseFormRegister<IFormValues>;
}

export const Checkbox = ({ name, value, label, register }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        {...register(name, {
          required: name === 'Benefits' ? 'Benefits is required' : 'Data is required',
        })}
      />
      {label}
    </label>
  );
};
