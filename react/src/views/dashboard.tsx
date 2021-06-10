import { gql, useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core";
import { useAtom } from "jotai";
import ItemList from "../components/dashboard-components/item-list";

import "../css/dashboard-components/dashboard.scss";
import { ENTRIES_BY_USERNAME } from "../gql/entries/queries";
import { userAtom } from "../jotai-data/Atoms";

function Dashboard() {
  const [user, setUser] = useAtom(userAtom);

  const boards = [
    {
      title: "Entries",
      q: ENTRIES_BY_USERNAME(user.username),
    },
    {
      title: "Documents",
      q: ENTRIES_BY_USERNAME(user.username),
    },
  ];

  return (
    <div className="dashboard-root">
      <Grid container spacing={3} justify="center" wrap="wrap">
        {boards.map((b, i) => (
          <Grid item lg={3} md={5}>
            <ItemList color={i} listTitle={b.title} query={b.q} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
