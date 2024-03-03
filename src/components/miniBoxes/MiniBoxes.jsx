import React from 'react';
import Laptop from './Laptop';
import Boxes from './Boxes';
import { Container } from '../common/styled';
import { StyledUl, StyledDiv } from './styled'
import { configMiniBoxes } from './configMiniBoxes';


const MiniBoxes = () => {
  return (
    <StyledDiv>
        <Container>
            <Laptop /> 
            <StyledUl>
                {configMiniBoxes.map((item)=>(
                    <Boxes key={item.title} {...item}/>
                ))}
            </StyledUl>   
        </Container>  
    </StyledDiv>
  )
}

export default MiniBoxes