import Image from "next/image"

import Icon from "@components/Icon"
import { iconSizes } from "@utils/styles"

import { TIncludedApp } from "../shared/types"

import { App, AppList, AppContent, AppTitle, AppDescription, AppLink } from "./Styles"

interface IncludedAppsProps {
  included_apps: Array<TIncludedApp>
  onLinkClick?: () => void
}

const IncludedApps = ({ included_apps, onLinkClick }: IncludedAppsProps) => {
  return (
    <AppList>
      {included_apps.map((app, index) => {
        return (
          <App key={index} href={app.link} onClick={onLinkClick}>
            <Image src={`/images/header/${app.image}`} alt={app.title} width={144} height={80} />
            <AppContent>
              <AppTitle>{app.title}</AppTitle>
              <AppDescription>{app.description}</AppDescription>
              <AppLink>
                {app.link_label}
                <Icon code="arrow_forward" size={iconSizes._20} />
              </AppLink>
            </AppContent>
          </App>
        )
      })}
    </AppList>
  )
}

export default IncludedApps
