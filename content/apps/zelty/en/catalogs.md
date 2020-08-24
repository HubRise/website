---
title: Catalogs
position: 4
layout: documentation
meta:
  title: Zelty - Export Menu into a HubRise Catalog
  description: 'Connect Zelty to the apps you use everyday: food ordering platforms, mobile apps, ordering sites, marketing and loyalty solutions, delivery services, and more.'
---

## Export the Catalog

If the other app you want to connect to Zelty can import catalogs from HubRise, you can export your Zelty menu and avoid mapping ref codes manually.

Menus can be exported into HubRise for other connected apps to pull, if they offer this integration feature. Refer to the documentation of the other app on the HubRise website to verify.

There are two options available to export the menu from Zelty to HubRise and use it in other connected apps. You can export the entire menu, or a subset of your menu.

If the app you want to connect cannot import catalogs from HubRise, you might need to map product codes manually. For more information, see [Products](#products).

### Export the Entire Menu

You can export the whole menu containing all the products. To export the entire menu:

1. Go to the Zelty **Marketplace**.
1. Click on **HubRise**.
1. Select **Gérer** and **Exporter ma carte vers HubRise** from the dropdown which appears.
1. Check the catalog import on HubRise. For more information on how to manage catalogs in HubRise, see our [Catalog Guide](/docs/catalog/).

### Export a Subset of Your Menu

You can also export a subset of the menu to HubRise. It can be very useful if some items on your menu are not to be used by other apps connected to HubRise.

To export a subset of the menu, you need to create a **catalogue** (catalog). They are a subset of the entire menu. They are used to push a subset of your menu to food ordering platforms or other integrated solutions such as HubRise.

To create a catalog from your Zelty back office:

1. Navigate to **La Carte** (Menu).
1. Select **Les catalogues** (Catalogs).
1. Click on the **Créer un nouveau catalogue** (Create a new catalog) button.

To export a subset of the menu:

1. Go to **Catalogues** (Catalog).
1. Next to the name of the catalog, click the down arrow and select **Envoyer vers** (Send to).
1. Click on the **HubRise** button available under the heading **Partenaires disponibles** (Available partners).
1. A message will indicate that the **Le catalogue est en cours de transfert vers Hubrise** (the catalog is being sent to HubRise).
1. Check the catalog import on HubRise. For more information on how to manage catalogs in HubRise, see our [Catalog Guide](/docs/catalog/).

## Catalog Data

### Categories

Categories are exported when you export a subset of the menu.

Additionally, Zelty exports a special category named "Hidden", with the `hidden` tag attached to it. When a product or a menu is not associated with a category, it is exported as an item of this category.

### Products

Products are exported, along with their pictures and description.

### Options

### Deals

Menus (Bundles) are exported as deals.

### Tags

Tags created manually are not exported.

Zelty however exports the following special tags:

- `hidden`: attached to the "Hidden" category, which is created automatically.
- `deal_only`: attached to all the skus in the "Hidden" category.
