"use client"

import { useSearchParams, useRouter, usePathname } from "next/navigation"
import * as React from "react"

import { IntegrationsYaml, TCountry } from "@layouts/Integrations/types"
import { ContentImage } from "@utils/contentImage"
import { Language } from "@utils/locales"
import { doesSearchTextMatch } from "@utils/search"

import AppGroup from "../AppGroup"
import Developer from "../Developer"
import Hero from "../Hero"
import Nav from "../Nav"
import NoResults from "../NoResults"

import { MainContent } from "./Styles"

interface ResultsProps {
  language: Language
  yaml: IntegrationsYaml
  logoImages: { [logo: string]: ContentImage }
}

const Results = ({ language, yaml, logoImages }: ResultsProps): JSX.Element => {
  const { content } = yaml
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const categorySlug = searchParams.get("category")
  const selectedCategory = React.useMemo(() => {
    if (!categorySlug) return content.all_apps
    const category = content.categories.find((c) => c.slug === categorySlug)
    return category ? category.title : content.all_apps
  }, [categorySlug, content.categories, content.all_apps])

  const countryCode = searchParams.get("country")
  const selectedCountry = React.useMemo(() => {
    if (!countryCode) return content.countries[0]
    const country = content.countries.find((c) => c.code === countryCode)
    return country || content.countries[0]
  }, [countryCode, content.countries])

  const [filterSearch, setFilterSearch] = React.useState("")

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

  const updateUrlParams = React.useCallback(
    (updates: { category?: string | null; country?: string | null }) => {
      const params = new URLSearchParams(searchParams.toString())

      Object.entries(updates).forEach(([key, value]) => {
        if (value !== undefined) {
          value ? params.set(key, value) : params.delete(key)
        }
      })

      const query = params.toString()
      router.replace(pathname + (query ? `?${query}` : ""), { scroll: false })
    },
    [searchParams, pathname, router],
  )

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
    const isAllApps = category === content.all_apps
    const categorySlug = isAllApps ? null : content.categories.find((c) => c.title === category)?.slug || null

    updateUrlParams({ category: categorySlug })
    scrollIntoView()
  }

  const onCountryChange = (country: TCountry) => {
    const isAllCountries = country.code === "all"
    updateUrlParams({ country: isAllCountries ? null : country.code })
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

export default Results
