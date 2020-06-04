import React from 'react';
import { HeaderContainer, StyledLink, Logo } from '../../styles/GlobalStyles';

const DesktopNav = ({ handleClick, selection }) => {
    return (
        <HeaderContainer>
            <Logo>AC</Logo>
                <nav>
                    <StyledLink
                        to='/'
                        id={0}
                        onClick={handleClick}
                        selected={selection === 0}
                    >
                        Home
                    </StyledLink>
                    <StyledLink
                        to='/about'
                        id={1}
                        onClick={handleClick}
                        selected={selection === 1}
                    >
                        About
                    </StyledLink>
                    <StyledLink
                        to='/projects'
                        id={2}
                        onClick={handleClick}
                        selected={selection === 2}
                    >
                        Projects
                    </StyledLink>
                    <StyledLink
                        to='/contact'
                        id={3}
                        onClick={handleClick}
                        selected={selection === 3}
                    >
                        Contact
                    </StyledLink>
                </nav>
        </HeaderContainer>
    );
}

export default DesktopNav;
