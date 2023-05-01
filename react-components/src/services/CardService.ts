import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IRickAndMortyCard, IRickAndMortyResponse } from '../types';

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: (build) => ({
    getCadrsByName: build.query<IRickAndMortyCard[], string>({
      query: (name) => ({
        url: `/character`,
        params: {
          name: name,
        },
      }),
      transformResponse: (responce: IRickAndMortyResponse) => {
        return responce.results as unknown as IRickAndMortyCard[];
      },
    }),
  }),
});
