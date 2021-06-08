import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AudioRecorder from "./components/audio_components/audio_recorder";
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

// type Member = {
//   id: string;
//   nameFirst: string;
//   nameLast: string;
// };

function App() {
  // const { loading, error, data } = useQuery(MEMBERS);

  // if (loading) return <p>...loading</p>;
  // if (error)
  //   return <p style={{ color: "red" }}>ERROR :( {console.log(error)}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* {data.allMembers.map((m: Member) => (
          <div>
            <p>{m.nameFirst}</p>
            <p>{m.nameLast}</p>
          </div>
        ))} */}
        <AudioRecorder />
      </header>
    </div>
  );
}

export default App;
