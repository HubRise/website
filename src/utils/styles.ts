import { css, FlattenSimpleInterpolation } from "styled-components"

export const colors = {
  primary: "#6db24f",

  darkGray: "#333",
  gray: "#555",
  lightGray: "#777",
  silverGray: "#ccc",
  white: "#fff",
}

export const sizes = {
  headerHeight: "5rem",

  rowPadding: "7.5rem",
  blockPadding: "4.688rem",
}

export const zIndexValues = {
  header: 10,
  mobileBarBackdrop: 20,
  mobileBarMenu: 30,
  slideshow: 100,
  modalOverlay: 150,
  modal: 200,
}

export const breakpoints = {
  medium: "40rem",
  large: "64rem",
  xLarge: "75rem",
  xxLarge: "90rem",
}

export const mixin = {
  button: css`
    padding: 0.4em 1.5em;
    font-size: 0.9375rem;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 3px;
  `,
  buttonOver: (color: string, backgroundColor: string): FlattenSimpleInterpolation => css`
    transition: color 0.2s ease, background-color 0.2s ease;

    &:hover {
      color: ${color};
      background-color: ${backgroundColor};
    }
  `,
  clickable: css`
    cursor: pointer;
    user-select: none;
  `,
  container: css`
    max-width: 96%;
    width: 1200px;
    margin: 0 auto;
  `,
  dotSeparatedList: (gap: string): FlattenSimpleInterpolation => css`
    display: inline;
  
    &:not(:last-child) {
        margin-right: ${gap};
    
      &:after {
          content: "●";
          display: inline;
          margin-left: ${gap};
          bottom: 0.15em;
          font-size: 0.75rem;
          color: ${colors.silverGray};
        }
      }
    }
  `,
  headerStyle: css`
    height: ${sizes.headerHeight};
    z-index: ${zIndexValues.header};
    background-color: ${colors.white};
    border-bottom: 3px solid ${colors.primary};
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
  `,
  linkOver: (color: string): FlattenSimpleInterpolation => css`
    transition: color 0.2s ease;
    &:hover {
      color: ${color};
    }
  `,
}
