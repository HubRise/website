import { BlogFrontMatter } from "@utils/BlogIndexer/types"

import { StyledDateAndAuthor } from "./Styles"

const DateAndAuthor = ({ frontMatter }: { frontMatter: BlogFrontMatter }): JSX.Element => {
  const dateAsString = new Date(frontMatter.date).toLocaleDateString("en-GB")

  return (
    <StyledDateAndAuthor>
      <span>
        {frontMatter.author} &#x2022; {dateAsString}
      </span>
    </StyledDateAndAuthor>
  )
}

export default DateAndAuthor
