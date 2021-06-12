import { atom } from "jotai";
import { BioDocumentType, BioEntryType, UserType } from "../types/types";

export const storedUser: UserType = {
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
};

export const emptyUser: UserType = {
  username: "",
  token: "",
};

export const emptyEntry: BioEntryType = {
  title: "",
  category: {
    title: "",
  },
  dateRecordedOn: "",
  dateOfEvents: "",
  contentWritten: "",
  contentImages: [],
  contentAudio: {
    title: "",
    document: "",
  },
  contentVideo: {
    title: "",
    document: "",
  },
  contentDocuments: [],
};

export const boardListAtom = atom<string[]>(["entries", "documents"]);

export const menuOpenAtom = atom<boolean>(false);
export const userAtom = atom<UserType>(storedUser);

// content lists
export const bioEntryListAtom = atom<BioEntryType[]>([]);
export const bioDocumentsListAtom = atom<BioDocumentType[]>([]);

// content
export const selectedEntryAtom = atom<BioEntryType>(emptyEntry);
