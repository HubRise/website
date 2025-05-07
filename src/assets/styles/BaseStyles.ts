import { createGlobalStyle } from "styled-components"

import { colors, lineHeights, sizes } from "@utils/styles"

export const BaseStyles = createGlobalStyle`
  html {
    scroll-padding-top: ${sizes.headerHeight};
  }

  body {
    overflow-x: hidden;
    min-height: 100vh;
    min-width: 320px;

    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    color: ${colors.textDark};
  }


  html,
  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: ${lineHeights.comfortable};
  }

    // Hide the "protected by reCaptcha" badge in the bottom left of the screen
  .grecaptcha-badge {
    visibility: hidden;
  }
`
