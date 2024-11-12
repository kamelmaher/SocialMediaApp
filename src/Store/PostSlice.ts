/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PostType = {
  isLiked: boolean;
  id: number;
};
type PostState = {
  posts: PostType[];
};
const initialState: PostState = {
  posts: [
    {
      isLiked: false,
      id: 1,
    },
    {
      isLiked: false,
      id: 2,
    },
    {
      isLiked: false,
      id: 3,
    },
    {
      isLiked: false,
      id: 4,
    },
  ],
};

export const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<number>) => {
      state.posts.map((e) => {
        if (e.id == action.payload) e.isLiked = !e.isLiked;
      });
    },
  },
});

export const { likePost } = postSlice.actions;
export default postSlice.reducer;
