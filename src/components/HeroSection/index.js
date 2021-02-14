import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, ArrowForward, HeroBtnWrapper, HeroH1, ArrowRight, HeroContent } from './HeroElements'
import Video from '../../videos/video.mp4';
//import { Button } from 'react-scroll';
import { Button } from '../ButtonElements';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>We are here to grow your business</HeroH1>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Get Started {hover ? <ArrowForward /> : <ArrowRight />} </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
