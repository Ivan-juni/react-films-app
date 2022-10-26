import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { filmApi } from '../api/film.api';
import { filmReducer } from "./slices/film.slice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from 'redux-persist';

// redux-persist (to save in localstorage)
const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({
    [filmApi.reducerPath] : filmApi.reducer,
    film: filmReducer
})

// redux-persist 
const pesistedReducer = persistReducer(persistConfig, rootReducer);

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
}).concat(filmApi.middleware)

export const setupStore = () => {
    return configureStore({
        reducer: pesistedReducer, // был rootReducer, заменил на persistedReducer
        middleware: customizedMiddleware
    })
}


export type RootStateType = ReturnType<typeof rootReducer>
export type AppStoreType = ReturnType<typeof setupStore>
export type AppDispatchType = AppStoreType['dispatch']