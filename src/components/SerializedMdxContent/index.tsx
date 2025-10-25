"use client"

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"

import A from "@components/DocumentationMdxRenderer/components/A"

const mdxComponents = {
  a: A,
}

interface SerializedMdxContentProps {
  content: MDXRemoteSerializeResult
}

const SerializedMdxContent = ({ content }: SerializedMdxContentProps): JSX.Element => {
  return <MDXRemote {...content} components={mdxComponents} />
}

export default SerializedMdxContent
