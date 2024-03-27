import React from 'react';
import Laptop from './Laptop';
import Boxes from './Boxes';
import { Container } from '../common/styled';
import { StyledDiv } from './styled';

const MiniBoxes = () => {
  return (
    <StyledDiv>
        <Container>
            <Laptop /> 
            <Boxes/>
        </Container>  
    </StyledDiv>
  )
}

export default MiniBoxes