---
title: Push the Catalog
path_override: push-catalog
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

To update your menu in Just Eat, you should have a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to push their menu into HubRise. Refer to your EPOS documentation on the HubRise website to verify.

Alternatively, you can populate a HubRise catalog by pulling the menu from an existing Deliveroo or Uber Eats store. For more information, refer to these links:

- [Pull a Catalog from Deliveroo](/apps/deliveroo/pull-catalog)
- [Pull a Catalog from Uber Eats](/apps/uber-eats/pull-catalog)

## Manual Catalog Push

Once your catalog is populated on HubRise, you can push it manually to your Just Eat store by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Just Eat store.
1. Open the **CONNECTIONS** page, then select **Just Eat Flyt Bridge** from the list of connected apps.
1. In Just Eat Flyt Bridge, select the **Actions** tab, then click **Push catalog**.
1. Check your Just Eat online menu.

---

**IMPORTANT NOTE:** Pushing your HubRise catalog into Just Eat will erase the current menu on your Just Eat store. A catalog push will also update your Just Eat **Opening hours** settings as defined in the Just Eat Flyt Bridge **Configuration** page. This action cannot be reverted.

---

---

**IMPORTANT NOTE:** Once HubRise is connected to your Just Eat store, you should under no circumstances ask Just Eat support to update it on your behalf. Doing so will break the connexion. If you stop receiving orders and suspect that this is what happened, immediately proceed with a Manual Catalog Push.

---

## Automatic Catalog Push

Just Eat Flyt Bridge can automatically push your HubRise catalog into Just Eat every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Just Eat store.
1. Open the **CONNECTIONS** page, then select **Just Eat Flyt Bridge** from the list of connected apps.
1. In Just Eat Flyt Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick **Enable automatic catalog push**.
1. Click **Save**.

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

For every category, the following HubRise fields are pushed into Just Eat:

- `name`: The name of the category
- `description`: The description of the category

### Products and Skus

Products in the `products` array of a HubRise catalog can have several skus. This notion of products/skus is not supported on Just Eat. Every sku is mapped to an individual product on Just Eat. For more information about products in HubRise, see the [Products](/developers/api/catalogs#products) section of our API documentation.

Emojis are not supported in Just Eat. If you use emojis in your HubRise catalog, they will be removed when pushed to Just Eat.

For every `sku` object in a product, Just Eat Flyt Bridge pushes the following information into Just Eat:

- `ref`: The ref of the sku, which will be passed along in orders
- `name`: The name of the sku
- `description`: The description of the parent product
- `price`: The price of the sku
- `option_list_refs`: The list of options attached to the sku
- `tags`: Tags describing the characteristics and restrictions of the product, such as allergens or spiciness. See [Product Tags](#product-tags).
- `image`: The URL of the image of the parent product

For more information about skus in the HubRise catalog, see the [Skus](/developers/api/catalogs#skus) section of our API documentation.

---

**IMPORTANT NOTE:** Products without a ref code are not pushed to Just Eat. For more information, see [Why Are Some Products Not Exported](/apps/just-eat-flyt/faqs/products-not-pushed).

---

### Product Tags {#product-tags}

The table below lists the tags that can be set on products.

| Tag                                  | Description                            |
| ------------------------------------ | -------------------------------------- |
| `alcoholic`                          | Contains alcohol.                      |
| `deal_only`                          | Can only be ordered as part of a deal. |
| `spicy_1`                            | Midly spicy.                           |
| `spicy_2`                            | Spicy.                                 |
| `spicy_3`                            | Very spicy.                            |
| `vegan`                              | Vegan dish.                            |
| `vegetarian`                         | Vegetarian dish.                       |
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

For every option list in the catalog, Just Eat Flyt Bridge pulls the following information into Just Eat:

- `name`: The name of the option list
- `type`: The number of options that can be selected from the list, either `single` or `multiple`.

For every option in an option list, the following information is sent to Just Eat:

- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single option

### Deals

For each deal in the catalog, Just Eat Flyt Bridge creates a product on Just Eat with the following details:

- `name`: The name of the deal becomes the name of the product.
- `category_ref`: If empty, Just Eat Flyt Bridge creates a default category in Just Eat called "Offers".
- `ref`: The ref code of the deal becomes the ref of the product, preceded by `DEAL-`. For example, for a deal with ref code `abc123`, Just Eat Flyt Bridge creates a Just Eat product with ref code `DEAL-abc123`.
- `lines`: For each object in the array, Just Eat Flyt Bridge creates a list of modifiers, with `lines.name` as the name.

### Discounts

Discounts are not supported on Just Eat. Therefore, discounts present in your HubRise catalog are ignored and are not pulled into Just Eat.

### Opening hours

When you push your HubRise catalog to Just Eat, you also update the opening hours of your store, based on the values set on the [configuration page](/apps/just-eat-flyt/configuration#catalog).
