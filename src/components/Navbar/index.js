import React from 'react';
import NavbarMobile from './Mobile';
import NavbarDesktop from './Desktop';
import useWindowSize from '../WindowCheck';

export default function Navbar() {
    const isMobile = useWindowSize().width < 768;
    const Navbar = isMobile ? <NavbarMobile /> : <NavbarDesktop />;

    return Navbar;
};