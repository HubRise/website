import * as React from "react"

import useOnClickOutside from "@hooks/client/useOnClickOutside"
import useSticky from "@hooks/client/useSticky"
import useTranslation from "@hooks/client/useTranslation"
import { AppsYaml } from "@layouts/Apps/types"
import { remIntoPixels } from "@utils/dom"
import { Language } from "@utils/locales"
import { sizes } from "@utils/styles"

import {
  StyledNav,
  Container,
  CategoryFitlerWrapper,
  CategoryFitler,
  CategoryList,
  CategoryItem,
  ArrowIcon,
  SearchWrapper,
  Input,
  SearchIcon,
} from "./Styles"

interface NavProps {
  language: Language
  categories: AppsYaml["content"]["categories"]
  allAppsLabel: string
  onSearchInputChange: (value: string) => void
  selectedCategoryLabel: string
  onCategoryChange: (category: string) => void
}

const Index = ({
  categories,
  allAppsLabel,
  onSearchInputChange,
  selectedCategoryLabel,
  onCategoryChange,
}: NavProps): JSX.Element => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const $navRef = React.useRef<HTMLDivElement>(null)
  const $categoryListRef = useOnClickOutside(() => {
    setIsExpanded(false)
  })
  const headerHeightInPixels = React.useMemo(() => remIntoPixels(sizes.headerHeight), [])
  const isSticky = useSticky($navRef, headerHeightInPixels)

  const { t } = useTranslation()

  const handleCategoryItemClick = (category: string) => {
    onCategoryChange(category)
    setIsExpanded(false)
  }

  return (
    <>
      <StyledNav ref={$navRef} $isSticky={isSticky}>
        <Container>
          <SearchWrapper>
            <SearchIcon code="search" />
            <Input
              placeholder={t("apps.search_input_placeholder")}
              onChange={(e) => {
                onSearchInputChange(e.target.value)
              }}
            ></Input>
          </SearchWrapper>
          <CategoryFitlerWrapper ref={$categoryListRef}>
            <CategoryFitler onClick={() => setIsExpanded((v) => !v)}>
              {selectedCategoryLabel}
              <ArrowIcon code={isExpanded ? "expand_less" : "expand_more"} />
            </CategoryFitler>

            <CategoryList $isExpanded={isExpanded}>
              <CategoryItem
                $isActive={selectedCategoryLabel === allAppsLabel}
                onClick={() => {
                  handleCategoryItemClick(allAppsLabel)
                }}
              >
                {allAppsLabel}
              </CategoryItem>
              {categories.map((category, idx) => {
                return (
                  <CategoryItem
                    key={idx}
                    $isActive={selectedCategoryLabel === category.title}
                    onClick={() => {
                      handleCategoryItemClick(category.title)
                    }}
                  >
                    {category.title}
                  </CategoryItem>
                )
              })}
            </CategoryList>
          </CategoryFitlerWrapper>
        </Container>
      </StyledNav>
    </>
  )
}

export default Index
