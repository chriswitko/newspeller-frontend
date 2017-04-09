import React, { PropTypes } from 'react'

import SpaceWrapper from 'components/SpaceWrapper'
import Avatar from 'react-avatar'
import ButtonSubmit from 'components/ButtonSubmit'
import { Row, Col, Visible } from 'react-grid-system'
import { FormattedMessage, injectIntl } from 'react-intl'
import messages from './messages'

const icon = (item) => {
  let icon = '<div><div>'
  if (item.facebook_id) {
    icon = <Avatar facebookId={item.facebook_id} size={50} />
  } else if (item.twitter_id) {
    icon = <Avatar twitterId={item.twitter_id} size={50} />
  } else if (item.icon) {
    icon = <img width='50' src={item.icon} />
  } else {
    icon = <Avatar name={item.channelName} size={50} textSizeRatio={1.75} />
  }
  return <div style={{width: '50px', height: '50px', overflow: 'hidden', marginRight: '15px'}}>{icon}</div>
}

const ChannelItem = ({ sections, onAdd, onRemove, intl }) => {
  return (
    <div>
      {sections.map(s => {
        return (
          <div key={s.code}>
            <SpaceWrapper bg='#e6e6e6' color='black' header>
              <Row style={{display: 'flex'}}>
                <Col lg={9} xs={9}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          {icon(s)}
                        </td>
                        <td>
                          <a href={s.url} target='_blank'><h3 style={{margin: 0, padding: 0, fontSize: '1em', lineHeight: '1em'}}>{s.channelName}</h3></a>
                          <div style={{fontWeight: 400}}><small>{s.language} &middot; {intl.formatMessage(messages['category_' + s.sectionCategory])}</small></div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
                <Col lg={3} xs={3} style={{textAlign: 'right', display: 'flex', alignItems: 'center'}}>
                  <Visible xl lg md sm>
                    {s.is_subscribed ? <ButtonSubmit minWidth='100%' style={{width: '100%'}} onClick={() => onRemove(s)} color='#a8a8a8'><FormattedMessage {...messages.btnUnfollow} /></ButtonSubmit> : <ButtonSubmit style={{width: '100%'}} minWidth='100%' onClick={() => onAdd(s)}><FormattedMessage {...messages.btnFollow} /></ButtonSubmit>}
                  </Visible>
                  <Visible xs>
                    {s.is_subscribed ? <ButtonSubmit minWidth='20px' style={{width: '100%'}} onClick={() => onRemove(s)} color='#a8a8a8'>&minus;</ButtonSubmit> : <ButtonSubmit style={{width: '100%'}} minWidth='20px' onClick={() => onAdd(s)}>&#43;</ButtonSubmit>}
                  </Visible>
                </Col>
              </Row>
            </SpaceWrapper>
          </div>
        )
      })}
    </div>
  )
}

ChannelItem.propTypes = {
  intl: PropTypes.object,
  sections: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  onRemoveDay: PropTypes.func,
  onAddDay: PropTypes.func
}

export default injectIntl(ChannelItem)
