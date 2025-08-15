"use client"
import { useSearchParams, useRouter, usePathname } from "next/navigation"
import * as React from "react"

import { IntegrationsYaml, TCountry } from "@layouts/Integrations/types"
import { ContentImage } from "@utils/contentImage"
import { Language } from "@utils/locales"
import { doesSearchTextMatch } from "@utils/search"

import AppGroup from "./AppGroup"
import Developer from "./Developer"
import Hero from "./Hero"
import Nav from "./Nav"
import NoResults from "./NoResults"
import { MainContent } from "./Styles"

interface IntegrationsProps {
  language: Language
  yaml: IntegrationsYaml
  logoImages: { [logo: string]: ContentImage }
}

const Integrations = ({ language, yaml, logoImages }: IntegrationsProps): JSX.Element => {
  const { content } = yaml

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const [filterSearch, setFilterSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState(content.all_apps)
  const [selectedCountry, setSelectedCountry] = React.useState(content.countries[0])

  React.useEffect(() => {
    if (searchParams.get("type") || searchParams.get("country")) {
      const category = content.categories.find((category) => category.slug === searchParams.get("type"))
      const country = content.countries.find((country) => country.code.toLowerCase() === searchParams.get("country"))

      if (category?.title !== undefined) {
        setSelectedCategory(category?.title)
      }
      if (country !== undefined) {
        setSelectedCountry(country)
      }

      scrollIntoView()
    }
  }, [searchParams, content])

  const hasFiltersApplied = React.useMemo(() => {
    return !(selectedCategory === content.all_apps && filterSearch === "")
  }, [filterSearch, selectedCategory, content.all_apps])

  const filteredAppsByCategory = React.useMemo(() => {
    const filteredCategories = content.categories.map(({ title, slug, apps, has_suggest_app }) => {
      const filteredApps = apps.filter(
        (app) =>
          (!filterSearch || doesSearchTextMatch(app.title, filterSearch)) &&
          (selectedCountry.code === "all" || !app.country || app.country.includes(selectedCountry.code)) &&
          (selectedCategory === content.all_apps || selectedCategory === title),
      )

      return {
        title,
        slug,
        apps: filteredApps,
        has_suggest_app,
      }
    })

    return filteredCategories.filter(({ apps }) => apps.length > 0)
  }, [content.categories, content.all_apps, filterSearch, selectedCountry.code, selectedCategory])

  const replacePath = (key: string, value: string) => {
    params.set(key, value.replace(/\s+/g, "-").toLowerCase())
    const newUrl = `${pathname}?${params.toString()}`
    router.push(newUrl)
  }

  const deleteParams = (key: string) => {
    params.delete(key)
    const queryString = params.toString()
    const newUrl = `${pathname}${queryString ? `?${queryString}` : ""}`
    router.push(newUrl)
  }

  const scrollIntoView = () => {
    setTimeout(() => {
      const appsResults = document.getElementById("apps-results")
      appsResults!.scrollIntoView({ behavior: "auto" })
    }, 0)
  }

  const onSearchInputChange = (value: string) => {
    setFilterSearch(value)
    scrollIntoView()
  }

  const onCategoryChange = (category: string) => {
    if (category === content.all_apps) {
      deleteParams("type")
      setSelectedCategory(category)
      scrollIntoView()
    } else {
      replacePath("type", category)
    }
  }

  const onCountryChange = (country: TCountry) => {
    if (country.code === "all") {
      deleteParams("country")
      setSelectedCountry(country)
      scrollIntoView()
    } else {
      replacePath("country", country.code)
    }
  }

  return (
    <>
      <Hero hero={content.hero} />

      <Nav
        language={language}
        categories={content.categories}
        countries={content.countries}
        allAppsLabel={content.all_apps}
        selectedCategoryLabel={selectedCategory}
        onCategoryChange={onCategoryChange}
        selectedCountryLabel={selectedCountry.title}
        onCountryChange={onCountryChange}
        searchInputValue={filterSearch}
        onSearchInputChange={onSearchInputChange}
      />

      <div id="apps-results" />

      <MainContent>
        {filteredAppsByCategory.length > 0 ? (
          filteredAppsByCategory.map(({ title, slug, apps, has_suggest_app }, idx) => (
            <AppGroup
              key={idx}
              title={title}
              slug={slug}
              apps={apps}
              logoImages={logoImages}
              additionalSections={content.additional_sections}
              hasSuggestApp={has_suggest_app && !hasFiltersApplied}
            />
          ))
        ) : (
          <NoResults />
        )}
      </MainContent>

      <Developer developers={content.developers} />
    </>
  )
}

export default Integrations
