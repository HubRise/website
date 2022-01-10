import * as React from "react"
import { useTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

import { StyledFeedback, Section, TitleWrapper, IconButton, Title } from "./Styles"
import Instructions from "./Instructions"

export interface FeedbackProps {
  /** The path of the source file, relative to "content", with no leading slash
   * (eg "contributing/en/style-guide.md") */
  relativePath: string
}

const Feedback = ({ relativePath }: FeedbackProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const { t } = useTranslation()

  return (
    <StyledFeedback>
      <Section>
        <TitleWrapper $isExpanded={isExpanded} onClick={() => setIsExpanded((v) => !v)}>
          <IconButton $isExpanded={isExpanded}>
            <FontAwesomeIcon icon={faAngleDown} flip={isExpanded ? `vertical` : undefined} fixedWidth />
          </IconButton>

          <Title>{t(`misc.feedback.documentation.title`)}</Title>
        </TitleWrapper>
      </Section>

      {isExpanded && <Instructions {...{ relativePath }} />}
    </StyledFeedback>
  )
}

export default Feedback
