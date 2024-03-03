import React from 'react'
import { HeroSection, HeroSubTitle, HeroTitle, TitleWrapper, BearWrapper, GrayBlock, BlockButtonWraper, MiniButton, PurpleWord, GreenWord, BoldWord } from './styled'
import { Container } from '../common/styled'
import { FaArrowRightLong } from "react-icons/fa6";

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
                    bear image
                    <GrayBlock>
                        Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.
                        <BlockButtonWraper>
                            by: BookService
                            <MiniButton>
                                <FaArrowRightLong />
                            </MiniButton>
                        </BlockButtonWraper>
                    </GrayBlock>
                </BearWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero