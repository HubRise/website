import { SidebarArticle } from './graphql'
import { ArchiveInfo } from '../interface'

export function getRecentArticles(
  sidebarArticles: Array<SidebarArticle>
): Array<SidebarArticle> {
  return sidebarArticles
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)
}

function getArchiveInfoFromArticleDate(articleDate: Date): ArchiveInfo {
  return {
    year: articleDate.getFullYear(),
    month: articleDate.getMonth(),
    isCurrentYear: articleDate.getFullYear() === new Date().getFullYear()
  }
}

export function getArchiveTitle(archiveInfo: ArchiveInfo, t) {
  const monthList = t('misc.month_list')
  const { year, month, isCurrentYear } = archiveInfo
  return isCurrentYear ? `${monthList[month]} ${year}` : year
}

export function getArchiveLink(archiveInfo: ArchiveInfo) {
  const { year, month, isCurrentYear } = archiveInfo
  return isCurrentYear ? `/blog/${year}/${month + 1}` : `/blog/${year}`
}

function sortDates(dates: Array<Date>): Array<Date> {
  return [...dates].sort((a, b) => b.getTime() - a.getTime())
}

export function generateArchiveList(
  postDateList: Array<Date>
): Array<ArchiveInfo> {
  const sortedDates = sortDates(postDateList)
  const archiveMap = new Map()

  for (let date of sortedDates) {
    const archiveInfo = getArchiveInfoFromArticleDate(date)
    const archiveKey = archiveInfo.isCurrentYear
      ? [archiveInfo.year, archiveInfo.month].join('_')
      : archiveInfo.year.toString()

    if (!archiveMap.has(archiveKey)) {
      archiveMap.set(archiveKey, archiveInfo)
    }
  }

  return [...archiveMap.values()]
}
