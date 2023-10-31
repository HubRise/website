import { useLayoutContext } from "@components/LayoutContext"
import { defaultLanguage, getBackOfficeLocale } from "@utils/locales"

const useClientRoutes = () => {
  const { language } = useLayoutContext()
  const locale = getBackOfficeLocale(language)

  return {
    home: language === defaultLanguage ? "/" : `/${language}`,
    signup: `https://manager.hubrise.com/signup?locale=${locale}`,
    login: `https://manager.hubrise.com/login?locale=${locale}`,
  }
}

export default useClientRoutes
