import { useQuery } from "@apollo/client";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { ENTRIES_BY_USERNAME } from "../gql/entries/queries";
import { DOCUMENTS_BY_USERNAME } from "../gql/documents/queries";
import {
  bioDocumentsListAtom,
  bioEntryListAtom,
  userAtom,
} from "../jotai-data/Atoms";

export const useEntryList = () => {
  const [user] = useAtom(userAtom);
  const [bioEntryList, setBioEntryList] = useAtom(bioEntryListAtom);

  const { loading, error, data } = useQuery(ENTRIES_BY_USERNAME(user.username));

  useEffect(() => {
    if (data) {
      setBioEntryList(data.entriesByUsername);
    }
  }, [data, setBioEntryList]);

  if (!loading && error) console.error(error);

  return [bioEntryList, setBioEntryList];
};

export const useDocumentList = () => {
  const [user] = useAtom(userAtom);
  const [documentList, setDocumentList] = useAtom(bioDocumentsListAtom);

  const { loading, error, data } = useQuery(
    DOCUMENTS_BY_USERNAME(user.username)
  );

  useEffect(() => {
    if (data) {
      setDocumentList(data.allDocumentsByUsername);
    }
  }, [data, setDocumentList]);

  if (!loading && error) console.error(error);

  return [documentList, setDocumentList];
};
