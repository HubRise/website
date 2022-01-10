import { css, FlattenSimpleInterpolation } from "styled-components"

import { breakpoints } from "@utils/styles"

export const frontpageMixin = {
  description: (color: string): FlattenSimpleInterpolation => css`
    font-size: 1.125rem;
    color: ${color};
  `,

  row: css`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;

    @media (min-width: ${breakpoints.large}) {
      margin-top: 2.5rem;
      margin-bottom: 2.5rem;
    }
  `,

  title: (titleColor: string, lineColor: string, center = false): FlattenSimpleInterpolation => css`
    position: relative;
    margin-bottom: 2.5rem;
    font-weight: bold;
    font-size: 2.625rem;
    color: ${titleColor};
    text-align: ${center ? "center" : "left"};

    @media (min-width: ${breakpoints.medium}) {
      font-size: 2.625rem;
    }

    &:after {
      content: "";
      position: absolute;
      left: ${center ? "43%" : "0"};
      top: 100%;
      width: 14%;
      height: 3px;
      margin: 10px auto;
      background-color: ${lineColor};
    }
  `,
}
