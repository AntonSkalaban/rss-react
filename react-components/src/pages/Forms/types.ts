export function nonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}
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
  onSubmit: (card: CardProps) => void;
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

export interface CardProps {
  name: string;
  country: string;
  date: string;
  image: string;
  benefits: { name: string; checked: boolean }[];
  notifications: string;
}
