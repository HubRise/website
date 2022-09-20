---
title: Push the Catalog
position: 7
layout: documentation
meta:
  title: Push the Catalog | Uber Eats | HubRise
  description: Find out how to push a catalog from HubRise into Uber Eats, how items and options are encoded, and which features are supported.
---

With Uber Eats Bridge, you can push your HubRise catalog into your Uber Eats store with a single click.

You can also configure the bridge to push your catalog to Uber Eats every time it is updated on HubRise. For more information, see [Catalog](/apps/uber-eats/configuration#catalog).

This page explains how to push your catalog, and what information is sent to Uber Eats.

## Populate a HubRise Catalog

To be able to update your menu in Uber Eats, you should populate a HubRise catalog first.

Many apps connected with HubRise, including EPOS solutions, offer the ability to export their catalog to HubRise. Refer to your connected EPOS documentation on the HubRise website to verify. You can also create a catalog from scratch using Catalog Manager, an app included in your HubRise subscription.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/).

## Push the Catalog

Once your catalog is populated on HubRise, you can push it to your Uber Eats store by following these steps:

1. Log in to your HubRise account.
1. If you have access to multiple Accounts, select the **Account** containing the specific Location.
1. Select the Location from the **Location** dropdown.
1. Select **Uber Eats Bridge** from the list of connected apps.
1. In Uber Eats Bridge, click the **Actions** tab, then select **Push catalog**.

---

**IMPORTANT NOTE:** Pushing your HubRise catalog to Uber Eats will erase the menu on your Uber Eats store. It will also update your Uber Eats **Opening hours** and **Customer notes** settings as defined in the Uber Eats Bridge **Configuration** page. This action cannot be reverted.

---

You can automate the catalog push into Uber Eats every time it is updated in HubRise. For more information, see [Automatic Catalog Push](/apps/uber-eats/configuration#automatic-catalog-push).

## Information Sent to Uber Eats

The following sections provide more details on how your HubRise catalog is mapped to Uber Eats.

### Categories

Uber Eats Bridge maps HubRise categories one-to-one to categories of products on Uber Eats.

The category name, ref code, and description are sent to Uber Eats.

### Products and Skus

Uber Eats Bridge maps single sku products one-to-one to products on Uber Eats, sending the following information:

- Sku name
- Sku ref code
- Description
- Images
- Price
- Options
- Tags

For products with multiple skus, Uber Eats Bridge creates a product, a modifier list, and one modifier for each sku.
Options are attached to each sku as an extra layer of modifiers.

### Options List and Options

Uber Eats Bridge maps option lists and options one-to-one to Uber Eats.

### Deals

Uber Eats Bridge maps HubRise deals to products with modifiers on Uber Eats.

### Images

Uber Eats requires images to be 320x320 pixels.

## Technical Reference

The following sections describe in detail how Uber Eats Bridge maps HubRise catalogs to Uber Eats.

### Categories

For every category, Uber Eats Bridge sends the following HubRise fields to Uber Eats:

- `name`: The name of the category
- `ref`: The ref code of the category
- `description`: The description of the category

The order in which categories and products appear on HubRise is maintained on Uber Eats.

### Products and Skus

For every [product](/developers/api/catalog-management/#products) with multiple skus, Uber Eats Bridge sends the following information to Uber Eats:

- `ref`: The value `MULTISKU` is used for all products.
- `name`: The name of the product.
- `description`: The description of the product.
- `price`: The minimum price of all skus.
- `image`: The URL of the image of the parent product.
- `tags`: Tags describing the characteristics and restrictions of the product, such as allergens or spiciness. For the list of available tags on Uber Eats, see [Product Tags](#product-tags).

The list of skus is attached to the product as an array of modifiers.

For every `sku` object in a product, Uber Eats Bridge sends the following information to Uber Eats:

- `ref`: The ref of the sku, which will be passed along in orders
- `name`: The name of the sku
- `price`: The price difference with the main product, if present
- `option_list_refs`: The list of options attached to the sku

For more information about skus in the HubRise catalog, see [Skus](/developers/api/catalog-management/#skus).

### Product Tags

The table below lists the tags that can be set on products.

| Tag           | Description                 |
| ------------- | --------------------------- |
| `alcoholic`   | Contains alcohol.           |
| `gluten_free` | Contains no gluten.         |
| `vegan`       | Contains no animal product. |
| `vegetarian`  | Contains no meat.           |

### Options

For every option list in the catalog, Uber Eats Bridge sends the following information to Uber Eats:

- `name`: The name of the option list
- `min_selections`: The minimum number of options that customers can select
- `max_selections`: The maximum number of options that customers can select

For every option in an option list, Uber Eats Bridge sends the following information to Uber Eats:

- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single option

### Deals

For each deal in the catalog, Uber Eats Bridge creates a Uber Eats product with the following details:

- `name`: The name of the deal becomes the name of the product.
- `category_ref`: If empty, Uber Eats Bridge creates a default category in Uber Eats called "Offers".
- `ref`: The ref code of the deal becomes the ref of the product, preceeded by `DEAL-`. For example, for a deal with ref code `abc123`, Uber Eats Bridge creates a Uber Eats product with plu `DEAL-abc123`.
- `lines`: For each object in the array, Uber Eats Bridge creates a list of modifiers, with `lines.name` as the name.

By default, when customers order a deal, they must choose one product for every deal line.

### Availability

Every time you push your HubRise catalog to Uber Eats, you also update the availability of your menu, based on the values you set from the [Configuration page](/apps/uber-eats/configuration/#menu) of Uber Eats Bridge.
