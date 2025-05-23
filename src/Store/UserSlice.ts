/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types/User";
import { Notify } from "../types/Notification";

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
    notifications: {
      requests: [],
      likes: [],
      comments: [],
    },
  },
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<User>) => {
      state.loginnedUser = action.payload;
      sessionStorage.setItem(
        "loginnedUser",
        JSON.stringify(state.loginnedUser)
      );
    },
    signUp: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
      sessionStorage.setItem("users", JSON.stringify(state.users));
    },
    getUsers: (state) => {
      const data = sessionStorage.getItem("users");
      if (data) {
        const parsedData = JSON.parse(data);
        state.users = parsedData;
      }
    },
    getLoginnedUser: (state) => {
      const user = sessionStorage.getItem("loginnedUser");
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
      sessionStorage.setItem(
        "loginnedUser",
        JSON.stringify(state.loginnedUser)
      );
      sessionStorage.setItem("users", JSON.stringify(state.users));
    },
    addFriend: (state, action: PayloadAction<User>) => {
      let friendFound = false;
      state.loginnedUser.friends.map((e) => {
        if (e == action.payload.id) {
          friendFound = true;
        }
      });
      if (!friendFound) {
        state.loginnedUser.friends.push(action.payload.id);
        sessionStorage.setItem(
          "loginnedUser",
          JSON.stringify(state.loginnedUser)
        );
        state.users.map((e) => {
          if (e.id == state.loginnedUser.id)
            e.friends = state.loginnedUser.friends;
        });
        sessionStorage.setItem("users", JSON.stringify(state.users));
      }
    },
    notify: (state, action: PayloadAction<Notify>) => {
      const user = state.users.filter((e) => e.id == action.payload.userId)[0];
      let userFound = false;
      switch (action.payload.type) {
        // Done
        case "request":
          user.notifications.requests.map((e) => {
            if (e.userId == state.loginnedUser.id) userFound = true;
          });
          if (!userFound)
            user.notifications.requests.push({
              userId: state.loginnedUser.id,
              hasRead: false,
              id: Math.floor(Math.random() * 1000) + 1,
              type: action.payload.type,
            });
          else {
            user.notifications.requests = user.notifications.requests.filter(
              (e) => e.userId != state.loginnedUser.id
            );
          }
          break;

        case "comment": {
          if (state.loginnedUser.id != action.payload.userId)
            user.notifications.comments.push({
              ...action.payload,
              userId: state.loginnedUser.id,
            });
          break;
        }

        case "like": {
          // check if user is not the loginned user
          if (action.payload.post?.user.id != state.loginnedUser.id) {
            action.payload.post?.interactions.likes.map((like) => {
              if (
                like.userId == state.loginnedUser.id &&
                like.postId == action.payload.post?.id
              ) {
                userFound = true;
              }
            });

            if (!userFound)
              user.notifications.likes.push({
                ...action.payload,
                userId: state.loginnedUser.id,
              });
            else {
              user.notifications.likes = user.notifications.likes.filter(
                (e) =>
                  e.userId != state.loginnedUser.id &&
                  e.post?.id != action.payload.post?.id
              );
            }
          }

          break;
        }
      }
      state.users.map((e) => {
        if (e.id == action.payload.userId) e.notifications = user.notifications;
      });
      sessionStorage.setItem("users", JSON.stringify(state.users));
    },
    readNotify: (state, action: PayloadAction<Notify>) => {
      switch (action.payload.type) {
        case "request":
          state.loginnedUser.notifications.requests.map((e) => {
            if (e.id == action.payload.id) e.hasRead = true;
          });
          break;

        case "comment":
          state.loginnedUser.notifications.comments.map((e) => {
            if (e.id == action.payload.id) e.hasRead = true;
          });
          break;

        case "like":
          state.loginnedUser.notifications.likes.map((e) => {
            if (e.id == action.payload.id) e.hasRead = true;
          });
          break;
      }
      const newUsers = state.users.map((e) => {
        if (e.id == state.loginnedUser.id) e = state.loginnedUser;
        return e;
      });

      sessionStorage.setItem(
        "loginnedUser",
        JSON.stringify(state.loginnedUser)
      );
      sessionStorage.setItem("users", JSON.stringify(newUsers));
    },
    deleteRequest: (state, action: PayloadAction<number>) => {
      state.loginnedUser.notifications.requests =
        state.loginnedUser.notifications.requests.filter(
          (e) => e.userId != action.payload
        );
      state.users.map((e) => {
        if (e.id == state.loginnedUser.id) e = state.loginnedUser;
      });
      sessionStorage.setItem(
        "loginnedUser",
        JSON.stringify(state.loginnedUser)
      );
      sessionStorage.setItem("users", JSON.stringify(state.users));
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
  notify,
  readNotify,
  deleteRequest,
} = UserSlice.actions;
export default UserSlice.reducer;
