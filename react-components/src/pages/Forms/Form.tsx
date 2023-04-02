import React, { useRef, useState } from 'react';
import { FormProps, ICard, nonNullable } from './types';
import { TextInputRef } from './FormComponents/TextInput';
import { DateRef } from './FormComponents/DateInput';
import { SelectRef } from './FormComponents/Select';
import { FileRef } from './FormComponents/FileInput';
import { CheckboxRef } from './FormComponents/Checkbox';
import { RadioRef } from './FormComponents/Radio';
import { SubmitBtn } from './FormComponents/SubmitBtn';
import { benefitsCheckboxes, notificationsRadio } from './formData';
import './Form.css';

import { useForm, SubmitHandler } from 'react-hook-form';

export const checkNameValid = (value: string) => {
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regName.test(value.trim());
};

export interface IFormValues {
  Name: string;
  Date: string;
  Country: string;
  Benefits: string;
  Image: string;
  Radio: string;
}

export const Form = (props: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
  };
  const onError = (errors, e) => console.log(errors, e);

  // const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   if (
  //     !nameRef.current ||
  //     !countryRef.current ||
  //     !dateRef.current ||
  //     !imgRef.current ||
  //     !dataRef.current
  //   )
  //     return;
  //   const name = nameRef.current.value;
  //   const country = countryRef.current.value;
  //   const date = dateRef.current.value;
  //   const image = imgRef.current.files?.length ? URL.createObjectURL(imgRef.current.files[0]) : '';
  //   const benefits = benefitsRef
  //     .map((benefit) => {
  //       if (benefit.current?.checked) return benefit.current?.value;
  //     })
  //     .filter(nonNullable);
  //   const notifications = notificationsRef.find((radio) => radio.current?.checked)?.current?.value;
  //   const isDataProcess = dataRef.current?.checked;

  //   setNameValid(checkNameValid(name));
  //   setDateChecked(!!date);
  //   setCountrySelect(!!country);
  //   setBenefitsChecked(!!benefits.length);
  //   setImgChecked(!!image);
  //   setNotificationChecked(!!notifications);
  //   setDataProcess(isDataProcess);

  //   if (
  //     isNameValid &&
  //     isDateChecked &&
  //     isCountrySelect &&
  //     isBenefitsChecked &&
  //     isImgChecked &&
  //     isNotificationChecked &&
  //     isDataProcess &&
  //     notifications
  //   ) {
  //     const card = { name, country, date, image, benefits, notifications };
  //     props.onSubmit(card as ICard);

  //     alert('sucсess');

  //     nameRef.current.value = '';
  //     countryRef.current.value = '';
  //     dateRef.current.value = '';
  //     imgRef.current.value = '';
  //     benefitsRef.forEach((ref) => {
  //       if (ref.current) ref.current.checked = false;
  //     });
  //     notificationsRef.forEach((ref) => {
  //       if (ref.current) ref.current.checked = false;
  //     });
  //     dataRef.current.checked = false;
  //   }
  // };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit, onError)}>
      <TextInputRef register={register} formState={formState} label="Name" />
      <DateRef register={register} formState={formState} label="Date of receipt of goods" />
      <SelectRef register={register} formState={formState} />
      <div className="inputs-block">
        <p>Select service benefits:</p>
        {benefitsCheckboxes.map((checkbox) => {
          return (
            <CheckboxRef
              key={checkbox.id}
              name={'Benefits'}
              value={checkbox.value}
              label={checkbox.label}
              register={register}
            />
          );
        })}
        {errors.Benefits && <p className="error">{errors.Benefits.message}</p>}
      </div>
      <div>
        <FileRef register={register} formState={formState} label="Add products photo" />
      </div>
      <div className="inputs-block">
        {notificationsRadio.map((radio) => {
          return (
            <RadioRef
              register={register}
              key={radio.id}
              name={'Radio'}
              value={radio.value}
              label={radio.label}
            />
          );
        })}
        {errors.Radio && <p className="error">{errors.Radio.message}</p>}
      </div>
      {/* <CheckboxRef
        name="data-checkbox"
        value="process-data"
        ref={dataRef}
        label="I consent to my personal data"
      />
      {isDataProcess ? '' : <p className="error">Error </p>}  */}
      <SubmitBtn />
    </form>
  );
};
