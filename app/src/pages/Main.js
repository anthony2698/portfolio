import React from 'react';
import Particles from 'react-particles-js';
import { Motion, spring } from 'react-motion';
import theme from '../styles/theme';
import { MainContainer, HighlightText, ButtonLink } from '../styles/GlobalStyles';

const Main = () => {
    return (
        <MainContainer>
            <Motion 
                defaultStyle={{opacity: 0}}
                style={{opacity: spring(1, {stiffness: 10, damping: 10})}}
            >
                {style => (
                    <div style={{opacity: style.opacity}} className='text-container'>
                        <h1>Hello, I'm <HighlightText>Anthony Carrillo</HighlightText>,</h1>
                        <h1>I'm a full-stack web developer.</h1>
                        <div className='button-container'>
                            <ButtonLink to='/projects'>
                                <div className='button'>My Work</div>
                            </ButtonLink>
                            <ButtonLink to='/skills'>
                                <div className='button'>My Skills</div>
                            </ButtonLink>
                            <ButtonLink to='/about'>
                                <div className='button'>About Me</div>
                            </ButtonLink>
                            <ButtonLink to='/contact'>
                                <div className='button'>Contact Me</div>
                            </ButtonLink>
                            <ButtonLink to='/resume'>
                                <div className='button'>My Resume</div>
                            </ButtonLink>
                        </div>
                    </div>
                )}
            </Motion>
        </MainContainer>
    );
}

export default Main;