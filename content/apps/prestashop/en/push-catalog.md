---
title: Push the Catalog
path_override: push-catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | PrestaShop | HubRise
  description: Find out how to push your HubRise catalog to PrestaShop, how items and options are encoded, and which features are supported.
---

With PrestaShop Bridge, you can push your HubRise catalog into your PrestaShop store with a single click, or automate the push every time your catalog is updated on HubRise.

This page explains how you can push your catalog and what information is sent to PrestaShop.

If you encounter errors when pushing your catalog, see [Troubleshooting](/apps/prestashop/troubleshooting#push-catalog-errors).

For more information on HubRise catalogs, see [Catalogs](/docs/catalog).

## Populate a HubRise Catalog

To be able to push your catalog into PrestaShop, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on our [Apps page](/apps) to verify.

You can also use the HubRise Catalog Manager to create or update your catalog, including the addition of ref codes. Catalog Manager is edited by HubRise and you can use it free of charge. For more information, see [Catalog Manager](/apps/catalog-manager/overview).

---

**IMPORTANT NOTE:** Ensure that all products in your catalog have a ref code. Products without a ref code will not be pushed to PrestaShop.

---

## Manual Catalog Push

Once your catalog is populated on HubRise, you can push it manually to your PrestaShop store by following these steps.

1. Log in to your HubRise account.
1. Select the HubRise account and location connected with your PrestaShop store.
1. Open the **CONNECTIONS** page, then select **PrestaShop Bridge** from the list of connected apps.
1. In PrestaShop Bridge, select the **Actions** tab, then click **Push catalog**.

## Automatic Catalog Push

PrestaShop Bridge can automatically push your HubRise catalog into PrestaShop every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your HubRise account.
1. Select the HubRise account and location connected with your PrestaShop store.
1. Open the **CONNECTIONS** page, then select **PrestaShop Bridge** from the list of connected apps.
1. In PrestaShop Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick **Push the catalog to PrestaShop when it is updated in HubRise**.
1. Click **Save**.

## Technical Reference

The following sections describe how a catalog push affects your PrestaShop store.

### Categories

PrestaShop Bridge creates the categories that do not already exist in PrestaShop, identifying them by their name.

Both the category name and description are sent to PrestaShop.

### Products and Skus

PrestaShop Bridge creates the products that do not already exist in PrestaShop. These products are identified by their ref codes, and only products with a ref code are pushed to PrestaShop. Newly created products are inactive by default, allowing for a manual review before they are made available on your website.

PrestaShop Bridge does not delete or update existing products.

HubRise products and skus are mapped one-to-one to PrestaShop products and combinations.

For every HubRise `product` object, PrestaShop Bridge sends the following information to PrestaShop:

- `name`: The name of the product
- `description`: The description of the product
- `image_ids`: The IDs of the images associated with the product
- `skus`: The list of skus attached to the product

For every sku in the `skus` array, PrestaShop Bridge sends the following information to PrestaShop:

- `ref`: The ref code of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price of the sku

For more information about products and skus in HubRise catalogs, see our API documentation on [Products](/developers/api/catalogs#products) and [Skus](/developers/api/catalogs#skus).

### Options

Options are not supported on PrestaShop. The options present in your HubRise catalog are ignored and are not sent to PrestaShop.

### Deals and Discounts

Deals and discounts are not supported on PrestaShop. Deals and discounts present in your HubRise catalog are ignored and are not sent to PrestaShop.
