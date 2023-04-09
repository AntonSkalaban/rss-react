import { graphql, rest } from 'msw';

// Mock Data
export const cards = [
  {
    id: 18,
    name: 'Antenna Morty',
    status: 'Alive',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/10',
      'https://rickandmortyapi.com/api/episode/28',
    ],
    url: 'https://rickandmortyapi.com/api/character/18',
    created: '2017-11-04T22:25:29.008Z',
  },
  {
    id: 19,
    name: 'Antenna Rick',
    status: 'unknown',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'unknown',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/19',
    created: '2017-11-04T22:28:13.756Z',
  },
];
//const jsonPlaceHolder = graphql.link('https://jsonplaceholder.ir/graphql');
// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(cards));
  }),
];
