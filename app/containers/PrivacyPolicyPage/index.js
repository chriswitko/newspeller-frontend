/*
 * PrivacyPolicyPage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'

import { Row, Col } from 'react-grid-system'
import H1 from 'components/H1'
import H2 from 'components/H2'
import SpaceWrapper from 'components/SpaceWrapper'

export default class PrivacyPolicyPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
              <div>
                <Helmet
                  title='Privacy Policy'
                />
                <H1>
                  Privacy Policy
                </H1>
                <SpaceWrapper>
                  <H2>Data Controller and Owner</H2>
                  <p>SUBURB STUDIO, 90 Western Avenue, UK, VAT: GB 223959880</p>
                  <H2>Types of Data collected</H2>
                  <p>
                    Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookies and Usage Data.

                    Other Personal Data collected may be described in other sections of this privacy policy or by dedicated explanation text contextually with the Data collection.

                    The Personal Data may be freely provided by the User, or collected automatically when using this Application.

                    Any use of Cookies - or of other tracking tools - by this Application or by the owners of third party services used by this Application, unless stated otherwise, serves to identify Users and remember their preferences, for the sole purpose of providing the service required by the User.

                    Failure to provide certain Personal Data may make it impossible for this Application to provide its services.

                    Users are responsible for any Personal Data of third parties obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner.
                  </p>
                  <H2>Methods of processing</H2>
                  <p>
                    The Data Controller processes the Data of Users in a proper manner and shall take appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.

                    The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Data Controller, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of the site (administration, sales, marketing, legal, system administration) or external parties (such as third party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Data Controller at any time.
                  </p>
                  <H2>Place</H2>
                  <p>The Data is processed at the Data Controller's operating offices and in any other places where the parties involved with the processing are located. For further information, please contact the Data Controller.</p>
                  <H2>Retention time</H2>
                  <p>The Data is kept for the time necessary to provide the service requested by the User, or stated by the purposes outlined in this document, and the User can always request that the Data Controller suspend or remove the data.</p>
                  <H2>The use of the collected Data</H2>
                  <p>
                    The Data concerning the User is collected to allow the Owner to provide its services, as well as for the following purposes: Analytics.

                    The Personal Data used for each purpose is outlined in the specific sections of this document.
                  </p>
                  <H2>Detailed information on the processing of Personal Data</H2>
                  <p>
                    The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.

                    Google Analytics is a web analysis service provided by Google Inc. (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services.

                    Google may use the Data collected to contextualize and personalize the ads of its own advertising network.

                    Personal Data collected: Cookies and Usage Data.

                    Place of processing: US – <a href='https://www.google.com/intl/en/policies/privacy/' target='_blank'>Privacy Policy</a> – <a href='https://tools.google.com/dlpage/gaoptout?hl=en' target='_blank'>Opt Out</a>
                  </p>
                  <H2>Legal action</H2>
                  <p>
                    The User's Personal Data may be used for legal purposes by the Data Controller, in Court or in the stages leading to possible legal action arising from improper use of this Application or the related services.

                    The User declares to be aware that the Data Controller may be required to reveal personal data upon request of public authorities.
                  </p>
                  <H2>Additional information about User's Personal Data</H2>
                  <p>In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular services or the collection and processing of Personal Data upon request.</p>
                  <H2>System logs and maintenance</H2>
                  <p>For operation and maintenance purposes, this Application and any third party services may collect files that record interaction with this Application (System logs) or use for this purpose other Personal Data (such as IP Address).</p>
                  <H2>Information not contained in this policy</H2>
                  <p>More details concerning the collection or processing of Personal Data may be requested from the Data Controller at any time. Please see the contact information at the beginning of this document.</p>
                  <H2>The rights of Users</H2>
                  <p>
                    Users have the right, at any time, to know whether their Personal Data has been stored and can consult the Data Controller to learn about their contents and origin, to verify their accuracy or to ask for them to be supplemented, cancelled, updated or corrected, or for their transformation into anonymous format or to block any data held in violation of the law, as well as to oppose their treatment for any and all legitimate reasons. Requests should be sent to the Data Controller at the contact information set out above.

                    This Application does not support “Do Not Track” requests.

                    To determine whether any of the third party services it uses honor the “Do Not Track” requests, please read their privacy policies.
                  </p>
                  <H2>Changes to this privacy policy</H2>
                  <p>The Data Controller reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. If a User objects to any of the changes to the Policy, the User must cease using this Application and can request that the Data Controller remove the Personal Data. Unless stated otherwise, the then-current privacy policy applies to all Personal Data the Data Controller has about Users.</p>
                  <H2>Personal Data (or Data)</H2>
                  <p>Any information regarding a natural person, a legal person, an institution or an association, which is, or can be, identified, even indirectly, by reference to any other information, including a personal identification number.</p>
                  <H2>Usage Data</H2>
                  <p>Information collected automatically from this Application (or third party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment.</p>
                  <H2>User</H2>
                  <p>The individual using this Application, which must coincide with or be authorized by the Data Subject, to whom the Personal Data refers.</p>
                  <H2>Data Subject</H2>
                  <p>The legal or natural person to whom the Personal Data refers.</p>
                  <H2>Data Processor (or Data Supervisor)</H2>
                  <p>The natural person, legal person, public administration or any other body, association or organization authorized by the Data Controller to process the Personal Data in compliance with this privacy policy.</p>
                  <H2>Data Controller (or Owner)</H2>
                  <p>The natural person, legal person, public administration or any other body, association or organization with the right, also jointly with another Data Controller, to make decisions regarding the purposes, and the methods of processing of Personal Data and the means used, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application.</p>
                  <H2>This Application</H2>
                  <p>The hardware or software tool by which the Personal Data of the User is collected.</p>
                  <H2>Cookies</H2>
                  <p>Small piece of data stored in the User's device.</p>
                  <H2>Legal information</H2>
                  <p>
                    Notice to European Users: this privacy statement has been prepared in fulfillment of the obligations under Art. 10 of EC Directive n. 95/46/EC, and under the provisions of Directive 2002/58/EC, as revised by Directive 2009/136/EC, on the subject of Cookies.

                    This privacy policy relates solely to this Application.
                  </p>
                </SpaceWrapper>
              </div>
            </article>
          </Col>
        </Row>
      </div>
    )
  }
}
