export function nonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export interface FormProps {
  onSubmit: (card: ICard) => void;
}

export interface ICard {
  name: string;
  country: string;
  date: string;
  image: string;
  benefits: string[];
  notifications: string;
}
