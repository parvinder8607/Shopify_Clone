import React, { useContext } from "react";
import Slidebar from "./Components/Sidebar";
import './App.css';
import Player from "./Components/Player";
import Display from "./Components/Display";
import {PlayerContext} from "./context/PlayerContext";

function App() {

  const {audioRef, track} = useContext(PlayerContext);



  return (
    <div className="App h-screen bg-black">
      <div className="h-[90%] flex">
        <Slidebar />
        <Display />
    </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
