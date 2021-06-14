import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ButtonGroup,
  TextField,
} from "@material-ui/core";
import { Edit, More, ExitToApp, Close, Save } from "@material-ui/icons";
import { useAtom } from "jotai";
import ModalBase from "../components/page-components/modal-base";
import { emptyEntry, selectedEntryAtom } from "../jotai-data/Atoms";

import "../css/views/view-entry.scss";
import { useState } from "react";
import EntryEditor from "../components/entry-components/entry-editor";

function ViewEntry() {
  const [selectedEntry, setSelectedEntry] = useAtom(selectedEntryAtom);
  const [editing, setEditing] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const setEntry = (val: boolean) => {
    setSelectedEntry(emptyEntry);
  };

  const toggleMenu = (e: any) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(!menuOpen);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl || null}
      id="user-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={menuOpen}
      onClose={toggleMenu}
    >
      <MenuItem onClick={toggleMenu}>Profile</MenuItem>
      <MenuItem onClick={toggleMenu}>My account</MenuItem>
      <hr />
      <MenuItem>
        <ListItemIcon>
          <ExitToApp color="secondary" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
      <MenuItem disabled>Username</MenuItem>
    </Menu>
  );

  return (
    <ModalBase open={selectedEntry.title !== ""} setOpen={setEntry}>
      <div className={"entry-root"}>
        <div>
          {!editing && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleMenu}
            >
              <More />
            </IconButton>
          )}
          {!editing ? (
            <Typography variant="h5">{selectedEntry.title}</Typography>
          ) : (
            <TextField value={selectedEntry.title} />
          )}
          {!editing ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={() => setEditing(!editing)}
            >
              <Edit />
            </IconButton>
          ) : (
            <ButtonGroup>
              <IconButton onClick={() => setEditing(false)} color="secondary">
                <Close />
              </IconButton>
              <IconButton color="primary">
                <Save />
              </IconButton>
            </ButtonGroup>
          )}
        </div>
        {!editing ? (
          <>
            <h3>{selectedEntry.dateOfEvents}</h3>
            <div
              dangerouslySetInnerHTML={{ __html: selectedEntry.contentWritten }}
            />
          </>
        ) : (
          <>
            <TextField value={selectedEntry.dateOfEvents} />
            <EntryEditor content={selectedEntry.contentWritten} />
          </>
        )}
      </div>
      {console.log(selectedEntry)}
      {renderMenu}
    </ModalBase>
  );
}

export default ViewEntry;
