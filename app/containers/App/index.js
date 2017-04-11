/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react'
import Helmet from 'react-helmet'

import Header from 'components/Header'
import Footer from 'components/Footer'
import SpaceWrapper from 'components/SpaceWrapper'

import withProgressBar from 'components/ProgressBar'
import { Container, Row, Col } from 'react-grid-system'

export const App = props => {
  return (
    <div>
      <Helmet
        titleTemplate='The Newspeller - %s'
        defaultTitle='The Newspeller'
        meta={[
          { name: 'description', content: 'The Newspeller is a newsletter, delivered directly to your inbox on-demand. Customize favourites channels and time to your needs.' }
        ]}
      />
      <Container>
        <SpaceWrapper shadow bg='transparent' color='#6B788A'>
          <Row>
            <Col sm={12}>
              <Header />
            </Col>
          </Row>
        </SpaceWrapper>
        <SpaceWrapper bg='#faf785' color='black'>
          We're experiencing an issue w/ network connectivity from our hosting provider @DigitalOcean. Sorry for the incovienince. More on <a href='http://status.digitalocean.com' target='blank'>http://status.digitalocean.com</a>.
        </SpaceWrapper>
        <Row>
          <Col sm={12}>
            {React.Children.toArray(props.children)}
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.node
}

export default withProgressBar(App)
