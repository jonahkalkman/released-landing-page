import css from 'styled-jsx/css'

export default css.global`
  .c-footer {
    text-align: center;
    margin: 40px 0px 25px 0px;
  }
  
  .footer__link {
    font-size: 12px;
    font-family: "MontserratRegular";
    margin-right: 25px;
  }

  .footer__link a {
    color: #C4C4C4;
  }

  .c-footer .footer__link:last-child {
    margin-right: 0px;
  }

  .footer__socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    margin: 0px 0px 13px 0px;
  }

  @media only screen and (min-width: 768px) {
    .c-footer {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;
      margin-top: 200px;
    }

    .footer__socials {
      margin: 0;
      order: 2;
    }

    .footer__link {
      color: #C4C4C4;
    }
  }
`