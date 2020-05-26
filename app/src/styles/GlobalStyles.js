import styled from 'styled-components';
import theme from './theme';

import { Link } from 'react-router-dom'

//Highlight Text
export const HighlightText = styled.a`
    color: ${theme.colors.blue};
    margin: 0;
    display: inline;
    font-size: ${props => props.about ? '1.3rem' : theme.fontSizes.title};
    text-align: center;
    font-family: ${theme.font};
    cursor: ${props => props.about ? 'pointer' : 'default'};
    ${theme.breakpoints.tablet}{
        font-size: ${props => props.about ? '1.3rem' : '2rem'};
    }
`;

// Header Styles
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.selected ? theme.colors.babyBlue : theme.colors.lightTeal};
    margin: ${props => props.mobile ? ' 20px 0' : '0 20px'};
    font-size: 1.3rem;
    font-family: ${theme.font};
    text-align: center;
    &:hover{
        color: ${theme.colors.yellow};
        transition: color 1.2s ease-in;
    };
`;

export const HeaderContainer = styled.header`
    background-color: ${theme.colors.blue};
    border-bottom: 5px solid ${theme.colors.babyBlue};
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
    height: calc(100vh - 85px);
    .text-container {
        position: absolute;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 { 
            font-family: ${theme.font};
            color: ${theme.colors.white};
            font-size: ${theme.fontSizes.title};
            text-align: center;
            ${theme.breakpoints.tablet}{
                font-size: 2rem;
            }
        }
    }
    .button-container {
        // display: flex;
        // flex-wrap: wrap;
        // margin: 10px auto;
        // width: 100%;
        // justify-content: center;
        // .button{
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     border: 2px solid ${theme.colors.lightBlue};
        //     font-family: ${theme.font};
        //     font-size: 1.3rem;
        //     width: 120px;
        //     height: 30px;
        //     margin: 10px;
        //     cursor: pointer;
        //     &:hover{
        //         background-color: ${theme.colors.lightBlue};
        //         transition: background-color .5s ease;
        //     }
        //     ${theme.breakpoints.tablet}{
        //         border: 1px solid ${theme.colors.lightBlue};
        //     }
        // }
        // ${theme.breakpoints.tablet}{
        //     margin: 30px auto;
        // }
    }
`;

export const ButtonLink = styled(Link)`
    text-decoration: none;
    color: ${theme.colors.white};
`;