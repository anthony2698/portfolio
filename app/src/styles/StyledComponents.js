import styled from 'styled-components';
import theme from './theme';
import { Javascript } from '@styled-icons/boxicons-logos'
import { GitBranch } from '@styled-icons/boxicons-regular';
import { DeveloperBoard, DataUsage } from '@styled-icons/material';
import { PersonDoneOutline } from '@styled-icons/evaicons-outline';
import { Database } from '@styled-icons/fa-solid';


//About Page Styles
export const AboutBody = styled.section`
    height: calc(130vh - 80px);
    background-color: ${theme.colors.darkNavy};
    ${theme.breakpoints.tablet}{
        height: 320vh;
    }
`;

export const AboutContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 20px;
    ${theme.breakpoints.tablet}{
        flex-direction: column-reverse;
    }
`;

export const AboutContent = styled.div`
    width: 900px;
    margin-left: 30px;
    .heading {
        font-family: ${theme.font};
        font-weight: 500;
        color: ${theme.colors.green};
        font-size: 2.5rem;
        text-align: center;
            ${theme.breakpoints.tablet}{
                font-size: 2rem;
            }
    }
    .text-container {
        font-family: ${theme.font};
        font-weight: 100;
        line-height: 2;
        margin-top: 15px;
        margin-right: 15px;
        color: ${theme.colors.white};
        font-size: 1.2rem;
        text-align: justify;
            ${theme.breakpoints.tablet}{
                font-size: 1.5rem;
            }
    }
    .link {
        text-decoration: none;
        font-weight: 700;
    }
    ${theme.breakpoints.tablet}{
        text-align: center;
        margin: 20px 20px;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;

export const AboutImg = styled.img`
    width: 340px;
    height: 300px;
    border-radius: 50%;
`;

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 20px;
    ${theme.breakpoints.tablet}{
        flex-direction: column;
        margin-right: 45px;
    }
`;

export const SkillsContent = styled.div`
    margin-top: 5px;
    margin-left: 25px;
    .subHeading {
        font-family: ${theme.font};
        font-weight: 500;
        color: ${theme.colors.green};
        font-size: 2.7rem;
        text-align: center;
            ${theme.breakpoints.tablet}{
                font-size: 2.5rem;
            }
    }
    .skills {
        margin-top: 40px;
        width: 95vw;
        height: 40vh;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;
        ${theme.breakpoints.tablet}{
            height: 100vh;
        }
    }
`;

export const SkillCardContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${theme.breakpoints.tablet}{
        width: 100%
    }
`;

export const SkillHeader = styled.h1`
    font-family: ${theme.font};
    color: ${theme.colors.slate};
    font-size: 1.5rem;
`;

export const SkillText = styled.p`
    font-family: ${theme.font};
    font-size: 1.2rem;
    margin: 10px 0;
    color: ${theme.colors.green};
    text-align: center;
`;

export const JavaScriptIcon = styled(Javascript)`
    color: ${theme.colors.slate};
    width: 60px;
`;

export const BackEndIcon = styled(DeveloperBoard)`
    color: ${theme.colors.slate};
    width: 60px;
`;

export const VersionControlIcon = styled(GitBranch)`
    color: ${theme.colors.slate};
    width: 60px;
`;

export const IndustryKnowledgeIcon = styled(PersonDoneOutline)`
    color: ${theme.colors.slate};
    width: 60px;
`;

export const DataStructuresIcon = styled(DataUsage)`
    color: ${theme.colors.slate};
    width: 60px;
`;

export const DataBaseIcon = styled(Database)`
    color: ${theme.colors.slate};
    width: 60px;
`;

//Projects Page Styles
export const ProjectsBody = styled.section`
    height: calc(100vh - 80px);
    background-color: ${theme.colors.darkNavy};
    border: 2px solid yellow;
`;

export const ProjectsContent = styled.div`
    border: 2px solid yellow;
    width: 900px;
`;

export const ProjectsContainer = styled.div`
    
`;

// Contact Page Styles
export const ContactBody = styled.section`
    height: calc(100vh - 80px);
    background-color: ${theme.colors.darkNavy};
`;
