import styled from "styled-components"
import Numberselector from "./Numberselector"
import Score from "./Score"
import RollDice from "./RollDice"
import { useState } from "react"

const GamePlay = () => {
  const [selectednumber, setselectednumber]= useState();
  const [currDice, setcurrDice]= useState(1);
  const [pts, setpts]= useState(0);
  const [error, seterror]= useState("");

  const generateRandomNumber= (min, max) =>{
        return Math.floor(Math.random() * (max-min) + min);
    }

  const rolldice = ()=>{
        if(!selectednumber){
          seterror("You have not selected any number!");
          return;
        } 
        const randomnumber= generateRandomNumber(1,7);
        setcurrDice((prev)=> randomnumber);

        if(selectednumber==randomnumber){
          setpts((prev)=> prev+randomnumber);
        }
        else{
          setpts((prev)=> prev-1);
        }

        setselectednumber(undefined)
    }
  const resetgame= ()=>{
    setpts(0);
  }

  const howToPlay = () => {
  alert("Select a number and roll the dice. If your number matches the dice, you gain points equal to the dice number. Else, you lose 1 point!");
};

  return (
    <Maincont>
        <div className="topsec">
        <Score pts={pts}/>
        <Numberselector seterror={seterror} error={error} selectednumber={selectednumber} setselectednumber={setselectednumber}/>
        </div>
        <RollDice currDice={currDice} rolldice={rolldice}/>
        <div className="btn">
          <Button onClick={resetgame}>Reset Game</Button>
          <Button onClick={howToPlay}>How To Play</Button>
        </div>
    </Maincont>
  )
}

export default GamePlay

const Maincont= styled.main`
padding: 0px;
    .topsec{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .btn{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 15px
    }
    @media (max-width: 480px) {
      padding: 15px;
}
`

const Button= styled.button`
  background-color: #ffffff;
  color: #000000;
  width: 200px;
  height: 44px;
  padding: 10px 18px;
  cursor: pointer;
  font-size: 26px;
  border: 1px solid black;

  &:hover{
  background-color: #474747;
  border: 1px solid black;
  color: #ffffff;
}
@media (max-width: 480px) {
    font-size: 18px;
    height: 35px;
    width: 160px;
}
`;