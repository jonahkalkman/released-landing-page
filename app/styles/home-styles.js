import css from 'styled-jsx/css'

export default css.global`
  .container {
    padding: 0 1rem;
  }

  @media only screen and (min-width: 1024px) {
    .container {
      padding: 0 15rem;
    }
  }

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .circle {
    position: absolute;
    background: linear-gradient(180deg, rgba(72, 201, 147, 0.7) 0%, rgba(72, 201, 147, 0) 100%);
    left: -40px;
    border-radius: 50%;
    width: 140px;
    height: 140px;
    z-index: 1;
  } 

  .footer {
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
  }

  .footer a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }

  .title a {
    color: #0070f3;
    text-decoration: none;
  }

  .title a:hover,
  .title a:focus,
  .title a:active {
    text-decoration: underline;
  }

  .title {
    margin: 0;
    line-height: 1.15;
  }

  .title,
  .description {
    text-align: center;
  }

  .description {
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
  }

  .code {
    background: #fafafa;
    border-radius: 5px;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
      Bitstream Vera Sans Mono, Courier New, monospace;
  }

  .grid {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
  }

  .card {
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
  }

  .card:hover,
  .card:focus,
  .card:active {
    color: #0070f3;
    border-color: #0070f3;
  }

  .card h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }

  .card p {
    margin: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }

  .logo {
    height: 1em;
    margin-left: 0.5rem;
  }

  .c-paralaxx-circle {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(180deg, rgba(72, 201, 147, 0.7) 0%, rgba(72, 201, 147, 0) 100%);
  }

  .paralaxx-circle--first {

    left: -100px;
    width: 350px;
    height: 350px;
    z-index: 0;
  }

  .paralaxx-circle--third {
    position: absolute;
    right: -100px;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    background: linear-gradient(180deg, rgba(72, 201, 147, 0.7) 0%, rgba(72, 201, 147, 0) 100%);
    transform: rotate(-25.84deg);
  }

  @media (max-width: 600px) {
    .grid {
      width: 100%;
      flex-direction: column;
    }
  }

  @media (min-width: 1024px) {
    .container {
      padding: 0 5rem;
    }

    .paralaxx-circle--first {
      width: 600px;
      height: 600px;
    }

    .paralaxx-circle--second {
      width: 400px;
      height: 400px;
    }

    .paralaxx-circle--third {
      width: 600px;
      height: 600px;
    }
  }
`