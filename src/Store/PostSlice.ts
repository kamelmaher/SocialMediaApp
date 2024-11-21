/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostType } from "../types/Post";

type PostState = {
  posts: PostType[];
};
const initialState: PostState = {
  posts: [],
};

type PostProps = {
  id: number;
  userId: number;
  text?: string;
  postId: number;
};
export const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    getPosts: (state) => {
      const data = localStorage.getItem("posts");
      if (data) {
        const parsedData = JSON.parse(data);
        state.posts = parsedData;
      }
    },
    likePost: (state, action: PayloadAction<PostProps>) => {
      state.posts.map((post) => {
        // Find Post
        if (post.id == action.payload.id) {
          // get Numbers Of Likes
          const likes = post.interactions.likes.length;

          // Check If User Found
          let userFound = false;
          post.interactions.likes.map((e) => {
            if (e.userId == action.payload.userId) {
              // User Found
              userFound = true;

              // DisLike Post
              post.interactions.likes = post.interactions.likes.filter(
                (e) => e.userId != action.payload.userId
              );
            }
          });

          // User Not Found
          if (!userFound) {
            post.interactions.likes.push({
              id: likes + 1,
              userId: action.payload.userId,
              name: "like",
              postId: action.payload.postId,
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
    comment: (state, action: PayloadAction<PostProps>) => {
      state.posts.map((e) => {
        // get Numbers Of Comments
        if (e.id == action.payload.id) {
          const comments = e.interactions.comments.length;
          e.interactions.comments.push({
            id: comments + 1,
            text: action.payload.text!,
            userId: action.payload.userId,
            postId: action.payload.postId,
          });
        }
      });
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
    updatePosts: (state, action: PayloadAction<PostType[]>) => {
      const loginnedUser = JSON.parse(localStorage.getItem("loginnedUser")!);
      state.posts.map((post) => {
        action.payload.map((e) => {
          if (e.id == post.id) {
            post.user = loginnedUser;
          }
        });
      });
      localStorage.setItem("posts", JSON.stringify(state.posts));
    },
  },
});

export const { getPosts, likePost, createPost, comment, updatePosts } =
  postSlice.actions;
export default postSlice.reducer;
