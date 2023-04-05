import React from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface SelectProps {
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
}

export const Select = ({ register, formState: { errors } }: SelectProps) => {
  return (
    <label>
      Choose your country:
      <select {...register('Country', { required: 'Country is required' })}>
        <option value="" defaultValue="true">
          Country
        </option>
        <option value="Poland">Poland</option>
        <option value="Belarus">Belarus</option>
        <option value="Russia">Russia</option>
        <option value="Ukraine">Ukraine</option>
      </select>
      {errors.Country && <p className="error">{errors.Country.message}</p>}
    </label>
  );
};
