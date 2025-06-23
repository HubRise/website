import * as React from "react"

import DateAndAuthor from "@components/DateAndAuthor"
import DocumentationContainer from "@components/DocumentationContainer"
import { BlogMdFile } from "@utils/BlogIndexer/types"
import { ContentImage } from "@utils/contentImage"
import { text } from "@utils/misc"

import SideBar from "../SideBar"

import { StyledPost, Title, BannerImage, Content } from "./Styles"

interface PostProps {
  mdFile: BlogMdFile
  mdFiles: Array<BlogMdFile>
  bannerImage?: ContentImage
  children: React.ReactNode
}

const Post = ({ mdFile, mdFiles, bannerImage, children }: PostProps): JSX.Element => {
  const [locationOrigin, setLocationOrigin] = React.useState<string>("")
  const [locationPathname, setLocationPathname] = React.useState<string>("")
  const { frontMatter } = mdFile

  React.useEffect(() => {
    setLocationOrigin(window.location.origin)
    setLocationPathname(window.location.pathname)
  }, [])

  return (
    <StyledPost>
      <Title>{text(frontMatter.title)}</Title>

      <DateAndAuthor frontMatter={frontMatter} />

      <Content>
        <DocumentationContainer>
          {bannerImage && <BannerImage {...bannerImage} alt={mdFile.frontMatter.title} />}
          {children}
        </DocumentationContainer>
        <SideBar
          otherPosts={mdFiles
            .filter((post) => post.uri !== locationPathname)
            .map((post) => {
              return {
                title: post.frontMatter.title,
                link: `${locationOrigin}${post.uri}`,
              }
            })}
        />
      </Content>
    </StyledPost>
  )
}

export default Post
