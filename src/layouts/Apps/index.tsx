"use client"
import * as React from "react"

import { AppsYaml } from "@layouts/Apps/types"
import { ContentImage } from "@utils/contentImage"
import { Language } from "@utils/locales"

import AppGroup from "./AppGroup"
import Developer from "./Developer"
import Hero from "./Hero"
import Nav from "./Nav"

interface AppsProps {
  language: Language
  yaml: AppsYaml
  logoImages: { [logo: string]: ContentImage }
  categoryTitle?: string
}

const Apps = ({ language, yaml, logoImages, categoryTitle }: AppsProps): JSX.Element => {
  const { content } = yaml

  const [filterSearch, setFilterSearch] = React.useState("")

  const onSearchInputChange = (value: string) => {
    setFilterSearch(value)
  }

  return (
    <>
      <Hero hero={content.hero} />

      <Nav
        language={language}
        categories={content.categories}
        allAppsLabel={content.all_apps}
        onSearchInputChange={onSearchInputChange}
      />

      {content.categories.map(({ title, apps, has_suggest_app }, idx) => {
        if (!categoryTitle || categoryTitle === title) {
          return (
            <AppGroup
              key={idx}
              title={title}
              showTitle={!categoryTitle}
              apps={apps}
              logoImages={logoImages}
              additionalSections={content.additional_sections}
              hasSuggestApp={has_suggest_app}
              filterSearch={filterSearch}
            />
          )
        }
      })}
      <Developer developers={content.developers} />
    </>
  )
}

export default Apps
