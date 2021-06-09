import { Link } from "react-router-dom";
import { Grid, ButtonGroup, Button } from "@material-ui/core";

import { bioEntries, dashboard } from "../../routes/paths";

import "../../css/page-navbar.scss";

function PageNavbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div>
        <Link to={dashboard.path} className="logo">
          <h2>BIOPEDIA</h2>
        </Link>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className="menu-items"
        >
          <Grid item>
            <Link to={bioEntries.path}>
              <p>Entries</p>
            </Link>
          </Grid>
          <Grid item>
            <Link to={dashboard.path}>
              <p> Documents</p>
            </Link>
          </Grid>
        </Grid>
      </div>
      <ButtonGroup>
          <Button>Sign Up</Button>
          <Button>Login</Button>
      </ButtonGroup>
    </nav>
  );
}

export default PageNavbar;
