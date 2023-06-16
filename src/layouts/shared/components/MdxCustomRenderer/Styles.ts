import styled, { css } from "styled-components"

import { colors, fontSizes, lineHeights, mixin } from "@utils/styles"

const commonTitleStyles = css`
  color: ${colors.textDarkest};
  line-height: ${lineHeights.title};
  :first-child {
    margin-top: 0;
  }
`

const paragraphSpacing = "1rem"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;

  h1 {
    ${commonTitleStyles};
    font-weight: bold;
    font-size: ${fontSizes._32};
    position: relative;
    margin-bottom: 2.5rem;

    @media screen and (min-width: 415px) {
      font-size: ${fontSizes._42};
    }

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: inherit;
      top: 100%;
      margin: 10px auto;
      width: 15%;
      height: 3px;
      background: ${colors.primary};
    }
  }

  h2 {
    ${commonTitleStyles};
    position: relative;
    font-size: ${fontSizes._24};
    font-weight: bold;
    margin: 2.5rem 0 2.5rem 0;

    :after {
      content: "";
      position: absolute;
      left: 0;
      right: inherit;
      top: 100%;
      margin: 10px auto;
      width: 10%;
      height: 3px;
      background: #ececec;
    }
  }

  h3 {
    ${commonTitleStyles};
    font-weight: 600;
    text-transform: uppercase;
    margin: 2.5rem 0 ${paragraphSpacing} 0;
  }

  h4 {
    ${commonTitleStyles};
    font-weight: 500;
    margin: 1.5rem 0 ${paragraphSpacing} 0;
  }

  h5 {
    ${commonTitleStyles};
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: ${paragraphSpacing};
  }

  p + ul,
  p + table,
  p + .prism-code {
    margin-top: calc(0.5rem - ${paragraphSpacing});
  }

  h5 + ul,
  h5 + table,
  h5 + .prism-code {
    margin-top: 0.5rem;
  }

  p a,
  li a,
  td a {
    color: ${colors.primary};
    ${mixin.linkOver(colors.textDarkest)};
  }

  ul,
  ol {
    display: block;
    margin-bottom: 1rem;
    overflow: auto;
  }

  ol {
    margin-left: 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.2rem;
  }

  ul li {
    display: inline-block;
    width: 100%;
    position: relative;
    padding-left: 1rem;

    &:before {
      content: "";
      width: 4px;
      height: 4px;
      background: ${colors.textDark};
      border-radius: 50%;
      left: 0;
      position: absolute;
      top: 0.7rem;
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid #cacaca;
    margin: ${paragraphSpacing} 0;
  }

  details {
    ${mixin.clickable};
  }

  code {
    display: inline;
    font-family: Consolas, Liberation Mono, Courier, monospace;
    word-wrap: break-word;
    max-width: 100%;
    padding: 0.125rem 0.3125rem 0.0625rem;
    background-color: #e6e6e6;
    border: 1px solid #cacaca;
    color: ${colors.textDarkest};
  }

  blockquote {
    margin: 0 0 2rem;
    padding: 0.25rem 0 0.25rem 1.25rem;
    border-left: 3px solid #ececec;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      margin: 0;
      font-style: italic;
    }
  }

  /* -----------
      Code
     ----------- */
  // Coming from a plugin {{{
  .prism-code {
    overflow: auto;
    padding: 2.5rem 1.25rem;
    margin: 1.5rem auto;
    background-color: #fbfbfb;
    border-top: thin solid ${colors.textMedium};
    border-bottom: thin solid ${colors.textMedium};
    font-family: Consolas, "Liberation Mono", Courier, monospace;
    font-weight: normal;

    .prism-code_wrapper {
      position: relative;
      white-space: inherit;
      font-size: ${fontSizes._14};
    }

    .token-line {
      display: block;
      border: none;
      padding: 0;
      font-family: Consolas, "Liberation Mono", Courier, monospace !important;
      color: ${colors.textDarkest};

      span:last-child {
        margin-right: 1.25rem;
      }

      .token.string {
        color: #b2564f;
      }
    }
  }

  .prism-code.prism-code_inline {
    padding: 0 2px;
    margin: 0 2px;
    border: thin solid #dddddd;
    background-color: #eeeeee;
    color: #333333;
  }
  // }}}

  figure {
    width: 100%;
    background: #fbfbfb;
    display: inline-block;
    padding: 1rem;
    margin-bottom: 1rem;
    border-top: thin solid #cacaca;
    border-bottom: thin solid #cacaca;

    tbody {
      background: none;
    }

    tr {
      border: none;
    }
  }

  // gatsby-remark-images creates a wrapper one pixel too short (in the Y-axis), which make images blurry.
  // This property ensures the image ratio is preserved.
  .gatsby-resp-image-wrapper {
    .gatsby-resp-image-image {
      object-fit: cover;
    }
  }
`
