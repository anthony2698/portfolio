import React from 'react';
import Particles from 'react-particles-js';
import { Motion, spring } from 'react-motion';
import { useMediaQuery } from 'react-responsive';
import theme from '../styles/theme';
import { MainContainer, ButtonLink, LinkedInLogo, GitHubLogo, ArrowToRightLogo } from '../styles/GlobalStyles';

const Main = () => {
    const isTablet = useMediaQuery({
        query: '(max-width: 799px)'
    })

    return (
        <MainContainer>
            <Motion 
                defaultStyle={{opacity: 0}}
                style={{opacity: spring(1, {stiffness: 10, damping: 10})}}
            >
                {style => (
                // <>
                    <div style={{opacity: style.opacity}} className='text-container'>
                        <div>
                            <h1>Hi, my name is</h1>
                            <h2>Anthony Carrillo.</h2>
                            <h2>I'm a full-stack web developer.</h2>
                        </div>
                        <div>
                            <h1>I'm a software engineer based in New Jersey,</h1>
                            <h1>specializing in building modern web applications.</h1>
                        </div>
                        <div className='button-container'>
                            <a href='https://www.linkedin.com/in/anthony-carrillo-55968a16b/'>
                                <LinkedInLogo />
                            </a>
                            <a href='https://github.com/anthony2698'>
                                <GitHubLogo />
                            </a>
                            <ButtonLink to='/about'>
                                <ArrowToRightLogo />
                            </ButtonLink>
                        </div>
                    </div>
                // </>
                )}
            </Motion>
            <Particles
                height= {isTablet ? '115vh' : 'calc(100vh - 80px)'}
                style={{
                    backgroundColor: `${theme.colors.darkNavy}`
                }}
                params={{
                    "particles": {
                        "number": {
                            "value": 100,
                            "density": {
                                "enable": true,
                                "value_area": 2000
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.1
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.1
                        },
                        "size": {
                            "value": 3
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "opacity_min": 0.05
                            }
                        }
                    },
                    "retina_detect": true
            }} />
        </MainContainer>
    );
}

export default Main;