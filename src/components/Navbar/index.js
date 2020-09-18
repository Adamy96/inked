import React from 'react';
import NavbarMobile from './Mobile';
import NavbarDesktop from './Desktop';
import useWindowSize from '../WindowCheck';

export default function Navbar(props) {
    const isMobile = useWindowSize().width < 768;
    const Navbar = isMobile ? <NavbarMobile {...props} /> : <NavbarDesktop {...props} />;

    return Navbar;
};