describe(`website`, () => {
  it(`doesn't crash and burn`, () => {
    const englishPages = [
      '/api/account_management',
      '/api/callbacks',
      '/api/catalog_management',
      '/api/extensions',
      '/api/general_concepts',
      '/api/order_management',

      '/apps/ikentoo/developer_guide',
      '/apps/ikentoo/installation',
      '/apps/ikentoo/integration_guide',
      '/apps/ikentoo/overview',

      '/apps/livepepper/installation',
      '/apps/livepepper/integration_guide',
      '/apps/livepepper/overview',

      '/apps/myorderbox/installation',
      '/apps/myorderbox/integration_guide',
      '/apps/myorderbox/overview',

      '/developers/authentication',
      '/developers/integration',
      '/developers/quick_start',

      '/apps',
      '/'
    ]

    const frenchPages = englishPages.map((page) => '/fr' + page)

    const englishOnlyPages = ['/developers', '/pricing', '/about']
    const frenchOnlyPages = ['/developpeurs', '/faq', '/tarifs'].map(
      (page) => '/fr' + page
    )

    englishPages
      .concat(englishOnlyPages, frenchPages, frenchOnlyPages)
      .map((pagePath) => pagePath.replace(/_/g, '-'))
      .forEach((page) => {
        cy.visit(page)
      })
  })

  it(`renders elements, allows interaction and navigation between various pages`, () => {
    cy.viewport(1024, 660)

    cy.visit(`/`)
    cy.contains(`form`, `Create your account`)
    cy.contains(`HubRise makes POS integration easy`)
    cy.contains(`li`, `Developers`).click()
    cy.contains(`Contact us`).click()
    cy.get(`div[role="dialog"]`).should(`be.visible`)

    cy.visit(`/fr`)
    cy.contains(`form`, `Créer votre compte`)
    cy.contains(`li`, `Apps`).click()
    cy.contains(`LivePepper`)

    cy.visit(`/fr/api/catalog-management`)
    cy.get(`h2#skus a`).click()
    cy.url().should(`include`, `#skus`)
  })
})
