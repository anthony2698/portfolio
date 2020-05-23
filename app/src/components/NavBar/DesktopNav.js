import React from 'react';
import { HeaderContainer, StyledLink } from '../../styles/GlobalStyles';

const DesktopNav = ({ handleClick, selection }) => {
    return (
        <div>
            <HeaderContainer>
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
                        to='/'
                        id={1}
                        onClick={handleClick}
                        selected={selection === 1}
                    >
                        Projects
                    </StyledLink>
                    <StyledLink
                        to='/'
                        id={2}
                        onClick={handleClick}
                        selected={selection === 2}
                    >
                        Skills
                    </StyledLink>
                    <StyledLink
                        to='/'
                        id={3}
                        onClick={handleClick}
                        selected={selection === 3}
                    >
                        About
                    </StyledLink>
                    <StyledLink
                        to='/'
                        id={4}
                        onClick={handleClick}
                        selected={selection === 4}
                    >
                        Contact
                    </StyledLink>
                    <StyledLink
                        to='/'
                        id={5}
                        onClick={handleClick}
                        selected={selection === 5}
                    >
                        Resume
                    </StyledLink>
                </nav>
            </HeaderContainer>
        </div>
    );
}

export default DesktopNav;
