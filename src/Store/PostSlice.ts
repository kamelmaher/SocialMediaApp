/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "../types/Post";
import { User } from "../types/User";

type PostState = {
  posts: PostType[];
};
const initialState: PostState = {
  posts: [
    //   {
    //     isLiked: false,
    //     id: 1,
    //     user: {
    //       name: "User 1",
    //     },
    //     text: "",
    //     imgPath: "",
    //     mentions: [],
    //   },
    //   {
    //     isLiked: false,
    //     id: 2,
    //     user: {
    //       name: "User 2",
    //     },
    //     text: "",
    //     imgPath: "",
    //     mentions: [],
    //   },
    //   {
    //     isLiked: false,
    //     id: 3,
    //     user: {
    //       name: "User 3",
    //     },
    //     text: "",
    //     imgPath: "",
    //     mentions: [],
    //   },
    //   {
    //     isLiked: false,
    //     id: 4,
    //     user: {
    //       name: "User 4",
    //     },
    //     text: "",
    //     imgPath: "",
    //     mentions: [],
    //   },
  ],
};
type LikePost = {
  id: number;
  user: User;
};
export const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<LikePost>) => {
      const data = localStorage.getItem("posts");
      if (data) {
        const parsedData = JSON.parse(data);
        state.posts = parsedData;
      }
      state.posts.map((post) => {
        // Find Post
        if (post.id == action.payload.id) {
          // get Numbers Of Likes
          const likes = post.interactions.likes.length;

          // Check If User Found
          let userFound = false;
          post.interactions.likes.map((e) => {
            if (e.user.id == action.payload.user.id) {
              // User Found
              userFound = true;

              // DisLike Post
              post.interactions.likes = post.interactions.likes.filter(
                (e) => e.user.id != action.payload.user.id
              );
            }
          });

          // User Not Found
          if (!userFound) {
            post.interactions.likes.push({
              id: likes + 1,
              user: action.payload.user,
              name: "like",
            });
          }
        }
      });
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    createPost: (state, action: PayloadAction<PostType>) => {
      state.posts.push(action.payload);
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    getPosts: (state) => {
      const data = localStorage.getItem("posts");
      if (data) {
        const parsedData = JSON.parse(data);
        state.posts = parsedData;
      }
    },
  },
});

export const { getPosts, likePost, createPost } = postSlice.actions;
export default postSlice.reducer;
