import React from 'react'

const Layout = ({ children }) => (
  <section className='section'>
    <div
      className={`
        section__in
        section__in_padding
        section__in_reverse
        section__in_developers
      `}
    >
      {children}
    </div>
  </section>
)

export default Layout
