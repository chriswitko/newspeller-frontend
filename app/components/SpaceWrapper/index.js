import styled from 'styled-components'

const color = (color = '') => {
  if (color) {
    return `
      color: ${color};

      a {
        color: ${color};

        &:hover {
          color: ${color};
        }
      }
    `
  }
}

const border = (color = '') => {
  if (color) {
    return `
      border: 1px solid ${color};
    `
  }
}

const header = (header) => {
  if (header) {
    return `
      text-width: 600;
      margin-bottom: 0px;
      border-bottom: 1px solid #d5d5d5;
      font-weight: bold;
    `
  }
}

const strong = (strong) => {
  if (strong) {
    return `
      font-weight: 600;
    `
  }
}

const shadow = (shadow) => {
  if (shadow) {
    return `
      box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
      
      &:hover {
        box-shadow: 0 1px 2px rgba(43, 59, 93, .29), 0 0 13px rgba(43, 59, 93, .29)
      }
    `
  }
}

const background = (bg = '#ffffff', color = '') => {
  if (bg === 'transparent') {
    return `
      background-color: transparent;
      padding: 15px 0 15px 0;
      margin-bottom: 15px;
    `
  } else if (bg === 'white' || bg === '#fff' || bg === '#ffffff') {
    return `
      background: ${bg};
      padding: 15px;
      margin-bottom: 15px;
    `
  } else {
    return `
      background: ${bg};
      padding: 15px;
      margin-bottom: 15px;
    `
  }
}

const dynamic = (dynamic, bg = '#f8f8f8', color = '') => {
  if (dynamic) {
    return `
      cursor: pointer;

      &:hover {
        background: ${bg};
        color: ${color};

        span.arrow {
          display: inline-block;
        }
      }
    `
  }
}

const active = (active) => {
  if (active) {
    return `
      span.arrow {
        display: inline-block;
      }
    `
  } else {
    return `
      span.arrow {
        display: none;
      }
    `
  }
}

const SpaceWrapper = styled.div`
  ${props => background(props.bg, props.color)}
  ${props => header(props.header)}
  ${props => strong(props.strong)}
  ${props => border(props.border)}
  ${props => color(props.color || props.bg || props.border)}
  ${props => shadow(props.shadow)}
  ${props => dynamic(props.dynamic)}
  ${props => active(props.active)}
  display: table;
  width: 100%;

  span.arrow {
    float: right;
  }
`

export default SpaceWrapper
