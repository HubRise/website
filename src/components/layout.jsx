import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, ...other }) => (
  <>
    <Header {...other} />
    <main className="content" data-floater-content>
      {children}
    </main>
    <Footer {...other} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
