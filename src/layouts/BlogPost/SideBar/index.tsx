import * as React from "react"

import Button from "@components/Button"
import Card from "@components/Card"
import Icon from "@components/Icon"
import useTranslation from "@hooks/client/useTranslation"
import { iconSizes } from "@utils/styles"

import { StyledSideBar, Buttons, OtherPosts, PostLink, PostLinkText, SideBarButton, SideBarButtonLink } from "./Styles"
import { FacebookSVG, LinkedInSVG } from "./svg"

interface SideBarProps {
  otherPosts: Array<{
    title: string
    link: string
  }>
}

const SideBar = ({ otherPosts }: SideBarProps): JSX.Element => {
  const [postLink, setPostLink] = React.useState<string>("")
  const { t } = useTranslation()

  React.useEffect(() => {
    setPostLink(window.location.href)
  }, [])

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(postLink)
  }

  return (
    <StyledSideBar>
      <Buttons>
        <Button
          label={t("misc.copy_link")}
          icon={<Icon code="content_copy" size={iconSizes._20} />}
          type="secondary"
          onClick={handleCopyUrl}
        />
        <SideBarButtonLink href={`mailto:?body=${postLink}.`}>
          <SideBarButton>
            <Icon code="mail" size={24} />
          </SideBarButton>
        </SideBarButtonLink>
        <SideBarButtonLink href={`https://www.facebook.com/sharer.php?u=${postLink}`} target="_blank">
          <SideBarButton>
            <FacebookSVG />
          </SideBarButton>
        </SideBarButtonLink>
        <SideBarButtonLink href={`https://www.linkedin.com/sharing/share-offsite/?url=${postLink}`} target="_blank">
          <SideBarButton>
            <LinkedInSVG />
          </SideBarButton>
        </SideBarButtonLink>
      </Buttons>

      <OtherPosts>
        {otherPosts.slice(0, 10).map(({ title, link }, index) => {
          return (
            <Card key={index}>
              <PostLink href={link}>
                <PostLinkText>{title}</PostLinkText>
                <SideBarButton>
                  <Icon code="arrow_outward" size={24} />
                </SideBarButton>
              </PostLink>
            </Card>
          )
        })}
      </OtherPosts>
    </StyledSideBar>
  )
}

export default SideBar
