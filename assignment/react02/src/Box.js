import React, {useState} from "react";
import styled from "styled-components";
import data from "./data.json";
import "./Box.css";

const StyledBox = styled.button`
  border: 1px solid transparent;
  width: 30vh;
  height: 30vh;
  font-size: 15px;
  background-color: silver;
  text-align: center;
`;

const Box = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="box-div">
      {data.puppies.map((puppy) => (
        <StyledBox key={puppy.id}>
          <img src={puppy.img} alt="#"></img>
          <text>
            <p>
              <b>{puppy.title}</b>
              <span onClick={()=>{setCount(count)+1}}>👍</span>{count}
            </p>
          </text>
        </StyledBox>
      ))}
    </div>
  );
};

export default Box;