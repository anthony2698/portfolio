import styled from 'styled-components';
import theme from './theme';

import { Link } from 'react-router-dom'

// Header Styles
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.selected ? theme.colors.red : theme.colors.white};
    margin: ${props => props.mobile ? ' 20px 0' : '0 20px'};
    font-size: 1.3rem;
    font-family: ${theme.font};
    text-align: center;
    &:hover{
        color: ${theme.colors.lightRed};
        transition: color 1.2s ease-in;
    };
`;

export const HeaderContainer = styled.header`
    background-color: ${theme.colors.darkBlack};
    border-bottom: 5px solid ${theme.colors.lightRed};
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
