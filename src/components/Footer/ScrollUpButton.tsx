import * as React from 'react'

const ScrollUpButton: React.FC = () => (
  <button
    className="footer__scroll-up"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    <i className="fa fa-angle-up" />
  </button>
)

export default ScrollUpButton
