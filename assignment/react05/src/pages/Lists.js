import React from 'react'
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';

const Img = styled.img`
  display: flex;
  width: 30vh;
  height: 30vh;
`

const Lists = () => {
    const {state} = useLocation();
  return (
    <>
        <Img src={state.img}/>
        <p>이름 : {state.name}</p>
        <p>인스타 : {state.nickname}</p>
        <p>직업 : {state.role}</p>
        <p>한 줄 소개 : {state.description}</p>
    </>
  )
}

export default Lists;