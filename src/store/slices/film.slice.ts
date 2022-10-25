import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilm } from "../../models/film.types";

const initialState: IFilm = {
    "adult": false,
    "backdrop_path": "",
    "genre_ids": [],
    "id": 0,
    "original_language": "",
    "original_title": "",
    "overview": "",
    "popularity": 0,
    "poster_path": "",
    "release_date": "",
    "title": "",
    "video": false,
    "vote_average": 0,
    "vote_count": 0
};

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setFilm: (state, action: PayloadAction<IFilm>) => {
            return state = {...action.payload};
        }
    }
})

export const filmReducer = filmSlice.reducer;
export const filmAction = filmSlice.actions;