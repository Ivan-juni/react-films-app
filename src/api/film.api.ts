import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { IGenre, IResponse } from '../models/film.types';

export const filmApi = createApi({
    reducerPath: 'api/films',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/'}),
    endpoints: build => ({
        getFilms: build.query<IResponse, number>({
            query: (page: number = 1) => ({
                url: `movie/top_rated`,
                params: {
                    page: page,
                    api_key: process.env.REACT_APP_API_KEY
                }
            })
        }),
        getFilmGenres: build.query<IGenre, void>({
            query: () => ({
                url: `genre/movie/list`,
                params: {
                    api_key: process.env.REACT_APP_API_KEY
                }
            })
        }),
    })
})

// export const filmApi = createApi({
//     reducerPath: 'api/films',
//     baseQuery: fetchBaseQuery({baseUrl: 'https://api.themoviedb.org/3/'}),
//     endpoints: build => ({
//         getFilms: build.query<IFilm[], number>({query: () => `movie/top_rated?api_key=${process.env.REACT_API_KEY}`})
//     })
// })

export const { useGetFilmsQuery, useGetFilmGenresQuery } = filmApi;