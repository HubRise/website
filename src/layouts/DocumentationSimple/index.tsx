"use client"

import * as React from "react"

import Block from "@components/Block"
import DocumentationContainer from "@components/DocumentationContainer"
import DocumentationWrapper from "@components/DocumentationWrapper"
import { ContentImage } from "@utils/contentImage"

interface DocumentationSimpleProps {
  title: string
  contentImages: Array<ContentImage>
  children?: React.ReactNode
}

const DocumentationSimple = ({ title, contentImages, children }: DocumentationSimpleProps): JSX.Element => {
  return (
    <DocumentationWrapper contentImages={contentImages} title={title}>
      <Block backgroundColor="white" horizontalAlign="left">
        <DocumentationContainer title={title}>{children}</DocumentationContainer>
      </Block>
    </DocumentationWrapper>
  )
}

export default DocumentationSimple
