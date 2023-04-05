import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface RadioProps {
  name: Path<IFormValues>;
  value: string;
  label: string;
  register: UseFormRegister<IFormValues>;
}

export const Radio = ({ name, label, value, register }: RadioProps) => {
  return (
    <label>
      <input
        {...register(name, { required: 'This field is required' })}
        type="radio"
        name={name}
        value={value}
      />
      {label}
    </label>
  );
};
