import { IconButton, Typography } from "@material-ui/core";
import { Edit, More } from "@material-ui/icons";
import { useAtom } from "jotai";
import ModalBase from "../components/page-components/modal-base";
import { emptyEntry, selectedEntryAtom } from "../jotai-data/Atoms";

import "../css/views/view-entry.scss";

function ViewEntry() {
  const [selectedEntry, setSelectedEntry] = useAtom(selectedEntryAtom);

  const setEntry = (val: boolean) => {
    setSelectedEntry(emptyEntry);
  };

  return (
    <ModalBase open={selectedEntry.title !== ""} setOpen={setEntry}>
      <div className={"entry-root"}>
        <div>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <More />
          </IconButton>
          <Typography variant="h5">{selectedEntry.title}</Typography>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <Edit />
          </IconButton>
        </div>
        <h3>{selectedEntry.dateOfEvents}</h3>
        <div
          dangerouslySetInnerHTML={{ __html: selectedEntry.contentWritten }}
        />
      </div>
      {console.log(selectedEntry)}
    </ModalBase>
  );
}

export default ViewEntry;
