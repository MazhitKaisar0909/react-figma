import React from 'react'
import { HeroSection, HeroSubTitle, HeroTitle, TitleWrapper, BearWrapper, GrayBlock, BlockButtonWrapper, MiniButton, PurpleWord, GreenWord, BoldWord, MainImg, SliderWrapper, TextButtonWrapper, TextButtonH2, TextButtonP, SilderButton, SliderButtonWrapper } from './styled'
import { Container } from '../common/styled'
import { FaArrowRightLong } from "react-icons/fa6";
import ImgBear from '../../assets/main/mainBigBear.png';
import ImgSlider from '../../assets/main/slider.png';

const Hero = () => {
    return (
        <HeroSection>
            <Container>
                <TitleWrapper>
                    <HeroTitle>
                        <PurpleWord>Turning</PurpleWord>
                        <GreenWord> Ideas</GreenWord>  <PurpleWord>into Digital</PurpleWord> <GreenWord>Realities.</GreenWord>
                    </HeroTitle>
                    <HeroSubTitle>
                        Doing <BoldWord>extra</BoldWord> since day one.
                    </HeroSubTitle>
                </TitleWrapper>
                <BearWrapper>
                    <MainImg src={ImgBear} alt='bigBear'/>
                    <GrayBlock>
                        Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.
                        <BlockButtonWrapper>
                            by: BookService
                            <MiniButton>
                                <FaArrowRightLong />
                            </MiniButton>
                        </BlockButtonWrapper>
                    </GrayBlock>
                </BearWrapper>
                <SliderWrapper>
                    <TextButtonWrapper>
                        <TextButtonH2>
                            Not just product <br/>
                            But a selling one
                        </TextButtonH2>
                        <TextButtonP>
                            We combine everything the best features in one 
                            <br/> projects: quality, speed, customizability and comfort.
                        </TextButtonP>
                        <SliderButtonWrapper>
                            <SilderButton>
                                Contacts
                            </SilderButton>
                            <SilderButton>
                                Start a project
                            </SilderButton>
                        </SliderButtonWrapper>
                    </TextButtonWrapper>
                    <MainImg src={ImgSlider} alt='slider'/>
                </SliderWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero