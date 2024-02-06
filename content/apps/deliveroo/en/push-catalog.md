---
title: Push the Catalog
path_override: push-catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | Deliveroo | HubRise
  description: Find out how to push a catalog from HubRise to Deliveroo, how items and options are encoded, and which features are supported.
---

With Deliveroo Bridge, you can push your HubRise catalog into your Deliveroo store with a single click.

You can also configure the bridge to push your catalog into Deliveroo every time it is updated on HubRise. For more information, see [Catalog](/apps/deliveroo/configuration#catalog).

This page explains how to push your catalog, and what information is sent to Deliveroo.

## Populate a HubRise Catalog

To update your menu in Deliveroo, you should have a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to push their menu into HubRise. Refer to your EPOS documentation on the HubRise website to verify.

Alternatively, you can populate a HubRise catalog by pulling the menu from an existing Deliveroo or Uber Eats store. For more information, refer to these links:

- [Pull a Catalog from Deliveroo](/apps/deliveroo/pull-catalog)
- [Pull a Catalog from Uber Eats](/apps/uber-eats/pull-catalog)

## Manual Catalog Push

Once your catalog is populated on HubRise, and you have assigned ref codes to all products and options, you can push it manually to your Deliveroo store by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Deliveroo store.
1. Open the **CONNECTIONS** page, then select **Deliveroo Bridge** from the list of connected apps.
1. In Deliveroo Bridge, select the **Actions** tab, then click **Push catalog**.
1. Check your Deliveroo online menu.

---

**IMPORTANT NOTE:** Pushing your HubRise catalog into Deliveroo will erase the current menu on your Deliveroo store, and replace your **Menu description** and **Menu banner** with the ones defined in the **Configuration** page. This action cannot be reverted. The catalog push will not work if ref codes are missing.

---

## Automatic Catalog Push

Deliveroo Bridge can automatically push your HubRise catalog into Deliveroo every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Deliveroo store.
1. Open the **CONNECTIONS** page, then select **Deliveroo Bridge** from the list of connected apps.
1. In Deliveroo Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick the **Enable automatic catalog push** box.
1. Click **Save**.

## Information Sent to Deliveroo {#information-sent}

The following sections provide more details on how your HubRise catalog is mapped to Deliveroo.

### Menu Description and Banner

You can specify the menu description and upload your banner image directly from the [Configuration page](/apps/deliveroo/configuration).

Deliveroo Bridge sends this information to Deliveroo with every catalog push.

### Categories

Deliveroo Bridge maps HubRise categories one-to-one to categories of products on Deliveroo.

The category name, ref code, and description are sent to Deliveroo.

### Products and Skus

Deliveroo Bridge maps single sku products one-to-one to products on Deliveroo, sending the following information:

- Sku name
- Sku ref code
- Description
- Images
- Price
- Options

For products with multiple skus, Deliveroo Bridge creates a product, a modifier list, and one modifier for each sku.
Options are attached to each sku as an extra layer of modifiers.

### Options List and Options

Deliveroo Bridge maps option lists and options one-to-one to Deliveroo.

### Deals

Deliveroo Bridge maps HubRise deals to products with modifiers on Deliveroo.

### Images

Deliveroo requires images to be 1200x800 pixels.

## Technical Reference

The following sections describe in detail how Deliveroo Bridge maps HubRise catalogs to Deliveroo.

### Categories

For every category, Deliveroo Bridge sends the following HubRise fields to Deliveroo:

- `name`: The name of the category
- `ref`: The ref code of the category
- `description`: The description of the category

The order in which categories and products appear on HubRise is maintained on Deliveroo.

### Products and Skus

Products have one or several skus. For every product with multiple skus, Deliveroo Bridge sends the following information to Deliveroo:

- `ref`: The value `MULTISKU` is used for all products
- `name`: The name of the product
- `description`: The description of the product
- `price`: The minimum price of all skus
- `tags`: Tags describing the characteristics and restrictions of the product, such as allergens or spiciness. See [Product Tags](#product-tags).
- `image`: The URL of the image of the parent product

The list of skus is attached to the product as an array of modifiers.

For every `sku` object in a product, Deliveroo Bridge sends the following information to Deliveroo:

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

If a product does not contain any allergens, Deliveroo Bridge automatically adds the `no_allergens` tag.

### Options

For every option list in the catalog, Deliveroo Bridge sends the following information to Deliveroo:

- `name`: The name of the option list
- `min_selections`: The minimum number of options that customers can select
- `max_selections`: The maximum number of options that customers can select

For every option in an option list, Deliveroo Bridge sends the following information to Deliveroo:

- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single option

### Deals

For each deal in the catalog, Deliveroo Bridge creates a Deliveroo product with the following details:

- `name`: The name of the deal becomes the name of the product.
- `category_ref`: If empty, Deliveroo Bridge creates a default category in Deliveroo called "Offers".
- `ref`: The ref code of the deal becomes the ref of the product, preceded by `DEAL-`. For example, for a deal with ref code `abc123`, Deliveroo Bridge creates a Deliveroo product with PLU `DEAL-abc123`.
- `lines`: For each object in the array, Deliveroo Bridge creates a list of modifiers, with `lines.name` as the name.
