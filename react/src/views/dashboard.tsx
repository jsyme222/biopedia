import { useAtom } from "jotai";
import { loggedInAtom } from "../jotai-data/Atoms";

function Dashboard() {
    // eslint-disable-next-line
  const [loggedInUser, setLoggedInUser] = useAtom(loggedInAtom);

  return (
    <header className="App-header">
      DASHBOARD
      {loggedInUser ? "Logged in" : "Not Logged In"}
    </header>
  );
}

export default Dashboard;
