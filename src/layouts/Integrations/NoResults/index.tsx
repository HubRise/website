import useTranslation from "@hooks/client/useTranslation"

import { StyledNoResults } from "./Styles"

const NoResults = () => {
  const { t } = useTranslation()

  return <StyledNoResults>{t("apps.no_results_message")}</StyledNoResults>
}

export default NoResults
