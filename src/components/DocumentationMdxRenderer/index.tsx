import NextLink from "next/link"
import { compileMDX } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"

import { Href } from "@utils/DocIndexer/types"
import { ContentImageWithAlt } from "@utils/contentImage"
import { ContentDirName } from "@utils/files"
import { Language } from "@utils/locales"
import rehypeImagePlugin from "@utils/mdx/rehypeImagePlugin"
import rehypeLinkRewritePlugin from "@utils/mdx/rehypeLinkRewritePlugin"
import remarkHeadingsPlugin from "@utils/mdx/remarkHeadingsPlugin"
import type { HeaderLink } from "@utils/mdx/remarkHeadingsPlugin"
import { Router } from "@utils/router"

import A from "./components/A"
import CallSummaryTable from "./components/CallSummaryTable"
import ContactFormToggle from "./components/ContactFormToggle"
import Details from "./components/Details"
import { headerGenerate } from "./components/Headers"
import Img from "./components/Img"
import InlineImage from "./components/InlineImage"
import Label from "./components/Label"
import Pre from "./components/Pre"
import Table from "./components/Table"

export const renderDocumentationMdx = async (
  content: string,
  imageDirName: ContentDirName,
  router: Router,
  language: Language,
  pageHref: Href,
): Promise<{ mdxElement: JSX.Element; headerLinks: Array<HeaderLink>; contentImages: Array<ContentImageWithAlt> }> => {
  const headerLinks: Array<HeaderLink> = []
  const contentImages: Array<ContentImageWithAlt> = []

  const preprocessed = preProcessContent(content)
  const { content: mdxElement } = await compileMDX({
    source: preprocessed,
    components: {
      a: A,
      CallSummaryTable,
      ContactFormToggle,
      details: Details,
      ...headerGenerate([`h2`, `h3`, `h4`]),
      img: Img,
      InlineImage,
      Label,
      Link: ({ href, children }) => <NextLink href={href}>{children}</NextLink>,
      pre: Pre,
      table: Table,
    },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, [remarkHeadingsPlugin, headerLinks]],
        rehypePlugins: [
          rehypeImagePlugin(imageDirName, contentImages),
          rehypeLinkRewritePlugin(router, language, pageHref, headerLinks),
        ],
      },
    },
  })

  const largeContentImages = contentImages.filter((image) => image.width >= MIN_IMAGE_WIDTH_FOR_SLIDESHOW)
  return { mdxElement, headerLinks, contentImages: largeContentImages }
}

/**
 * Parse the content and return the header links.
 *
 * @param content
 * @returns header links
 */
export const headerLinksFromMdx = async (content: string): Promise<Array<HeaderLink>> => {
  const headerLinks: Array<HeaderLink> = []

  const preprocessed = preProcessContent(content)
  await compileMDX({
    source: preprocessed,
    components: {
      // Just to avoid compile errors
      CallSummaryTable: () => null,
      ContactFormToggle: () => null,
      InlineImage: () => null,
      Label: () => null,
      Link: () => null,
    },
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, [remarkHeadingsPlugin, headerLinks]],
        rehypePlugins: [],
      },
    },
  })

  return headerLinks
}

const preProcessContent = (content: string): string => {
  // Escape the {#...} pattern used for anchors.
  // From: ## 2. Connect Deliveroo Bridge {#connect}
  // To:   ## 2. Connect Deliveroo Bridge \{#connect\}
  return content.replace(/^(#+ .+?) \{#(.+?)\}/gm, "$1 \\{#$2\\}")
}

const MIN_IMAGE_WIDTH_FOR_SLIDESHOW = 200
