import styled, { css } from "styled-components"
import * as Formik from "formik"

import { breakpoints, colors, fontSizes, mixin, sizes } from "@utils/styles"

export type FieldStatus = "unsubmitted" | "valid" | "error"

const gap = "0.75rem"

export const StyledForm = styled(Formik.Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${gap};
`

export const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${gap};
`

export const Block = styled.div<{ $isMedium?: boolean }>`
  width: 100%;

  ${(props) =>
    props.$isMedium &&
    css`
      @media (min-width: ${breakpoints.large}) {
        width: calc(50% - ${gap} / 2);
      }
    `}
`

export const Button = styled.button`
  padding: 0.8rem 2.5rem;
  width: 100%;
  text-transform: uppercase;
  color: ${colors.white};
  background-color: ${colors.primary};
  border-radius: ${sizes.borderRadius};
  font-weight: 500;
  text-align: center;
  cursor: pointer;

  ${mixin.buttonOver(colors.white, colors.textDarkest)};
`

export const StyledField = styled.div``

const field = (status: FieldStatus) => css`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.3rem;
  color: ${colors.textDarkest};
  background: ${colors.white};

  ${status === "error" &&
  css`
    background: #f4e6e4;
  `}

  ${status === "valid" &&
  css`
    background: #e9f4e4;
  `}

  border: 2px solid transparent;
  border-radius: ${sizes.borderRadius};
  outline: thin solid ${colors.borderLight};
  box-shadow: none;

  :active,
  :focus {
    border-color: ${colors.borderInputFocus};
    outline: none;
  }
`

export const StyledInput = {
  input: styled(Formik.Field).attrs({ component: "input" })<{ $status: FieldStatus }>`
    ${(props) => field(props.$status)};
  `,

  textarea: styled(Formik.Field).attrs({ component: "textarea" })<{ $status: FieldStatus }>`
    ${(props) => field(props.$status)};
    height: 14rem;
    resize: none;
  `,
}

export const Error = styled.div`
  color: ${colors.danger};
  font-size: ${fontSizes._14};
  margin-bottom: 0.5rem;
`
