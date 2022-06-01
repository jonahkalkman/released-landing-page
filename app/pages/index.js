import React, { useRef, useEffect }  from "react";
import Head from 'next/head'
import styles from '../styles/home-styles'
import { gsap } from "gsap";

import Nav from '../components/nav'
import Hero from '../components/hero'
import Intro from '../components/intro'
import SliderComp from '../components/slider'
import { Parallax } from 'react-parallax';
import Footer from "../components/footer";

export default function Home() {
  const firstCircle = useRef();
  const secondCircle = useRef();

  useEffect(() => {
    const t = gsap.timeline();

    t.from([firstCircle.current, secondCircle.current], {  
      opacity: 0,
      delay: 1,
      y: 30,
      duration: 2,
    });
  });

  return (
    <Parallax
        renderLayer={percentage => (
          <div>
            <div
              className="c-paralaxx-circle paralaxx-circle--first circle"
              ref={firstCircle}
              style={{
                top: 300 * percentage,
              }}
            />
            <div 
              className="c-paralaxx-circle paralaxx-circle--third"
              style={{
                top: 1000 * percentage,
              }}
            />
        </div>
        )}
    >
      <div  className="container">
        <Head>
          <title>Released | Music release radar</title>
          <meta name="description" content="A release radar platform for new music" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>

        <main className="main">
          <Nav />
          <Hero />
          <Intro />
          <SliderComp />
        </main>
        
        <Footer />
      </div>
      <style jsx global>
        {styles}
      </style>
    </Parallax>
  )
}
