import React from 'react';
import Title from './Title';
import { AboutBody, AboutContainer, AboutContent, AboutImg } from '../styles/StyledComponents'

const AboutPage = () => {
    return (
        <AboutBody>
            <Title title={'About Me'} />
                <AboutContainer>
                    <AboutContent>
                        <h1>Who Am I?</h1>
                        <div className='text-container'>
                            Hello! I'm Anthony, a software engineering student at <a>Lambda School</a>.<br></br>

                        </div>
                    </AboutContent>
                    <AboutImg />
                </AboutContainer>
        </AboutBody>
    );
}

export default AboutPage;