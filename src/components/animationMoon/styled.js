import styled, { keyframes } from 'styled-components';

export const StyledUl = styled.ul`
    display: flex;
    justify-content: flex-end;

    gap: 50px;
`

export const MiniBoxesCard = styled.li`
    width: 185px;
`

export const TopLine = styled.div`
    border: 0.5px solid rgba(255, 255, 255, 1);
`

export const SubTitle = styled.h6`
    color: rgba(255, 255, 255, 1);
    margin: 10px 0;
    font-weight: 700;
`

export const BoxesText = styled.p`
    color: rgba(255, 255, 255, 1);
`

export const ImgMoon = styled.img`
`

export const rotateAnimation = keyframes`
    0% {
        transform: perspective(1000px) rotateY(360deg) rotateX(15deg);
    }
    100% {
        transform: perspective(1000px) rotateY(0deg) rotateX(15deg);
    }
`;

export const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transform-style: preserve-3d;
`;

export const Moon = styled.div`
    position: absolute;
`;

export const Circle = styled.div`
    transform-style: preserve-3d;
    animation: ${rotateAnimation} 10s linear infinite;
`;

export const Span = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(147, 101, 255, 1);
    font-size: 5em;
    transform-origin: center;
    transform-style: preserve-3d;
    padding: 5px 11px;
    transform: rotateY(calc(${props => props.index} * calc(360deg / 39))) translateZ(450px);
`;
