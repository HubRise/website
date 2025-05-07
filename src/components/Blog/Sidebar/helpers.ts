import type { UseTranslationResponse } from "react-i18next"

export function getYearArchiveTitle(year: number, _t: UseTranslationResponse<any, any>["0"]): string {
  return year.toString()
}
