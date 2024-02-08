import styled from "styled-components"

export const StyledImage = styled.span<{ width?: string; height?: string }>`
  display: inline-block;
  width: ${(props) => `${props.width}px` || "auto"};
  height: ${(props) => `${props.height}px` || "auto"};
`
