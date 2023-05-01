export interface ICharcater {
  id: number;
  name: string;
  species: string;
  status: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharcaterResponse {
  innfo: { count: number; pages: number; next: string; prev: null };
  results: ICharcater[];
}

export interface IFormCard {
  name: string;
  country: string;
  date: string;
  image: string;
  benefits: string[];
  notifications: string;
}
