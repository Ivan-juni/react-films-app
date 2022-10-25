import { bindActionCreators } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatchType, RootStateType } from "../store/store";
import { filmAction } from '../store/slices/film.slice';

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;


// use Actions hook
const allActions = {
    ...filmAction
};

export const useActions = () => {
    const dispatch = useAppDispatch();

    return bindActionCreators(allActions, dispatch);
};