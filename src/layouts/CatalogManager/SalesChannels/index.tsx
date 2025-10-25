import Image from "next/image"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"

import ScreenContainer from "@components/ScreenContainer"

import { TSalesChannels } from "../types"

import { ImageWrapper } from "./Styles"

interface SalesChannelsProps {
  salesChannels: TSalesChannels
  descriptionMdx: MDXRemoteSerializeResult
}

const SalesChannels = ({ salesChannels, descriptionMdx }: SalesChannelsProps): JSX.Element => {
  return (
    <>
      <ScreenContainer bgColor="white" title={salesChannels.title} descriptionMdx={descriptionMdx} withHeader>
        <ImageWrapper>
          <Image
            src="/images/catalog-manager/sales-channels.png"
            width={3750}
            height={2480}
            alt={salesChannels.title}
          />
        </ImageWrapper>
      </ScreenContainer>
    </>
  )
}

export default SalesChannels
