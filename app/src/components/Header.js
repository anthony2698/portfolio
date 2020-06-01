import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

import DesktopNav from './NavBar/DesktopNav';
import MobileNav from './NavBar/MobileNav';


const Header = () => {
    const[selection, setSelection] = useState(0);
    const history = useHistory();

    const handleClick = e => {
        setSelection(e.target.id * 1)
    }

    useEffect(() => {
        switch(history.location.pathname) {
            case '/':
                setSelection(0);
                break;
            case '/about':
                setSelection(1);
                break;
            case '/projects':
                setSelection(2);
                break;
            case '/contact':
                setSelection(3);
                break;
            default:
                setSelection(0);
                break;
        }
    }, [history.location.pathname])

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    });

    const isTablet = useMediaQuery({
        query: '(max-width: 799px)'
    })

    return(
        <div>
            {isDesktop && <DesktopNav handleClick={handleClick} selection={selection} />}
            {isTablet && <MobileNav handleClick={handleClick} selection={selection} />}
        </div>
    )
}

export default Header;