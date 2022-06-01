import React from "react";
import styles from './styles.js'
import Slider from "react-slick";

export default function SliderComp() {
  var settings = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="c-slider" id="features">
      <h2 className="slider__title">Always listen to <span className="green">new</span> music</h2>
      <Slider {...settings}>
        <div className="slider__item">
          <img src="/notification.png" width="189" height="331" objectFit="contain"/>
          <div className="item__left">
            <h3>Get instantly <span className="green">notified</span></h3>
            <p>You get notified when a new song or album is out on Spotify or YouTube.</p>
          </div>
        </div>
        <div className="slider__item">
          <img src="/image-slider.png" width="189" height="331" objectFit="contain"/>
          <div className="item__left">
            <h3>Follow favorite <span className="green">artists</span></h3>
            <p>You can follow your favorite artists to get notified when new music is out.</p>
          </div>
        </div>
        <div className="slider__item">
          <img src="/homescreen.png" width="189" height="331" objectFit="contain"/>
          <div className="item__left">
            <h3>All in <span className="green">one glance</span></h3>
            <p>See all your new music in one overview and directly start listening on Spotify or YouTube.</p>
          </div>
        </div>
      </Slider>
      <style jsx>
        {styles}
      </style>
    </div>
  )
};
