---
title: Push the Catalog
path_override: push-catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | Shopify | HubRise
  description: Find out how to push your HubRise catalog to Shopify, how items and options are encoded, and which features are supported.
---

You can use Shopify Bridge to push your HubRise catalog directly into your Shopify store. 

This page explains how you can push your catalog, and clarifies what information is sent to Shopify.

## Populate a HubRise Catalog

To be able to push your catalog into Shopify, you must populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the catalog to HubRise. Refer to your EPOS documentation on our [Apps page](/apps) to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog).

## Manual Catalog Push

Once your catalog is populated on HubRise, you can push it manually to your Shopify store by following these steps.

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Shopify store.
1. Open the **CONNECTIONS** page, then select **Shopify Bridge** from the list of connected apps.
1. In Shopify Bridge, select the **Actions** tab, then click **Push catalog**.

When you push your catalog, Shopify Bridge creates the products that do not yet exist in Shopify. It also updates the price of your Shopify products, if the **Update prices of existing products** checkbox is selected in the Configuration page. Shopify Bridge does not delete products.

## Automatic Catalog Push

Shopify Bridge can automatically push your HubRise catalog into Shopify every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Shopify store.
1. Open the **CONNECTIONS** page, then select **Shopify Bridge** from the list of connected apps.
1. In Shopify Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick **Push the catalog to Shopify when it is updated in HubRise**.
1. Click **Save**.

## Technical Reference

The following sections describe in detail how HubRise catalogs are mapped to Shopify.

### Categories

Shopify does not support categories. When you upload HubRise products to Shopify, they will not be divided into separate categories.

### Products and Skus

HubRise products and skus are mapped one-to-one to Shopify products and variants.
For more information about products in HubRise catalogs, see [Products](/developers/api/catalogs#products).

For every HubRise `product` object, Shopify Bridge sends the following information to Shopify:

- `name`: The name of the product
- `description`: The description of the product
- `tags`: The tags associated with the product
- `image_ids`: The IDs of the images associated with the product
- `skus`: The list of skus attached to the product

For every sku in the `skus` array, Shopify Bridge sends the following information to Shopify:

- `ref`: The ref of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price of the sku

For more information about skus in the HubRise catalog, see [Skus](/developers/api/catalogs#skus).

### Options

Options are not supported on Shopify. The options present in your HubRise catalog are ignored and are not sent to Shopify.

### Deals and Discounts

Deals and discounts are not supported on Shopify. Deals and discounts present in your HubRise catalog are ignored and are not sent to Shopify.
