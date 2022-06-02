import css from 'styled-jsx/css'

export default css.global`
  .c-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    padding: 1rem 0;
  }

  .nav__circle {
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: 2;
    background: #202020;
    height: 30px;
    width: 30px;
    border-radius: 50%;
  }

  .nav__circle-enter {
    transform: scale(0);
  }

  .nav__circle-enter-active {
    transform: scale(90);
    transition-duration: 1s;
  }

  .nav__circle-enter-done {
    transform: scale(90);
  }

  .nav__circle-exit {
    transform: scale(90);
    transition-duration: 1s;
  }

  .nav__circle-exit-active {
    transform: scale(0);
  }

  .c-menu {
    position: absolute;
    right: 0px;
  }

  .c-navigation {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    z-index: 5;
    background-color: #202020;
  }

  .c-navigation-enter {
    opacity: 0;
  }

  .c-navigation-enter-active {
    opacity: 1;
    transition: opacity 1ms;
  }

  .c-navigation-exit {
    opacity: 1;
  }

  .c-navigation-exit-active {
    opacity: 0;
    transition: opacity 1ms;
  }
  
  .navigation__list {
    padding: 0px 46px;
    list-style: none;
    margin-top: 101px;
  }

  .navigation__item {
    oapcity: 1;
    font-size: 25px;
    margin-bottom: 20px;
    transform: translateY(0px);
    transition: all 1s;
  }

  .navigation__item--hidden {
    opacity: 0;
    transform: translateY(-10px);
  }

  .navigation--item-green {
    color: #48C993;
  }

  .navigation__close-icon {
    position: absolute;
    right: 0px;
    padding: 1rem 1rem;
  }

  @media only screen and (min-width: 1024px) {
    .c-nav {
      justify-content: center;
    }
  }
`