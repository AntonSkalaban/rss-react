export interface FormState {
  benefitsCheckboxes: BenefitCheckbox[];
  notificationsRadio: NotificationRadio[];
  isNameValid: boolean;
  isDateValid: boolean;
  isCountrySelect: boolean;
  isBenefitsChecked: boolean;
  isNotificationChecked: boolean;
  isDataProcess: boolean;
  isImgChecked: boolean;
}

export interface FormProps {
  onSubmit: (card: ICard) => void;
}

interface BenefitCheckbox {
  id: number;
  name: string;
  label: string;
}

interface NotificationRadio {
  id: number;
  name: string;
  value: string;
  label: string;
}

export interface CardBenefits {
  name: string[];
  checked: boolean;
}
export interface ICard {
  name: string;
  country: string;
  date: string;
  img: string;
  notifications: string;
  benefits: CardBenefits[];
}
