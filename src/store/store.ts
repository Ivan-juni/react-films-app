import { configureStore } from "@reduxjs/toolkit";
import { filmApi } from '../api/film.api';

export const store = configureStore({
    reducer: {[filmApi.reducerPath] : filmApi.reducer}
})

export type RootStateType = ReturnType<typeof store.getState>