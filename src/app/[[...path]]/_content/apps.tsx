import Integrations from "@layouts/Integrations"
import contentImage, { ContentImage } from "@utils/contentImage"
import { Route, RouteName } from "@utils/router/types"

const apps = async (route: Route<RouteName, "apps">): Promise<JSX.Element> => {
  const logoImages: { [logo: string]: ContentImage } = {}
  const apps = route.context.yaml.content.categories.flatMap((category) => category.apps)
  await Promise.all(
    apps.map(async (app) => {
      if (!app.logo) return
      logoImages[app.logo] = await contentImage("/images/app-logos", app.logo)
    }),
  )

  return <Integrations language={route.language} yaml={route.context.yaml} logoImages={logoImages} />
}

export default apps
