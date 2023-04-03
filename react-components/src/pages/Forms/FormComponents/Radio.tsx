import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface RadioProps {
  name: Path<IFormValues>;
  value: string;
  label: string;
  register: UseFormRegister<IFormValues>;
  // innerRef?: React.Ref<HTMLInputElement>;
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

// export const RadioRef = React.forwardRef((props: RadioProps, ref: React.Ref<HTMLInputElement>) => (
//   <Radio innerRef={ref} {...props} />
// ));
