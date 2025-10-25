import Image from "next/image"
import { useLayoutEffect, useRef, useState } from "react"

import { ContentImage, ContentImageMap } from "@utils/contentImage"

import { AppCard, AppGrid, CarouselViewport, Container } from "./Styles"

interface AppCarouselProps {
  appLogosMap: ContentImageMap
}

const AppCarousel = ({ appLogosMap }: AppCarouselProps): JSX.Element => {
  const appGridRef = useRef<HTMLDivElement>(null)
  const [maxTranslate, setMaxTranslate] = useState<number>(0)

  // Deterministic shuffle. The default alphabetical order would place apps such as "Zelty" and "Zelty Bridge" next to each other.
  const appLogos = Object.values(appLogosMap).sort((a, b) => a.src.length - b.src.length)

  useLayoutEffect(() => {
    setMaxTranslate(appGridRef!.current!.clientWidth / 2)
  }, [])

  // - Duplicate each app `nbRows` time, to ensure they fill the grid entirely
  // - Duplicate the grid twice (nb cols * 2) to ensure the carousel can scroll
  // - Interleave the apps using a top to bottom, left to right pattern
  const nbRows = 3
  const nbCols = appLogos.length * 2
  const interleavedLogos = Array<ContentImage>(nbRows * nbCols)

  for (let i = 0; i < nbRows * nbCols; i++) {
    const col = Math.floor(i / nbRows)
    const row = i % nbRows
    interleavedLogos[row * nbCols + col] = appLogos[i % appLogos.length]
  }

  return (
    <Container>
      <CarouselViewport>
        <AppGrid ref={appGridRef} $nbRows={nbRows} $nbCols={nbCols} $maxTranslate={maxTranslate}>
          {interleavedLogos.map((logo, index) => {
            return (
              <AppCard key={index} $index={index}>
                <Image style={{ maxHeight: "100%" }} {...logo} alt={logo.src.substring(0, logo.src.length - 4)}></Image>
              </AppCard>
            )
          })}
        </AppGrid>
      </CarouselViewport>
    </Container>
  )
}

export default AppCarousel
