import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { MusicNote, Videocam, Description } from "@material-ui/icons";
import { useAtom } from "jotai";
import { selectedEntryAtom } from "../../jotai-data/Atoms";
import { BioDocumentType, BioEntryType } from "../../types/types";
import {
  audioExtensions,
  videoExtensions,
} from "../audio-components/file-extensions";

export const ListItemDocument = ({
  document,
}: {
  document: BioDocumentType;
}) => {
  const DocumentIcon = () => {
    const ext = document.document.split(".")[1];
    let docIcons = {
      audio: <MusicNote style={{ fill: "#972525" }} />,
      video: <Videocam style={{ fill: "#353483" }} />,
      document: <Description />,
    };
    if (audioExtensions.includes(ext)) {
      return docIcons.audio;
    }
    if (videoExtensions.includes(ext)) {
      return docIcons.video;
    }
    return docIcons.document;
  };

  return (
    <ListItem button>
      <ListItemText>{document.title}</ListItemText>
      <ListItemAvatar>
        <Avatar>
          <DocumentIcon />
        </Avatar>
      </ListItemAvatar>
    </ListItem>
  );
};

export const ListItemBioEntry = ({ entry }: { entry: BioEntryType }) => {
  // eslint-disable-next-line
  const [selectedEntry, setSelectedEntry] = useAtom(selectedEntryAtom);

  return (
    <ListItem button onClick={() => setSelectedEntry(entry)}>
      <ListItemText>{entry.title}</ListItemText>
      <ListItemText>{entry.category.title}</ListItemText>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
        }}
      >
        <ListItemText>{entry.dateOfEvents}</ListItemText>
        <p style={{ fontSize: "0.8rem", margin: 0, marginTop: -5 }}>
          {entry.dateRecordedOn.slice(0, 10)}
        </p>
      </div>
      <ListItemAvatar>
        <Avatar>
          <Description />
        </Avatar>
      </ListItemAvatar>
    </ListItem>
  );
};
