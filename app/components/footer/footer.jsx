
import React from "react";
import globalStyles from './styles.js';
import Image from 'next/image';

export default function Footer() {

  return (
    <footer className="c-footer">
      <span className="footer__link">
      © Released - Your music release radar
      </span>
      <div className="footer__socials">
        <a href="https://www.instagram.com/released.app/"><Image src="/instagram.svg" width="20" height="20" objectFit="contain" /></a>
        <a href="https://twitter.com/released_app"><Image src="/twitter.svg" width="20" height="20" objectFit="contain" /></a>
      </div>
      <style jsx global>
        {globalStyles}
      </style>
   </footer>
  )
}
