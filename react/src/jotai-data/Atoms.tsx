import { atom } from "jotai";

type User = {
  username: string;
  admin: boolean;
  token: string;
};

const emptyUser: User = {
  username: "msyme",
  admin: false,
  token: "test",
};

export const menuOpenAtom = atom<boolean>(false);
export const userAtom = atom<User>(emptyUser);
