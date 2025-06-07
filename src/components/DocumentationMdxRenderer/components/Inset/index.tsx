"use client"

import * as React from "react"

import { StyledInset } from "./Styles"

const Inset = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <StyledInset>{children}</StyledInset>
}

export default Inset
