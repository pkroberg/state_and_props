import React, { useState } from "react";
import "./App.css";
//Import Components
import Nav from "./components/Nav";
import Video from "./components/Video";

function App() {
  //write javascript here
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  const incrementer = () => {
    setCounter(counter + 1);
  };

  const toggler = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div className="App">
      <Nav />
      <Video num={counter} />
    </div>
  );
}

export default App;
