import { useCallback, useRef, useState } from "react"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { StyledAccordion, Title, ContentWrapper, Content, TitleWrapper, ExpandIconWrapper } from "./Styles"

interface AccordionProps {
  title: string
  children: React.ReactNode
  expanded?: boolean // Make the component controlled by providing this prop
  onExpandedChange?: (expanded: boolean) => void
}

const Accordion = ({ title, children, expanded, onExpandedChange }: AccordionProps): JSX.Element => {
  const [internalExpanded, setInternalExpanded] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)

  // Use controlled state if provided, otherwise use internal state
  const isExpanded = expanded !== undefined ? expanded : internalExpanded
  const contentHeight = !isExpanded ? 0 : contentRef?.current?.scrollHeight

  const handleCollapseToggle = useCallback(() => {
    const newExpanded = !isExpanded
    if (onExpandedChange) {
      onExpandedChange(newExpanded)
    } else {
      setInternalExpanded(newExpanded)
    }
  }, [isExpanded, onExpandedChange])

  return (
    <StyledAccordion>
      <TitleWrapper $isExpanded={isExpanded} onClick={handleCollapseToggle}>
        <Title>{title}</Title>
        <ExpandIconWrapper>
          <Icon code="expand_more" size={iconSizes._25} color="#263238" />
        </ExpandIconWrapper>
      </TitleWrapper>

      <ContentWrapper $maxHeight={contentHeight} $isExpanded={isExpanded}>
        <Content ref={contentRef}>{children}</Content>
      </ContentWrapper>
    </StyledAccordion>
  )
}

export default Accordion
