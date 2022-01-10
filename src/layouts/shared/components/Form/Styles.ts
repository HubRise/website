import styled, { css } from "styled-components"
import * as Formik from "formik"

import { breakpoints, colors, mixin } from "@utils/styles"

export type FieldStatus = "unsubmitted" | "valid" | "error"

export const StyledForm = styled(Formik.Form)`
  width: 100%;
  display: block;
`

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const Block = styled.div<{ $isMedium?: boolean }>`
  position: relative;
  width: 100%;
  height: auto;

  ${(props) =>
    props.$isMedium &&
    css`
      @media (min-width: ${breakpoints.large}) {
        width: 49%;
      }
    `}
`

export const Button = styled.button`
  margin-top: 0.5rem;
  padding: 0.8rem 2.5rem;
  width: 100%;
  text-transform: uppercase;
  font-size: 1rem;
  color: ${colors.white};
  background-color: ${colors.primary};
  border-radius: 3px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  ${mixin.buttonOver(colors.white, colors.darkGray)};

  @media (min-width: ${breakpoints.large}) {
    font-size: 0.8125rem;
  }
`

const field = (status: FieldStatus) => css`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  border: thin solid #f2f2f2;
  box-shadow: none;
  color: ${colors.darkGray};
  background: ${colors.white};
  font-size: 0.8125rem;

  ${status === "error" &&
  css`
    background: #f4e6e4;
  `}

  ${status === "valid" &&
  css`
    background: #e9f4e4;
  `}
`

export const StyledField = {
  input: styled(Formik.Field).attrs({ component: "input" })<{ $status: FieldStatus }>`
    ${(props) => field(props.$status)};
    line-height: 1.5;
    outline: 0;
  `,

  textarea: styled(Formik.Field).attrs({ component: "textarea" })<{ $status: FieldStatus }>`
    ${(props) => field(props.$status)};
    height: 14rem;
    resize: none;
  `,
}

export const FieldLabel = styled.label<{ $status: FieldStatus }>`
  ${({ $status }) =>
    $status !== "unsubmitted" &&
    css`
      position: absolute;
      display: inline-block;
      font-size: 0;
      right: ${$status === "error" ? "10px" : "8px"};
      top: 0;

      &:after {
        position: absolute;
        top: 3px;
        right: 0;
        content: ${$status === "error" ? "\\f00d" : "\\f00c"};
        font-family: FontAwesome !important;
        font-size: 1rem;
        color: ${$status === "error" ? "red" : colors.primary};
      }
    `}
`

export const Error = styled.div`
  color: red;
  font-size: 0.8125rem;
  margin-bottom: 1rem;
`
