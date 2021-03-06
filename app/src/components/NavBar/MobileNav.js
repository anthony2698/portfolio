import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import HamburgerMenu from 'react-hamburger-menu';
import { Logo } from '../../styles/GlobalStyles'
import { HeaderContainer, MobileContainer, StyledLink, MobileNavContainer } from '../../styles/GlobalStyles';
import theme from '../../styles/theme';

const MobileNav = ({ handleClick, selection }) => {
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setOpen(!open);
    }

    return (
        <Motion
            defaultStyle={{height: 80}}
            style={{height: spring(open ? 440 : 80)}}
        > 
            {style => (
                <HeaderContainer expand={open} style={{height: style.height}}>
                    <MobileContainer>
                        <Logo>AC</Logo>
                        <div className='hamburger-container'>
                            <HamburgerMenu
                                isOpen={open}
                                menuClicked={handleMenuClick}
                                color={theme.colors.green}
                            />
                        </div>
                    </MobileContainer>
                    <Motion 
                        defaultStyle={{top: -300}}
                        style={{top: spring(open ? 80 : -300)}}
                    >
                        {style => (
                            <MobileNavContainer open={open} style={{top: style.top}}>
                                <StyledLink 
                                to='/' 
                                id={0} 
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 0}
                                mobile='true'
                            >Home</StyledLink>
                            <StyledLink 
                                to='/about' 
                                id={1}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 1}
                                mobile='true'
                            >About</StyledLink>
                            <StyledLink 
                                to='/projects' 
                                id={2}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 2}
                                mobile='true'
                            >Projects</StyledLink>
                            <StyledLink 
                                to='/contact' 
                                id={3}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 3}
                                mobile='true'
                            >Contact</StyledLink>
                            </MobileNavContainer>
                        )}
                    </Motion>
                </HeaderContainer>
            )}
        </Motion>
    );
}

export default MobileNav;