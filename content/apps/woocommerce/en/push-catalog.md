---
title: Push the Catalog
path_override: push-catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | WooCommerce | HubRise
  description: Find out how to push your HubRise catalog to WooCommerce, how items and options are encoded, and which features are supported.
---

With WooCommerce Bridge, you can push your HubRise catalog into your WooCommerce store with a single click, or automate the push every time your catalog is updated on HubRise.

This page explains how you can push your catalog and what information is sent to WooCommerce.

For more information on HubRise catalogs, see our online help, section [Catalogs](/docs/catalog).

## Populate a HubRise Catalog

To be able to push your catalog into WooCommerce, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on our [Apps page](/apps) to verify.

You can also use the HubRise Catalog Manager to create or update your catalog, including the addition of ref codes. Catalog Manager is edited by HubRise and you can use it free of charge. For more information, see [Catalog Manager](/apps/catalog-manager/overview).

---

**IMPORTANT NOTE:** Ensure that all products in your catalog have a ref code. Products without a ref code will not be pushed to WooCommerce.

---

## Manual Catalog Push {#manual-catalog-push}

Once your catalog is populated on HubRise, you can push it manually to your WooCommerce store by following these steps.

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your WooCommerce store.
1. Open the **CONNECTIONS** page, then find **WooCommerce Bridge** from the list of connected apps and click **Open**.
1. In WooCommerce Bridge, select the **Actions** tab, then click **Push catalog**.

## Automatic Catalog Push

WooCommerce Bridge can automatically push your HubRise catalog into WooCommerce every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your WooCommerce store.
1. Open the **CONNECTIONS** page, then find **WooCommerce Bridge** from the list of connected apps and click **Open**.
1. In WooCommerce Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick **Enable automatic catalog push** to push the catalog into WooCommerce when it is updated in HubRise.
1. Tick **Update prices of existing products** to update prices of products already on your WooCommerce store.
1. Click **Save**.

The same update rules apply as for the [Manual Catalog Push](#manual-catalog-push).

## Technical Reference

The following sections describe in detail how HubRise catalogs are mapped to WooCommerce **Products**.

### Categories

The categories in a HubRise catalog are mapped one-to-one to categories of products on WooCommerce.
The order in which categories and products appear on HubRise is maintained on WooCommerce.

For every category, the following HubRise fields are sent to WooCommerce:

- `name`: The name of the category
- `description`: The description of the category

### Products and Skus

WooCommerce Bridge creates the products that do not already exist in WooCommerce. These products are identified by their ref codes, and only products with a ref code are pushed to WooCommerce.

If the **Update prices of existing products** checkbox is selected in the Configuration page, WooCommerce Bridge will also update the price of your existing WooCommerce products. WooCommerce Bridge does not delete existing products.

Products in a HubRise catalog are mapped to WooCommerce in two different ways.

- A HubRise product without skus is mapped to a **Simple product** in WooCommerce.
- A HubRise product with skus is mapped to a **Variable product** in WooCommerce.

For every product in the HubRise catalog, the following information is sent to WooCommerce.

- `ref`: The ref code of the product, which will be passed along in orders
- `name`: The name of the product
- `description`: The description of the product
- `price`: The price of the product
- `images`: The images associated with the product

If skus are present, WooCommerce Bridge creates a list of attributes and variations, and attaches them to the product. The name of the list is the configured **Metadata key(s) for SKU name** in the bridge **Configuration** page. The variations are the names of the skus.

The bridge uses HubRise ref codes to detect existing products in WooCommerce and avoid duplicating them.

---

**IMPORTANT NOTE:** Skus with no ref codes in the HubRise catalog are not sent to WooCommerce.

---

For every `sku` object in a product, WooCommerce Bridge creates a variation with this information:

- `ref`: The ref code of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price of the sku

Lists of options attached to HubRise products are ignored.

For more information about products and skus in HubRise catalogs, see our API documentation on [Products](/developers/api/catalogs#products) and [Skus](/developers/api/catalogs#skus).

### Options

Options are not supported on WooCommerce. The options present in your HubRise catalog are ignored and are not sent to WooCommerce.

### Deals and Discounts

Deals and discounts are not supported on WooCommerce. Deals and discounts present in your HubRise catalog are ignored and are not sent to WooCommerce.
