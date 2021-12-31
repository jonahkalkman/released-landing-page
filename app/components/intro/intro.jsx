import React, { useRef, useEffect }  from "react";
import Image from 'next/image';
import styles from './styles.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);
  const logoRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.from(logoRef.current, {
      opacity: 0,
      y: '20',
      duration: 1,
      scrollTrigger: {
        trigger: logoRef.current,   
      }
    });

    gsap.from(titleRef.current, {
      opacity: 0,
      y: '20',
      duration: 1.5,
      scrollTrigger: {
        trigger: titleRef.current,   
      }
    });

    gsap.from(textRef.current, {
      opacity: 0,
      y: '20',
      duration: 1.5,
      scrollTrigger: {
        trigger: textRef.current,   
      }
    });
  });

  return (
    <div className='c-intro'>
      <div className="intro__logo" ref={logoRef}>
        <Image src="/logo-small.svg" width="60" height="60" objectFit="contain" />
      </div>
      <h2 ref={titleRef}>Released, is your <span className="intro__green">release</span> radar</h2>
      <p ref={textRef}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis purus sed neque fringilla bibendum. Sed sit amet accumsan augue. Duis augue quam, dapibus at tellus vitae, tincidunt semper.</p>
      <div className="intro__image">
        <Image src="/notification.svg" width="270" height="93" objectFit="contain" />
      </div>
      <style jsx>
        {styles}
      </style>
    </div>
  )
}
