/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import withProgressBar from 'components/ProgressBar'

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  flex-direction: column;
`

export function App (props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate='The Newspeller - %s'
        defaultTitle='The Newspeller'
        meta={[
          { name: 'description', content: 'The Newspeller is a newsletter, delivered directly to your inbox on-demand. Customize favourites channels and time to your needs.' }
        ]}
      />
      {React.Children.toArray(props.children)}
    </AppWrapper>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

export default withProgressBar(App)
