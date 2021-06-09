import { BrowserRouter } from "react-router-dom";

import PageNavbar from "./components/page-components/page-navbar";
import Routes from "./routes/routes";

import "./App.css";
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
  // const history = useHistory()
  // const { loading, error, data } = useQuery(MEMBERS);

  return (
    <div className="App">
      <BrowserRouter>
        <PageNavbar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
