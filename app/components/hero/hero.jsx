import React, { useRef, useEffect }  from "react";
import Image from 'next/image';
import { gsap } from "gsap";
import globalStyles from './styles.js';

import Form from "../form/form.jsx";

export default function Hero() {
  const titleRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const t = gsap.timeline();

    t.from(titleRef.current, {  
      opacity: 0,
      y: '40',
      duration: 1
    });

    t.from(imageRef.current, {  
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div className='c-hero'>
      <div className="hero__right">
        <h1 className="hero__title" ref={titleRef}>
          Get notified when new music is out
        </h1>
        <p>Sign up now to become an early member:</p>
        <Form />
      </div>
      <div className="hero__image" ref={imageRef}> 
        <img src="/homescreen.png" width="600" height="800"/>
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
