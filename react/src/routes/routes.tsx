import { Route, Switch } from "react-router";

import BioEntries from "../views/bio-entries";
import Dashboard from "../views/dashboard";
import { bioEntries, dashboard } from "./paths";

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
];

const Routes = () => (
  <Switch>
    {routes.map((route: RouteType, i: number) => (
      <Route key={i} exact path={route.path} children={<route.comp />} />
    ))}
    {/* <Route path="/bio-entries" render={() => <BioEntries />} /> */}
  </Switch>
);

export default Routes;
