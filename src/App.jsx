import React, { useState } from "react";
import styled from "styled-components";
import StartGame from "./components/StartGame";
import PlayGame from "./components/PlayGame";

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <PlayGame /> : <StartGame toggle={toggleGamePlay} />}</>
  );
};

export default App;
