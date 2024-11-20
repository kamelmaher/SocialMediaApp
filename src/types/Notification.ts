/** @format */

import { PostType } from "./Post";

export type Notification = {
  requests: Notify[];
  likes: Notify[];
  comments: Notify[];
};

export type Notify = {
  userId: number;
  hasRead: boolean;
  id: number;
  type: "like" | "comment" | "request";
  post?: PostType;
};
