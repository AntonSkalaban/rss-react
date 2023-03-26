import React from 'react';
import { FormState } from './types';
import { TextInputRef } from './FormComponents/TextInput';
import { DateRef } from './FormComponents/DateInput';
import { SelectRef } from './FormComponents/Select';
import { FileRef } from './FormComponents/FileInput';
import { CheckboxRef } from './FormComponents/Checkbox';
import { RadioRef } from './FormComponents/Radio';
import { SubmitBtn } from './FormComponents/SubmitBtn';
import './Form.css';

const checkNameValid = (value: string | undefined) => {
  if (!value) return false;
  const regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  return regName.test(value);
};

export class Form extends React.Component<object, FormState> {
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
  constructor(props: object) {
    super(props);
    this.state = {
      benefitsCheckboxes: [
        {
          id: 1,
          name: 'fast-delivery-checkbox',
          label: 'Fast delivery',
        },
        {
          id: 2,
          name: 'good-peacking-checkbox',
          label: 'Good packing',
        },
        {
          id: 3,
          name: 'correct-descriptiom-checkbox',
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

    const name = this.nameRef.current?.value;
    const country = this.countryRef.current?.value;
    const date = this.dateRef.current?.value;
    const benefits = this.benefitsRef.map((benefit) => {
      if (!benefit.current) return;
      return { name: [benefit.current.name], checked: benefit.current.checked };
    });
    const img = this.imgRef.current?.value;
    const notification = this.notificationsRef.find((radio) => radio.current?.checked);

    this.setState({ isNameValid: checkNameValid(name) });
    this.setState({ isDateValid: !!date });
    this.setState({ isCountrySelect: !!country });
    this.setState({ isBenefitsChecked: benefits.some((benefit) => benefit?.checked) });
    this.setState({ isImgChecked: !!img });
    this.setState({ isNotificationChecked: !!notification });
    this.setState({ isDataProcess: !!this.dataRef.current?.checked });
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
