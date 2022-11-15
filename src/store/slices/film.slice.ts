import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IFilm } from '../../models/film.type'

interface initialStateType {
  film: IFilm
  favorite_films: IFilm[]
}

const initialState: initialStateType = {
  film: {
    adult: false,
    backdrop_path: '',
    genre_ids: [],
    id: 0,
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    release_date: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
  favorite_films: [],
}

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    setFilm: (state: initialStateType, action: PayloadAction<IFilm>) => {
      return (state = { ...state, film: { ...action.payload } })
    },
    addToFavorite: (state: initialStateType, action: PayloadAction<IFilm>) => {
      const exists = state.favorite_films.find(
        (f) => f.id === action.payload.id
      )
      if (exists === undefined) {
        return (state = {
          ...state,
          favorite_films: [...state.favorite_films, action.payload],
        })
      }
    },
    removeFromFavorite: (
      state: initialStateType,
      action: PayloadAction<{ id: number }>
    ) => {
      const exists = state.favorite_films.find(
        (f) => f.id === action.payload.id
      )
      if (exists !== undefined) {
        return (state = {
          ...state,
          favorite_films: state.favorite_films.filter(
            (f) => f.id !== action.payload.id
          ),
        })
      }
    },
  },
})

export const filmReducer = filmSlice.reducer
export const filmAction = filmSlice.actions
