import css from 'styled-jsx/css'

export default css.global`
  .c-hero {
    width: 100%;
    text-align: center;
  }

  .hero__title {
    font-size: 30px;
    font-family: MontserratSemiBold;
    line-height: 36px;
  }

  .hero__title span {
    color: #48C993;
  }

  .hero__image {
    z-index: 2;
  }

  .hero__image img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .hero__right p  {
    display: none;
  }

  @media only screen and (min-width: 1024px) {

    .c-hero {
      display: flex;
      margin-top: 50px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .hero__title {
      margin-bottom: 33px;
      text-align: left;
      font-size: 50px;
      line-height: 56px;
    }

    .hero__right {
      order: 2;
      width: 50%;
      text-align: left;
    }

    .hero__right p  {
      display: inline-block;
      color: lightgray;
    }

    .hero__image {
      order: 1;
      margin-right: 20px;
    }

    .hero__image img {
      height: 600px;
      width: auto;
    }
  }
`