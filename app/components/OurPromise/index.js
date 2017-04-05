import React, { PropTypes } from 'react'

import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl'
import messages from './messages'

import SpaceWrapper from 'components/SpaceWrapper'
import { Row, Col } from 'react-grid-system'

const OurPromise = ({intl}) => {
  return (
    <div>
      <SpaceWrapper header>
        <FormattedMessage {...messages.title} />
      </SpaceWrapper>
      <SpaceWrapper>
        <Row>
          <Col lg={12}>
            <FormattedHTMLMessage {...messages.description} />
          </Col>
        </Row>
      </SpaceWrapper>
    </div>
  )
}

OurPromise.propTypes = {
  intl: PropTypes.object
}

export default injectIntl(OurPromise)
