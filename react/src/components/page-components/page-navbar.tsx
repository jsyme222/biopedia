import { useState } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  ButtonGroup,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from "@material-ui/core";
import { MenuRounded, AccountCircle, ExitToApp } from "@material-ui/icons";

import { dashboard } from "../../routes/paths";
import { useAtom } from "jotai";
import { userAtom, menuOpenAtom } from "../../jotai-data/Atoms";
import linkItems from "./menu-links";

import "../../css/page-components/page-navbar.scss";

function PageNavbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);
  const [user, setUser] = useAtom(userAtom);

  const openUserMenu = (e: any) => {
    setMenuAnchorEl(e.currentTarget);
    setUserMenuOpen(true);
  };

  const closeUserMenu = () => {
    setMenuAnchorEl(null);
    setUserMenuOpen(false);
  };

  const logoff = () => {
    closeUserMenu();
    setUser({
      username: "",
      admin: false,
      token: "",
    });
  };

  const renderMenu = (
    <Menu
      anchorEl={menuAnchorEl}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      id="user-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={userMenuOpen}
      onClose={closeUserMenu}
    >
      <MenuItem onClick={closeUserMenu}>Profile</MenuItem>
      <MenuItem onClick={closeUserMenu}>My account</MenuItem>
      <hr />
      <MenuItem onClick={logoff}>
        <ListItemIcon>
          <ExitToApp color="secondary" />
        </ListItemIcon>
        <ListItemText>Logout</ListItemText>
      </MenuItem>
      <MenuItem disabled>{user.username}</MenuItem>
    </Menu>
  );

  return (
    <AppBar className="navbar" aria-label="main navigation" position="sticky">
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          className="menu-button"
          onClick={() => setMenuOpen(true)}
        >
          <MenuRounded />
        </IconButton>
        <Button component={Link} to={dashboard.path} className="logo">
          <h2>BIOPEDIA</h2>
        </Button>
        <Grid container className="toolbar-links">
          <Hidden smDown>
            {linkItems.map((link) => (
              <Grid item>
                <Link to={link.path}>{link.name}</Link>
              </Grid>
            ))}
          </Hidden>
        </Grid>

        {user.token ? (
          <div className="user-avatar">
            <IconButton
              edge="end"
              aria-label="account of current user"
              // aria-controls={menuId}
              aria-haspopup="true"
              onClick={openUserMenu}
              color="primary"
            >
              <AccountCircle />
            </IconButton>
          </div>
        ) : (
          <ButtonGroup>
            <Button color="primary">Register</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                setUser({ ...user, username: "jdogg Wumbow", token: "true" })
              }
            >
              Login
            </Button>
          </ButtonGroup>
        )}
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
}

export default PageNavbar;
