/*
 * IndexPage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Input from 'components/Input'
import Label from 'components/Label'
import ButtonSubmit from 'components/ButtonSubmit'
import Div from 'components/Div'
import Small from 'components/Small'

import { Page, Row, Column } from 'hedron'
import Box from 'components/Box'
import Area from 'components/Area'
import styled from 'styled-components'

import HeroImg from './assets/stsubscribe.png'

const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Hr = styled.hr`
  border-top: 1px solid #d5d5d5;
  border-left: 0;
  border-right: 0;
  border-bottom: 0;
  margin: 20px 0;
  padding: 0;
`

export default class IndexPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
                    title='Welcome'
                    meta={[
                      { name: 'description', content: 'Feature page of React.js Boilerplate application' }
                    ]}
                  />
                  <Row>
                    <Column lg={6} style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0}}>
                      <img src={HeroImg} width='100%' />
                    </Column>
                    <Column lg={6} style={{paddingLeft: 0, paddingRight: 0, paddingTop: 0}}>
                      <h1 style={{padding: 0, margin: 0, lineHeight: '1.2em'}}>
                        Your daily email with headlines from news outlets you like.
                      </h1>
                      <ul>
                        <li>Select your favourite sources &amp; topics (<a href='#'>see the list</a>)</li>
                        <li>Define what day and what time you wish to receive an email</li>
                        <li>Pause the email when you need to quite down 🌴 a little bit</li>
                      </ul>
                    </Column>
                  </Row>
                  <Row>
                    <Column lg={12} style={{paddingTop: 0, paddingLeft: 0, paddingRight: 0, paddingBottom: 0}}>
                      <Div>
                        <Area>
                          <Div>
                            <Label htmlFor='username'>
                              Enter your email address
                              <br />
                              <Small style={{fontWeight: '400'}}>It's simple. All you need to start receiving your personal email is your email address.</Small>
                            </Label>
                            <Input
                              id='username'
                              type='text'
                              placeholder='eg. myemail@website.com'
                              value=''
                              onChange=''
                              />
                          </Div>
                          <Div>
                            <ButtonSubmit type='submit'>Activate my personal email</ButtonSubmit>
                          </Div>
                          <Ul>
                            <li>
                              <Small>&#10003; We promise not to spam you. You can always modify how often you wish to receive an email.</Small>
                            </li>
                            <li>
                              <Small>&#10003; You can unsubscribe or remove your email address any time.</Small>
                            </li>
                            <li>
                              <Small>&#10003; It's FREE 😀. You don't pay single penny.</Small>
                            </li>
                            <li>
                              <Small>&#10003; By activating your personal email from The Newspeller, you agree with <a href='#'>Terms of Service</a> &amp; <a href=''>Privacy Policy</a>.</Small>
                            </li>
                          </Ul>
                        </Area>
                      </Div>
                    </Column>
                  </Row>
                  <Hr />
                  <Row>
                    <Column lg={12} style={{paddingTop: 0, paddingBottom: 0}}>
                      <Label>
                        We currently deliver news headlines from about 78 sources in 5 languages (English, German, French, Spanish, Polish), including:
                      </Label>
                      <img src='https://www.umass.edu/family/sites/default/files/styles/920x300/public/images/slideshow/logos.jpg?itok=-UMzCKwf' width='100%' style={{display: 'block'}} />
                      <p>
                        The Newspeller makes it easy for news organizations and magazines, to distribute headlines in one email. You’ll get valuable metrics on how readers engage with your content. <a href='#'>Sign up as a News Publisher &raquo;</a>
                      </p>
                    </Column>
                  </Row>
                  <Hr />
                  <Row>
                    <Column lg={12} style={{paddingTop: 0}}>
                      <Label>
                        FAQs:
                      </Label>
                      <ul>
                        <li>
                          <strong>What's Newspeller?</strong>
                          <p>Earlier today I read Dan Abramov’s “React Components, Elements, and Instances” article. As always I loved the article but even more than that, this time, I loved Dan’s focus on using proper vocabulary to describe technical topics. That post gave me the idea for this post. Three ways to describe React components which are often used incorrectly — Stateless Components, Stateless Functional Components, and Functional Components.</p>
                        </li>
                        <li>
                          <strong>Why did we built Newspeller?</strong>
                          <p>Earlier today I read Dan Abramov’s “React Components, Elements, and Instances” article. As always I loved the article but even more than that, this time, I loved Dan’s focus on using proper vocabulary to describe technical topics. That post gave me the idea for this post.</p>
                        </li>
                        <li>
                          <strong>Who's behind the project?</strong>
                          <p>Earlier today I read Dan Abramov’s “React Components, Elements, and Instances” article. As always I loved the article but even more than that, this time, I loved Dan’s focus on using proper vocabulary to describe technical topics. That post gave me the idea for this post.</p>
                        </li>
                        <li>
                          <strong>How can I join The Newspeller as a News Publisher?</strong>
                          <p>Earlier today I read Dan Abramov’s “React Components, Elements, and Instances” article. As always I loved the article but even more than that, this time, I loved Dan’s focus on using proper vocabulary to describe technical topics. That post gave me the idea for this post.</p>
                        </li>
                        <li>
                          <strong>How often I will be receiving an email?</strong>
                          <p>Earlier today I read Dan Abramov’s “React Components, Elements, and Instances” article. As always I loved the article but even more than that, this time, I loved Dan’s focus on using proper vocabulary to describe technical topics. That post gave me the idea for this post.</p>
                        </li>
                        <li>
                          <strong>Do I have to pay for it?</strong>
                          <p>Earlier today I read Dan Abramov’s “React Components, Elements, and Instances” article. As always I loved the article but even more than that, this time, I loved Dan’s focus on using proper vocabulary to describe technical topics. That post gave me the idea for this post.</p>
                        </li>
                        <li>
                          <strong>What sources I can subscribe to?</strong>
                          <p>Earlier today I read Dan Abramov’s “React Components, Elements, and Instances” article. As always I loved the article but even more than that, this time, I loved Dan’s focus on using proper vocabulary to describe technical topics. That post gave me the idea for this post.</p>
                        </li>
                      </ul>
                      <p>
                        <a href='#'>Visit our blog to find more about us &raquo;</a>
                      </p>
                    </Column>
                  </Row>
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
