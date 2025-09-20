import { useState } from "react"

import Icon from "@components/Icon"
import useOnClickOutside from "@hooks/client/useOnClickOutside"
import { colors, iconSizes } from "@utils/styles"

import {
  DropdownTrigger,
  DropdownMenu,
  DropdownList,
  DropdownListItem,
  DropdownMenuContent,
  DropdownContainer,
  DropdownListLink,
} from "./Styles"

export type TDropdownOption = {
  link_label: string
  link: string
}

export type TPosition = "left" | "center" | "bigMenu"

interface DropdownProps {
  value: string
  dataTestid?: string
  withOptions?: boolean
  options?: Array<TDropdownOption>
  menuContent?: React.ReactNode
  position?: TPosition
}

const Dropdown = ({
  value,
  dataTestid,
  withOptions = false,
  options,
  menuContent,
  position = "left",
}: DropdownProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleTriggerClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const $dropdownContainerRef = useOnClickOutside(() => {
    setIsMenuOpen(false)
  })

  return (
    <DropdownContainer ref={$dropdownContainerRef} data-testid={dataTestid}>
      <DropdownTrigger onClick={handleTriggerClick} $isOpen={isMenuOpen}>
        {value}
        <Icon code="expand_more" size={iconSizes._20} />
      </DropdownTrigger>

      {isMenuOpen && (
        <DropdownMenu $position={position}>
          {withOptions ? (
            <DropdownList>
              {options?.map((option, index) => {
                const isActive = option.link_label.toLocaleLowerCase() === value.toLocaleLowerCase()
                return (
                  <DropdownListItem $isActive={isActive} key={index}>
                    {isActive ? (
                      <>
                        {option.link_label}
                        {isActive && <Icon code="check" size={iconSizes._20} color={colors.primary} />}
                      </>
                    ) : (
                      <DropdownListLink href={option.link}>
                        {option.link_label}
                        {isActive && <Icon code="check" size={iconSizes._20} color={colors.primary} />}
                      </DropdownListLink>
                    )}
                  </DropdownListItem>
                )
              })}
            </DropdownList>
          ) : (
            <DropdownMenuContent>{menuContent}</DropdownMenuContent>
          )}
        </DropdownMenu>
      )}
    </DropdownContainer>
  )
}

export default Dropdown
