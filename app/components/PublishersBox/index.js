import React from 'react'
import PropTypes from 'prop-types'

import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

import SpaceWrapper from 'components/SpaceWrapper'
import Label from 'components/Label'
import Avatar from 'react-avatar'
import UlLogos from './components/UlLogos'

const promotedChannels = {
  pl: [
    '221077284662',
    '10153006084534583',
    '174708585894934',
    '185265414715',
    '165562920151505',
    '266358044374',
    '248281271873597',
    '358261633959',
    '370535546308040',
    '255100403945',
    '486740884701509',
    '113356018705476',
    '127185519171',
    '26815555478',
    '122203724699',
    '168523630781',
    '103747361639',
    '77049287117',
    '112169522179421',
    '8358247707',
    '176327189064747',
    '18343191100'
  ],
  en: [
    '5550296508',
    '5281959998',
    '155869377766434',
    '193742123995472',
    '527050847445390',
    '223649167822693',
    '147384458624178',
    '120313354720325',
    '10513336322',
    '6250307292',
    '114803848589834',
    '13312631635',
    '9258148868',
    '61261101338',
    '5863113009',
    '14892757589',
    '110032161104',
    '10606591490',
    '117714667328',
    '179618821150',
    '8585811569'
  ]
}

const Faqs = ({intl}) => {
  return (
    <div>
      <SpaceWrapper header>
        <Label>
          <FormattedMessage {...messages.newsPubIntro} values={{numOrganizations: <strong>78 <FormattedMessage {...messages.wordNewsOrgs} /></strong>, numLangs: <strong>2 <FormattedMessage {...messages.wordLanguages} /></strong>, langs: <FormattedMessage {...messages.listLanguages} />, numCategories: <strong>11 <FormattedMessage {...messages.wordCategories} /></strong>, categories: <FormattedMessage {...messages.listCategories} />}} />
        </Label>
      </SpaceWrapper>
      <SpaceWrapper>
        <UlLogos>
          {promotedChannels[intl.locale].map(channel => <li key={channel}><Avatar facebookId={channel} size={65} /></li>)}
        </UlLogos>
        <div>
          <FormattedMessage {...messages.newsPubMore} /> <a href='https://goo.gl/forms/xptTS15DCAdfQBIy2' target='_blank'><FormattedMessage {...messages.newsPubRegLink} /> &raquo;</a>
        </div>
      </SpaceWrapper>
    </div>
  )
}

Faqs.propTypes = {
  intl: PropTypes.object
}

export default injectIntl(Faqs)
