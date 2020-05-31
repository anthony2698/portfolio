import React from 'react';
import Title from './Title';
import { AboutBody, AboutContainer, AboutContent, AboutImg, SkillsContainer, SkillsContent } from '../styles/StyledComponents'

const AboutPage = () => {
    return (
        <AboutBody>
            <Title title={'About Me'} />
                <AboutContainer>
                    <AboutContent>
                        <h1>Who Am I?</h1>
                        <div className='text-container'>
                            Hello! I'm Anthony Carrillo, a software engineering student at <a>Lambda School</a>.
                            I enjoy creating websites and applications. My goal is to always provide clean interfaces and to write efficent code. 
                            Im currently seeking for a position in the
                            tech industry to further my knowlodge on software development.
                        </div>
                    </AboutContent>
                    <AboutImg />
                </AboutContainer>
                <SkillsContainer>
                    <SkillsContent>
                        <h1>Skills</h1>
                    
                    </SkillsContent>
                 </SkillsContainer>
        </AboutBody>
    );
}

export default AboutPage;