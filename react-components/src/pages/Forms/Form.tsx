import React from 'react';
import { FormState, FormProps, CardProps, nonNullable } from './types';
import { TextInputRef } from './FormComponents/TextInput';
import { DateRef } from './FormComponents/DateInput';
import { SelectRef } from './FormComponents/Select';
import { FileRef } from './FormComponents/FileInput';
import { CheckboxRef } from './FormComponents/Checkbox';
import { RadioRef } from './FormComponents/Radio';
import { SubmitBtn } from './FormComponents/SubmitBtn';
import './Form.css';

const checkNameValid = (value: string) => {
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regName.test(value.trim());
};

export class Form extends React.Component<FormProps, FormState> {
  nameRef = React.createRef<HTMLInputElement>();
  dateRef = React.createRef<HTMLInputElement>();
  countryRef = React.createRef<HTMLSelectElement>();
  benefitsRef = [
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
    React.createRef<HTMLInputElement>(),
  ];
  imgRef = React.createRef<HTMLInputElement>();
  notificationsRef = [React.createRef<HTMLInputElement>(), React.createRef<HTMLInputElement>()];
  dataRef = React.createRef<HTMLInputElement>();
  constructor(props: FormProps) {
    super(props);
    this.state = {
      benefitsCheckboxes: [
        {
          id: 1,
          name: 'fast-delivery',
          label: 'Fast delivery',
        },
        {
          id: 2,
          name: 'good-peacking',
          label: 'Good packing',
        },
        {
          id: 3,
          name: 'correct-descriptiom',
          label: 'The product fully corresponds to the description',
        },
      ],
      notificationsRadio: [
        {
          id: 1,
          name: 'radio',
          value: 'on',
          label: 'I want to receive notifications about promo, sales, etc.',
        },
        {
          id: 2,
          name: 'radio',
          value: 'off',
          label: 'I don’t want to receive notifications about promo, sales, etc.',
        },
      ],
      isNameValid: true,
      isDateValid: true,
      isCountrySelect: true,
      isBenefitsChecked: true,
      isImgChecked: true,
      isNotificationChecked: true,
      isDataProcess: true,
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !this.nameRef.current ||
      !this.countryRef.current ||
      !this.dateRef.current ||
      !this.imgRef.current ||
      !this.dataRef.current
    )
      return;
    const name = this.nameRef.current.value;
    const country = this.countryRef.current.value;
    const date = this.dateRef.current.value;
    const file = this.imgRef.current.files;
    const benefits = this.benefitsRef
      .map((benefit) => {
        if (!benefit.current || !benefit.current.checked) return;
        return { name: benefit.current.name, checked: benefit.current.checked };
      })
      .filter(nonNullable);
    const notifications = this.notificationsRef.find((radio) => radio.current?.checked)?.current
      ?.value;

    this.setState({ isNameValid: checkNameValid(name) });
    this.setState({ isDateValid: !!date });
    this.setState({ isCountrySelect: !!country });
    this.setState({ isBenefitsChecked: benefits.some((benefit) => benefit?.checked) });
    this.setState({ isImgChecked: !!file });
    this.setState({ isNotificationChecked: !!notifications });
    this.setState({ isDataProcess: !!this.dataRef.current?.checked });
    if (
      this.state.isNameValid &&
      this.state.isDateValid &&
      this.state.isCountrySelect &&
      this.state.isBenefitsChecked &&
      this.state.isImgChecked &&
      this.state.isNotificationChecked &&
      this.state.isDataProcess &&
      notifications &&
      file
    ) {
      const image = URL.createObjectURL(file[0]);
      const card = { name, country, date, image, benefits, notifications };
      this.props.onSubmit(card as CardProps);

      alert('sucсess');

      this.nameRef.current.value = '';
      this.countryRef.current.value = '';
      this.dateRef.current.value = '';
      this.imgRef.current.value = '';
      this.benefitsRef.forEach((ref) => {
        if (ref.current) ref.current.checked = false;
      });
      this.notificationsRef.forEach((ref) => {
        if (ref.current) ref.current.checked = false;
      });
      this.dataRef.current.checked = false;
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.submitForm}>
        <TextInputRef ref={this.nameRef} isValid={this.state.isNameValid} label="Name" />
        <DateRef
          ref={this.dateRef}
          isValid={this.state.isDateValid}
          label="Date of receipt of goods"
        />
        <SelectRef ref={this.countryRef} isSelect={this.state.isCountrySelect} />
        <div className="inputs-block">
          <p>Select service benefits:</p>
          {this.state.benefitsCheckboxes.map((checkbox) => {
            return (
              <CheckboxRef
                key={checkbox.id}
                name={checkbox.name}
                ref={this.benefitsRef[checkbox.id - 1]}
                label={checkbox.label}
              />
            );
          })}
          {this.state.isBenefitsChecked ? '' : <p className="error">Error </p>}
        </div>
        <div>
          <FileRef ref={this.imgRef} isValid={this.state.isImgChecked} label="Add products photo" />
        </div>
        <div className="inputs-block">
          {this.state.notificationsRadio.map((radio) => {
            return (
              <RadioRef
                key={radio.id}
                name={radio.name}
                value={radio.value}
                ref={this.notificationsRef[radio.id - 1]}
                label={radio.label}
              />
            );
          })}
          {this.state.isNotificationChecked ? '' : <p className="error">Error </p>}
        </div>
        <CheckboxRef
          name="data-checkbox"
          ref={this.dataRef}
          label="I consent to my personal data"
        />
        {this.state.isDataProcess ? '' : <p className="error">Error </p>}
        <SubmitBtn />
      </form>
    );
  }
}
