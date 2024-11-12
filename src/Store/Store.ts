/** @format */

import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const Store = configureStore({
  reducer: {
    Post: PostSlice,
  },
});

export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;
