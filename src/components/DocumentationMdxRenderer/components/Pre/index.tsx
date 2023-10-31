"use client"

import type { Language } from "prism-react-renderer"
import { Highlight, Prism, themes } from "prism-react-renderer"
import * as React from "react"

import { StyledHighlight } from "./Styles"

interface PreProps {
  children?: React.ReactNode
}

;(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-json")
require("prismjs/components/prism-ruby")

const Pre = ({ children }: PreProps): JSX.Element | null => {
  if (!children) return null

  // compileMDX converts a code block into a <Pre> element with a child <code> element which contains the code.
  // The class of the <code> element specifies the language, in the format: language-xxx.
  const codeElement = children as React.ReactElement
  const { className } = codeElement.props
  const language = className ? (className.split(`-`)[1] as Language) : "json"
  const code = codeElement.props.children

  return (
    <StyledHighlight>
      <Highlight code={code} language={language} theme={themes.vsLight}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => {
          // remove the trailing tokens that are empty
          const trimmedTokens = tokens.slice(0, tokens.length - 1)
          return (
            <pre className={`${className} line-numbers`} style={style}>
              <div className="prism-code_wrapper">
                {trimmedTokens.map((line, i) => (
                  <span key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => token.content && <span key={key} {...getTokenProps({ token })} />)}
                  </span>
                ))}
                <span aria-hidden className="line-numbers-rows">
                  {trimmedTokens.map((line, idx) => (
                    <span key={idx} />
                  ))}
                </span>
              </div>
            </pre>
          )
        }}
      </Highlight>
    </StyledHighlight>
  )
}

export default Pre
