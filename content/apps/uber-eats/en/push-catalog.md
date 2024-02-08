---
title: Push the Catalog
path_override: push-catalog
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

To update your menu in Uber Eats, you should have a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, online ordering solutions and food ordering and delivery platforms offer the ability to push their menu into HubRise. Refer to your app documentation on the HubRise [Apps page](/apps) to verify.

Alternatively, you can populate a HubRise catalog by pulling the menu from an existing Deliveroo or Uber Eats store. For more information, refer to these links:

- [Pull a Catalog from Deliveroo](/apps/deliveroo/pull-catalog)
- [Pull a Catalog from Uber Eats](/apps/uber-eats/pull-catalog)

## Manual Catalog Push

Once your catalog is populated on HubRise, you can push it manually to your Uber Eats store by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Uber Eats store.
1. Open the **CONNECTIONS** page, then select **Uber Eats Bridge** from the list of connected apps.
1. In Uber Eats Bridge, select the **Actions** tab, check the name and the ID of the HubRise catalog, then click **Push catalog**.
1. Check your Uber Eats online menu.

![Manual Catalog Push on HubRise](./images/025-2x-uber-eats-actions-page.png)

---

**IMPORTANT NOTE:** A catalog push also updates your Uber Eats **Opening hours** and **Customer notes** settings, as defined in the **Configuration** page. Before pushing the catalog, make sure that these settings are correct.

---

## Automatic Catalog Push

Uber Eats Bridge can automatically push your catalog to Uber Eats every time it is updated on HubRise. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Uber Eats store.
1. Open the **CONNECTIONS** page, then select **Uber Eats Bridge** from the list of connected apps.
1. In Uber Eats Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick **Enable automatic catalog push**.
1. Click **Save**.

## Information Sent to Uber Eats {#information-sent-to-uber-eats}

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
- Tags including allergens

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

For every [product](/developers/api/catalogs#products) with multiple skus, Uber Eats Bridge sends the following information to Uber Eats:

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

For more information about skus in the HubRise catalog, see [Skus](/developers/api/catalogs#skus).

### Product Tags {#product-tags}

The table below lists the tags that can be set on products.

| Tag                                  | Description                            |
| ------------------------------------ | -------------------------------------- |
| `alcoholic`                          | Contains alcohol.                      |
| `deal_only`                          | Can only be ordered as part of a deal. |
| `gluten_free`                        | Contains no gluten.                    |
| `vegan`                              | Contains no animal product.            |
| `vegetarian`                         | Contains no meat.                      |
| `allergen_celery`                    | Contains this allergen.                |
| `allergen_crustaceans`               | Contains this allergen.                |
| `allergen_eggs`                      | Contains this allergen.                |
| `allergen_fish`                      | Contains this allergen.                |
| `allergen_gluten`                    | Contains this allergen.                |
| `allergen_lupin`                     | Contains this allergen.                |
| `allergen_milk`                      | Contains this allergen.                |
| `allergen_molluscs`                  | Contains this allergen.                |
| `allergen_mustard`                   | Contains this allergen.                |
| `allergen_nuts`                      | Contains this allergen.                |
| `allergen_peanuts`                   | Contains this allergen.                |
| `allergen_sesame_seeds`              | Contains this allergen.                |
| `allergen_soybeans`                  | Contains this allergen.                |
| `allergen_sulphur_dioxide_sulphites` | Contains this allergen.                |

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
- `ref`: The ref code of the deal becomes the ref of the product, preceded by `DEAL-`. For example, for a deal with ref code `abc123`, Uber Eats Bridge creates a Uber Eats product with plu `DEAL-abc123`.
- `lines`: For each object in the array, Uber Eats Bridge creates a list of modifiers, with `lines.name` as the name.

By default, when customers order a deal, they must choose one product for every deal line.

### Availability

Every time you push your catalog to Uber Eats, you also update the opening hours, based on the values you set from the [Configuration page](/apps/uber-eats/configuration#location).
