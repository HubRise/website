import Icon from "@components/Icon"
import { colors, iconSizes } from "@utils/styles"

import {
  DropdownTrigger,
  DropdownMenuWrapper,
  DropdownMenu,
  DropdownList,
  DropdownListItem,
  DropdownMenuContent,
  DropdownContainer,
  DropdownListLink,
  DropdownOverlay,
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
  return (
    <>
      <DropdownContainer data-testid={dataTestid}>
        <DropdownTrigger>
          {value}
          <Icon code="expand_more" size={iconSizes._20} />
        </DropdownTrigger>

        <DropdownMenuWrapper $position={position}>
          <DropdownMenu>
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
        </DropdownMenuWrapper>
      </DropdownContainer>

      <DropdownOverlay />
    </>
  )
}

export default Dropdown
