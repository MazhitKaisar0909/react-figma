import React from 'react'
import { MiniBoxesCard, TopLine, SubTitle, BoxesText } from './styled';

const Boxes = ({ title, text }) => {
    return (
        <div>
            <MiniBoxesCard>
                <TopLine></TopLine>
                <SubTitle>
                    {title}
                </SubTitle>
                <BoxesText>
                    {text}
                </BoxesText>
            </MiniBoxesCard>
        </div>
    )
}

export default Boxes