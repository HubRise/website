import { forwardRef, useCallback, useRef, useState } from "react"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { StyledAccordion, Title, ContentWrapper, Content, TitleWrapper } from "./Styles"

interface AccordionProps {
  title: string
  isOpenedByDefault?: boolean
  children: React.ReactNode
}

const Accordion = forwardRef(
  ({ title, isOpenedByDefault = false, children }: AccordionProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(isOpenedByDefault)
    const contentRef = useRef<HTMLDivElement>(null)

    const contentHeight = !isExpanded ? 0 : contentRef?.current?.scrollHeight

    const handleCollapseToggle = useCallback(() => {
      setIsExpanded(!isExpanded)
    }, [isExpanded])

    return (
      <StyledAccordion>
        <TitleWrapper $isExpanded={isExpanded} onClick={handleCollapseToggle} ref={ref} data-is-expanded={isExpanded}>
          <Title>{title}</Title>
          <Icon code="expand_more" size={iconSizes._25} color="#263238" />
        </TitleWrapper>
        <ContentWrapper $maxHeight={contentHeight} $isExpanded={isExpanded}>
          <Content ref={contentRef}>{children}</Content>
        </ContentWrapper>
      </StyledAccordion>
    )
  },
)

Accordion.displayName = "Accordion"

export default Accordion
