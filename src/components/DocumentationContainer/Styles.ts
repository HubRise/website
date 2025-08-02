import styled, { css } from "styled-components"

import { boxShadows, breakpoints, colors, fontSizeMixins, fontSizes, lineHeights, mixin } from "@utils/styles"

const commonTitleStyles = css`
  color: ${colors.textDarkest};
  line-height: ${lineHeights.comfortable};
  &:first-child {
    margin-top: 0;
  }
`

const paragraphSpacing = "1rem"

const underlineMixin = css`
  content: "";
  position: absolute;
  left: 0;
  right: inherit;
  top: 100%;
  margin: 10px auto;
  width: 6.25rem;
  height: 2px;
  background: ${colors.primary};
  border-radius: 6.25rem;

  @media (min-width: ${breakpoints.biggest}) {
    width: 7.5rem;
  }
`

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

    &::after {
      ${underlineMixin}
    }
  }

  h2 {
    ${fontSizeMixins.text20}
    font-weight: 600;
    color: ${colors.textDarkest};
    position: relative;
    margin: 2.5rem 0 2.5rem 0;

    &::after {
      ${underlineMixin}
    }

    @media (min-width: ${breakpoints.large}) {
      ${fontSizeMixins.text24}
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

  p,
  ul,
  ol {
    margin-bottom: ${paragraphSpacing};
  }

  p + ul,
  p + table,
  p + .prism-code {
    margin-top: calc(0.5rem - ${paragraphSpacing});
  }

  p:has(> em) {
    border-left: solid 2px ${colors.primary};
    padding-left: 1rem;

    & > em {
      font-weight: 500;
      color: #101828;
    }
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
    margin-left: 1rem;
    padding-left: 1rem;

    &::before {
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

  li img {
    margin: 0.5rem 0;
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
    padding: 4rem 1rem 1rem 1rem;
    margin: 0 0 1rem 0;
    box-shadow: ${boxShadows.card};
    border-radius: 0.75rem;
    font-weight: 500;
    background-image: url("/images/quote-green.svg");
    background-repeat: no-repeat;
    background-size: 52px 36px;
    background-position: 1rem 1rem;

    @media (min-width: ${breakpoints.large}) {
      padding: 6.75rem 1.75rem 2.75rem 1.75rem;
      background-position: 1.75rem 2.75rem;
    }

    p {
      margin-bottom: 0;
    }
  }
`
