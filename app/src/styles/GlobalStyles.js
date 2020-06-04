import styled from 'styled-components';
import { Github, Linkedin } from '@styled-icons/boxicons-logos';
import { ArrowToRight } from '@styled-icons/boxicons-regular/ArrowToRight'
import theme from './theme';
import { Link } from 'react-router-dom'

// Header Styles
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.selected ? theme.colors.green : theme.colors.lightestSlate};
    margin: ${props => props.mobile ? ' 20px 0' : '0 20px'};
    font-size: 1.1rem;
    font-family: ${theme.font};
    font-weight: 300;
    text-align: center;
    &:hover{
        color: ${theme.colors.white};
        transition: color 1.2s ease-in;
    };
`;

export const HeaderContainer = styled.header`
    background-color: ${theme.colors.navy};
    border-bottom: 3px solid ${theme.colors.lightestNavy};
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: ${props => props.expand ? '440px' : '80px'};
    flex-direction: ${props => props.expand ? 'column' : 'row'};
    align-items: ${props => props.expand ? 'flex-start' : 'center'};
`;

export const MobileContainer = styled(HeaderContainer)`
    position: absolute;
    border: none; 
    .hamburger-container {
        cursor: pointer;
        margin-right: 20px;
    }
`;

export const MobileNavContainer = styled.nav`
    display: ${props => props.open ? 'flex' : 'none'};
    flex-direction: column;
    top: 80px;
    margin: 0 auto;
    position: relative;
`;

// Main Page Styles
export const MainContainer = styled.div`
    position: relative;
    height: calc(100vh - 80px);
    .text-container {
        display: flex;
        flex-wrap: nowrap;
        align-content: space-between;
        flex-direction: column;
        position: absolute;
        width: 55%;
        height: 50%;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 {
            font-family: ${theme.font};
            font-weight: 300;
            margin-bottom: 15px;
            color: ${theme.colors.green};
            font-size: ${theme.fontSizes.titleLine};
            text-align: left;
            ${theme.breakpoints.tablet}{
                font-size: 1.2rem;
            }
        }
        h2 { 
            margin-bottom: 15px;
            font-family: ${theme.font};
            font-weight: 700;
            color: ${theme.colors.white};
            font-size: ${theme.fontSizes.titles};
            text-align: left;
            ${theme.breakpoints.tablet}{
                font-size: 3rem;
            }
        }
        ${theme.breakpoints.tablet}{
            margin-bottom: 100px;
        }
    }
    .button-container {
        display: flex;
        flex-wrap: wrap;
        margin: 50px auto;
        align-items: center;
        width: 100%;
        justify-content: space-evenly;
            .button{
               display: flex;
               justify-content: center;
               align-items: center;
               border: 1px solid ${theme.colors.green};
               padding: 15px;
               border-radius: 5px;
               font-family: ${theme.font};
               font-size: 1rem;
               width: 120px;
               height: 30px;
               margin: 10px;
               cursor: pointer;
                    &:hover{
                        background-color: ${theme.colors.slate};
                        transition: background-color .5s ease;
                 }
            ${theme.breakpoints.tablet}{
                border: 1px solid ${theme.colors.green};
            }
        }
        ${theme.breakpoints.tablet}{
            margin: 30px auto;
        }
    }
`;

export const ButtonLink = styled(Link)`
    color: ${theme.colors.green};
    text-decoration: none;
`;

export const GitHubLogo = styled(Github)`
    color: ${theme.colors.green};
    width: 55px;
`;

export const LinkedInLogo = styled(Linkedin)`
    color: ${theme.colors.green};
    width: 50px;
`;

export const ArrowToRightLogo = styled(ArrowToRight)`
    color: ${theme.colors.green};
    width: 50px;
`;

// Title Styles 

export const TitleContainer = styled.div`
    margin: 0 auto;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: ${theme.colors.white};
        font-size: 3rem;
        font-family: ${theme.font};
    }
    div {
        position: relative;
        width: 100px;
        height: 2px;
        margin-top: 10px;
        background-color: ${theme.colors.green};
        -webkit-appearance: none;
    }
`;

//Logo Styles

export const Logo = styled.h1`
    font-family: ${theme.fontLogo};
    color: ${theme.colors.green};
    font-size: 4rem;
    padding-left: 15px;
    cursor: pointer;
`;