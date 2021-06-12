import { BrowserRouter } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "./jotai-data/Atoms";

import PageNavbar from "./components/page-components/page-navbar";
import SidebarMenu from "./components/page-components/sidebar-menu";
import ViewEntry from "./views/view-entry";
import Routes from "./routes/routes";
import Splash from "./views/splash";

import "./css/App.scss";

function App() {
  const [user] = useAtom(userAtom);

  return (
    <div className="App">
      <BrowserRouter>
        <PageNavbar />
        <SidebarMenu />
        {user.token && user.username ? (
          <>
            <Routes />
            <ViewEntry />
          </>
        ) : (
          <Splash />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
