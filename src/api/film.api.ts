import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IFilm } from '../models/film.types';

export const filmApi = createApi({
    reducerPath: 'api/films',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/'}),
    endpoints: build => ({
        getFilms: build.query<IFilm[], number>({query: (page = 1) => `movie/top_rated?api_key=${process.env.REACT_API_KEY}&page=${page}`})
    })
})

export const { useGetFilmsQuery } = filmApi;