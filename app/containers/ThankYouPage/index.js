/*
 * ThankYouPage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'
import { FormattedMessage } from 'react-intl'

import H1 from 'components/H1'
import messages from './messages'
import List from './List'
import ListItem from './ListItem'
import ListItemTitle from './ListItemTitle'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'
import Box from 'components/Box'

export default class AboutPage extends React.Component {

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Box fullScreen>
        <Page style={{display: 'flex', flexDirection: 'column'}}>
          <Row>
            <Header />
          </Row>
          <Row style={{flex: 1}}>
            <Column>
              <article>
                <div>
                  <Helmet
                    title='Thank You'
                    meta={[
                      { name: 'description', content: 'Feature page of React.js Boilerplate application' }
                    ]}
                  />
                  <p>
                    Thank you for activating your subscription.
                  </p>
                </div>
              </article>
            </Column>
          </Row>
          <Row alignSelf='flex-start' style={{width: '100%'}}>
            <Footer />
          </Row>
        </Page>
      </Box>
    )
  }
}
