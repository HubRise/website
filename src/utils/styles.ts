import { css, RuleSet } from "styled-components"

export const sizes = {
  maxWidth: "75rem",
  headerHeight: "5rem",

  blockVerticalPadding: "4.688rem",
  blockHorizontalPadding: "7.5rem",

  // Horizontal padding for mobile devices
  mobilePadding: "0.625rem",
  // Horizontal padding for desktop devices
  desktopPadding: "0.9375rem",

  borderRadius: "3px",
}

export const fontSizes = {
  _12: ".75rem",
  _14: ".875rem",
  _16: "1rem",
  _19: "1.1875rem",
  _24: "1.5rem",
  _32: "2rem",
  _42: "2.625rem",
  _66: "4.125rem",
}

export const iconSizes = {
  _14: 14,
  _20: 20,
  _25: 25,
  _32: 32,
  _50: 50,
  _64: 64,
}

export const lineHeights = {
  comfortable: "1.6",
  compact: "1.3",
}

export const breakpoints = {
  medium: "40rem", // 640px
  large: "64rem", // 1024px
  extraLarge: "90rem", // 1440px
  biggest: "120rem", // 1920px
  documentationStickyMenu: "64rem",
  blogStickyMenu: "40rem",
  burgerMenu: "90rem",
}

export const colors = {
  primary: "#4ca30d",
  danger: "#b2564f",
  warning: "#fcfaed",
  white: "#fff",

  greenLight: "#87c76c",
  greenMediumLight: "#6db24f",

  textDarkest: "#333",
  textDark: "#555",
  textMedium: "#777",
  textLight: "#999",
  textLighter: "#d0d5dd",
  textDefault: "#555",

  backgroundDarker: "#333",
  backgroundDark: "#404040",
  backgroundLight: "#efefef",
  backgroundLightest: "#f8f8f8",
  backgroundWhite: "#fff",

  borderMedium: "#ccc",
  borderLight: "#e0e0e0",
  borderLighter: "#f0f0f0",
  borderLightest: "#f8f8f8",
  borderInputFocus: "#555",

  headerBorder: "#4ca30d80",
}

export const boxShadows = {
  small: `0 3px 3px rgba(0, 0, 0, 0.05)`,
  image: `0 0 5px rgba(0, 0, 0, 0.05)`,
  medium: `0 5px 10px rgba(0, 0, 0, 0.1)`,
  large: `5px 10px 15px rgba(0, 0, 0, 0.15)`,
  card: `
    -5px 49px 19px #b5b5b503,
    -2.5px 27px 17px #b5b5b50d,
    -1px 12px 12px #b5b5b517,
    0px 2.5px 6.5px #b5b5b51a;
  `,
}

export const mixin = {
  buttonOver: (color: string, backgroundColor: string): RuleSet => css`
    transition:
      color 0.2s ease,
      background-color 0.2s ease;

    &:hover {
      color: ${color};
      background-color: ${backgroundColor};
    }
  `,
  centerElement: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  expandBefore: ({ width, color }: { width: string; color: string }): RuleSet => css`
    &::before {
      content: "";
      background-color: ${color};
      position: absolute;
      right: 100%;
      width: ${width};
      height: 100%;
      top: 0;
    }
  `,
  expandAfter: ({ width, color }: { width: string; color: string }): RuleSet => css`
    &::after {
      content: "";
      background-color: ${color};
      position: absolute;
      left: 100%;
      width: ${width};
      height: 100%;
      top: 0;
    }
  `,
  linkOver: (color: string): RuleSet => css`
    transition: color 0.2s ease;
    &:hover {
      color: ${color};
    }
  `,
  responsiveText: css`
    font-size: ${fontSizes._16};
    @media (min-width: ${breakpoints.large}) {
      font-size: ${fontSizes._19};
    }
  `,
  cardText: css`
    font-size: ${fontSizes._16};
    line-height: 1.5rem;
    margin-top: 0.625rem;
  `,
  smallCardTitle: css`
    font-size: ${fontSizes._19};
    font-weight: 600;
    color: ${colors.textDarkest};
  `,
  cardTitle: css`
    font-size: ${fontSizes._24};
    line-height: ${lineHeights.compact};
    font-weight: 600;
    color: ${colors.textDarkest};

    @media (min-width: ${breakpoints.large}) {
      font-size: ${fontSizes._32};
    }
  `,
  containerWrapper: css`
    max-width: ${breakpoints.biggest};
    margin: 0 auto;

    @media (min-width: ${breakpoints.large}) {
      padding-left: 3.75rem;
      padding-right: 3.75rem;
    }

    @media (min-width: ${breakpoints.biggest}) {
      padding-left: 5rem;
      padding-right: 5rem;
    }
  `,
}

export const zIndexValues = {
  integrationsNav: 9,
  header: 10,
  mobileBarMenu: 30,
  slideshow: 100,
  modalOverlay: 150,
  modal: 200,
  toast: 300,
}
