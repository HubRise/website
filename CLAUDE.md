## Shell Commands

- Cypress: `npx cypress run`
- Vitest: `npx vitest run`
- ESLint: `npx eslint .`

## Taking screenshots

- Do not start the server, as it is usually already started by the user.

- Screenshot: `yarn screenshot [url] [options]` - Takes a screenshot and saves to ./screenshots/
  - Desktop (default): `yarn screenshot /apps`
  - Mobile: `yarn screenshot /apps --mobile`
  - Tablet: `yarn screenshot /apps --tablet`
  - Custom size: `yarn screenshot /apps --width=1920 --height=1080`

## Documentation pages and links

- The file names are always in English, and follow a strict naming convention, which you can find in other documentation files.
- Anchors must be explicitely defined in the target file using `{#put-anchor-here}`, and should be in English.
- Paths use the file name and the optional anchor name, not the actual URL. The language prefix is not included. For example, the link to the anchor `#find-ref-code` in the file `content/apps/zelty-bridge/fr/pull-catalog.md` is `/apps/zelty-bridge/pull-catalog#find-ref-code`, it is NOT `/fr/apps/zelty-bridge/recuperer-catalogue#find-ref-code`.
