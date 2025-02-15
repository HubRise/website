import { useCallback, useRef, useState } from "react"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { Container, Title, ContentWrapper, Content, TitleWrapper } from "./Styles"

interface AccordionProps {
  title: string
  isOpenedByDefault?: boolean
  children: React.ReactNode
}

const Accordion = ({ title, isOpenedByDefault = false, children }: AccordionProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(isOpenedByDefault)
  const contentRef = useRef<HTMLDivElement>(null)

  const contentHeight = !isCollapsed ? 0 : contentRef?.current?.scrollHeight

  const handleCollapseToggle = useCallback(() => {
    setIsCollapsed(!isCollapsed)
  }, [isCollapsed])

  return (
    <Container>
      <TitleWrapper $isCollapsed={isCollapsed} onClick={handleCollapseToggle}>
        <Title>{title}</Title>
        <Icon code="expand_more" size={iconSizes._25} color="#263238" />
      </TitleWrapper>
      <ContentWrapper $maxHeight={contentHeight}>
        <Content ref={contentRef}>{children}</Content>
      </ContentWrapper>
    </Container>
  )
}

export default Accordion
