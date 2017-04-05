/*
 * TermsPage
 *
 * List all the features
 */
import React from 'react'
import Helmet from 'react-helmet'

import { Row, Col } from 'react-grid-system'
import H1 from 'components/H1'
import H2 from 'components/H2'
import SpaceWrapper from 'components/SpaceWrapper'

export default class TermsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
                  title='Terms'
                />
                <H1>
                  Terms of Use
                </H1>
                <SpaceWrapper>
                  <H2>1. Terms</H2>
                  <p>By accessing the website and data at https://newspeller.com, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>
                  <H2>2. Use License</H2>
                  <p>
                    Permission is granted to temporarily download one copy of the materials (information or software) on The Newspeller's website. This is the grant of a license, not a transfer of title, and under this license you may not:

                    attempt to decompile or reverse engineer any software contained on The Newspeller's website;
                    remove any copyright or other proprietary notations from the materials; or
                    transfer the materials to another person or "mirror" the materials on any other server.
                    This license shall automatically terminate if you violate any of these restrictions and may be terminated by The Newspeller at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.                  
                  </p>
                  <H2>3. Disclaimer</H2>
                  <p>The materials on The Newspeller's website are provided on an 'as is' basis. The Newspeller makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    Further, The Newspeller does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                  </p>
                  <H2>4. Limitations</H2>
                  <p>In no event shall The Newspeller or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Newspeller's website, even if The Newspeller or a The Newspeller authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
                  <H2>5. Accuracy of materials</H2>
                  <p>The materials appearing on The Newspeller's website could include technical, typographical, or photographic errors. The Newspeller does not warrant that any of the materials on its website are accurate, complete or current. The Newspeller may make changes to the materials contained on its website at any time without notice. However The Newspeller does not make any commitment to update the materials.</p>
                  <H2>6. Links</H2>
                  <p>The Newspeller has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Newspeller of the site. Use of any such linked website is at the user's own risk.</p>
                  <H2>7. Modifications</H2>
                  <p>The Newspeller may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
                  <H2>8. Governing Law</H2>
                  <p>These terms and conditions are governed by and construed in accordance with the laws of United Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </SpaceWrapper>
              </div>
            </article>
          </Col>
        </Row>
      </div>
    )
  }
}
