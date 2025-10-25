import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import SerializedMdxContent from "@components/SerializedMdxContent"

import { StyledPageHero, Wrapper, PageHeroTitle, Description, DescriptionMdx } from "./Styles"

interface PageHeroProps {
  children?: React.ReactNode
  isTextCentered?: boolean
  title?: React.ReactNode
  description?: string
  descriptionMdx?: MDXRemoteSerializeResult
}

const PageHero = ({
  children,
  isTextCentered = true,
  title,
  description,
  descriptionMdx,
}: PageHeroProps): JSX.Element => (
  <StyledPageHero $isTextCentered={isTextCentered}>
    <Wrapper>
      <div>
        {title && <PageHeroTitle>{title}</PageHeroTitle>}
        {description && <Description>{description}</Description>}
        {descriptionMdx && (
          <DescriptionMdx>
            <SerializedMdxContent content={descriptionMdx} />
          </DescriptionMdx>
        )}
      </div>
      <div>{children}</div>
    </Wrapper>
  </StyledPageHero>
)

export default PageHero
