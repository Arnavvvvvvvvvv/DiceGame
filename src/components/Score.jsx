import styled from "styled-components"

const Score = ({pts}) => {
  return (
    <Scorecontainer>
      <h1>{pts}</h1>
      <p>Your score</p>
    </Scorecontainer>
  )
}

export default Score

const Scorecontainer= styled.div`
    max-width: 250px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 2px;
    h1{
        font-size: 120px;
        height: 10px;
        font-weight: 900;
    }
    p{
        font-size: 50px;
        font-weight: 500;

    }

    @media (max-width: 480px) {
      margin-right: 50px;
      h1{
        font-size: 40px;
      }
      p{
     font-size: 25px;
    }
  }
`