import styled, { keyframes } from 'styled-components';

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
    margin: 200px auto 250px;
`;

export const Moon = styled.div`
    position: absolute;
`;

export const Circle = styled.div`
    transform-style: preserve-3d;
    animation: ${rotateAnimation} 18s linear infinite;
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
