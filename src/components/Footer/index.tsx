import { IFooter } from "@components/Footer/types"
import { readYamlFile } from "@utils/files"
import { Language } from "@utils/locales"

import ClientFooter from "./ClientFooter"

export interface FooterProps {
  language: Language
}

const Footer = async ({ language }: FooterProps): Promise<JSX.Element> => {
  const footerData = (await readYamlFile(`/${language}`, "menu-footer")) as IFooter
  return <ClientFooter footerData={footerData} />
}

export default Footer
