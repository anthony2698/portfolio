import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';
import HamburgerMenu from 'react-hamburger-menu';

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
                        <img></img>
                        <div className='hamburger-container'>
                            <HamburgerMenu
                                isOpen={open}
                                menuClicked={handleMenuClick}
                                color={theme.colors.white}
                            />
                        </div>
                    </MobileContainer>
                    <MobileNavContainer>

                    </MobileNavContainer>
                </HeaderContainer>
            )}
        </Motion>
    );
}

export default MobileNav;