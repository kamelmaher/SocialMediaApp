/** @format */

import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import UserSlice from "./UserSlice";

export const Store = configureStore({
  reducer: {
    Post: PostSlice,
    User: UserSlice,
  },
});

export const useAppDispatch: () => typeof Store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof Store.getState>
> = useSelector;
