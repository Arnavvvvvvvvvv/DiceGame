import { useState } from "react";
import GamePlay from "./components/GamePlay";
import StartGame from "./components/StartGame";

function App() {
  const[isGameStarted, setisGameStarted]= useState(false);

  const toggleGamePlay= ()=>{
    setisGameStarted((prev)=> !prev);
  }
  
  return (
    <div>
      {
        isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay} />
      }
    </div>
  )
}

export default App