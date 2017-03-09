/*
 * UnsubscribePage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'

import H1 from 'components/H1'
import Wrapper from 'components/Wrapper'
import Ul from './Ul'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Page, Row, Column } from 'hedron'
import Box from 'components/Box'

export default class UnsubscribePage extends React.Component {
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
                    title='Unsubscribe'
                    meta={[
                      { name: 'description', content: 'Feature page of React.js Boilerplate application' }
                    ]}
                  />
                  <H1>
                    Unsubscribe successful
                  </H1>
                  <Wrapper>
                    <div>
                      You have been removed from the Newspeller email.
                    </div>
                    <br />
                    <div>
                      <strong>If you have a moment, please let us know why you unsubscribed:</strong>
                    </div>
                    <div>
                      <Ul>
                        <li><input type='radio' /> I no longer want to receive these emails</li>
                        <li><input type='radio' /> I never signed up for this email</li>
                        <li><input type='radio' /> These emails are inappropriate</li>
                        <li><input type='radio' /> These emails are spam and should be reported</li>
                        <li><input type='radio' /> I don't like ads within email</li>
                      </Ul>
                    </div>
                  </Wrapper>
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
