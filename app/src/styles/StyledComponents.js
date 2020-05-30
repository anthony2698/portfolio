import styled from 'styled-components';
import theme from './theme';


//About Page Styles
export const AboutBody = styled.section`
    height: calc(100vh - 80px);
    background-color: ${theme.colors.darkNavy};
`;

export const AboutContainer = styled.div`
    display: flex;
    border: 4px solid red;
    justify-content: space-evenly;
    align-items: center;
    margin: 20px 20px;
    ${theme.breakpoints.tablet}{
        flex-direction: column;
    }
`;

export const AboutContent = styled.div`
    width: 800px;
    border: 4px solid green;
    margin-left: 30px;
    h1 {
        font-family: ${theme.font};
        font-weight: 500;
        color: ${theme.colors.green};
        font-size: 2rem;
        text-align: center;
            ${theme.breakpoints.tablet}{
                font-size: 1.5rem;
            }
    }
    .text-container {
        font-family: ${theme.font};
        font-weight: 100;
        color: ${theme.colors.white};
        font-size: 1.2rem;
        text-align: center;
            ${theme.breakpoints.tablet}{
                font-size: 1.5rem;
            }
    }
    ${theme.breakpoints.tablet}{
        text-align: center;
        margin: 20px 20px;
        width: 100%;
    }
`;

export const AboutImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

//Projects Page Styles
export const ProjectsBody = styled.section`
    height: calc(100vh - 80px);
    background-color: ${theme.colors.darkNavy};
`;

// Contact Page Styles
export const ContactBody = styled.section`
    height: calc(100vh - 80px);
    background-color: ${theme.colors.darkNavy};
`;
