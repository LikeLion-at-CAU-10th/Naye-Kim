import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.div`
    width: 100px;
    height: 100px;
    color: black;
    background-color: ${(props)=>props.btnColor || 'blue'};
    display: flex;
    justify-content: center;
    align-items: center;

`;

const ButtonDom = styled.div`
    display: flex;
`;

const NavBar = () => {
    const navigate = useNavigate();

    const handleClick = (url) => {
        navigate(url);
    }

    return (
        <>
        <ButtonDom>
            <Button onClick={()=>handleClick("/")} btnColor="lightgreen">
                Home
             </Button>
             <Button onClick={()=>handleClick("/love")} btnColor="lightblue">
                Moonbear
             </Button>
        </ButtonDom>
        </>
    )

        
};

export default NavBar;