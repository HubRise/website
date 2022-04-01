---
title: Pulling The Catalog
position: 5
layout: documentation
meta:
  title: Pulling The Catalog | WooCommerce | HubRise
  description: Find out how to publish your catalog to the WooCommerce platform, how items and options are encoded, and which features are supported.
---

With WooCommerce Bridge, you can pull your HubRise catalog directly into your WooCommerce store with a single click.

You can also configure the bridge to pull your catalog into WooCommerce every time it is updated on HubRise. For more information, see [Catalog](/apps/woocommerce/configuration#catalog).

This page explains how you can pull and update your products on WooCommerce, and what information about HubRise catalogs can be pulled into the platform.

## Populating a HubRise Catalog

To be able to pull your products into WooCommerce, you should populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your connected EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/).

## Pulling the Catalog From the Configuration Page

Once your catalog is populated on HubRise, you can publish it on your WooCommerce store by following these steps.

1. Log in to your HubRise account.
1. Select the location connected with your WooCommerce store.
1. Select **WooCommerce Bridge** from the list of connected apps.
1. From the WooCommerce Bridge operations page, click the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> at the top right corner of the page to expand the menu, then click **Configuration**.
1. On the configuration page, from the **Actions** section at the bottom of the page, select **Push the catalog to WooCommerce**.

Note that WooCommerce Bridge creates new products or updates existing ones, but never deletes existing items from your WooCommerce catalog. If you select the checkbox **Update prices of existing products** in the Configuration page, WooCommerce Bridge will update the price of your WooCommerce products whenever this is different from the price of the corresponding HubRise product.

## Technical Reference

The following sections describe in detail how HubRise catalogs are mapped to WooCommerce menus.

---

**IMPORTANT NOTE:** WooCommerce only supports categories, products, and skus. All the other items in HubRise catalogs, including options, deals, and discounts, are not sent to WooCommerce.

---

### Categories

The categories in a HubRise catalog are mapped one-to-one to categories of products on WooCommerce.
The order in which categories and products appear on HubRise is maintained on WooCommerce.

For every category, the following HubRise fields are pulled into WooCommerce:

- `name`: The name of the category
- `description`: The description of the category

### Products and Skus

Products in a HubRise catalog are mapped to WooCommerce in two different ways.

- A HubRise product without skus is mapped to a **Simple product** in WooCommerce.
- A HubRise product with skus is mapped to a **Variable product** in WooCommerce.

For every product in the HubRise catalog, the following information is sent to WooCommerce.

- `ref`: The ref code of the product, which will be passed along in orders
- `name`: The name of the product
- `description`: The description of the product
- `price`: The price of the product
- `images`: The images associated with the product

If skus are present, WooCommerce Bridge creates a list of attributes named "sku" attached to the product, where the values are the names of the skus.

The bridge uses HubRise ref codes to detect existing products in WooCommerce and avoid duplicating them.

---

**IMPORTANT NOTE:** Skus with no ref codes in the HubRise catalog are not pulled in WooCommerce.

---

For every `sku` object in a product, WooCommerce Bridge creates a variation with this information:

- `ref`: The ref code of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price of the sku

Lists of options attached to HubRise products are ignored.

For more information about products and skus in HubRise catalogs, see [Products](/developers/api/catalog-management/#products) and [Skus](/developers/api/catalog-management/#skus).
