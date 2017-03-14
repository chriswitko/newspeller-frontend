/*
 *
 * FilterLanguage
 *
 */

import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Toggle from './Toggle'
import Wrapper from './Wrapper'
import messages from './messages'
import { changeLocale } from '../LanguageProvider/actions'
import { appLocales } from '../../i18n'
import { makeSelectLocale } from '../LanguageProvider/selectors'

export class FilterLanguage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render () {
    return (
      <Wrapper>
        <Toggle value={this.props.locale} values={appLocales} messages={messages} onToggle={this.props.onLocaleToggle} />
      </Wrapper>
    )
  }
}

FilterLanguage.propTypes = {
  onLocaleToggle: React.PropTypes.func,
  locale: React.PropTypes.string
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale()
})

export function mapDispatchToProps (dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLanguage)
