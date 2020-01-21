import React from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'
import Highlight from 'prism-react-renderer'

import { generateKey } from '../utils'

const HighlightCode = ({ code, language, inline }) => {
  if (inline) {
    return (
      <Highlight code={code} language={language} Prism={Prism}>
        {({ className, style }) => (
          <code className={`${className} prism-code_inline`} style={style}>
            {code}
          </code>
        )}
      </Highlight>
    )
  }

  return (
    <Highlight code={code} language={language} Prism={Prism}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} line-numbers`} style={style}>
          <div className="prism-code_wrapper">
            {tokens.map((line, i) => {
              return (
                !line[0].empty && (
                  <span {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => {
                      return (
                        token.content && (
                          <span {...getTokenProps({ token, key })} />
                        )
                      )
                    })}
                  </span>
                )
              )
            })}
            <span aria-hidden className="line-numbers-rows">
              {tokens.map((line, idx) => {
                return !line[0].empty ? (
                  <span key={generateKey(line[0].content, idx)} />
                ) : null
              })}
            </span>
          </div>
        </pre>
      )}
    </Highlight>
  )
}

HighlightCode.propTypes = {
  language: PropTypes.string,
  code: PropTypes.string.isRequired,
  inline: PropTypes.bool
}

HighlightCode.defaultProps = {
  language: `none`,
  inline: false
}

export default HighlightCode
