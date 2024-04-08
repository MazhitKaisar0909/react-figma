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

    @media (max-width: 445px) {
        text-shadow: none;
    }
`

export const HeroTitle = styled.h1`
    font-size: 60px;
    margin-top: 50px;

    @media (max-width: 744px) {
        margin-top: 250px;
        margin-bottom: 30px;
        font-size: 28px;
  }

  @media (max-width: 445px){
        display: none;
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

    @media (max-width: 445px){
        display: flex;
        flex-direction: column;
        margin-top: 200px;
    }
`

export const MainImg = styled.img`
 width: 250px;
    @media (min-width: 744px){
        width: 275px;
    }
    @media (min-width: 1024px){
        width: 510px;
    }
    @media (min-width: 1440px){
        width: 555px;
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
    flex-direction: column;
    align-items: center;  
    justify-content: center;
    @media (min-width: 768px) {
        flex-direction: row;
    }
    @media (min-width: 1024px) {
    justify-content: space-between;}
`

export const TextButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
        gap: 20px;
        margin-bottom: 30px;
    @media (min-width: 1024px) {
        flex-direction: column;
    gap: 50px;
    }
`

export const TextButtonH2 = styled.h2`

    font-weight: 700;
    font-size: 28px;
    @media (min-width: 1024px) {
        font-size: 56px;
    }
`

export const TextButtonP = styled.p`

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 160%;
/* or 160% */
text-align: center;

color: #9795B5;
width:240px;

@media (min-width: 768px) {
    width:240px;
        
    }
    @media (min-width: 1024px) {
        font-size: 18px;
        width:455px;
        text-align: left;
    }
`
export const SliderButtonWrapper = styled.div`
display: none;
 @media (min-width: 768px) {
    display: flex;
    gap: 8px;
    position: relative;
    }
    
`
export const SliderButtonWrapperMob = styled.div`
margin-top: 40px;
display: flex;
    gap: 15px;
    position: relative;
 @media (min-width: 768px) {
    display: none;
    
    }
    
`
export const SilderButton = styled.button`
font-weight: 400;
font-size: 12px;
line-height: 18px;
width: 120px;
        height:45px;
    padding: 15px 20px;
    border-radius: 30px;
    border: 1px solid #5197FF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(40, 40, 40, 1);
    color: #fff;
    font-family: "DM Sans", sans-serif;
    
    &:hover{
        background-color: #fff;
        color: rgba(40, 40, 40, 1);
        transition: 0.7s;
    }

    @media (min-width: 744px) {
        font-size: 12px;
    }
`

export const HrefButton = styled.a`
    color: #fff;
    &:hover{
        background-color: #fff;
        color: rgba(40, 40, 40, 1);
        transition: 0.7s;
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

    @media (max-width: 445px) {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 1px ;
    }
`