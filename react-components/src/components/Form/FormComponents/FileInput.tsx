import React from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface FileInputProps {
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
  label: string;
}

export const FileInput = ({ label, register, formState: { errors } }: FileInputProps) => {
  return (
    <label htmlFor="file">
      {label}:
      <input
        type="file"
        {...register('Image', {
          required: 'Add an image in the format image/png, image/gif, image/jpeg',
        })}
        accept="image/png, image/gif, image/jpeg"
      />
      {errors.Image && <p className="error">{errors.Image.message}</p>}
    </label>
  );
};
