import React from "react";
import Image from 'next/image';
import styles from './styles.js';

export default function Intro() {

  return (
    <div className='c-intro'>
      <Image src="/logo-small.svg" width="60" height="60" objectFit="contain" />
      <h2>Released, is your <span className="intro__green">release</span> radar</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis purus sed neque fringilla bibendum. Sed sit amet accumsan augue. Duis augue quam, dapibus at tellus vitae, tincidunt semper.</p>
      <div className="intro__image">
        <Image src="/notification.svg" width="270" height="93" objectFit="contain" />
      </div>
      <style jsx>
        {styles}
      </style>
    </div>
  )
}
