import styled, { css } from "styled-components"

import { colors, fontSizes } from "@utils/styles"

// Changes to the default Prism theme
const themeCss = css`
  .prism-code {
    overflow: auto;
    padding: 1.25rem 1.25rem;
    margin: 1.5rem auto;
    border-top: thin solid ${colors.textMedium};
    border-bottom: thin solid ${colors.textMedium};

    .prism-code_wrapper {
      position: relative;
      font-size: ${fontSizes._14};
      padding-left: 0.75rem;
    }

    .token-line {
      display: block;
    }
  }
`

// Copied from original Prism's line-numbers plugin.
// prism-react-renderer uses its own trimmed down version, which does not include any plugins. We need to add it back.
const lineNumberCss = css`
  pre[class*="language-"].line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }

  pre[class*="language-"].line-numbers > code {
    position: relative;
    white-space: inherit;
  }

  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em; /* works for line-numbers below 1000 lines */
    letter-spacing: -1px;
    border-right: 1px solid #999;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .line-numbers-rows > span {
    display: block;
    counter-increment: linenumber;
  }

  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #999;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
`

export const StyledHighlight = styled.div`
  ${themeCss};
  ${lineNumberCss};
`
