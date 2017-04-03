import React, { PropTypes } from 'react'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import SpaceWrapper from 'components/SpaceWrapper'
import Label from 'components/Label'
import Div from 'components/Div'
import Ul from 'components/Ul'
import Small from 'components/Small'
import { Row, Col } from 'react-grid-system'

const OurPromise = ({intl}) => {
  return (
    <div>
      <SpaceWrapper header>
        <Label>
          <FormattedMessage {...messages.title} />:
        </Label>
      </SpaceWrapper>
      <SpaceWrapper>
        <Row>
          <Col lg={12}>
            <Div>
              <Ul>
                <li>
                  <Small>&#10003; <FormattedMessage {...messages.regFormPromise1} /></Small>
                </li>
                <li>
                  <Small>&#10003; <FormattedMessage {...messages.regFormPromise2} /></Small>
                </li>
                <li>
                  <Small>&#10003; <FormattedMessage {...messages.regFormPromise3} /></Small>
                </li>
              </Ul>
            </Div>
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
