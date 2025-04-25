import { Metadata } from "next"
import * as React from "react"

import Footer from "@components/Footer"
import Header from "@components/Header"
import Layout from "@components/Layout"
import PageNotFound from "@layouts/PageNotFound"
import { Language, LanguagePaths } from "@utils/locales"
import router from "@utils/router"
import allRoutes from "@utils/router/allRoutes"

import { renderContent } from "./_content"
import { metadata, metadata404 } from "./_metadata"
import { findRoute, Params, pathLanguage404 } from "./_utils"

export async function generateStaticParams(): Promise<Array<Params>> {
  const routes = await allRoutes()
  return routes.map((route) => {
    const pathElements = route.href.replace(/^\//, "").split("/")
    return { path: pathElements }
  })
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const theRouter = await router()
  const route = await findRoute(params, theRouter)
  if (route) {
    return await metadata(route)
  } else {
    return await metadata404(params.path)
  }
}

export default async function Page({ params }: { params: Params }): Promise<JSX.Element> {
  const theRouter = await router()
  const route = await findRoute(params, theRouter)

  if (route) {
    const { language } = route
    const languagePaths: LanguagePaths = {
      en: language === "en" ? undefined : (await router()).changeLanguage(route, "en").href,
      fr: language === "fr" ? undefined : (await router()).changeLanguage(route, "fr").href,
    }
    const content = await renderContent(route, theRouter)
    return render(language, languagePaths, content)
  } else {
    const language = pathLanguage404(params.path)
    const languagePaths: LanguagePaths = { en: "/", fr: "/fr" }
    return render(language, languagePaths, <PageNotFound />)
  }
}

const render = async (language: Language, languagePaths: LanguagePaths, content: JSX.Element): Promise<JSX.Element> => {
  const header = <Header language={language} languagePaths={languagePaths} />
  const footer = <Footer language={language} />
  return (
    <Layout language={language} header={header} footer={footer}>
      {content}
    </Layout>
  )
}
