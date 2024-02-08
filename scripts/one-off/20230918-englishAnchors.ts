// Run the script with:
// tsc 20230918-replaceGeneratedId.ts && node ./20230918-replaceGeneratedId.js

import { existsSync, readFileSync, writeFileSync } from "fs"
import { join } from "path"

import * as glob from "glob"

const kebabify = (input: string, keepCase = false): string => {
  const result = input
    .split(/[^\w]+/g)
    .filter(Boolean)
    .join(`-`)

  return keepCase ? result : result.toLowerCase()
}

function createHeaderAnchor(header: string): string {
  const regex = /^[\d.]+\s/
  return header.match(regex) ? kebabify(header.replace(regex, ``)) : kebabify(header)
}

type Anchor = [relativePath: string, href: string, generatedAnchor: string, customAnchor: string]

const contentPath = join(__dirname, "../../content")

const addAnchorsToLinks = (anchor: Anchor) => {
  const [, hrefWithLanguage, generatedAnchor, customAnchor] = anchor
  const href = hrefWithLanguage.replace(/\/(en|fr)\//, "/")

  glob("**/*.md", { cwd: contentPath }, (err, files) => {
    if (err) {
      console.error("Error while reading files:", err)
      return
    }

    files.forEach((file) => {
      const path = join(contentPath, file)
      let fileContent = readFileSync(path, "utf-8")
      const regex = new RegExp(`\\(${href}#${generatedAnchor}\\)`, "g")
      fileContent = fileContent.replace(regex, `(${href}#${customAnchor})`)
      writeFileSync(path, fileContent, "utf-8")
    })
  })
}

const addAnchorToHeading = (anchor: Anchor) => {
  const [relativePath, , generatedAnchor, customAnchor] = anchor
  const filePath = join(contentPath, relativePath)

  if (!existsSync(filePath)) {
    console.warn(`File ${filePath} does not exist`)
    return
  }

  const fileContent = readFileSync(filePath, "utf-8")

  const isTitle = (line: string) => {
    const match = line.match(/^#{2,4} (.+)/)
    return match && createHeaderAnchor(match[1]) === generatedAnchor
  }

  const lines = fileContent.split("\n")
  for (let i = 0; i < lines.length; i++) {
    if (isTitle(lines[i])) {
      lines[i] += "(#" + customAnchor + ")"
      break
    }
  }

  const updatedContent = lines.join("\n")
  writeFileSync(filePath, updatedContent, "utf-8")
}

// eslint-disable-next-line max-len
// prettier-ignore
const anchors: Array<Anchor> = [
  ["/apps/aquila-cms/en/map-ref-codes.md", "/apps/aquila-cms/map-ref-codes", "catalog-import", "import-catalog"],
  ["/apps/carre-pos/fr/connect-hubrise.md", "/fr/apps/carre-pos/connexion-hubrise", "donner-acc-s-au-support-de-carr-pos", "give-access"],
  ["/apps/carre-pos/fr/map-ref-codes.md", "/fr/apps/carre-pos/associer-codes-ref", "produits", "products"],
  ["/apps/catalog-manager/en/catalogs.md", "/apps/catalog-manager/catalogs", "duplicate-a-catalog", "duplicate"],
  ["/apps/catalog-manager/en/products.md", "/apps/catalog-manager/products", "create-a-product", "create"],
  ["/apps/coursicab/fr/connect-hubrise.md", "/fr/apps/coursicab/connexion-hubrise", "donner-acc-s-au-support-de-coursicab", "give-access"],
  ["/apps/deliveroo/en/configuration.md", "/apps/deliveroo/configuration", "catalog", "catalog"],
  ["/apps/deliveroo/en/connect-hubrise.md", "/apps/deliveroo/connect-hubrise", "connect-deliveroo-bridge", "connect"],
  ["/apps/deliveroo/en/push-catalog.md", "/apps/deliveroo/push-catalog", "information-sent-to-deliveroo", "information-sent"],
  ["/apps/deliveroo/en/terminology.md", "/apps/deliveroo/terminology", "service-types", "service-types"],
  ["/apps/deliveroo/en/troubleshooting.md", "/apps/deliveroo/troubleshooting", "orders-not-received", "orders-not-received"],
  ["/apps/deliveroo/en/user-interface.md", "/apps/deliveroo/user-interface", "configuration", "configuration"],
  ["/apps/deliveroo/fr/configuration.md", "/fr/apps/deliveroo/configuration", "catalogue", "catalog"],
  ["/apps/deliveroo/fr/connect-hubrise.md", "/fr/apps/deliveroo/connexion-hubrise", "connectez-deliveroo-bridge", "connect"],
  ["/apps/deliveroo/fr/push-catalog.md", "/fr/apps/deliveroo/envoi-catalogue", "informations-envoy-es-deliveroo", "information-sent"],
  ["/apps/deliveroo/fr/terminology.md", "/fr/apps/deliveroo/terminologie", "types-de-service", "service-types"],
  ["/apps/deliveroo/fr/troubleshooting.md", "/fr/apps/deliveroo/depannage", "commandes-non-re-ues", "orders-not-received"],
  ["/apps/deliveroo/fr/user-interface.md", "/fr/apps/deliveroo/interface-utilisateur", "configuration", "configuration"],
  ["/apps/expedy/fr/connect-hubrise.md", "/fr/apps/expedy/connexion-hubrise", "donner-acc-s-au-support-de-expedy", "give-access"],
  ["/apps/foodpanda/en/user-interface.md", "/apps/foodpanda/user-interface", "configuration", "configuration"],
  ["/apps/glovo/en/configuration.md", "/apps/glovo/configuration", "catalog", "catalog"],
  ["/apps/glovo/en/user-interface.md", "/apps/glovo/user-interface", "configuration", "configuration"],
  ["/apps/just-eat-flyt/en/configuration.md", "/apps/just-eat-flyt/configuration", "catalog", "catalog"],
  ["/apps/just-eat-flyt/en/user-interface.md", "/apps/just-eat-flyt/user-interface", "configuration", "configuration"],
  ["/apps/just-eat-flyt/fr/configuration.md", "/fr/apps/just-eat-flyt/configuration", "catalogue", "catalog"],
  ["/apps/just-eat-flyt/fr/push-catalog.md", "/fr/apps/just-eat-flyt/envoi-catalogue", "envoi-du-catalogue", "push-catalog"],
  ["/apps/just-eat-flyt/fr/user-interface.md", "/fr/apps/just-eat-flyt/interface-utilisateur", "page-de-configuration", "configuration"],
  ["/apps/just-eat-takeaway/en/user-interface.md", "/apps/just-eat-takeaway/user-interface", "configuration", "configuration"],
  ["/apps/just-eat-takeaway/fr/user-interface.md", "/fr/apps/just-eat-takeaway/interface-utilisateur", "page-de-configuration", "configuration"],
  ["/apps/kezia/fr/connect-hubrise.md", "/fr/apps/kezia/connexion-hubrise", "donner-acc-s-au-support-kezia-ii", "give-access"],
  ["/apps/kezia/fr/map-ref-codes.md", "/fr/apps/kezia/associer-codes-ref", "exporter-le-catalogue", "export-catalog"],
  ["/apps/kezia/fr/map-ref-codes.md", "/fr/apps/kezia/associer-codes-ref", "produits", "products"],
  ["/apps/kezia/fr/orders.md", "/fr/apps/kezia/commandes", "recevoir-des-commandes", "receive-orders"],
  ["/apps/koust/fr/connect-hubrise.md", "/fr/apps/koust/connexion-hubrise", "connecter-koust", "connect"],
  ["/apps/koust/fr/map-ref-codes.md", "/fr/apps/koust/associer-codes-ref", "produits", "products"],
  ["/apps/leo2/fr/configuration.md", "/fr/apps/leo2/configuration", "comportement-en-cas-de-code-ref-absent-ou-invalide", "missing-ref"],
  ["/apps/leo2/fr/connect-hubrise.md", "/fr/apps/leo2/connexion-hubrise", "cr-er-un-raccourci-sur-le-bureau", "shortcut"],
  ["/apps/leo2/fr/connect-hubrise.md", "/fr/apps/leo2/connexion-hubrise", "d-connecter-leo2", "connect"],
  ["/apps/leo2/fr/connect-hubrise.md", "/fr/apps/leo2/connexion-hubrise", "donner-acc-s-au-support-de-leo2", "give-access"],
  ["/apps/leo2/fr/map-ref-codes.md", "/fr/apps/leo2/associer-codes-ref", "codes-ref-des-types-de-service", "service-types"],
  ["/apps/leo2/fr/map-ref-codes.md", "/fr/apps/leo2/associer-codes-ref", "exporter-le-catalogue", "export-catalog"],
  ["/apps/leo2/fr/map-ref-codes.md", "/fr/apps/leo2/associer-codes-ref", "produits", "products"],
  ["/apps/leo2/fr/map-ref-codes.md", "/fr/apps/leo2/associer-codes-ref", "types-de-service", "service-types"],
  ["/apps/leo2/fr/receive-orders.md", "/fr/apps/leo2/recevoir-commandes", "voir-la-liste-des-commandes", "order-list"],
  ["/apps/lightspeed-restaurant/en/food-ordering-platforms.md", "/apps/lightspeed-restaurant/food-ordering-platforms", "smood", "smood"],
  ["/apps/lightspeed-restaurant/en/map-ref-codes.md", "/apps/lightspeed-restaurant/map-ref-codes", "payment-methods", "payment-methods"],
  ["/apps/lightspeed-restaurant/en/map-ref-codes.md", "/apps/lightspeed-restaurant/map-ref-codes", "service-types", "service-types"],
  ["/apps/lightspeed-restaurant/en/push-orders.md", "/apps/lightspeed-restaurant/push-orders", "items-and-options", "items-and-options"],
  ["/apps/lightspeed-restaurant/en/user-interface.md", "/apps/lightspeed-restaurant/user-interface", "operation-page", "operation"],
  ["/apps/lightspeed-restaurant/faqs/en/troubleshooting-failed-orders.md", "/apps/lightspeed-restaurant/faqs/troubleshooting-failed-orders", "api-activation-in-the-tablet", "api-activation"],
  ["/apps/livepepper/en/troubleshooting.md", "/apps/livepepper/troubleshooting", "verify-product-mapping", "verify-mapping"],
  ["/apps/mailchimp/en/configuration.md", "/apps/mailchimp/configuration", "configuration-options", "options"],
  ["/apps/my-lemonade/fr/connect-hubrise.md", "/fr/apps/my-lemonade/connexion-hubrise", "donner-acc-s-au-support-de-my-lemonade", "give-access"],
  ["/apps/nestor/fr/connect-hubrise.md", "/fr/apps/nestor/connexion-hubrise", "donner-acc-s-au-support-de-nestor", "give-access"],
  ["/apps/nestor/fr/map-ref-codes.md", "/fr/apps/nestor/associer-codes-ref", "articles-sans-d-clinaison", "no-modifiers"],
  ["/apps/nestor/fr/map-ref-codes.md", "/fr/apps/nestor/associer-codes-ref", "exporter-le-catalogue", "export-catalog"],
  ["/apps/nestor/fr/orders.md", "/fr/apps/nestor/commandes", "articles-avec-des-prix-diff-rents", "prices-differences"],
  ["/apps/nestor/fr/orders.md", "/fr/apps/nestor/commandes", "recevoir-des-commandes", "receive-orders"],
  ["/apps/orderline/en/settings.md", "/apps/orderline/settings", "additional-data-prompt", "additional-data-prompt"],
  ["/apps/orderline/en/settings.md", "/apps/orderline/settings", "hide-orders", "hide-orders"],
  ["/apps/orderline/en/settings.md", "/apps/orderline/settings", "notifications", "notifications"],
  ["/apps/orderline/en/settings.md", "/apps/orderline/settings", "order-status-flow", "order-status-flow"],
  ["/apps/orderline/en/troubleshooting.md", "/apps/orderline/troubleshooting", "disabled-sound-notifications-popup", "disabled-popup"],
  ["/apps/orderline/fr/settings.md", "/fr/apps/orderline/parametres", "encha-nement-des-statuts-de-commande", "order-status-flow"],
  ["/apps/orderline/fr/settings.md", "/fr/apps/orderline/parametres", "masquer-les-commandes", "hide-orders"],
  ["/apps/orderline/fr/settings.md", "/fr/apps/orderline/parametres", "saisies-compl-mentaires", "additional-data-prompt"],
  ["/apps/orderline/fr/troubleshooting.md", "/fr/apps/orderline/depannage", "popup-de-notifications-sonores-d-sactiv-es", "disabled-popup"],
  ["/apps/pixelpoint-bridge/en/configuration.md", "/apps/pixelpoint-bridge/configuration", "deals", "deals"],
  ["/apps/pixelpoint-bridge/en/configuration.md", "/apps/pixelpoint-bridge/configuration", "discounts", "discounts"],
  ["/apps/pixelpoint-bridge/en/map-ref-codes.md", "/apps/pixelpoint-bridge/map-ref-codes", "deals", "deals"],
  ["/apps/pixelpoint-bridge/en/map-ref-codes.md", "/apps/pixelpoint-bridge/map-ref-codes", "discounts", "discounts"],
  ["/apps/pixelpoint-bridge/en/configuration.md", "/apps/pixelpoint-bridge/configuration", "reset-the-configuration", "reset-configuration"],
  ["/apps/pixelpoint-bridge/en/understanding-logs.md", "/apps/pixelpoint-bridge/understanding-logs", "an-xml-primer", "xml-primer"],
  ["/apps/pixelpoint-bridge/en/understanding-logs.md", "/apps/pixelpoint-bridge/understanding-logs", "recognising-products-and-options", "products-and-options"],
  ["/apps/pixelpoint-windows-api/en/understanding-logs.md", "/apps/pixelpoint-windows-api/understanding-logs", "an-xml-primer", "xml-primer"],
  ["/apps/prestashop/en/configuration.md", "/apps/prestashop/configuration", "order-statuses", "order-statuses"],
  ["/apps/prestashop/en/configuration.md", "/apps/prestashop/configuration", "service-types", "service-types"],
  ["/apps/restaurant-internet/fr/connect-hubrise.md", "/fr/apps/restaurant-internet/connexion-hubrise", "donner-acc-s-au-support-de-restaurant-internet", "give-access"],
  ["/apps/shopify/en/configuration.md", "/apps/shopify/configuration", "order-statuses", "order-statuses"],
  ["/apps/smood/en/configuration.md", "/apps/smood/configuration", "charges", "charges"],
  ["/apps/smood/en/configuration.md", "/apps/smood/configuration", "configure-your-parameters", "parameters"],
  ["/apps/smood/en/configuration.md", "/apps/smood/configuration", "discounts", "discounts"],
  ["/apps/smood/en/configuration.md", "/apps/smood/configuration", "payments", "payments"],
  ["/apps/smood/en/configuration.md", "/apps/smood/configuration", "service-types", "service-types"],
  ["/apps/smood/en/configuration.md", "/apps/smood/configuration", "synchronisation-settings", "synchronisation-settings"],
  ["/apps/smood/en/pull-catalog.md", "/apps/smood/pull-catalog", "deals", "deals"],
  ["/apps/smood/en/terminology.md", "/apps/smood/terminology", "smood-service-types", "smood-service-types"],
  ["/apps/smood/fr/configuration.md", "/fr/apps/smood/configuration", "configurer-vos-param-tres", "parameters"],
  ["/apps/smood/fr/configuration.md", "/fr/apps/smood/configuration", "frais", "charges"],
  ["/apps/smood/fr/configuration.md", "/fr/apps/smood/configuration", "paiements", "payments"],
  ["/apps/smood/fr/configuration.md", "/fr/apps/smood/configuration", "param-tres-de-synchronisation", "synchronisation-settings"],
  ["/apps/smood/fr/configuration.md", "/fr/apps/smood/configuration", "remises", "discounts"],
  ["/apps/smood/fr/configuration.md", "/fr/apps/smood/configuration", "types-de-service", "service-types"],
  ["/apps/smood/fr/pull-catalog.md", "/fr/apps/smood/recuperer-catalogue", "promotions", "deals"],
  ["/apps/smood/fr/terminology.md", "/fr/apps/smood/terminologie", "types-de-service-smood", "smood-service-types"],
  ["/apps/superdigital/fr/connect-hubrise.md", "/fr/apps/superdigital/connexion-hubrise", "donner-acc-s-au-support-de-superdigital-fr", "give-access"],
  ["/apps/tastycloud/en/map-ref-codes.md", "/apps/tastycloud/map-ref-codes", "products-and-options", "products-and-options"],
  ["/apps/tickncook/fr/connect-hubrise.md", "/fr/apps/tickncook/connexion-hubrise", "donner-acc-s-au-support-de-tickncook", "give-access"],
  ["/apps/uber-eats/en/configuration.md", "/apps/uber-eats/configuration", "catalog", "catalog"],
  ["/apps/uber-eats/en/configuration.md", "/apps/uber-eats/configuration", "opening-hours", "opening-hours"],
  ["/apps/uber-eats/en/push-catalog.md", "/apps/uber-eats/push-catalog", "information-sent-to-uber-eats", "information-sent-to-uber-eats"],
  ["/apps/uber-eats/en/user-interface.md", "/apps/uber-eats/user-interface", "configuration", "configuration"],
  ["/apps/uber-eats/fr/map-ref-codes.md", "/fr/apps/uber-eats/associer-codes-ref", "commentaires-sur-les-produits", "product-notes"],
  ["/apps/uber-eats/fr/user-interface.md", "/fr/apps/uber-eats/interface-utilisateur", "page-de-configuration", "configuration"],
  ["/apps/woocommerce/en/configuration.md", "/apps/woocommerce/configuration", "catalog", "catalog"],
  ["/apps/woocommerce/en/user-interface.md", "/apps/woocommerce/user-interface", "configuration", "configuration"],
  ["/apps/zelty/en/connect-hubrise.md", "/apps/zelty/connect-hubrise", "connect-to-locations", "connect"],
  ["/apps/zelty/fr/connect-hubrise.md", "/fr/apps/zelty/connexion-hubrise", "connecter-zelty", "connect"],
  ["/contributing/en/screenshots-guide.md", "/contributing/screenshots-guide", "naming-convention", "naming-convention"],
  ["/contributing/fr/screenshots-guide.md", "/fr/contributing/screenshots-guide", "naming-convention", "naming-convention"],
  ["/developers/api/en/authentication.md", "/developers/api/authentication", "oauth-scopes", "oauth-scopes"],
  ["/developers/api/en/callbacks.md", "/developers/api/callbacks", "callbacks", "callbacks"],
  ["/developers/api/en/callbacks.md", "/developers/api/callbacks", "events", "events"],
  ["/developers/api/en/catalog-management.md", "/developers/api/catalog-management", "deal-in-catalog-upload", "deal-in-catalog-upload"],
  ["/developers/api/en/catalog-management.md", "/developers/api/catalog-management", "products", "products"],
  ["/developers/api/en/catalog-management.md", "/developers/api/catalog-management", "skus", "skus"],
  ["/developers/api/en/customer-management.md", "/developers/api/customer-management", "anonymise-customer", "anonymise-customer"],
  ["/developers/api/en/customer-management.md", "/developers/api/customer-management", "retrieve-customer", "retrieve-customer"],
  ["/developers/api/en/extensions.md", "/developers/api/extensions", "custom-fields", "custom-fields"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "cors", "cors"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "dates-and-times", "dates-and-times"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "days-of-the-week", "days-of-the-week"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "decimal-values", "decimal-values"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "monetary-values", "monetary-values"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "private-refs", "private-refs"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "rate-limiting", "rate-limiting"],
  ["/developers/api/en/general-concepts.md", "/developers/api/general-concepts", "timezones", "timezones"],
  ["/developers/api/en/order-management.md", "/developers/api/order-management", "order-s-customer", "order-s-customer"],
  ["/developers/api/en/order-management.md", "/developers/api/order-management", "order-status", "order-status"],
  ["/developers/api/fr/authentication.md", "/fr/developers/api/authentication", "oauth-scopes", "oauth-scopes"],
  ["/developers/api/fr/callbacks.md", "/fr/developers/api/callbacks", "callbacks", "callbacks"],
  ["/developers/api/fr/callbacks.md", "/fr/developers/api/callbacks", "events", "events"],
  ["/developers/api/fr/catalog-management.md", "/fr/developers/api/catalog-management", "products", "products"],
  ["/developers/api/fr/catalog-management.md", "/fr/developers/api/catalog-management", "skus", "skus"],
  ["/developers/api/fr/customer-management.md", "/fr/developers/api/customer-management", "anonymise-customer", "anonymise-customer"],
  ["/developers/api/fr/extensions.md", "/fr/developers/api/extensions", "custom-fields", "custom-fields"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "cors", "cors"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "dates-and-times", "dates-and-times"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "days-of-the-week", "days-of-the-week"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "decimal-values", "decimal-values"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "monetary-values", "monetary-values"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "private-refs", "private-refs"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "rate-limiting", "rate-limiting"],
  ["/developers/api/fr/general-concepts.md", "/fr/developers/api/general-concepts", "timezones", "timezones"],
  ["/developers/api/fr/order-management.md", "/fr/developers/api/order-management", "order-s-customer", "order-s-customer"],
  ["/developers/api/fr/order-management.md", "/fr/developers/api/order-management", "order-status", "order-status"],
  ["/developers/en/integration-guide.md", "/developers/integration-guide", "assessing-the-integration", "assess"],
  ["/developers/en/integration-guide.md", "/developers/integration-guide", "general-best-practices", "general-best-practices"],
  ["/docs/en/account.md", "/docs/account", "create-an-account", "create-account"],
  ["/docs/en/account.md", "/docs/account", "modify-account-details", "modify-account-details"],
  ["/docs/en/catalog.md", "/docs/catalog", "add-a-catalog", "add"],
  ["/docs/en/connections.md", "/docs/connections", "block-or-disconnect-an-app", "block-or-disconnect"],
  ["/docs/en/connections.md", "/docs/connections", "connect-a-new-app", "connect"],
  ["/docs/en/connections.md", "/docs/connections", "open-an-app", "open-app"],
  ["/docs/en/connections.md", "/docs/connections", "view-connection-activity", "connection-activity"],
  ["/docs/en/connections.md", "/docs/connections", "view-connection-logs", "connection-logs"],
  ["/docs/en/data.md", "/docs/data", "catalogs", "catalogs"],
  ["/docs/en/data.md", "/docs/data", "customers", "customers"],
  ["/docs/en/data.md", "/docs/data", "logs", "logs"],
  ["/docs/en/data.md", "/docs/data", "orders", "orders"],
  ["/docs/en/data.md", "/docs/data", "view-catalog", "view-catalog"],
  ["/docs/en/get-started.md", "/docs/get-started", "create-an-account", "create-account"],
  ["/docs/en/locations.md", "/docs/locations", "add-a-location", "add-a-location"],
  ["/docs/en/locations.md", "/docs/locations", "location-name-and-id", "location-name-and-id"],
  ["/docs/en/payment.md", "/docs/payment", "account-or-location-payments", "account-or-location-payments"],
  ["/docs/en/payment.md", "/docs/payment", "add-a-payment-method", "add-payment-method"],
  ["/docs/en/payment.md", "/docs/payment", "billing-cycles", "billing-cycles"],
  ["/docs/en/payment.md", "/docs/payment", "process-requests-for-payment", "process-requests-for-payment"],
  ["/docs/en/permissions.md", "/docs/permissions", "add-a-user", "add-user"],
  ["/docs/en/permissions.md", "/docs/permissions", "remove-a-user", "remove-user"],
  ["/docs/en/usage-plan.md", "/docs/usage-plan", "plan-notifications", "plan-notifications"],
  ["/docs/en/usage-plan.md", "/docs/usage-plan", "usage-plans", "plan"],
  ["/docs/fr/account.md", "/fr/docs/comptes", "cr-er-un-compte", "create-account"],
  ["/docs/fr/account.md", "/fr/docs/comptes", "modifier-les-d-tails-du-compte", "modify-account-details"],
  ["/docs/fr/connections.md", "/fr/docs/connexions", "afficher-l-activit-de-connexion", "connection-activity"],
  ["/docs/fr/connections.md", "/fr/docs/connexions", "afficher-les-logs-de-connexion", "connection-logs"],
  ["/docs/fr/connections.md", "/fr/docs/connexions", "bloquer-ou-d-connecter-une-application", "block-or-disconnect"],
  ["/docs/fr/connections.md", "/fr/docs/connexions", "connecter-une-application", "connect"],
  ["/docs/fr/data.md", "/fr/docs/donnees", "catalogues", "catalogs"],
  ["/docs/fr/data.md", "/fr/docs/donnees", "clients", "customers"],
  ["/docs/fr/data.md", "/fr/docs/donnees", "commandes", "orders"],
  ["/docs/fr/data.md", "/fr/docs/donnees", "logs", "logs"],
  ["/docs/fr/locations.md", "/fr/docs/points-de-vente", "cr-er-un-point-de-vente", "add-a-location"],
  ["/docs/fr/locations.md", "/fr/docs/points-de-vente", "nom-et-identifiant-du-point-de-vente", "location-name-and-id"],
  ["/docs/fr/payment.md", "/fr/docs/paiement", "ajouter-une-m-thode-de-paiement", "add-payment-method"],
  ["/docs/fr/payment.md", "/fr/docs/paiement", "cycles-de-facturation", "billing-cycles"],
  ["/docs/fr/payment.md", "/fr/docs/paiement", "paiements-au-niveau-du-compte-ou-du-point-de-vente", "account-or-location-payments"],
  ["/docs/fr/payment.md", "/fr/docs/paiement", "traiter-les-demandes-de-paiement", "process-requests-for-payment"],
  ["/docs/fr/permissions.md", "/fr/docs/permissions", "ajouter-un-utilisateur", "add-user"],
  ["/docs/fr/permissions.md", "/fr/docs/permissions", "supprimer-un-utilisateur", "remove-user"],
  ["/docs/fr/usage-plan.md", "/fr/docs/utilisation-formule", "formule-d-utilisation", "plan"],
  ["/docs/fr/usage-plan.md", "/fr/docs/utilisation-formule", "notifications-sur-les-formules", "plan-notifications"],
  ["/docs/hubrise-logs/en/hubrise-data-model.md", "/docs/hubrise-logs/hubrise-data-model", "the-item-object", "item-object"],
  ["/docs/hubrise-logs/en/hubrise-data-model.md", "/docs/hubrise-logs/hubrise-data-model", "the-payment-object", "payment-object"],
  ["/docs/hubrise-logs/en/json-requests-in-hubrise.md", "/docs/hubrise-logs/json-requests-in-hubrise", "code", "code"],
  ["/docs/hubrise-logs/fr/hubrise-data-model.md", "/fr/docs/hubrise-logs/modele-donnees-hubrise", "l-objet-item", "item-object"],
  ["/docs/hubrise-logs/fr/hubrise-data-model.md", "/fr/docs/hubrise-logs/modele-donnees-hubrise", "l-objet-payment", "payment-object"],
  ["/docs/hubrise-logs/fr/json-requests-in-hubrise.md", "/fr/docs/hubrise-logs/requetes-json-dans-hubrise", "code", "code"],
]

anchors.forEach((anchor) => addAnchorToHeading(anchor))
anchors.forEach((anchor) => addAnchorsToLinks(anchor))
