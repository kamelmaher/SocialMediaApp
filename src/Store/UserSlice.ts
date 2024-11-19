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
    friends: [],
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
      // const data = localStorage.getItem("users");
      // if (data) {
      //   const parsedData = JSON.parse(data);
      //   state.users = parsedData;
      // }
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    getUsers: (state) => {
      const data = localStorage.getItem("users");
      if (data) {
        const parsedData = JSON.parse(data);
        state.users = parsedData;
      }
    },
    getLoginnedUser: (state) => {
      const user = localStorage.getItem("loginnedUser");
      if (user) {
        const parsedData = JSON.parse(user);
        state.loginnedUser = parsedData;
      }
    },
    updateUser: (state, action: PayloadAction<User>) => {
      state.loginnedUser = action.payload;
      state.users.map((e) => {
        if (e.id == state.loginnedUser.id) e.img = state.loginnedUser.img;
      });
      localStorage.setItem("loginnedUser", JSON.stringify(state.loginnedUser));
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    addFriend: (state, action: PayloadAction<User>) => {
      let friendFound = false;
      state.loginnedUser.friends.map((e) => {
        if (e.id == action.payload.id) {
          friendFound = true;
        }
      });
      if (!friendFound) {
        state.loginnedUser.friends.push(action.payload);
        localStorage.setItem(
          "loginnedUser",
          JSON.stringify(state.loginnedUser)
        );
        state.users.map((e) => {
          if (e.id == state.loginnedUser.id)
            e.friends = state.loginnedUser.friends;
        });
        localStorage.setItem("users", JSON.stringify(state.users));
      }
    },
  },
});

export const {
  logIn,
  signUp,
  getUsers,
  getLoginnedUser,
  updateUser,
  addFriend,
} = UserSlice.actions;
export default UserSlice.reducer;
