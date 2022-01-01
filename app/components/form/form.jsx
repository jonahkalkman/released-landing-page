import React, { useRef, useEffect } from "react";
import globalStyles from './styles.js';
import { gsap } from "gsap";

export default function Form() {
  const formRef = useRef();
  const submitRef = useRef();

  const registerUser = event => {
    gsap.to()
    event.preventDefault();
    // where we'll add our form logic
  }

  useEffect(() => {
    const t = gsap.timeline();

    t.from(formRef.current, {  
      opacity: 0,
      y: '40',
      duration: 1
    });
  });

  return (
    <div className='c-form' ref={formRef}>
      <form onSubmit={registerUser}>
        <input className="form__input" id="email" type="text" autoComplete="email" required  placeholder="Enter your e-mail..."/>
        <button className="form__button" type="submit" ref={submitRef}>Join beta</button>
      </form>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
