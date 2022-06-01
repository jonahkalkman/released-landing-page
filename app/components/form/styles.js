import css from 'styled-jsx/css'

export default css.global`
  .c-form {
    text-align: center;
  }

  .c-form form {
    text-align: center;
  }

  .form__input {
    border-radius: 5px;
    background-color: #363636;
    color: #C4C4C4;
    font-size: 14px;
    margin: 0px 0px 16px 0px;
    border: none;
    padding: 10px 20px;
    font-family: "MontserratRegular";
  }

  .form__button {
    display: block;
    background-color: #48C993;
    color: white;
    font-size: 14px;
    border-radius: 50px;
    padding: 5px 25px;
    border: none;
    font-family: "MontserratSemiBold";
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .form__button--active {
    width: 117px;
    height: 28px;
  }

  .form__checkmark {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    stroke-width: 3;
    stroke: white;
    stroke-miterlimit: 10;
  }
  
  .checkmark__check {
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.5s forwards;
  }
  
  @keyframes stroke {
    100% {
      stroke-dashoffset: 0;
    }
  }

  @media only screen and (min-width: 768px) {
    .c-form form {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 40px;
    }

    .form__input {
      margin: 0;
      margin-right: 40px;
      font-size: 16px;
      padding: 20px 40px;
    }

    .form__button {
      height: fit-content;
      margin: 0;
      font-size: 16px;
      padding: 15px 35px;
    }
  }
`