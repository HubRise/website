---
title: Push the Catalog
path_override: push-catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | PrestaShop | HubRise
  description: Find out how to push your HubRise catalog to PrestaShop, how items and options are encoded, and which features are supported.
---

You can use PrestaShop Bridge to push your HubRise catalog directly into your PrestaShop store. Also, you can update the availability of your items on PrestaShop every time this changes on HubRise.

This page explains how you can push your catalog, what information is sent to PrestaShop, and how you can synchronise your inventory.

## Push Your Catalog

PrestaShop Bridge lets you push your HubRise catalog to PrestaShop. You can let PrestaShop Bridge push your catalog automatically every time it is updated on HubRise, or push it manually when needed.

If you encounter errors when pushing your catalog, see [Troubleshooting](/apps/prestashop/troubleshooting#push-catalog-errors).

### Populate a HubRise Catalog

To be able to push your catalog into PrestaShop, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog).

### Manual Catalog Push

Once your catalog is populated on HubRise, you can manually push it to your PrestaShop store by following these steps.

1. Log in to your HubRise account.
1. Select the HubRise account and location connected with your PrestaShop store.
1. Open the **CONNECTIONS** page, then select **PrestaShop Bridge** from the list of connected apps.
1. In PrestaShop Bridge, select the **Actions** tab, then click **Push catalog**.

When you push your catalog, PrestaShop Bridge creates the products that do not yet exist in PrestaShop.
PrestaShop Bridge does not delete products.

### Automatic Catalog Push

PrestaShop Bridge can automatically push your HubRise catalog into PrestaShop every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your HubRise account.
1. Select the HubRise account and location connected with your PrestaShop store.
1. Open the **CONNECTIONS** page, then select **PrestaShop Bridge** from the list of connected apps.
1. In PrestaShop Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick **Push the catalog to PrestaShop when it is updated in HubRise**.
1. Click **Save**.

## Technical Reference for Catalog Push

The following sections describe in detail how HubRise catalogs are mapped to PrestaShop.

### Categories

PrestaShop Bridge maps HubRise categories one-to-one to categories of products on PrestaShop. The category name and description are sent to PrestaShop.

### Products and Skus

HubRise products and skus are mapped one-to-one to PrestaShop products and combinations.
For more information about products in HubRise catalogs, see [Products](/developers/api/catalogs#products).

For every HubRise `product` object, PrestaShop Bridge sends the following information to PrestaShop:

- `name`: The name of the product
- `description`: The description of the product
- `image_ids`: The IDs of the images associated with the product
- `skus`: The list of skus attached to the product

For every sku in the `skus` array, PrestaShop Bridge sends the following information to PrestaShop:

- `ref`: The ref code of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price of the sku

For more information about skus in the HubRise catalog, see [Skus](/developers/api/catalogs#skus).

### Options

Options are not supported on PrestaShop. The options present in your HubRise catalog are ignored and are not sent to PrestaShop.

### Deals and Discounts

Deals and discounts are not supported on PrestaShop. Deals and discounts present in your HubRise catalog are ignored and are not sent to PrestaShop.

## Synchronise Inventory

PrestaShop Bridge lets you update the inventory counters of your PrestaShop products, based on your HubRise inventory. You can let PrestaShop Bridge update the inventory automatically, or update it manually.

### Automatic Inventory Update

PrestaShop Bridge can automatically update your PrestaShop inventory every time it is updated on HubRise. By default, this option is turned off. To turn it on, follow these steps:

1. Log in to your HubRise account.
2. Select the HubRise account and location connected with your PrestaShop store.
3. Open the **CONNECTIONS** page, then select **PrestaShop Bridge** from the list of connected apps.
4. In PrestaShop Bridge, select the **Configuration** tab.
5. In the **Inventory** section, tick **Enable automatic inventory push**.
6. Click **Save**.

### Manually Update Inventory Availability

To manually update your inventory on PrestaShop, follow these steps:

1. Log in to your HubRise account.
1. Select the HubRise account and location connected with your PrestaShop store.
1. Open the **CONNECTIONS** page, then select **PrestaShop Bridge** from the list of connected apps.
1. In PrestaShop Bridge, select the **Actions** tab, then click **Push inventory**.
