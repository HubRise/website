import Image from "next/image"
import { useEffect, useRef, useState } from "react"

import { ContentImageMap } from "@utils/contentImage"

import { TAppLogo } from "../types"

import { Container, CarouselViewport, AppGrid, AppCard } from "./Styles"

interface AppCarouselProps {
  apps: Array<TAppLogo>
  appLogosMap: ContentImageMap
}

const AppCarousel = ({ apps, appLogosMap }: AppCarouselProps): JSX.Element => {
  const logoContainerWidth = useRef<HTMLInputElement>(null)
  const innerContainerWidth = useRef<HTMLInputElement>(null)
  const [moveShiftWidth, setMoveShiftWidth] = useState<number>(0)

  useEffect(() => {
    if (logoContainerWidth?.current && innerContainerWidth?.current) {
      setMoveShiftWidth(logoContainerWidth?.current?.clientWidth - innerContainerWidth?.current?.clientWidth)
    }
  }, [])

  // - Duplicate each app `nbRows` time, to ensure they fill the grid entirely
  // - Interleave the apps using a top to bottom, left to right pattern
  const nbRows = 3
  const nbCols = apps.length
  const interleavedApps = []

  for (let row = 0; row < nbRows; row++) {
    for (let col = 0; col < nbCols; col++) {
      const appIndex = (row + col * nbRows) % apps.length
      interleavedApps.push(apps[appIndex])
    }
  }

  return (
    <Container>
      <CarouselViewport ref={innerContainerWidth}>
        <AppGrid ref={logoContainerWidth} $nbRows={nbRows} $nbCols={nbCols} $moveShift={moveShiftWidth}>
          {interleavedApps.map(({ logo }, index) => {
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
        </AppGrid>
      </CarouselViewport>
    </Container>
  )
}

export default AppCarousel
