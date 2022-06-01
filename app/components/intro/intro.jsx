import React, { useRef, useEffect }  from "react";
import styles from './styles.js';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Intro() {
  gsap.registerPlugin(ScrollTrigger);
  const logoRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

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

    gsap.from(imageRef.current, {
      opacity: 0,
      y: '20',
      duration: 1.5,
      scrollTrigger: {
        trigger: imageRef.current,   
      }
    });
  }); 

  return (
    <div className='c-intro'>
      <div className="intro__left">
        <div className="intro__logo" ref={logoRef}>
          <img src="/logo-small.svg" width="60" height="60" objectFit="contain"/>
        </div> 
        <h2 ref={titleRef}>Your music <span className="intro__green">release radar</span></h2>
        <p ref={textRef}>Never miss new songs or albums by your favorite artists. Simply follow your favorite artists and get notified when new music is out. </p>
        <p>Released is your personal release radar for new music, soon available in the App Store and Google Play Store. Sign up now to become a beta tester and get access on release.</p>
      </div>
      <div className="intro__image" ref={imageRef}>
        <img src="/artist.png" width="140" height="auto" objectFit="contain"/>
      </div>
      <style jsx>
        {styles}
      </style>
    </div>
  )
}
