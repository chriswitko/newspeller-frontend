/*
 * UnsubscribePage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'

import { Row, Col } from 'react-grid-system'
import SpaceWrapper from 'components/SpaceWrapper'

export default class UnsubscribePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <div>
        <Row>
          <Col>
            <article>
              <SpaceWrapper>
                <Helmet
                  title='Unsubscribe'
                />
                Unsubscribe successful
              </SpaceWrapper>
            </article>
          </Col>
        </Row>
      </div>
    )
  }
}
