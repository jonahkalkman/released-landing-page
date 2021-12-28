import React from "react";
import Image from 'next/image';
import styles from './styles.js'
import Slider from "react-slick";


export default function SliderComp() {
  var settings = {
    dots: true,
    arrows: false
  };
  return (
    <div className="c-slider">
      <Slider {...settings}>
        <div className="slider__item">
          <Image src="/image-slider.png" width="189" height="331" objectFit="contain" />
          <h3>Automatic playlists</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis purus sed neque fringilla bibendum.</p>
        </div>
        <div className="slider__item">
          <Image src="/image-slider.png" width="189" height="331" objectFit="contain" />
          <h3>Automatic playlists</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis purus sed neque fringilla bibendum.</p>
        </div>
        <div className="slider__item">
          <Image src="/image-slider.png" width="189" height="331" objectFit="contain" />
          <h3>Automatic playlists</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis purus sed neque fringilla bibendum.</p>
        </div>
      </Slider>
      <style jsx>
        {styles}
      </style>
    </div>
  )
};
