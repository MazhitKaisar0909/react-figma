import styled from 'styled-components';

export const StyledUl = styled.ul`
    display: flex;
    justify-content: center;

    gap: 70px;
    margin-top: 100px;
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

export const BigWordsH1 = styled.h1`
    font-size: 126px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.200);
    font-family: "DM Sans", sans-serif;

    @media (max-width: 744px) {
        font-size: 69px;
        text-align: right;
    }
`

export const BigNumberH1 = styled.h1`
    font-size: 515px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.200);
    font-family: "DM Sans", sans-serif;

     @media (max-width: 744px) {
        font-size: 196px;
    }
`

export const BigWordsWraper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 744px) {
        flex-direction: row-reverse;
        align-items: start;
    }
`

export const StyledImg = styled.img`
    position: absolute;
    z-index: 10;
    right: 0;
    bottom: 0;
    @media (max-width: 744px) {
        width: 330px;
        left: 137px;
        bottom: 0px;
    }
`

export const StyledDivPosition = styled.div`
    position: relative;
    padding-bottom: 200px;

    @media (max-width: 744px) {
        padding-bottom: 0;
    }
`
