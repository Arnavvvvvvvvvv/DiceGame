import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src="https://u7.uidownload.com/vector/393/398/vector-dices-eps-ai.jpg" alt="dice" />
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>      
      </div>
    </Container>

  )
}

export default StartGame

const Container= styled.div`
  max-width: 1182px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 90vh;
  gap: 35px;

  .content{
    h1{
      font-size: 90px;
      text-align: center;
      white-space: nowrap;
    }
  }
@media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    height: auto;
    margin: 56px auto;
    padding: 20px;

    .content {
      h1 {
        font-size: 45px;
      }
    }

    img {
      max-width: 350px;
    }
  }
`

const Button= styled.button`
  background-color: black;
  font-weight: 400;
  color: white;
  width: 100%;
  height: 54px;
  border-radius: 5px;
  padding: 10px 18px;
  cursor: pointer;
  font-size: 26px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;

  &:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
}
`