import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmApi } from '../api/film.api';
import { filmReducer } from "./slices/film.slice";

const rootReducer = combineReducers({
    [filmApi.reducerPath] : filmApi.reducer,
    film: filmReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => 
            getDefaultMiddleware().concat(filmApi.middleware)
    })
}


export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']