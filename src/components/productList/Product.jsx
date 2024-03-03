import React from 'react'
import { StyledItem, StyledSubTitle, StyledP, StyledWraper, StyledButton  } from './styled'
import { AiFillPlusCircle } from "react-icons/ai";

const Product = ({ title, text }) => {
    return (
        <StyledItem>
            <StyledWraper>
                <StyledSubTitle>
                    {title}
                </StyledSubTitle>

                <StyledButton>
                    <AiFillPlusCircle />
                </StyledButton>
            </StyledWraper>

            <StyledP>
                {text}
            </StyledP>
        </StyledItem>
    )
}

export default Product