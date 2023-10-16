"use client"
import * as React from "react"

import { AppsYaml } from "@layouts/Apps/types"
import { ContentImage } from "@utils/contentImage"
import { Language } from "@utils/locales"

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

  const hasFiltersApplied = React.useMemo(() => {
    return selectedCategory === content.all_apps && filterSearch === "" ? false : true
  }, [filterSearch, selectedCategory, content.all_apps])

  const isThereAppResults = React.useMemo(() => {
    let results: boolean = false

    if (!hasFiltersApplied) {
      return true
    }

    if (selectedCategory !== content.all_apps) {
      const selectedCategoryApps = content.categories.filter(({ title }) => title === selectedCategory)
      const filteredApps = selectedCategoryApps.filter((app) =>
        app.title.toLowerCase().includes(filterSearch.toLowerCase()),
      )
      if (filteredApps.length < 0) {
        return false
      }
    }

    content.categories.map(({ apps }) => {
      const filteredApps = apps.filter((app) => app.title.toLowerCase().includes(filterSearch.toLowerCase()))
      if (filteredApps.length > 0) {
        results = true
      }
    })

    return results
  }, [filterSearch, content.categories, hasFiltersApplied, selectedCategory, content.all_apps])

  const onSearchInputChange = (value: string) => {
    setFilterSearch(value)
  }

  const onCategoryChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <>
      <Hero hero={content.hero} />

      <Nav
        language={language}
        categories={content.categories}
        allAppsLabel={content.all_apps}
        selectedCategoryLabel={selectedCategory}
        onCategoryChange={onCategoryChange}
        onSearchInputChange={onSearchInputChange}
      />

      {!isThereAppResults ? (
        <NoResults />
      ) : (
        <>
          {content.categories.map(({ title, apps, has_suggest_app }, idx) => {
            if (selectedCategory === content.all_apps || selectedCategory === title) {
              return (
                <AppGroup
                  key={idx}
                  title={title}
                  apps={apps}
                  logoImages={logoImages}
                  additionalSections={content.additional_sections}
                  hasSuggestApp={has_suggest_app && !hasFiltersApplied}
                  filterSearch={filterSearch}
                />
              )
            }
          })}
        </>
      )}

      <Developer developers={content.developers} />
    </>
  )
}

export default Apps
