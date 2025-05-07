import useTranslation from "@hooks/client/useTranslation"
import { BlogFrontMatter } from "@utils/BlogIndexer/types"

import { Container, StyledDate } from "./Styles"

const DateAndAuthor = ({ frontMatter }: { frontMatter: BlogFrontMatter }): JSX.Element => {
  const { t } = useTranslation()

  const dateAsString = new Date(frontMatter.date).toLocaleDateString("en-GB")

  return (
    <Container>
      {t("misc.posted_on")} <StyledDate>{dateAsString}</StyledDate> {t("misc.by")} {frontMatter.author}
    </Container>
  )
}

export default DateAndAuthor
