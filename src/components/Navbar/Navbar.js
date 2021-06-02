import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import navbarLinks from './navbarLinks.json'
import './Navbar.scss';

const Navbar = () => {
    const [currentBtn, setCurrentBtn] = useState(0)
    const [showHamburgerList, setShowHamburgetList] = useState(false)

    const scrollWidthOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const renderButtons = () => {

        return navbarLinks.map((navLink, i) => {
            const buttonClass = `navbar__button ${i === currentBtn ? 'navbar__button-selected' : ''}`

            return (
                <li key={i} onClick={() => setCurrentBtn(i)} className={buttonClass}>
                    <Link to={navLink.to} scroll={scrollWidthOffset} onClick={() => setShowHamburgetList(false)} className='navbar__button-link'>
                        {navLink.name}
                    </Link>
                </li>
            );
        });
    };

    return (
        <div className='navbar'>
            <img className='navbar__logo' src='/imgs/logo.jpg' alt='logo' />
            <div className='navbar__hamburger' onClick={() => setShowHamburgetList(!showHamburgerList)}>
                <div className='navbar__hamburger-bar'></div>
                <div className='navbar__hamburger-bar navbar__hamburger-bar-mid'></div>
                <div className='navbar__hamburger-bar'></div>
            </div>
            <ul className={`navbar__buttons ${showHamburgerList ? 'navbar__hamburger-items-activate' : ''}`}>
                {renderButtons()}
            </ul>
            <div className={`navbar__hamburger-items ${showHamburgerList ? 'navbar__hamburger-items-activate' : ''}`}></div>
        </div>
    );
};

export default Navbar;