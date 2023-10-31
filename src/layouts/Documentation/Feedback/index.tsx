import * as React from "react"

import Icon from "@components/Icon"
import useTranslation from "@hooks/client/useTranslation"
import { DocMdFile } from "@utils/DocIndexer/types"
import { iconSizes } from "@utils/styles"

import Instructions from "./Instructions"
import { Footer, TitleWrapper, IconButton, Title, FooterWrapper } from "./Styles"

export interface FeedbackProps {
  mdFile: DocMdFile
}

const Feedback = ({ mdFile }: FeedbackProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const { t } = useTranslation()

  return (
    <Footer>
      <FooterWrapper>
        <TitleWrapper $isExpanded={isExpanded} onClick={() => setIsExpanded((v) => !v)}>
          <IconButton>
            <Icon code={isExpanded ? "expand_less" : "expand_more"} size={iconSizes._20} />{" "}
          </IconButton>

          <Title>{t(`misc.feedback.documentation.title`)}</Title>
        </TitleWrapper>

        {isExpanded && <Instructions mdFile={mdFile} />}
      </FooterWrapper>
    </Footer>
  )
}

export default Feedback
