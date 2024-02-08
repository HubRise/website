import styled, { css } from "styled-components"

import { colors, fontSizes, lineHeights, mixin } from "@utils/styles"

const commonTitleStyles = css`
  color: ${colors.textDarkest};
  line-height: ${lineHeights.comfortable};
  &:first-child {
    margin-top: 0;
  }
`

const paragraphSpacing = "1rem"

export const StyledContainer = styled.div`
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

    &:after {
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
    margin-bottom: 1rem;
  }

  ol {
    list-style: decimal;
    margin-left: 0;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.2rem;
  }

  ul li {
    position: relative;
    padding-left: 1rem;

    &:before {
      content: "";
      width: 6px;
      height: 6px;
      background: ${colors.textDark};
      border-radius: 50%;
      left: 0;
      position: absolute;
      top: 0.6rem;
    }
  }

  hr {
    border: none;
    border-bottom: 1px solid #cacaca;
    margin: ${paragraphSpacing} 0;
  }

  details {
    margin: 1rem 0;
  }

  summary {
    ${mixin.clickable};
  }

  code {
    display: inline;
    font-family:
      Consolas,
      Liberation Mono,
      Courier,
      monospace;
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
    border-left: 3px solid ${colors.borderLight};

    display: flex;
    flex-direction: column;
    gap: 1rem;

    p {
      margin: 0;
      font-style: italic;
    }
  }
`
