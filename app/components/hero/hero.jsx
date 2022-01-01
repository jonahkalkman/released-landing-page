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
      <h1 className="hero__title" ref={titleRef}>
        New <span>Music</span><br></br> Get Notified
      </h1>
      <Form />
      <div className="hero__image" ref={imageRef}> 
        <Image src="/phone.png" width="600" height="800" objectFit="contain" />
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
