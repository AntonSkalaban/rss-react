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
