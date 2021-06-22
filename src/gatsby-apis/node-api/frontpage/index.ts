import { CreatePagesArgs } from 'gatsby'

import { createYamlPages } from '../util/createYamlPages'

export async function createPages(args: CreatePagesArgs): Promise<void> {
  await createYamlPages('frontpage.yaml', 'frontpage', args)
}
