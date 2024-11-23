/** @format */

import { Notification } from "./Notification";

export type User = {
  id: number;
  fname: string;
  lname: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  img: string;
  friends: number[];
  notifications: Notification;
};
