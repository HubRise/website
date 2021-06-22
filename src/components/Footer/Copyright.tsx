import * as React from 'react'

import logo from '@images/logo_footer.png'
import Link from '@components/Link'

const Copyright: React.FC = () => (
  <div className="footer__copyright-wrapper">
    <div className="footer__copyright footer-copyright">
      <div className="footer-copyright__company">
        &copy; {new Date(Date.now()).getFullYear()} HubRise
      </div>
      <div className="footer-copyright__logo">
        <img src={logo} alt="HubRise" />
      </div>
      <div className="footer-copyright__contact">
        <Link
          className="footer-copyright__contact__email"
          to="mailto:contact@hubrise.com"
        >
          contact@hubrise.com
        </Link>
        <Link
          className="footer-copyright__contact__linkedin"
          to="https://www.linkedin.com/company/hubrise"
        >
          <i className="fa fa-linkedin-square" />
        </Link>
        <Link
          className="footer-copyright__contact__twitter"
          to="https://twitter.com/HubRiseHQ"
        >
          <i className="fa fa-twitter-square" />
        </Link>
      </div>
    </div>
  </div>
)

export default Copyright
