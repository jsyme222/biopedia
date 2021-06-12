import { useAtom } from "jotai";
import { bioDocumentsListAtom, bioEntryListAtom } from "../../jotai-data/Atoms";
import { BioEntryType } from "../../types/types";
import { ListItemBioEntry, ListItemDocument } from "./item-list-items";
import { BioDocumentType } from "../../types/types";

export const BioEntryList = () => {
  const [entries] = useAtom(bioEntryListAtom);

  const filteredData = (): BioEntryType[] => {
    let entryCopy = [...entries];
    return entryCopy.sort(function (a: BioEntryType, b: BioEntryType) {
      return +new Date(b.dateOfEvents) - +new Date(a.dateOfEvents);
    });
  };

  const entryList = filteredData().map((entry: BioEntryType) => (
    <ListItemBioEntry key={entry.title} entry={entry} />
  ));

  return <>{entryList}</>;
};

export const DocumentList = () => {
  const [documents] = useAtom(bioDocumentsListAtom);

  const docList = documents.map((doc: BioDocumentType) => (
    <ListItemDocument key={doc.title} document={doc} />
  ));

  return <>{docList}</>;
};
