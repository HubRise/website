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

  const filteredAppsByCategory = React.useMemo(() => {
    if (filterSearch === "") {
      return content.categories
    }

    const filterResults = content.categories.map(({ title, apps, has_suggest_app }) => {
      return {
        title,
        apps: apps.filter((app) => app.title.toLowerCase().includes(filterSearch.toLowerCase())),
        has_suggest_app,
      }
    })

    return filterResults.filter(({ apps }) => apps.length > 0)
  }, [filterSearch, content.categories])

  const onSearchInputChange = (value: string) => {
    setFilterSearch(value)
    setSelectedCategory(content.all_apps)
  }

  const onCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setFilterSearch("")
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
        searchInputValue={filterSearch}
        onSearchInputChange={onSearchInputChange}
      />

      <div data-testid="apps:results">
        {filteredAppsByCategory.length > 0 ? (
          <>
            {filteredAppsByCategory.map(({ title, apps, has_suggest_app }, idx) => {
              if (selectedCategory === content.all_apps || selectedCategory === title) {
                return (
                  <AppGroup
                    key={idx}
                    title={title}
                    apps={apps}
                    logoImages={logoImages}
                    additionalSections={content.additional_sections}
                    hasSuggestApp={has_suggest_app && !hasFiltersApplied}
                  />
                )
              }
            })}
          </>
        ) : (
          <NoResults />
        )}
      </div>

      <Developer developers={content.developers} />
    </>
  )
}

export default Apps
