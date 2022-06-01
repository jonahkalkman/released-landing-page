import React, { useLayoutEffect } from "react";
import Image from 'next/image';
import globalStyles from './styles.js';
import { gsap } from "gsap";

export default function Nav() {
  const logoRef = React.useRef();
  const menuRef = React.useRef();

  useLayoutEffect(() => {
    gsap.from([logoRef.current, menuRef.current], {  
      opacity: 0,
      y: '10',
      duration: 1.5
    });
  });

  return (
    <nav className='c-nav'>
      <span ref={logoRef}>
        <Image src="/logo.png" alt="Released logo" width={120} height={40}/>
      </span>
      <style jsx global>
        {globalStyles}
      </style>
    </nav>
  )
}
