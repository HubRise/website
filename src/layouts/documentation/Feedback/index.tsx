import * as React from "react"
import { useTranslation } from "react-i18next"

import { StyledFeedback, Section, TitleWrapper, IconButton, Title } from "./Styles"
import Instructions from "./Instructions"

import Icon from "@layouts/shared/components/Icon"
import { iconSizes } from "@utils/styles"

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
            <Icon code={isExpanded ? "expand_less" : "expand_more"} size={iconSizes._20} />
          </IconButton>

          <Title>{t(`misc.feedback.documentation.title`)}</Title>
        </TitleWrapper>
      </Section>

      {isExpanded && <Instructions {...{ relativePath }} />}
    </StyledFeedback>
  )
}

export default Feedback
