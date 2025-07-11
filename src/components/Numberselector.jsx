import styled from "styled-components"

const Numberselector = ({seterror, error, selectednumber, setselectednumber}) => {
  return (
    <Numbers>
    <p className="err">{error}</p>
    <div style={{ display: "flex", gap: "15px" }}>
    <Box isSelected={1==selectednumber} onClick={()=>{setselectednumber(1), seterror("")}}>1</Box>
    <Box isSelected={2==selectednumber} onClick={()=>{setselectednumber(2), seterror("")}}>2</Box>
    <Box isSelected={3==selectednumber} onClick={()=>{setselectednumber(3), seterror("")}}>3</Box>
    <Box isSelected={4==selectednumber} onClick={()=>{setselectednumber(4), seterror("")}}>4</Box>
    <Box isSelected={5==selectednumber} onClick={()=>{setselectednumber(5), seterror("")}}>5</Box>
    <Box isSelected={6==selectednumber} onClick={()=>{setselectednumber(6), seterror("")}}>6</Box>
    </div>
    <p>Select a Number</p>
    </Numbers>
  )
}

export default Numberselector

const Numbers= styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;

    .err{
      color: red;
      white-space: nowrap;
      align-self: flex-start;
    }
    p{
        font-size: 24px;
        font-weight: 700;
        width: 182px;
    }
    @media (max-width: 480px) {
  .err{
    font-size: 16px;
    align-self: flex-start;
  }
  p{
    font-size: 25px;
    white-space: nowrap;
  }
}
`

const Box= styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    background-color: ${(props) => props.isSelected ? "black":"white"};
    color: ${(props) => props.isSelected ? "white":"black"};
    @media (max-width: 480px) {
      height: 30px;
      width: 30px;
      font-size: 15px;
  }
`