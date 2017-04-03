import { injectGlobal } from 'styled-components'
/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: #F5F7FA;
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
    color: #6B788A;
    text-decoration: none;

    &:hover {
      color: #6B788A;
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
