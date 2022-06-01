
import React, { useRef, useEffect } from "react";
import globalStyles from './styles.js';
import Link from 'next/link'
import Image from 'next/image';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  const footerRef = useRef();

  useEffect(() => {
    gsap.from(footerRef.current, {
      opacity: 0,
      y: '20',
      duration: 1,
      scrollTrigger: {
        trigger: footerRef.current,   
      }
    });
  });

  return (
    <footer className="c-footer" ref={footerRef}>
      <span className="footer__link">
      © Released - Your music release radar
      </span>
      <div className="footer__socials">
        <Image src="/instagram.svg" width="20" height="20" objectFit="contain" />
        <Image src="/twitter.svg" width="20" height="20" objectFit="contain" />
      </div>
      <style jsx global>
        {globalStyles}
      </style>
   </footer>
  )
}
