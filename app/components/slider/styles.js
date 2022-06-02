import css from 'styled-jsx/css'

export default css.global`
  .c-slider {
    position: relative;
    width: 100%;
    margin-top 36px;
  }

  .slider__title {
    margin-bottom: 60px;
    text-align: center;
  }

  .c-slider container {
    padding: 40px;
    background: #419be0;
    text-align: center;
  }

  .slider__item {
    text-align: center;
  }

  .slider__item p {
    width: 70%;
    margin: 0 auto;
    margin-top: 10px;
  }

  .slick-slide img {
    margin: auto;
    width: 300px;
    height: 100%;
    object-fit: contain;
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

  @media only screen and (min-width: 1024px) {
    .c-slider {
      margin-top: 111px;
    }

    .slider__title {
      text-align: center;
    }

    .slick-track {
      display: flex;
      gap: 40px;
    }
  }
`