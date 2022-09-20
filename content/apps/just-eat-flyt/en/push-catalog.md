---
title: Push the Catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | Just Eat Flyt | HubRise
  description: Find out how to push a catalog from HubRise to the Just Eat platform, how items and options are encoded, and which features are supported.
---

Just Eat does not provide a back office to populate and customise the items in your menu.
You can use Just Eat Flyt Bridge to push your HubRise catalog into your Just Eat store with a single click.

You can also configure the bridge to push your catalog into the platform every time it is updated on HubRise. For more information, see [Catalog](/apps/just-eat-flyt/configuration#catalog).

This page explains how to push your catalog, and what information is sent to the platform.

## Populate a HubRise Catalog

To be able to update your menu in Just Eat, you should populate a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to export the menu to HubRise. Refer to your connected EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/).

## Push the Catalog

Once your catalog is populated on HubRise, you can push it to your Just Eat store by following these steps.

1. Log in to your HubRise account.
1. Select the location connected with your Just Eat store.
1. Select **Just Eat Flyt Bridge** from the list of connected apps.
1. In Just Eat Flyt Bridge, click the **Actions** tab, then select **Push catalog**.

---

**IMPORTANT NOTE:** Pushing your HubRise catalog into Just Eat will erase the current menu on your Just Eat store. This action cannot be reverted.

---

## Technical Reference

The following sections describe in detail how HubRise catalogs are mapped to Just Eat menus.

### Images

Images that you upload on Just Eat must meet the following requirements:

- Landscape orientation (not portrait nor square).
- At least 1024 x 768 pixels, in 4:3 format.
- JPG or PNG format.

---

**IMPORTANT NOTE:** Just Eat reviews all new pictures uploaded to their stores. After you push an image into Just Eat, it usually takes between two and five days for the image to appear on the menu. If your images don't meet the guidelines, Just Eat will ask you to upload them again.

---

### Categories

The categories in a HubRise catalog are mapped one-to-one to categories of products on Just Eat.
The order in which categories and products appear on HubRise is maintained on Just Eat.

For every category, the following HubRise fields are pulled into Just Eat:

- `name`: The name of the category
- `description`: The description of the category

### Products and Skus

Products in the `products` array of a HubRise catalog can have several skus. This notion of products/skus is not supported on Just Eat. Every sku is mapped to an individual product on Just Eat. For more information about products in HubRise catalogs, see [Products](/developers/api/catalog-management/#products).

For every `sku` object in a product, Just Eat Flyt Bridge pulls the following information into Just Eat:

- `ref`: The ref of the sku, which will be passed along in orders
- `name`: The name of the sku
- `description`: The description of the parent product
- `price`: The price of the sku
- `option_list_refs`: The list of options attached to the sku
- `tags`: Tags describing the characteristics and restrictions of the product, such as allergens or spiciness. See [Product Tags](#product-tags).
- `image`: The URL of the image of the parent product

For more information about skus in the HubRise catalog, see [Skus](/developers/api/catalog-management/#skus).

---

**IMPORTANT NOTE:** Products without a ref code are not pushed to Just Eat. For more information, see [Why Are Some Products Not Exported](/apps/just-eat-flyt/faqs/products-not-pushed/).

---

### Product Tags

The table below lists the tags that can be set on products.

| Tag                                  | Description             |
| ------------------------------------ | ----------------------- |
| `alcoholic`                          | Contains alcohol.       |
| `spicy_1`                            | Midly spicy.            |
| `spicy_2`                            | Spicy.                  |
| `spicy_3`                            | Very spicy.             |
| `vegan`                              | Vegan dish.             |
| `vegetarian`                         | Vegetarian dish.        |
| `allergen_celery`                    | Contains this allergen. |
| `allergen_crustaceans`               | Contains this allergen. |
| `allergen_eggs`                      | Contains this allergen. |
| `allergen_fish`                      | Contains this allergen. |
| `allergen_gluten`                    | Contains this allergen. |
| `allergen_lupin`                     | Contains this allergen. |
| `allergen_milk`                      | Contains this allergen. |
| `allergen_molluscs`                  | Contains this allergen. |
| `allergen_mustard`                   | Contains this allergen. |
| `allergen_nuts`                      | Contains this allergen. |
| `allergen_peanuts`                   | Contains this allergen. |
| `allergen_sesame_seeds`              | Contains this allergen. |
| `allergen_soybeans`                  | Contains this allergen. |
| `allergen_sulphur_dioxide_sulphites` | Contains this allergen. |

### Options

For every option list in the catalog, Just Eat Flyt Bridge pulls the following information into Just Eat:

- `name`: The name of the option list
- `type`: The number of options that can be selected from the list, either `single` or `multiple`.

For every option in an option list, the following information is sent to Just Eat:

- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single option

### Deals and Discounts

Deals and discounts are not supported on Just Eat. Therefore, deals and discounts present in your HubRise catalog are ignored and are not pulled into Just Eat.

### Availability

Every time you push your HubRise catalog to Just Eat, you also update the availability of your menu, based on the values you set from the [configuration page](/apps/just-eat-flyt/configuration/#catalog) of Just Eat Flyt Bridge.
