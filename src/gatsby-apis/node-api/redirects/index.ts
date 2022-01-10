import { CreatePagesArgs } from "gatsby"

import { getRedirects } from "./graphql"

export async function createPages({ graphql, actions }: CreatePagesArgs): Promise<void> {
  const redirects = await getRedirects(graphql)

  for (const redirect of redirects) {
    actions.createRedirect({
      isPermanent: true,
      ...redirect,
      force: true,
      redirectInBrowser: true,
    })
  }
}
