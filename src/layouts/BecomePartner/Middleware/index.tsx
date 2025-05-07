import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import ScreenContainer from "@components/ScreenContainer"
import TwoSidesContent from "@components/TwoSidesContent"

import { Wrapper } from "../shared/Styles"
import { TMiddleware } from "../types"

interface MiddlewareProps {
  middleware: TMiddleware
  descriptionMdx: MDXRemoteSerializeResult
}

const Middleware = ({ middleware, descriptionMdx }: MiddlewareProps): JSX.Element => {
  return (
    <>
      <ScreenContainer bgColor="white" title={middleware.title} descriptionMdx={descriptionMdx} withHeader>
        <Wrapper>image</Wrapper>
      </ScreenContainer>
      <TwoSidesContent content={middleware.content} />
    </>
  )
}

export default Middleware
