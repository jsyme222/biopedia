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
import { userAtom, menuOpenAtom, emptyUser } from "../../jotai-data/Atoms";
import linkItems from "./menu-links";
import ModalBase from "./modal-base";
import LoginForm from "../../views/login";

import "../../css/page-components/page-navbar.scss";

function PageNavbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);
  const [user, setUser] = useAtom(userAtom);

  const toggleUserMenu = (e: any) => {
    setMenuAnchorEl(e.currentTarget);
    setUserMenuOpen(!menuOpen);
  };

  const logoff = () => {
    setMenuAnchorEl(null);
    setUserMenuOpen(false);
    setUser(emptyUser);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };

  const renderLogin = (
    <ModalBase open={login} setOpen={setLogin}>
      <LoginForm />
    </ModalBase>
  );

  const renderMenu = (
    <Menu
      anchorEl={menuAnchorEl}
      id="user-menu"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={userMenuOpen}
      onClose={toggleUserMenu}
    >
      <MenuItem onClick={toggleUserMenu}>Profile</MenuItem>
      <MenuItem onClick={toggleUserMenu}>My account</MenuItem>
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
              <Grid item key={link.name}>
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
              aria-haspopup="true"
              onClick={toggleUserMenu}
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
              onClick={() => setLogin(true)}
            >
              Login
            </Button>
          </ButtonGroup>
        )}
      </Toolbar>
      {renderMenu}
      {!user.token && !user.username && renderLogin}
    </AppBar>
  );
}

export default PageNavbar;
