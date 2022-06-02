import React from "react";
import styles from './styles.js';

export default function Intro() {

  return (
    <div className='c-intro'>
      <div className="intro__left">
        <div className="intro__logo">
          <img src="/logo-small.svg" width="60" height="60" objectFit="contain"/>
        </div> 
        <h2>Your music <span className="intro__green">release radar</span></h2>
        <p>Never miss new songs or albums by your favorite artists. Simply follow your favorite artists and get notified when new music is out. </p>
        <p>Released is your personal release radar for new music, soon available in the App Store and Google Play Store. Sign up now to become a beta tester and get access on release.</p>
      </div>
      <div className="intro__image">
        <img src="/artist.png" width="140" height="auto" objectFit="contain"/>
      </div>
      <style jsx>
        {styles}
      </style>
    </div>
  )
}
