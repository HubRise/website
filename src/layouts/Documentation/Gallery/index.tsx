import * as React from "react"

import Slideshow from "@components/Slideshow"
import { DocFolder } from "@utils/DocIndexer/types"
import { ContentImageWithAlt } from "@utils/contentImage"
import imageSizes from "@utils/imageSizes"

import { ThumbnailItem, ThumbnailGrid, Thumbnail } from "./Styles"

interface GalleryProps {
  folder: DocFolder
  images: Array<ContentImageWithAlt>
}

const Gallery = ({ folder, images }: GalleryProps): JSX.Element => {
  const title = folder.name

  const [currentImageSrc, setCurrentImageSrc] = React.useState<string | null>(null)

  return (
    <>
      {currentImageSrc && (
        <Slideshow
          title={title}
          contentImages={images}
          currentImageSrc={currentImageSrc}
          navigate={(direction) => {
            const currentIndex = images.findIndex((image) => image.src === currentImageSrc)
            const nextIndex = currentIndex + direction
            const nextImage = images[nextIndex]
            if (nextImage) {
              setCurrentImageSrc(nextImage.src)
            }
          }}
          onClose={() => {
            setCurrentImageSrc(null)
          }}
        />
      )}

      <ThumbnailGrid>
        {images.map((image, index) => (
          <ThumbnailItem
            key={index}
            onClick={() => {
              setCurrentImageSrc(image.src)
            }}
          >
            <Thumbnail {...image} alt={title} sizes={`${imageSizes.halfDocumentation}px`} placeholder="blur" />
          </ThumbnailItem>
        ))}
      </ThumbnailGrid>
    </>
  )
}

export default Gallery
