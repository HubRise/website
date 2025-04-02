import * as React from "react"

import useOnClickOutside from "@hooks/client/useOnClickOutside"
import useSticky from "@hooks/client/useSticky"
import useTranslation from "@hooks/client/useTranslation"
import { IntegrationsYaml } from "@layouts/Integrations/types"
import { remIntoPixels } from "@utils/dom"
import { Language } from "@utils/locales"
import { colors, sizes } from "@utils/styles"

import {
  StyledNav,
  Container,
  CategoryFilterWrapper,
  CategoryFilter,
  CategoryList,
  CategoryItem,
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
  allAppsLabel: string
  searchInputValue: string
  onSearchInputChange: (value: string) => void
  selectedCategoryLabel: string
  onCategoryChange: (category: string) => void
}

const Index = ({
  categories,
  allAppsLabel,
  searchInputValue,
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
          <SearchWrapper>
            <SearchIcon code="search" />
            <Input
              autoFocus
              value={searchInputValue}
              placeholder={t("apps.search_input_placeholder")}
              onChange={(e) => {
                onSearchInputChange(e.target.value)
              }}
            />
          </SearchWrapper>

          <CategoryFilterWrapper ref={$categoryListRef} data-testid="apps:categoryfilter">
            <CategoryFilter onClick={() => setIsExpanded((v) => !v)} $isExpanded={isExpanded}>
              {selectedCategoryLabel}
              <ArrowIcon code="expand_more" $isExpanded={isExpanded} />
            </CategoryFilter>

            <CategoryList $isExpanded={isExpanded}>
              <CategoryItem
                $isActive={selectedCategoryLabel === allAppsLabel}
                onClick={() => {
                  handleCategoryItemClick(allAppsLabel)
                }}
              >
                {allAppsLabel}
                {selectedCategoryLabel === allAppsLabel && <CheckIcon code="check" />}
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
                    {selectedCategoryLabel === category.title && <CheckIcon code="check" />}
                  </CategoryItem>
                )
              })}
            </CategoryList>
          </CategoryFilterWrapper>
        </Container>
      </StyledNav>
      <WhiteBlock $isSticky={isSticky} />
    </>
  )
}

export default Index
