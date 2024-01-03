import React from "react";
import "./App.css";
//Import Components
import Nav from "./components/nav.jsx";
import Tweets from "./components/Tweets.jsx";

function App() {
  const name = "Parker";
  const age = 23;
  return (
    <div className="App">
      <h1>Hello React</h1>
      <div className="home">
        <Nav />
        <Tweets me={name} age={age} />
      </div>
    </div>
  );
}

export default App;
