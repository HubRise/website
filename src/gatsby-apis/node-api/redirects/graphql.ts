import { CreatePagesArgs } from 'gatsby'

interface RedirectsData {
  file: {
    childYaml: {
      parsedContent: Array<Redirect>
    }
  }
}

interface Redirect {
  fromPath: string
  toPath: string
}

/**
 * Read and parses the content/redirects.yaml file.
 * @param graphql
 */
export async function getRedirects(
  graphql: CreatePagesArgs['graphql']
): Promise<Array<Redirect>> {
  const { data, errors } = await graphql<RedirectsData>(`
    query {
      file(base: { eq: "redirects.yaml" }, relativeDirectory: { eq: "" }) {
        childYaml {
          parsedContent
        }
      }
    }
  `)

  if (errors) throw errors
  if (!data) throw 'GraphQL returned no data'

  return data.file.childYaml.parsedContent
}
