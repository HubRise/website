import styled from "styled-components"

export const StyledImage = styled.span<{ width?: string; height?: string }>`
  display: inline-block;
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  margin: 0 0.25rem;

  > img {
    margin: 0 !important;
  }
`
