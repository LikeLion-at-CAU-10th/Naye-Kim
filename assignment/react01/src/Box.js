import React from "react";
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
  return (
    <>
      {data.puppies.map((puppy) => (
        <StyledBox key={puppy.id}>
          <img src={puppy.img} alt="#"></img>
          <text>
            <p>
              <b>{puppy.title}</b>
            </p>
          </text>
        </StyledBox>
      ))}
    </>
  );
};

export default Box;