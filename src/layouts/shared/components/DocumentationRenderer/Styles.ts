import styled from "styled-components"

import { colors } from "@utils/styles"

export const Container = styled.div`
  font-family: "Poppins", sans-serif;

  h1 {
    color: ${colors.darkGray};
    font-weight: bold;
    font-size: 2.125rem;
    position: relative;
    margin: 0 0 2.5rem 0;
    width: 100%;
    line-height: 120%;

    @media screen and (min-width: 415px) {
      font-size: 2.625rem;
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

  h2,
  h3,
  h4 {
    scroll-snap-align: start;
    scroll-margin-top: 1rem;

    a {
      color: transparent;
      margin-left: 0.33rem;
      vertical-align: middle;

      &::after {
        content: "#";

        @media print {
          display: none !important;
        }
      }
    }

    &:hover a {
      color: ${colors.primary};

      &:hover {
        color: ${colors.darkGray};
      }
    }
  }

  h2 {
    color: ${colors.darkGray};
    font-size: 1.563rem;
    text-align: left;
    font-weight: 600;
    margin: 2rem 0 1rem 0;
  }

  h3 {
    color: ${colors.darkGray};
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    margin: 1rem 0;
    width: 100%;
  }

  h4 {
    color: ${colors.darkGray};
    font-weight: 500;
    font-size: 1rem;
    margin: 0.5rem 0;
    width: 100%;
  }

  p {
    font-size: 1rem;
    color: ${colors.gray};
    font-weight: 400;
    overflow: auto;
  }

  a {
    font-weight: 400;
    font-size: 1rem;
    color: ${colors.primary};

    @include hr-link-hover(${colors.darkGray});
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
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.gray};
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
      background: ${colors.gray};
      border-radius: 50%;
      left: 0;
      position: absolute;
      top: 0.7rem;
    }
  }

  /* -----------
      Code
     ----------- */
  // Coming from a plugin {{{
  .prism-code {
    padding: 2.5rem 1.25rem;
    margin: 1.5rem auto;
    background-color: #fbfbfb;
    border-top: thin solid ${colors.lightGray};
    border-bottom: thin solid ${colors.lightGray};
    font-family: Consolas, "Liberation Mono", Courier, monospace;
    font-weight: normal;

    .prism-code_wrapper {
      position: relative;
      white-space: inherit;
      font-size: 0.9375rem;
    }

    .token-line {
      display: block;
      border: none;
      padding: 0;
      font-family: Consolas, "Liberation Mono", Courier, monospace !important;
      color: ${colors.darkGray};

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
