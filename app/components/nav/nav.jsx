import React, { useState, useEffect } from "react";
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import globalStyles from './styles.js';
import Hamburger from '../hamburger'
import { gsap } from "gsap";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [navIsTransitioned, setNavIsTransitioned] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    if(openMenu == false) {
      setIsTransitioned(false);
    }
  };

  const logoRef = React.useRef();
  const menuRef = React.useRef();
  const nodeRef = React.useRef();
  const newRef = React.useRef();
  const menuItemRef = React.useRef();

  useEffect(() => {
    gsap.from([logoRef.current, menuRef.current], {  
      opacity: 0,
      y: '10',
      duration: 1.5
    });
  });

  return (
    <nav className='c-nav'>
      <span ref={logoRef}>
        <Image src="/logo.svg" alt="Released logo" width={120} height={40} objectFit="contain" />
      </span>
      <span className="c-menu" onClick={toggleMenu}>
        <span ref={menuRef}>
          <Image className="menu__open-icon" src="/hamburger.svg" alt="Open menu icon" width={22} height={18} />
        </span>
        <Hamburger />
        <CSSTransition
         in={openMenu}
         exit={!openMenu}
         timeout={1000}
         classNames="nav__circle"
         unmountOnExit
         nodeRef={newRef}
         onEntered={() => setIsTransitioned(true)}
        >
          <div className="nav__circle" ref={newRef}></div>
        </CSSTransition>
      </span>
      <CSSTransition
        in={isTransitioned}
        timeout={1}
        classNames="c-navigation"
        unmountOnExit
        nodeRef={nodeRef}
        onEntered={() => setNavIsTransitioned(true)}
        onExited={() => {setOpenMenu(false); setNavIsTransitioned(false)}}
      >
        <div className="c-navigation" ref={nodeRef}>
          {/* <span className="navigation__close-icon" >
            <Image onClick={closeMenu} src="/cross.svg" alt="Close menu icon" width={26} height={26} />
          </span> */}
          <ul className="navigation__list">
            <li className={navIsTransitioned ? 'navigation__item' : 'navigation__item navigation__item--hidden'}>Home</li>
            <li className={navIsTransitioned ? 'navigation__item' : 'navigation__item navigation__item--hidden'}>Features</li>
            <li className={navIsTransitioned ? 'navigation__item' : 'navigation__item navigation__item--hidden'}>About us</li>
            <li className={navIsTransitioned ? 'navigation__item' : 'navigation__item navigation__item--hidden'}>Contact</li>
            <li className={navIsTransitioned ? 'navigation__item navigation--item-green' : 'navigation__item navigation--item-green navigation__item--hidden'}>Sign up for Beta</li>
          </ul>
        </div> 
      </CSSTransition>
      <style jsx global>
        {globalStyles}
      </style>
    </nav>
  )
}
