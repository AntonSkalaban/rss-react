import React from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { IFormValues } from '../Form';

interface DateInputProps {
  // innerRef?: React.Ref<HTMLInputElement>;
  label: string;
  register: UseFormRegister<IFormValues>;
  formState: FormState<IFormValues>;
}
export const DateInput = ({ label, register, formState: { errors } }: DateInputProps) => {
  return (
    <label>
      {label}:
      <input type="date" {...register('Date', { required: 'Date is required' })} />
      {errors.Date && <p className="error">{errors.Date.message}</p>}
    </label>
  );
};

// export const DateRef = React.forwardRef(
//   (props: DateInputProps, ref: React.Ref<HTMLInputElement>) => (
//     <DateInput innerRef={ref} {...props} />
//   )
// );
