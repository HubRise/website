## Shell Commands

- Cypress: `npx cypress run`
- Vitest: `npx vitest run`
- ESLint: `npx eslint .`

## Visual Inspection

- Screenshot: `yarn screenshot [url] [options]` - Takes a screenshot and saves to ./screenshots/
  - Desktop (default): `yarn screenshot /apps`
  - Mobile: `yarn screenshot /apps --mobile`
  - Tablet: `yarn screenshot /apps --tablet`
  - Custom size: `yarn screenshot /apps --width=1920 --height=1080`
