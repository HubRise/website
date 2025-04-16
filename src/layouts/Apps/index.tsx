"use client"
import * as React from "react"

import { AppsYaml, TCountry } from "@layouts/Apps/types"
import { ContentImage } from "@utils/contentImage"
import { Language } from "@utils/locales"
import { doesSearchTextMatch } from "@utils/search"

import AppGroup from "./AppGroup"
import Developer from "./Developer"
import Hero from "./Hero"
import Nav from "./Nav"
import NoResults from "./NoResults"

interface AppsProps {
  language: Language
  yaml: AppsYaml
  logoImages: { [logo: string]: ContentImage }
}

const Apps = ({ language, yaml, logoImages }: AppsProps): JSX.Element => {
  const { content } = yaml

  const [filterSearch, setFilterSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState(content.all_apps)
  const [selectedCountry, setSelectedCountry] = React.useState(content.countries[0])

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
    setSelectedCategory(category)
    scrollIntoView()
  }

  const onCountryChange = (country: TCountry) => {
    setSelectedCountry(country)
    scrollIntoView()
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

      <Developer developers={content.developers} />
    </>
  )
}

export default Apps
