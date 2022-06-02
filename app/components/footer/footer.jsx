
import React from "react";
import globalStyles from './styles.js';
import Image from 'next/image';

export default function Footer() {

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
