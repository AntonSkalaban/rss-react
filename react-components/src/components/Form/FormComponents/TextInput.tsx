import React from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface TextInputProps {
  label: string;
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
}

export const TextInput = ({ label, register, formState: { errors } }: TextInputProps) => {
  return (
    <label>
      {label}:
      <input
        type="text"
        {...register('Name', {
          required: 'Name is required',
          pattern: {
            value: /^[a-zA-Z]+ [a-zA-Z]+$/,
            message: 'Please Enter A Valid First and Last name!',
          },
        })}
      />
      {errors.Name && <p className="error"> {errors.Name.message}</p>}
    </label>
  );
};
