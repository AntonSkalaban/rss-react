import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface CheckboxProps {
  innerRef?: React.Ref<HTMLInputElement>;
  name: Path<IFormValues>;
  value: string;
  label: string;
  register: UseFormRegister<IFormValues>;
}

const Checkbox = ({ name, value, label, register }: CheckboxProps) => {
  return (
    <label>
      <input
        type="checkbox"
        value={value}
        {...register(name, { required: 'Benefits is required' })}
      />
      {label}
    </label>
  );
};

export const CheckboxRef = React.forwardRef(
  (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => <Checkbox innerRef={ref} {...props} />
);
