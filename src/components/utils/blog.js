export function convertArticleData(articleData) {
  const { fields, frontmatter, id, body } = articleData
  return {
    id,
    url: fields.slug,
    title: frontmatter.title,
    shortDescription: frontmatter.shortDescription,
    author: frontmatter.author,
    date: new Date(frontmatter.date),
    image: frontmatter.picture
      ? frontmatter.picture.childImageSharp.fixed
      : null,
    body
  }
}

/**
 *
 * @param {Date} articleDate
 * @returns {{isCurrentYear: boolean, month: number, year: number}}
 */
function getArchiveInfoFromArticleDate(articleDate) {
  return {
    year: articleDate.getFullYear(),
    month: articleDate.getMonth(),
    isCurrentYear: articleDate.getFullYear() === new Date().getFullYear()
  }
}

export function getArchiveTitle(archiveInfo, t) {
  const monthList = t('misc.month_list')
  const { year, month, isCurrentYear } = archiveInfo
  return isCurrentYear ? `${monthList[month]} ${year}` : year
}

export function getArchiveLink(archiveInfo) {
  const { year, month, isCurrentYear } = archiveInfo
  return isCurrentYear ? `/blog/${year}/${month + 1}` : `/blog/${year}`
}

/**
 * @param {Date[]} postDateList
 * @returns {{isCurrentYear: boolean, month: number, year: number}[]}
 */
export function generateArchiveList(postDateList) {
  const sortedDates = [...postDateList].sort((a, b) => b - a)
  const archiveMap = new Map()

  sortedDates.forEach((date) => {
    const archiveInfo = getArchiveInfoFromArticleDate(date)
    const archiveKey = archiveInfo.isCurrentYear
      ? [archiveInfo.year, archiveInfo.month].join('_')
      : archiveInfo.year.toString()

    if (!archiveMap.has(archiveKey)) {
      archiveMap.set(archiveKey, archiveInfo)
    }
  })

  return Array.from(archiveMap.values())
}
