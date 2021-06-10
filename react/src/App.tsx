import { BrowserRouter } from "react-router-dom";
import { useAtom } from "jotai";
import { userAtom } from "./jotai-data/Atoms";

import PageNavbar from "./components/page-components/page-navbar";
import SidebarMenu from "./components/page-components/sidebar-menu";
import Routes from "./routes/routes";
import Splash from "./views/splash";

import "./css/App.scss";
// import { gql, useQuery } from "@apollo/client";

// const MEMBERS = gql`
//   query {
//     allMembers {
//       id
//       nameFirst
//       nameLast
//     }
//   }
// `;

function App() {
  const [user, setUser] = useAtom(userAtom);
  // const { loading, error, data } = useQuery(MEMBERS);

  return (
    <div className="App">
      <BrowserRouter>
        <PageNavbar />
        <SidebarMenu />
        {user.token ? <Routes /> : <Splash />}
      </BrowserRouter>
    </div>
  );
}

export default App;
