import React, { useEffect } from 'react';
import { ICard } from './Card/types';
import { TextInput } from './FormComponents/TextInput';
import { DateInput } from './FormComponents/DateInput';
import { Select } from './FormComponents/Select';
import { FileInput } from './FormComponents/FileInput';
import { Checkbox } from './FormComponents/Checkbox';
import { Radio } from './FormComponents/Radio';
import { SubmitBtn } from './FormComponents/SubmitBtn';
import { benefitsCheckboxes, notificationsRadio } from './formData';
import './Form.css';

import { useForm, SubmitHandler } from 'react-hook-form';

export interface FormProps {
  onSubmit: (card: ICard) => void;
}
export interface IFormValues {
  Name: string;
  Date: string;
  Country: string;
  Benefits: string;
  Image: string;
  Radio: string;
  Data: string;
}

export const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    reset,
  } = useForm<IFormValues>();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState, reset]);

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const name = data.Name;
    const country = data.Country;
    const date = data.Date;
    const image = URL.createObjectURL(data.Image[0] as unknown as Blob | MediaSource);
    const benefits = [...data.Benefits];
    const notifications = data.Radio;

    const card = { name, country, date, image, benefits, notifications };
    props.onSubmit(card as ICard);
    alert('Succsess!');
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <TextInput register={register} formState={formState} label="Name" />
      <DateInput register={register} formState={formState} label="Date of receipt of goods" />
      <Select register={register} formState={formState} />
      <div className="inputs-block">
        <p>Select service benefits:</p>
        {benefitsCheckboxes.map((checkbox) => {
          return (
            <Checkbox
              key={checkbox.id}
              name={checkbox.name}
              value={checkbox.value}
              label={checkbox.label}
              register={register}
            />
          );
        })}
        {errors.Benefits && <p className="error">{errors.Benefits.message}</p>}
      </div>
      <div>
        <FileInput register={register} formState={formState} label="Add products photo" />
      </div>
      <div className="inputs-block">
        {notificationsRadio.map((radio) => {
          return (
            <Radio
              register={register}
              key={radio.id}
              name={radio.name}
              value={radio.value}
              label={radio.label}
            />
          );
        })}
        {errors.Radio && <p className="error">{errors.Radio.message}</p>}
      </div>
      <Checkbox
        name="Data"
        value="process-data"
        register={register}
        label="I consent to my personal data"
      />
      {errors.Data && <p className="error">{errors.Data.message}</p>}
      <SubmitBtn />
    </form>
  );
};
