import styled from "styled-components"

const RollDice = ({currDice, rolldice}) => {

  return (
    <Dicecontainer>
    <div onClick={rolldice} className="dice">
      <img src={`/images/dice_${currDice}.png`} alt="dice1" />
    </div>
    <p>Click on dice to roll</p>
    </Dicecontainer>
  )
}

export default RollDice

const Dicecontainer= styled.div`
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .dice{
        cursor: pointer;
    }

    p{
        font-size: 32px;
        font-weight: 1000;
        font-style: italic;
        color: #0e6a0e;
    }
`