import React, {useState} from 'react'
import Video from '../../videos/vaccin-covid.mp4'
import {Button} from '../ButtonElement'
import {
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    } 

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Clinique Virtuelle Alma</HeroH1>
                <HeroP>
                    On prend soin de vous 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={true}
                        dark={true}
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                    >
                        Réservez votre vaccin {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
