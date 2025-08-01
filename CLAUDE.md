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
