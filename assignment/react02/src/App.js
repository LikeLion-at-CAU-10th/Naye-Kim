import React, {useState} from 'react';
import './App.css';
import Box from './Box.js';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledCard = styled.div`
  width: 100vh;
  height: 100vh;
`;

function App (){
  return (
    <StyledApp>
      <StyledCard>
        <Box />
      </StyledCard>
    </StyledApp>
  );
};

export default App;
