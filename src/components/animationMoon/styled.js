import styled, { keyframes } from 'styled-components';

export const ImgMoon = styled.img`
width: 700px;
    @media (max-width: 744px) {
        width: 635px;
    }
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
    margin: 100px auto 100px;

    @media (max-width: 744px) {
        margin: 0;
    }
`;

export const Moon = styled.div`
    position: absolute;
    
`;

export const Circle = styled.div`
    transform-style: preserve-3d;
    animation: ${rotateAnimation} 20s linear infinite;
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
    transform: rotateY(calc(${props => props.index} * calc(360deg / 40))) translateZ(400px);

    @media (max-width: 744px) {
        font-size: 3em;
        transform: rotateY(calc(${props => props.index} * calc(360deg / 40))) translateZ(320px);
    }
`;
