import React, { useState } from "react";
import globalStyles from './styles.js';

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <div className='c-hamburger' onClick={() => {setOpen(!open)}}>
      <div className={open ? 'hamburger__icon open' : 'hamburger__icon'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
