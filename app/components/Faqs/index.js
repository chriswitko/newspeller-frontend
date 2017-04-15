import React from 'react'
import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import SpaceWrapper from 'components/SpaceWrapper'
import { Row, Col } from 'react-grid-system'

const Faqs = ({intl}) => {
  return (
    <div>
      <SpaceWrapper header>
        <FormattedMessage {...messages.faqs} />:
      </SpaceWrapper>
      <SpaceWrapper>
        <Row>
          <Col lg={12}>
            <ul>
              <li>
                <strong><FormattedMessage {...messages.faqs1q} /></strong>
                <p><FormattedMessage {...messages.faqs1a} /></p>
              </li>
              <li>
                <strong><FormattedMessage {...messages.faqs2q} /></strong>
                <p><FormattedMessage {...messages.faqs2a} /></p>
              </li>
              <li>
                <strong><FormattedMessage {...messages.faqs3q} /></strong>
                <p><FormattedMessage {...messages.faqs3a} values={{linkChris: <a href='https://twitter.com/chris_witko' target='_blank'>Chris Witko</a>, linkWojtek: <a href='mailto:inbox@newspeller.com'>Wojtek Krupa</a>}} /></p>
              </li>
              <li>
                <strong><FormattedMessage {...messages.faqs4q} /></strong>
                <p><FormattedMessage {...messages.faqs4a} /></p>
              </li>
              <li>
                <strong><FormattedMessage {...messages.faqs5q} /></strong>
                <p><FormattedMessage {...messages.faqs5a} /></p>
              </li>
              <li>
                <strong><FormattedMessage {...messages.faqs6q} /></strong>
                <p><FormattedMessage {...messages.faqs6a} values={{numOrganizations: <strong>78 <FormattedMessage {...messages.wordNewsOrgs} /></strong>, numLangs: <strong>2 <FormattedMessage {...messages.wordLanguages} /></strong>, langs: <FormattedMessage {...messages.listLanguages} />, numCategories: <strong>11 <FormattedMessage {...messages.wordCategories} /></strong>, categories: <FormattedMessage {...messages.listCategories} />}} /></p>
              </li>
            </ul>
          </Col>
        </Row>
      </SpaceWrapper>
    </div>
  )
}

Faqs.propTypes = {
  intl: PropTypes.object
}

export default injectIntl(Faqs)
