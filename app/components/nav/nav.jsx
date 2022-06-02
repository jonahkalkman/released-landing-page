import React from "react";
import Image from 'next/image';
import globalStyles from './styles.js';

export default function Nav() {
  return (
    <nav className='c-nav'>
      <span>
        <Image src="/logo.png" alt="Released logo" width={120} height={40}/>
      </span>
      <style jsx global>
        {globalStyles}
      </style>
    </nav>
  )
}
