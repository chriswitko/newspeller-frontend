import React, { PropTypes } from 'react'

import SpaceWrapper from 'components/SpaceWrapper'
import Avatar from 'react-avatar'
import ButtonSubmit from 'components/ButtonSubmit'
import { Row, Col } from 'react-grid-system'
import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

const printSections = (sections, onAdd, onRemove, intl) => {
  return (
    <div>
      {sections.map(s => {
        return (
          <SpaceWrapper header key={s.code}>
            <Row style={{display: 'flex'}}>
              <Col lg={10} xs={7} style={{display: 'flex', alignItems: 'center'}}>
                <div>{s.sectionName}</div>
              </Col>
              <Col lg={2} xs={5} style={{textAlign: 'right'}}>
                {s.is_subscribed ? <ButtonSubmit minWidth='100%' onClick={() => onRemove(s)} color='#a8a8a8'><FormattedMessage {...messages.btnUnfollow} /></ButtonSubmit> : <ButtonSubmit minWidth='100%' onClick={() => onAdd(s)}><FormattedMessage {...messages.btnFollow} /></ButtonSubmit>}
              </Col>
            </Row>
          </SpaceWrapper>
        )
      })}
    </div>
  )
}

const icon = (item) => {
  let icon = '<div><div>'
  if (item.facebook_id) {
    icon = <Avatar facebookId={item.facebook_id} size={50} />
  } else if (item.twitter_id) {
    icon = <Avatar twitterId={item.twitter_id} size={50} />
  } else {
    // icon = <img width='50' src={item.icon} />
    icon = <Avatar name={item.channelName} size={50} textSizeRatio={1.75} />
  }
  return <div style={{width: '50px', height: '50px', overflow: 'hidden', marginRight: '15px'}}>{icon}</div>
}

function ChannelItem ({ sections, onAdd, onRemove, intl }) {
  return (
    <div>
      {Object.keys(sections).map(s => {
        return (
          <div key={s}>
            <SpaceWrapper bg='#e6e6e6' color='black' header>
              <Row style={{display: 'flex'}}>
                <Col lg={12} xs={12} style={{display: 'flex', alignItems: 'center'}}>
                  {icon(sections[s].channel)}
                  <h3 style={{margin: 0, padding: 0}}>{sections[s].channel.channelName}</h3>
                </Col>
              </Row>
            </SpaceWrapper>
            <div style={{marginBottom: '15px'}}>
              {printSections(sections[s].sections, onAdd, onRemove, intl)}
            </div>
          </div>
        )
      })}
    </div>
  )
}

ChannelItem.propTypes = {
  intl: PropTypes.object,
  sections: PropTypes.object,
  onRemoveDay: PropTypes.func,
  onAddDay: PropTypes.func
}

export default injectIntl(ChannelItem)
