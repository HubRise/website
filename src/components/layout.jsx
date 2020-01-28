import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Header from './header'
import Footer from './footer'

const Layout = ({ children, ...other }) => (
  <Wrapper>
    <Header {...other} />
    <Main className="content" data-floater-content>
      {children}
    </Main>
    <Footer {...other} />
  </Wrapper>
)

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Main = styled.main`
  flex: 1;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
