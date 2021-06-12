export type LoginType = {
  username: string;
  password: string;
};

export type BioDocumentType = {
  title: string;
  document: string;
};

export type UserType = {
  username: string;
  token: string;
};

export type BioEntryType = {
  title: string;
  category: {
    title: string;
  };
  dateRecordedOn: string;
  dateOfEvents: string;
  contentWritten: string;
  contentImages: BioDocumentType[];
  contentAudio: BioDocumentType;
  contentVideo: BioDocumentType;
  contentDocuments: BioDocumentType[];
};
