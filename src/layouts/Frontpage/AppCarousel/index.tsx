import Image from "next/image"
import { useLayoutEffect, useRef, useState } from "react"

import { ContentImageMap } from "@utils/contentImage"

import { TAppLogo } from "../types"

import { AppCard, AppGrid, CarouselViewport, Container } from "./Styles"

interface AppCarouselProps {
  apps: Array<TAppLogo>
  appLogosMap: ContentImageMap
}

const AppCarousel = ({ apps, appLogosMap }: AppCarouselProps): JSX.Element => {
  const appGridRef = useRef<HTMLDivElement>(null)
  const [maxTranslate, setMaxTranslate] = useState<number>(0)

  useLayoutEffect(() => {
    setMaxTranslate(appGridRef!.current!.clientWidth / 2)
  }, [])

  // - Duplicate each app `nbRows` time, to ensure they fill the grid entirely
  // - Duplicate the grid twice (nb cols * 2) to ensure the carousel can scroll
  // - Interleave the apps using a top to bottom, left to right pattern
  const nbRows = 3
  const nbCols = apps.length * 2
  const interleavedApps = Array<TAppLogo>(nbRows * nbCols)

  for (let i = 0; i < nbRows * nbCols; i++) {
    const col = Math.floor(i / nbRows)
    const row = i % nbRows
    interleavedApps[row * nbCols + col] = apps[i % apps.length]
  }

  return (
    <Container>
      <CarouselViewport>
        <AppGrid ref={appGridRef} $nbRows={nbRows} $nbCols={nbCols} $maxTranslate={maxTranslate}>
          {interleavedApps.map((app, index) => {
            return (
              <AppCard key={index} $index={index}>
                <Image
                  style={{ maxHeight: "100%" }}
                  {...appLogosMap[app.logo]}
                  alt={app.logo.substring(0, app.logo.length - 4)}
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
