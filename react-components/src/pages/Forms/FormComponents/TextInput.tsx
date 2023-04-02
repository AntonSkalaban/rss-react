import React from 'react';
import { FieldErrors, FormState, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface TextInputProps {
  innerRef?: React.Ref<HTMLInputElement>;
  label: string;
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
}

const TextInput = ({ label, register, formState: { errors } }: TextInputProps) => {
  return (
    <label>
      {label}:
      <input type="text" {...register('Name', { required: 'First name is required' })} />
      {errors.Name && <p className="error">{errors.Name.message}</p>}
    </label>
  );
};

export const TextInputRef = React.forwardRef(
  (props: TextInputProps, ref: React.Ref<HTMLInputElement>) => (
    <TextInput innerRef={ref} {...props} />
  )
);
