import React, { useRef, useEffect }  from "react";
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { gsap } from "gsap";


import Nav from '../components/nav'
import Hero from '../components/hero'
import Intro from '../components/intro'
import SliderComp from '../components/slider'
import { Parallax } from 'react-parallax';


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
        bgImage="/path/to/another/image"
        renderLayer={percentage => (
          <div>
            <div
              ref={firstCircle}
              style={{
                position: "absolute",
                background: 'linear-gradient(180deg, rgba(72, 201, 147, 0.7) 0%, rgba(72, 201, 147, 0) 100%)',
                left: '-40px',
                top: percentage * 200,
                borderRadius: "50%",
                width: 140,
                height: 140,
                zIndex: 1
              }}
            />
            <div 
              ref={secondCircle}
              style={{
                position: 'absolute',
                right: '-40px',
                top: 850 - (percentage * 400),
                borderRadius: "50%",
                width: 185,
                height: 185,
                background: 'linear-gradient(180deg, rgba(72, 201, 147, 0.7) 0%, rgba(72, 201, 147, 0) 100%)',
                transform: 'rotate(73.92deg)'
              }}
            />
            <div style={{
              position: 'absolute',
              left: '-40px',
              top: 700 * percentage,
              borderRadius: "50%",
              width: 140,
              height: 140,
              background: 'linear-gradient(180deg, rgba(72, 201, 147, 0.7) 0%, rgba(72, 201, 147, 0) 100%)',
              transform: 'rotate(-25.84deg)'
            }}/>
        </div>
        )}
    >
      <div className={styles.container}>
        <Head>
          <title>Released | New Music, Get Notified</title>
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

        <main className={styles.main}>
          <Nav />
          <Hero />
          <Intro />
          <SliderComp />
        </main>

        <footer className={styles.footer}>
          <Link
            href="\terms"
          >
            Terms and conditions
          </Link>
        </footer>
      </div>
    </Parallax>
  )
}
