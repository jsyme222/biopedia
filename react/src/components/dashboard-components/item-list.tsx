import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import AddIcon from "@material-ui/icons/Add";
import MoreIcon from "@material-ui/icons/MoreVert";

import { BioEntryList, DocumentList } from "./lists";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
      maxHeight: 300,
      overflow: "auto",
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      position: "relative",
      top: "auto",
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: "0 auto",
    },
  })
);

export default function ItemList({ listTitle }: { listTitle: string }) {
  const classes = useStyles();

  const RenderList = () => {
    let list = <p>OTHER</p>;
    switch (listTitle) {
      case "entries":
        list = <BioEntryList />;
        break;
      case "documents":
        list = <DocumentList />;
        break;
      default:
        break;
    }
    return list;
  };

  return (
    <div className="item-list-root">
      <CssBaseline />
      <Paper square className={classes.paper}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            borderBottom: "2px solid #232323",
          }}
        >
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MoreIcon />
          </IconButton>
          <Typography className={classes.text} variant="h5" gutterBottom>
            {listTitle.toUpperCase()}
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <AddIcon />
          </IconButton>
        </div>
        <List className={classes.list}>
          <RenderList />
        </List>
      </Paper>
    </div>
  );
}
