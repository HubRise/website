import { BlogFrontMatter } from "@utils/BlogIndexer/types"

import { Container } from "./Styles"

const DateAndAuthor = ({ frontMatter }: { frontMatter: BlogFrontMatter }): JSX.Element => {
  const dateAsString = new Date(frontMatter.date).toLocaleDateString("en-GB")

  return (
    <Container>
      <span>
        {frontMatter.author} &#x2022; {dateAsString}
      </span>
    </Container>
  )
}

export default DateAndAuthor
