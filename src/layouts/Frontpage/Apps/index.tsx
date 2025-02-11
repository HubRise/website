import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { ContentImageMap } from "@utils/contentImage"

import { TApp } from "../types"

import { Container, InnerContainer, LogoContainer, AppCard } from "./Styles"

interface AppsProps {
  apps: Array<TApp>
  appLogosMap: ContentImageMap
}

const Apps = ({ apps, appLogosMap }: AppsProps): JSX.Element => {
  const logoContainerWidth = useRef<HTMLInputElement>(null)
  const innerContainerWidth = useRef<HTMLInputElement>(null)
  const [moveShiftWidth, setMoveShiftWidth] = useState<number>(0)

  useEffect(() => {
    if (logoContainerWidth?.current && innerContainerWidth?.current) {
      setMoveShiftWidth(logoContainerWidth?.current?.clientWidth - innerContainerWidth?.current?.clientWidth)
    }
  }, [])

  return (
    <Container>
      <InnerContainer ref={innerContainerWidth}>
        <LogoContainer ref={logoContainerWidth} $moveShift={moveShiftWidth} $nbCards={apps.length}>
          {apps.map(({ logo }, index) => {
            return (
              <AppCard key={index}>
                <Image
                  style={{ maxHeight: "100%" }}
                  {...appLogosMap[logo]}
                  alt={logo.substring(0, logo.length - 4)}
                ></Image>
              </AppCard>
            )
          })}
        </LogoContainer>
      </InnerContainer>
    </Container>
  )
}

export default Apps
