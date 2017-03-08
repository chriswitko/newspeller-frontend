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
    line-height: 1.5em;
  }
  
  a {
    color: #41addd;

    &:hover {
      color: #6cc0e5;
    }  
  }
`
