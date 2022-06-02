import React, { useRef }  from "react";
import globalStyles from './styles.js';
import Form from "../form/form.jsx";

export default function Hero() {
  return (
    <div className='c-hero'>
      <div className="hero__right">
        <h1 className="hero__title">
          Get notified when new <span className="green">music</span> is released
        </h1>
        <p>Sign up now to become an early member:</p>
        <Form />
      </div>
      <div className="hero__image"> 
        <img src="/homescreen.png" width="600" height="800"/>
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
