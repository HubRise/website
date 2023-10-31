import Slideshow from "@components/Slideshow"
import { ContentImageWithAlt } from "@utils/contentImage"

import { useDocumentationContext } from "../DocumentationContext"

interface DocumentationSlideshowProps {
  contentImages: Array<ContentImageWithAlt>
  title: string
}

const DocumentationSlideshow = ({ contentImages, title }: DocumentationSlideshowProps): JSX.Element | null => {
  const {
    slideshow: { currentImageSrc, setCurrentImageSrc },
  } = useDocumentationContext()

  return currentImageSrc ? (
    <Slideshow
      contentImages={contentImages}
      currentImageSrc={currentImageSrc}
      navigate={(direction) => {
        const currentIndex = contentImages.findIndex(({ src }) => src === currentImageSrc)
        const nextIndex = currentIndex + direction
        const nextImage = contentImages[nextIndex]
        if (nextImage) setCurrentImageSrc(nextImage.src)
      }}
      onClose={() => setCurrentImageSrc(null)}
      title={title}
    />
  ) : null
}

export default DocumentationSlideshow
