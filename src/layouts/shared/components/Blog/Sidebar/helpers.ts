import { TFunction } from "react-i18next"

import { ArchiveInfo } from "../interface"

import { SidebarArticle } from "./graphql"

export function getRecentArticles(sidebarArticles: Array<SidebarArticle>): Array<SidebarArticle> {
  return sidebarArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)
}

function getArchiveInfoFromArticleDate(articleDate: Date): ArchiveInfo {
  return {
    year: articleDate.getFullYear(),
    month: articleDate.getMonth(),
    isCurrentYear: articleDate.getFullYear() === new Date().getFullYear(),
  }
}

export function getArchiveTitle(archiveInfo: ArchiveInfo, t: TFunction<"translation">): string {
  const monthList = t("misc.month_list")
  const { year, month, isCurrentYear } = archiveInfo
  return isCurrentYear ? `${monthList[month]} ${year}` : String(year)
}

export function getArchiveLink(archiveInfo: ArchiveInfo): string {
  const { year, month, isCurrentYear } = archiveInfo
  return isCurrentYear ? `/blog/${year}/${month + 1}` : `/blog/${year}`
}

function sortDates(dates: Array<Date>): Array<Date> {
  return [...dates].sort((a, b) => b.getTime() - a.getTime())
}

export function generateArchiveList(postDateList: Array<Date>): Array<ArchiveInfo> {
  const sortedDates = sortDates(postDateList)
  const archiveMap = new Map()

  for (const date of sortedDates) {
    const archiveInfo = getArchiveInfoFromArticleDate(date)
    const archiveKey = archiveInfo.isCurrentYear
      ? [archiveInfo.year, archiveInfo.month].join("_")
      : archiveInfo.year.toString()

    if (!archiveMap.has(archiveKey)) {
      archiveMap.set(archiveKey, archiveInfo)
    }
  }

  return [...archiveMap.values()]
}
