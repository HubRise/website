---
title: Pushing The Catalog
position: 5
layout: documentation
meta:
  title: MyOrderBox Connection to HubRise - Pushing The Catalog
  description: Find out how to export your MyOrderBox catalog to HubRise, how items and options are encoded, and which features are supported.
---

This page describes how to export your MyOrderBox catalog and what information is sent to HubRise.

## Exporting The Catalog To HubRise

To export your MyOrderBox catalog to HubRise, follow these steps.

1. Log in to your [MyOrderBox back office](https://go.myorderboxhq.com/).
1. From the navigation menu, select **Setup** > **Add Ons** > **HubRise**.
1. Click the **Update HubRise catalog** button, then **OK** to confirm.

---

**IMPORTANT NOTE**: This operation will replace your current HubRise catalog.

---

Depending on how large your catalog is, it might take a few minutes for your HubRise catalog to be fully updated.

## Technical Reference

The following sections provide more details on how your MyOrderBox catalog is mapped to HubRise.

### Categories

The categories in the MyOrderBox catalog are mapped one-to-one to categories of products on HubRise.
Categories sent to HubRise are ordered by ascending value of ref code.

For every category, the following fields are sent to HubRise:

- `name`: The name of the category.
- `ref`: The ref code of the category.

The category description is not sent to HubRise.

### Products and Skus

MyOrderBox supports products and skus, and this product structure is mapped one-to-one to HubRise.

For every product, MyOrderBox sends the following information to HubRise:

- `name`: The name of the product.
- `ref`: The ref code of the product, which will be passed along in orders.
- `description`: The description of the product.
- `skus`: The list of skus associated with the product.
- `image_ids`: The list of image IDs associated with the product.

For every sku in the list, MyOrderBox sends the following information to HubRise:

- `name`: The name of the sku.
- `ref`: The ref code of the sku, which will be passed along in orders.
- `price`: The price of the sku.
- `option_list_refs`: The list of options attached to the sku.

### Options

MyOrderBox supports option lists and options, and this information is mapped one-to-one to HubRise.

Additionally, MyOrderBox relies on the following naming convention:

- If the name of an option group starts with the word **Toppings**, the option group is sent to HubRise as an `option_list` with the `name` field set to "Toppings". One HubRise `option` is created for every option value in MyOrderBox which is not enabled by default. If the option group contains one or more option values enabled by default, these values are grouped together and sent to HubRise in a new `option_list`, whose name is "Ingredients".

- Otherwise, the option group is sent as a separate `option_list` to HubRise.

### Deals

The deals your create in MyOrderBox are mapped one-to-one to HubRise.

For each deal, the following information is sent to HubRise.

- `name`: The name of the deal.
- `description`: The description of the deal.
- `ref`: The ref code of the deal.
- `lines`: The array of product lines included in the deals.

For each product line, the following information is sent to HubRise.

- `label`
- `pricing_effect`
- `pricing_value`
- `skus`

For more information about deals in HubRise, see the [API page for deals](/developers/api/catalog-management#deal-in-catalog-upload).
