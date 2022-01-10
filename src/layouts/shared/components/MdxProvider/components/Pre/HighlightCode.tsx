import * as React from "react"
import Prism from "prismjs"
import Highlight, { Language } from "prism-react-renderer"

import { generateKey } from "@utils/misc"

interface HighlightCodeProps {
  code: string
  language?: Language
  inline?: boolean
}

const HighlightCode = ({ code, language = "json", inline = false }: HighlightCodeProps): JSX.Element => {
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
                      return token.content && <span {...getTokenProps({ token, key })} />
                    })}
                  </span>
                )
              )
            })}
            <span aria-hidden className="line-numbers-rows">
              {tokens.map((line, idx) => {
                return !line[0].empty ? <span key={generateKey(line[0].content, idx)} /> : null
              })}
            </span>
          </div>
        </pre>
      )}
    </Highlight>
  )
}

export default HighlightCode
