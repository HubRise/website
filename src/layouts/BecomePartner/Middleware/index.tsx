import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import ScreenContainer from "@components/ScreenContainer"
import TwoSidesContent from "@components/TwoSidesContent"

import { TMiddleware } from "../types"

import { Wrapper } from "./Styles"

interface MiddlewareProps {
  middleware: TMiddleware
  descriptionMdx: MDXRemoteSerializeResult
}

const Middleware = ({ middleware, descriptionMdx }: MiddlewareProps): JSX.Element => {
  return (
    <>
      <ScreenContainer bgColor="white" title={middleware.title} descriptionMdx={descriptionMdx} withHeader>
        <Wrapper>
          <Image src="/images/become-partner/middleware.png" width={3750} height={2015} alt={middleware.title} />
        </Wrapper>
      </ScreenContainer>
      <TwoSidesContent content={middleware.content} />
    </>
  )
}

export default Middleware
