import { Path } from 'react-hook-form';
import { IFormValues } from './Form';

interface IBenefitsCheckboxes {
  id: number;
  name: Path<IFormValues>;
  value: string;
  label: string;
}

interface InotificationsRadio {
  id: number;
  name: Path<IFormValues>;
  value: string;
  label: string;
}

export const benefitsCheckboxes: IBenefitsCheckboxes[] = [
  {
    id: 1,
    name: 'Benefits',
    value: 'Fast delivery',
    label: 'Fast delivery',
  },
  {
    id: 2,
    name: 'Benefits',
    value: 'Good packing',
    label: 'Good packing',
  },
  {
    id: 3,
    name: 'Benefits',
    value: 'The product fully corresponds to the description',
    label: 'The product fully corresponds to the description',
  },
];

export const notificationsRadio: InotificationsRadio[] = [
  {
    id: 1,
    name: 'Radio',
    value: 'on',
    label: 'I want to receive notifications about promo, sales, etc.',
  },
  {
    id: 2,
    name: 'Radio',
    value: 'off',
    label: 'I don’t want to receive notifications about promo, sales, etc.',
  },
];
