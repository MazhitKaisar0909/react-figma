import styled from 'styled-components';
import { FaArrowRightLong } from "react-icons/fa6";
import imgGrayBlock from '../../assets/main/grayBlock.png';

export const HeroSection = styled.section`

`
export const PurpleWord = styled.span`
    color: #9365FF;
`

export const GreenWord = styled.span`
    color: #57FF9A;
    text-shadow: 0px 0px 7px rgba(87, 255, 154, 1),0 0 2em rgba(87, 255, 154, 1),0 0 1.2em rgba(87, 255, 154, 1);
`

export const HeroTitle = styled.h1`
    font-size: 60px;
    margin-top: 50px;

    @media (max-width: 744px) {
        margin-top: 250px;
        margin-bottom: 30px;
        font-size: 28px;
  }
`

export const HeroSubTitle = styled.p`
    font-family: "Inter", sans-serif;
    @media (max-width: 744px) {
        display: none;
    }
`

export const HeroSubTitleTablet = styled.p`
    font-family: "Inter", sans-serif;
    @media (max-width: 744px) {
        width: 100px;
        text-align: center;
        font-size: 10px;
    }
    @media (min-width: 744px) {
        display: none;
    }
`

export const BoldWord = styled.span`
    font-weight: bold;
`

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const BearWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 70px;
`

export const MainImg = styled.img`
    @media (max-width: 744px){
        width: 250px;
    }
`

export const GrayBlock = styled.div`
    width: 408px;
    font-family: "Inter", sans-serif;
    padding: 27px;
    margin-left: 130px;
    background-image: url(${imgGrayBlock});
    background-size: cover;

    @media (max-width: 744px) {
        width: 380px;
        margin-left: 0;
    }
`

export const GrayBlockContent = styled.p`
   @media (max-width: 744px) {
        display: none;
    }
`

export const GrayBlockContentTablet = styled.p`
   @media (max-width: 744px) {
        display: block;
    }
   @media (min-width: 745px) {
        display: none;
    }
`

export const BlockButtonWrapper = styled.div`
    color: rgba(91, 91, 91, 1);
`

export const MiniButton = styled.button`
    background-color: rgba(40, 40, 41, 1);
    width: 58px;
    height: 30px;
    border: none;
    border-radius: 6px;
    margin-left: 10px;

    &:hover{
        background-color: #fff;
        transition: 0.7s;
    }
    @media (max-width: 744px) {
        width: 38px;
    }
`

export const StyledArrow = styled(FaArrowRightLong)`
    color: rgba(159, 159, 159, 1);
    font-size: 20px;
`

export const SliderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

export const TextButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (max-width: 744px) {
        margin-top: 50px;
        gap: 20px;
    }
`

export const TextButtonH2 = styled.h2`
    font-size: 56px;
    font-weight: 700;

    @media (max-width: 744px) {
        font-size: 28px;
    }
`

export const TextButtonP = styled.p`
    font-size: 18px;
    color: rgba(151, 149, 181, 1);
    font-weight: 400;

    @media (max-width: 744px) {
        font-size: 12px;
    }
`
export const SliderButtonWrapper = styled.div`
    display: flex;
    gap: 8px;
    position: relative;
`

export const SilderButton = styled.button`
    padding: 15px 20px;
    border-radius: 30px;
    border: none;
    align-items: center;
    text-align: center;
    background-color: rgba(40, 40, 40, 1);
    color: #fff;
    font-family: "DM Sans", sans-serif;
    
    &:hover{
        background-color: #fff;
        color: rgba(40, 40, 40, 1);
        transition: 0.7s;
    }

    @media (max-width: 744px) {
        width: Hug(89px);
    }
`

export const TabletStyleWrapper = styled.div`
    @media (min-width: 744px) {
        display: none;
    }
    @media (max-width: 744px) {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-top: 250px;
    }
    
`

export const TabletStyleTitle = styled.h1`
    font-size: 58px;
    text-align: center;
    font-weight: bold;
`