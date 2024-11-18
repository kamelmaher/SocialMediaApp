/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";

type UserState = {
  users: User[];
  loginnedUser: User;
};
const initialState: UserState = {
  users: [],
  loginnedUser: {
    id: 0,
    fname: "Kamel",
    lname: "Maher",
    age: 19,
    email: "kamel@gmail.com",
    password: "123123",
    gender: "male",
    img: "",
  },
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<User>) => {
      state.loginnedUser = action.payload;
      localStorage.setItem("loginnedUser", JSON.stringify(state.loginnedUser));
    },
    signUp: (state, action: PayloadAction<User>) => {
      const data = localStorage.getItem("users");
      if (data) {
        const parsedData = JSON.parse(data);
        state.users = parsedData;
      }
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    getUsers: (state) => {
      const data = localStorage.getItem("users");
      const user = localStorage.getItem("loginnedUser");
      if (data) {
        const parsedData = JSON.parse(data);
        state.users = parsedData;
      }
      if (user) {
        const parsedData = JSON.parse(user);
        state.loginnedUser = parsedData;
      }
    },
  },
});

export const { logIn, signUp, getUsers } = UserSlice.actions;
export default UserSlice.reducer;
