import * as React from "react"

import useOnClickOutside from "@hooks/client/useOnClickOutside"
import useSticky from "@hooks/client/useSticky"
import useTranslation from "@hooks/client/useTranslation"
import { IntegrationsYaml, TCountry } from "@layouts/Integrations/types"
import { remIntoPixels } from "@utils/dom"
import { Language } from "@utils/locales"
import { colors, sizes } from "@utils/styles"

import {
  StyledNav,
  Container,
  FilterWrapper,
  FilterButton,
  FilterList,
  FilterListItem,
  ArrowIcon,
  SearchWrapper,
  Input,
  SearchIcon,
  CheckIcon,
  WhiteBlock,
} from "./Styles"

interface NavProps {
  language: Language
  categories: IntegrationsYaml["content"]["categories"]
  countries: IntegrationsYaml["content"]["countries"]
  allAppsLabel: string
  searchInputValue: string
  onSearchInputChange: (value: string) => void
  selectedCategoryLabel: string
  onCategoryChange: (category: string) => void
  selectedCountryLabel: string
  onCountryChange: (country: TCountry) => void
}

const Index = ({
  categories,
  countries,
  allAppsLabel,
  searchInputValue,
  onSearchInputChange,
  selectedCategoryLabel,
  onCategoryChange,
  selectedCountryLabel,
  onCountryChange,
}: NavProps): JSX.Element => {
  const [isCategoriesExpanded, setIsCategoriesExpanded] = React.useState(false)
  const [isCountriesExpanded, setIsCountriesExpanded] = React.useState(false)

  const $navRef = React.useRef<HTMLDivElement>(null)
  const $inputRef = React.useRef<HTMLInputElement>(null)
  const $categoryListRef = useOnClickOutside(() => {
    setIsCategoriesExpanded(false)
  })
  const $countryListRef = useOnClickOutside(() => {
    setIsCountriesExpanded(false)
  })

  const headerHeightInPixels = React.useMemo(() => remIntoPixels(sizes.headerHeight), [])
  const isSticky = useSticky($navRef, headerHeightInPixels)

  const { t } = useTranslation()

  const handleSearchWrapperClick = () => {
    if ($inputRef.current) {
      $inputRef.current.focus()
      $inputRef.current.select()
    }
  }

  const handleCategoryItemClick = (category: string) => {
    onCategoryChange(category)
    setIsCategoriesExpanded(false)
  }

  const handleCountryItemClick = (country: TCountry) => {
    onCountryChange(country)
    setIsCountriesExpanded(false)
  }

  React.useEffect(() => {
    const desktopHeader = document.querySelectorAll<HTMLDivElement>('[data-testid="header:desktop"]')[0]
    const mobileHeader = document.querySelectorAll<HTMLDivElement>('[data-testid="header:mobile"]')[0]
    const stickyBorderColor = colors.primary
    const unstickyBorderColor = colors.headerBorder

    if (isSticky) {
      desktopHeader.style.borderColor = stickyBorderColor
      mobileHeader.style.borderColor = stickyBorderColor
    } else {
      desktopHeader.style.borderColor = unstickyBorderColor
      mobileHeader.style.borderColor = unstickyBorderColor
    }
  }, [isSticky])



  return (
    <>
      <StyledNav ref={$navRef} $isSticky={isSticky}>
        <Container $isSticky={isSticky}>
          <SearchWrapper onClick={handleSearchWrapperClick}>
            <SearchIcon code="search" />
            <Input
              ref={$inputRef}
              autoFocus
              value={searchInputValue}
              placeholder={t("apps.search_input_placeholder")}
              onChange={(e) => onSearchInputChange(e.target.value)}
              onFocus={(e) => e.target.select()}
            />
          </SearchWrapper>

          <FilterWrapper ref={$categoryListRef} data-testid="apps:categoryfilter">
            <FilterButton onClick={() => setIsCategoriesExpanded((v) => !v)}>
              {selectedCategoryLabel}
              <ArrowIcon code="expand_more" $isExpanded={isCategoriesExpanded} />
            </FilterButton>

            <FilterList $isExpanded={isCategoriesExpanded}>
              <FilterListItem
                $isActive={selectedCategoryLabel === allAppsLabel}
                onClick={() => handleCategoryItemClick(allAppsLabel)}
              >
                {allAppsLabel}
                {selectedCategoryLabel === category.title && <CheckIcon code="check" />}
              </FilterListItem>
              {categories.map((category, idx) => {
                return (
                  <FilterListItem
                    key={idx}
                    $isActive={selectedCategoryLabel === category.title}
                    onClick={() => handleCategoryItemClick(category.title)}
                  >
                    {category.title}
                    {selectedCategoryLabel === category.title && <CheckIcon code="check" />}
                  </FilterListItem>
                )
              })}
            </FilterList>
          </FilterWrapper>

          <FilterWrapper ref={$countryListRef} data-testid="apps:countryfilter">
            <FilterButton onClick={() => setIsCountriesExpanded((v) => !v)}>
              {selectedCountryLabel}
              <ArrowIcon code="expand_more" $isExpanded={isCountriesExpanded} />            </FilterButton>

            <FilterList $isExpanded={isCountriesExpanded}>
              {countries
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((country, idx) => {
                  return (
                    <FilterListItem
                      key={idx}
                      $isActive={selectedCountryLabel === country.title}
                      onClick={() => handleCountryItemClick(country)}
                    >
                      {country.title}
                      {selectedCountryLabel === country.title && <CheckIcon code="check" />}
                    </FilterListItem>
                  )
                })}
            </FilterList>
          </FilterWrapper>
        </Container>
      </StyledNav>
      <WhiteBlock $isSticky={isSticky} />
    </>
  )
}

export default Index
