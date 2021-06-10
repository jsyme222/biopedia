import { atom } from "jotai";

type User = {
  username: string;
  token: string;
};

const emptyUser: User = {
  username: "",
  token: "",
};

export const menuOpenAtom = atom<boolean>(false);
export const userAtom = atom<User>(emptyUser);
