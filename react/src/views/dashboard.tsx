import { Grid } from "@material-ui/core";
import ItemList from "../components/dashboard-components/item-list";
import { useDocumentList, useEntryList } from "../hooks/hooks";

import "../css/dashboard-components/dashboard.scss";
import { useAtom } from "jotai";
import { boardListAtom } from "../jotai-data/Atoms";

function Dashboard() {
  // eslint-disable-next-line
  const [entryList] = useEntryList();
  // eslint-disable-next-line
  const [documentList] = useDocumentList();
  const [boards] = useAtom(boardListAtom);

  return (
    <div className="dashboard-root">
      <Grid container spacing={3} justify="center" wrap="wrap">
        {boards.map((b, i) => (
          <Grid key={i} item xs={11} sm={11} md={5} lg={3}>
            <ItemList listTitle={b} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Dashboard;
