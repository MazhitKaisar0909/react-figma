import React from 'react';
import Laptop from './Laptop';
import { Container } from '../common/styled';
import { StyledDiv } from './styled'


const MiniBoxes = () => {
  return (
    <StyledDiv>
        <Container>
            <Laptop /> 
        </Container>  
    </StyledDiv>
  )
}

export default MiniBoxes