import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import { StyledPageHero, Wrapper, Title, Description, DescriptionMdx } from "./Styles"

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
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {descriptionMdx && (
          <DescriptionMdx>
            <MDXRemote {...descriptionMdx} />
          </DescriptionMdx>
        )}
      </div>
      <div>{children}</div>
    </Wrapper>
  </StyledPageHero>
)

export default PageHero
