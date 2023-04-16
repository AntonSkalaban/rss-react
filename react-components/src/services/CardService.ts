import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { IRickAndMortyResponse } from '../types';

export const cardAPI = createApi({
  reducerPath: 'cardAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getCadrsByName: build.query<IRickAndMortyResponse, string>({
      query: (name) => `character?name=${name}`,
    }),
  }),
});

//export const { useGetCardsByNameQuery } = cardAPI;
