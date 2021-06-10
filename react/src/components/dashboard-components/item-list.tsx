import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import AddIcon from "@material-ui/icons/Add";
import MoreIcon from "@material-ui/icons/MoreVert";
import { useQuery } from "@apollo/client";

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

export default function BottomAppBar({
  color,
  listTitle,
  query,
}: {
  color: number;
  listTitle: string;
  query: any;
}) {
  const { loading, error, data } = useQuery(query);
  const classes = useStyles();

  return (
    <div className="item-list-root">
      <CssBaseline />
      {console.log(data)}
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          {listTitle}
        </Typography>
        <List className={classes.list}>
          {!loading &&
            !error &&
            data.entriesByUsername.map(
              ({ title, i }: { title: string; i: number }) => (
                <div key={i}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </div>
              )
            )}
        </List>
      </Paper>
      <AppBar
        position="fixed"
        color={color % 2 === 0 ? "primary" : "secondary"}
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Fab
            color={color % 2 !== 0 ? "primary" : "secondary"}
            aria-label="add"
            className={classes.fabButton}
          >
            <AddIcon />
          </Fab>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
