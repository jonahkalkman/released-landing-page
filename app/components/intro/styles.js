import css from 'styled-jsx/css'

export default css.global`
  .c-intro {
    margin: 111px 0px 0px 0px;
    text-align: center;
  }

  .intro__green {
    color: #48C993;
  }

  .intro__image img {
    margin: 30px 0px 83px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media only screen and (min-width: 768px) {
    .c-intro {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: left;
      flex: 1;
    }

    .intro__logo {
      display: none;
    }

    .intro__image img {
      width: 250px;
      flex: 1;
      margin: 0;
    }

    .intro__left {
      width: 50%;
      margin-right: 200px;
    }

    .intro__left p {
      width: 80%;
    }
  }
`