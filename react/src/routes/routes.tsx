import { Route, Switch } from "react-router";

import BioEntries from "../views/bio-entries";
import Dashboard from "../views/dashboard";
import DocumentsView from "../views/documents-view";
import { bioEntries, dashboard, bioDocuments } from "./paths";

type RouteType = {
  path: string;
  name: string;
  comp: any;
};

const routes = [
  {
    ...dashboard,
    comp: Dashboard,
  },
  {
    ...bioEntries,
    comp: BioEntries,
  },
  {
    ...bioDocuments,
    comp: DocumentsView,
  },
];

const Routes = () => (
  <Switch>
    {routes.map((route: RouteType, i: number) => (
      <Route key={i} exact path={route.path} children={<route.comp />} />
    ))}
  </Switch>
);

export default Routes;
