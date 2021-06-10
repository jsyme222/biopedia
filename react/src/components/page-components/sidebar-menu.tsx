import { Drawer, ListItem, List } from "@material-ui/core";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";

import { menuOpenAtom } from "../../jotai-data/Atoms";
import linkItems from "./menu-links";

import "../../css/page-components/sidebar-menu.scss";

function SidebarMenu() {
  const [menuOpen, setMenuOpen] = useAtom(menuOpenAtom);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Drawer open={menuOpen} onClose={toggleMenu} variant="temporary">
      <List>
        {linkItems.map((link) => (
          <ListItem
            component={Link}
            className="menu-link"
            to={link.path}
            color="primary"
            onClick={toggleMenu}
          >
            {link.name}
          </ListItem>
        ))}
      </List>
    </Drawer>
    
  );
}

export default SidebarMenu;
