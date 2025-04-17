import * as React from "react"

import useOnClickOutside from "@hooks/client/useOnClickOutside"
import useSticky from "@hooks/client/useSticky"
import useTranslation from "@hooks/client/useTranslation"
import { IntegrationsYaml, TCountry } from "@layouts/Integrations/types"
import { remIntoPixels } from "@utils/dom"
import { Language } from "@utils/locales"
import { sizes } from "@utils/styles"
import { useIntegrationsContext } from "context/IntegrationsContext"

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
  const { setIsIntegrationsNavSticky } = useIntegrationsContext()

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
    setIsIntegrationsNavSticky(isSticky)
  }, [setIsIntegrationsNavSticky, isSticky])

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
            <FilterButton onClick={() => setIsCategoriesExpanded((v) => !v)} $isExpanded={isCategoriesExpanded}>
              {selectedCategoryLabel}
              <ArrowIcon code="expand_more" $isExpanded={isCategoriesExpanded} />
            </FilterButton>

            <FilterList $isExpanded={isCategoriesExpanded}>
              {[allAppsLabel, ...categories.map((category) => category.title)].map((label, idx) => (
                <FilterListItem
                  key={idx}
                  $isActive={selectedCategoryLabel === label}
                  onClick={() => handleCategoryItemClick(label)}
                >
                  {label}
                  {selectedCategoryLabel === label && <CheckIcon code="check" />}
                </FilterListItem>
              ))}
            </FilterList>
          </FilterWrapper>

          <FilterWrapper ref={$countryListRef} data-testid="apps:countryfilter">
            <FilterButton onClick={() => setIsCountriesExpanded((v) => !v)} $isExpanded={isCountriesExpanded}>
              {selectedCountryLabel}
              <ArrowIcon code="expand_more" $isExpanded={isCountriesExpanded} />{" "}
            </FilterButton>

            <FilterList $isExpanded={isCountriesExpanded}>
              {countries
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((country, idx) => (
                  <FilterListItem
                    key={idx}
                    $isActive={selectedCountryLabel === country.title}
                    onClick={() => handleCountryItemClick(country)}
                  >
                    {country.title}
                    {selectedCountryLabel === country.title && <CheckIcon code="check" />}
                  </FilterListItem>
                ))}
            </FilterList>
          </FilterWrapper>
        </Container>
      </StyledNav>
      <WhiteBlock $isSticky={isSticky} />
    </>
  )
}

export default Index
