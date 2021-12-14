import React from "react";
import Image from 'next/image';
import globalStyles from './styles.js';

export default function Intro() {

  return (
    <div className='c-intro'>
      <Image src="/logo-small.svg" width="60" height="60" objectFit="contain" />
      <h2>Released, is your release radar</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis purus sed neque fringilla bibendum. Sed sit amet accumsan augue. Duis augue quam, dapibus at tellus vitae, tincidunt semper.</p>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}