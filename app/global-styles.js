import { injectGlobal } from 'styled-components'
import Bg from 'assets/world-map.png'
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background: rgb(251, 247, 240) url(${Bg}) no-repeat 50% 50%;
    background-size: cover;
    height: 100%;
    width: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, Helvetica, Arial, sans-serif
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    line-height: 1.4em;
  }
  
  a {
    color: #41addd;
    text-decoration: none;

    &:hover {
      color: #6cc0e5;
      text-decoration: underline;
    }  
  }

  .switch {
      border: 1px solid #ccc;
      width: 50px;
      height: 26px;
      border-radius: 13px;
      cursor: pointer;
      display: inline-block;
      margin-right: 3px;
  }

  .switch-toggle {
      border: 1px solid #999;
      box-shadow: 1px 1px 1px #ccc;
      width: 25px;
      height: 24px;
      left: 0;
      border-radius: 12px;
      background: white;
      position: relative;
      transition: left .2s ease-in-out;
  }

  .switch.on {
      background: black;
  }

  .switch.on .switch-toggle {
      left: 20px;
  }

  .switch.disabled {
      cursor: not-allowed;
  }
`
