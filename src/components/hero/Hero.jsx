import React, {useState} from 'react'
import { HeroSection, HeroSubTitle, HeroTitle,SliderButtonWrapperMob, TitleWrapper, BearWrapper, GrayBlock, BlockButtonWrapper, MiniButton, PurpleWord, GreenWord, BoldWord, MainImg, SliderWrapper, TextButtonWrapper, TextButtonH2, TextButtonP, SilderButton, SliderButtonWrapper, StyledArrow, TabletStyleWrapper, TabletStyleTitle, HeroSubTitleTablet, GrayBlockContent, GrayBlockContentTablet, HrefButton } from './styled';
import { Container } from '../common/styled';
import ImgBear from '../../assets/main/mainBigBear.png';
import ImgSlider from '../../assets/main/slider.png';
import Modal from '../common/modal/Modal';
import HeaderLogo from '../icons/HeaderLogo';

const Hero = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const handleModalOpen = ()=>{
        setModalOpen(true)
        document.body.style.overflow = "hidden"
    };
    const handleModalClose = ()=>{
        setModalOpen(false)
        document.body.style.overflow = "auto"
    };

    
    return (
        <HeroSection>
            <Container>
                <TitleWrapper>

                    <TabletStyleWrapper>
                        <HeaderLogo />
                        <TabletStyleTitle>
                            <GreenWord>CODE</GreenWord> 
                            <br/>
                            <PurpleWord>BEAR</PurpleWord>
                        </TabletStyleTitle>
                        <HeroSubTitleTablet>
                            Doing <BoldWord>extra</BoldWord> since day one.
                        </HeroSubTitleTablet>
                    </TabletStyleWrapper>

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
                        <GrayBlockContent>
                            Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.
                        </GrayBlockContent>
                        <GrayBlockContentTablet>
                            Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode, damn chuck-a-fill tastes good.Review of our work by some doode.
                        </GrayBlockContentTablet>
                        <BlockButtonWrapper>
                            <br />
                            by: BookService
                            <MiniButton>
                                <StyledArrow />
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
                            projects: quality, speed, customizability and comfort.
                        </TextButtonP>
                        <SliderButtonWrapper>
                            <SilderButton onClick={
                                handleModalOpen
                            }>
                                Contacts
                            </SilderButton>
                            <SilderButton>
                                <HrefButton href='#contact'>
                                    Start project
                                </HrefButton>
                            </SilderButton>
                        </SliderButtonWrapper>
                        {isModalOpen && <Modal onClick={handleModalClose}/>}
                    </TextButtonWrapper>
                    <MainImg src={ImgSlider} alt='slider'/>
                    <SliderButtonWrapperMob>
                            <SilderButton onClick={
                                handleModalOpen
                            }>
                                Contacts
                            </SilderButton>
                            <SilderButton>
                                <HrefButton href='#contact'>
                                    Start project
                                </HrefButton>
                            </SilderButton>
                        </SliderButtonWrapperMob>
                </SliderWrapper>
            </Container>
        </HeroSection>
    )
}

export default Hero