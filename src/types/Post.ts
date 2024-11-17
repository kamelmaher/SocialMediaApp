/** @format */

import { Like } from "./Like";
import { Comment } from "./Comment";
import { User } from "./User";

export type PostType = {
  id: number;
  user: User;
  text: string;
  imgPath: string;
  mentions: User[];
  interactions: {
    likes: Like[];
    comments: Comment[];
  };
};
