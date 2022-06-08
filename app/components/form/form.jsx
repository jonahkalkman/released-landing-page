import React, { useRef, useEffect, useState } from "react";
import globalStyles from './styles.js';
import { gsap } from "gsap";

export default function Form() {
  const formRef = useRef();
  const submitRef = useRef();
  const [submitText, setSubmitText] = useState('Join Beta');
  const [email, setEmail] = useState();
  const [activeSubmit, setActiveSubmit] = useState(false);

  const registerUser = event => {
    event.preventDefault();
    fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email }),
    });

    setActiveSubmit(true);
    setSubmitText('');
    gsap.to(submitRef.current, {
      width: 30,
      height: 30,
      padding: 0,
      backgroundColor: 'transparent',
      border: 'solid 1px white',
      duration: 0.3
    });
  }

  const handleChange = (event) => {
    setEmail({value: event.target.value});
  }

  return (
    <div className='c-form' ref={formRef}>
      <form onSubmit={registerUser}>
        <input onChange={handleChange} className="form__input" id="email" type="text" autoComplete="email" required placeholder="Enter your e-mail..."/>
        <button 
          className={activeSubmit ? 'form__button form__button--active' : 'form__button'} 
          type="submit" 
          ref={submitRef}
        >
          {submitText}
          {activeSubmit && (
            <svg className="form__checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          )}
        </button>
      </form>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
