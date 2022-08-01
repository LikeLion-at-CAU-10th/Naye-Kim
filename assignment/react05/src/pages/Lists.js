import React from 'react'
import {useLocation} from 'react-router-dom';

const Lists = () => {
    const {state} = useLocation();
  return (
    <>
        <image src="img/주인좋아강쥐.jpeg"></image>
        <p>이름 : {state.name}</p>
        <p>인스타 : {state.nickname}</p>
        <p>직업 : {state.role}</p>
        <p>한 줄 소개 : {state.description}</p>
    </>
  )
}

export default Lists;