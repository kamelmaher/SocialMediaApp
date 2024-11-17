/** @format */

import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User";

type UserState = {
  users: User[];
  loginnedUser: User;
};
const initialState: UserState = {
  users: [],
  loginnedUser: {
    id: 0,
    name: "Kamel Maher",
  },
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logIn: () => {},
  },
});

export const { logIn } = UserSlice.actions;
export default UserSlice.reducer;
