import css from 'styled-jsx/css'

export default css.global`
  .c-slider {
    position: relative;
    width: 100%;
    margin-top 36px;
  }

  .c-slider container {
    padding: 40px;
    background: #419be0;
    text-align: center;
  }

  .slider__item {
    text-align: center;
  }

  .slick-slide img {
    margin: auto;
  }

  .slick-dots {
    position: absolute;
    top: -36px;
    right: 0px;
    width: fit-content;
  }

  .slick-dots li {
    margin: 0px;
    width: 10px;
    height: 10px;
    margin-right: 16px;
  }

  .slick-dots li:last-child {
    margin-right: 0px;
  }

  .slick-dots li button {
    padding: 0px;
    width: 10px;
    height: 10px;
    line-height: 10px;
  }


  .slick-dots li button::before {
    color: #C4C4C4;
    line-height: 10px;
    font-size: 10px;
    width: 10px;
    height: 10px;
  }

  .slick-dots li.slick-active button:before {
    color: #48C993;
  }
`