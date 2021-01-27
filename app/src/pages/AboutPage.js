import React from 'react';
import Title from './Title';
import ProfileImage from '../assests/newPic.JPG';
import { AboutBody, AboutContainer, AboutContent, AboutImg, SkillsContainer, SkillsContent } from '../styles/StyledComponents'
import SkillsList from '../components/About/SkillsList';

const AboutPage = () => {
    return (
        <AboutBody>
            <Title title={'About Me'} />
                <AboutContainer>
                    <AboutContent>
                        <h1 className='heading'>Who Am I?</h1>
                        <div className='text-container'>
                            Hello! I'm Anthony Carrillo, currently a software engineering student at <a className='link' href='https://lambdaschool.com/'>Lambda School</a>.
                            I enjoy creating modern websites and applications. My goal is to always provide clean interfaces and manageable code. 
                            Im currently seeking for a position in the
                            tech industry to further my knowlodge on software development.
                        </div>
                    </AboutContent>
                    <AboutImg src={ProfileImage}/>
                </AboutContainer>
                <SkillsContainer>
                    <SkillsContent>
                        <h1 className='subHeading'>Skills</h1>
                        <div>
                            <SkillsList />
                        </div>
                    </SkillsContent>
                 </SkillsContainer>
        </AboutBody>
    );
}

export default AboutPage;