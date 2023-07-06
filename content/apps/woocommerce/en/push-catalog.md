---
title: Push the Catalog
position: 5
layout: documentation
meta:
  title: Push the Catalog | WooCommerce | HubRise
  description: Find out how to push your HubRise catalog to WooCommerce, how items and options are encoded, and which features are supported.
---

With WooCommerce Bridge, you can push your HubRise catalog directly into your WooCommerce store with a single click.

You can also configure the bridge to push your catalog to WooCommerce every time it is updated on HubRise. For more information, see [Catalog](/apps/woocommerce/configuration#catalog).

This page explains how you can push your catalog and what information is sent to WooCommerce.

## Populate a HubRise Catalog

To be able to push your catalog into WooCommerce, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/).

## Manual Catalog Push

Once your catalog is populated on HubRise, you can push it manually to your WooCommerce store by following these steps.

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your WooCommerce store.
1. Open the **CONNECTIONS** page, then select **WooCommerce Bridge** from the list of connected apps.
1. In WooCommerce Bridge, select the **Actions** tab, then click **Push catalog**.

When you push your catalog, WooCommerce Bridge creates the products that do not yet exist in WooCommerce. It also updates the price of your WooCommerce products, if the **Update prices of existing products** checkbox is selected in the Configuration page. WooCommerce Bridge does not delete products.

## Automatic Catalog Push

WooCommerce Bridge can automatically push your HubRise catalog into WooCommerce every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your WooCommerce store.
1. Open the **CONNECTIONS** page, then select **WooCommerce Bridge** from the list of connected apps.
1. In WooCommerce Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick **Push the catalog to WooCommerce when it is updated in HubRise**.
1. Click **Save**.

## Technical Reference

The following sections describe in detail how HubRise catalogs are mapped to WooCommerce menus.

---

**IMPORTANT NOTE:** WooCommerce only supports categories, products, and skus. All the other items in HubRise catalogs, including options, deals, and discounts, are not sent to WooCommerce.

---

### Categories

The categories in a HubRise catalog are mapped one-to-one to categories of products on WooCommerce.
The order in which categories and products appear on HubRise is maintained on WooCommerce.

For every category, the following HubRise fields are sent to WooCommerce:

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

**IMPORTANT NOTE:** Skus with no ref codes in the HubRise catalog are not sent to WooCommerce.

---

For every `sku` object in a product, WooCommerce Bridge creates a variation with this information:

- `ref`: The ref code of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price of the sku

Lists of options attached to HubRise products are ignored.

For more information about products and skus in HubRise catalogs, see [Products](/developers/api/catalog-management/#products) and [Skus](/developers/api/catalog-management/#skus).
