import { CreateNodeArgs, CreatePagesArgs } from "gatsby"

import { getLayoutPath } from "../util/layout"
import { pathWithLocale } from "../util/urls"
import { generateLanguagePaths } from "../util/locale"
import { mdxNodeType } from "../util/mdx"
import { generateArchiveList } from "../../../layouts/shared/components/Blog/Sidebar/helpers"
import { BlogListContext } from "../../../layouts/blog-list/interface"
import { BlogPostContext } from "../../../layouts/blog-post/interface"

import { parseMdxNodePath } from "./helpers"
import { getNodesByLocale, MDXBlogNode } from "./graphql"

const BLOG_PAGE_PATH = "/blog"

export async function onCreateNode({ node, actions }: CreateNodeArgs): Promise<void> {
  if (node.internal.type === "Mdx") {
    const contentFilePath = (node as any as MDXBlogNode).internal.contentFilePath
    if (mdxNodeType(contentFilePath) !== "blog") return

    const { localeCode, name } = parseMdxNodePath(contentFilePath)

    await actions.createNodeField({
      node,
      name: "localeCode",
      value: localeCode,
    })

    await actions.createNodeField({
      node,
      name: "path",
      value: pathWithLocale(localeCode, [BLOG_PAGE_PATH, name].join("/")),
    })
  }
}

export async function createPages({ graphql, actions }: CreatePagesArgs): Promise<void> {
  const nodesByLocale = await getNodesByLocale(graphql)

  const getMainBlogPath = (localeCode) => pathWithLocale(localeCode, BLOG_PAGE_PATH)

  nodesByLocale.forEach((nodes, localeCode) => {
    if (nodes.length === 0) return

    const mainBlogPath = getMainBlogPath(localeCode)

    // Main page: /blog
    actions.createPage<BlogListContext>({
      path: mainBlogPath,
      component: getLayoutPath("blog-list"),
      context: {
        languagePaths: generateLanguagePaths(localeCode, getMainBlogPath),
        localeCode,
        mainBlogPath,
      },
    })

    // Archive pages: /blog/2020/7
    const archiveList = generateArchiveList(nodes.map((node) => new Date(node.frontmatter.date)))
    archiveList.forEach((archive) => {
      actions.createPage<BlogListContext>({
        path: pathWithLocale(
          localeCode,
          archive.isCurrentYear
            ? [BLOG_PAGE_PATH, archive.year, archive.month + 1].join("/")
            : [BLOG_PAGE_PATH, archive.year].join("/"),
        ),
        component: getLayoutPath("blog-list"),
        context: {
          archive,
          languagePaths: generateLanguagePaths(localeCode, getMainBlogPath),
          localeCode,
          mainBlogPath,
        },
      })
    })

    // Blog pages: /blog/catalog-variants
    nodes.forEach((node) => {
      actions.createPage<BlogPostContext>({
        path: node.fields.path,
        component: `${getLayoutPath("blog-post")}?__contentFilePath=${node.internal.contentFilePath}`,
        context: {
          languagePaths: generateLanguagePaths(localeCode, getMainBlogPath),
          localeCode,
          mainBlogPath,
          mdxNodeId: node.id,
          bannerImagePathGlob: `${node.internal.contentFilePath.replace(/__post.md$/, "__banner.*")}`,
        },
      })
    })
  })
}
