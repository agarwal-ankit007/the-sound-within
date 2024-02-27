import React from "react";
import Keyboard from "./Components/Keyboard/Keyboard";
import "./App.css";
import PlayButton from "./Components/MusicBoard/PlayMusic/PlayButton";

const App = () => {
  const musiclist = ['C4','D4','E4','F4','G4','A4','B4','C5'];
  return(
      <>
        <Keyboard musicList={musiclist}/>
        <PlayButton />
      </>
  );
};

export default App;