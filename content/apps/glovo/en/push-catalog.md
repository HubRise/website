---
title: Push the Catalog
position: 6
layout: documentation
meta:
  title: Push the Catalog | Glovo | HubRise
  description: Find out how to push a catalog from HubRise to Glovo, how items and options are encoded, and which features are supported.
---

With Glovo Bridge, you can push your HubRise catalog into your Glovo store with a single click.

You can also configure the bridge to push your catalog into Glovo every time it is updated on HubRise. For more information, see [Catalog](/apps/glovo/configuration#catalog).

This page explains how to push your catalog, and what information is sent to Glovo.

---

**IMPORTANT NOTE:** You can update your Glovo catalog at most 5 times per day.

---

## Populate a HubRise Catalog

To update your menu in Glovo, you should have a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to push their menu into HubRise. Refer to your EPOS documentation on the HubRise website to verify.

Alternatively, you can populate a HubRise catalog by pulling your menu from Uber Eats.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog).

## Manual Catalog Push

Once your catalog is populated on HubRise, you can push it manually to your Glovo store by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Glovo store.
1. Open the **CONNECTIONS** page, then select **Glovo Bridge** from the list of connected apps.
1. In Glovo Bridge, select the **Actions** tab, then click **Push catalog**.
1. Check your Glovo online menu.

---

**IMPORTANT NOTE:** Pushing your HubRise catalog into Glovo will erase the current menu on your Glovo store.
This action cannot be reverted.

---

## Automatic Catalog Push

Glovo Bridge can automatically push your HubRise catalog into Glovo every time it is updated. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Glovo store.
1. Open the **CONNECTIONS** page, then select **Glovo Bridge** from the list of connected apps.
1. In Glovo Bridge, select the **Configuration** tab.
1. In the **Catalog** section, tick the **Enable automatic catalog push** box.
1. Click **Save**.

## Information Sent to Glovo

The following sections provide more details on how your HubRise catalog is mapped to Glovo.

### Categories

Glovo Bridge maps HubRise categories one-to-one to categories of products on Glovo.

The category name, ref code, and image are sent to Glovo.

### Category Images

The category images that you send to Glovo must satisfy the following requirements:

- Orientation: square.
- Dimensions: 1000 x 1000 px.
- Format: JPG.
- File size: below 1.5 MB.
- Background: light, plain colour (except white and yellow) or plain texture (e.g. wooden).
- The image should have at least 2 products from that collection.

### Products and Skus

Glovo Bridge maps single sku products one-to-one to products on Glovo, sending the following information:

- Sku name
- Sku ref code
- Description
- Images
- Price
- Options
- Tags: `alcoholic` (see note)

For products with multiple skus, Glovo Bridge creates a product for each sku.

---

**IMPORTANT NOTE:** To enable alcoholic restrictions on your products, [contact Glovo support](mailto:q-commerce-integrations@glovoapp.com).

---

### Option Lists and Options

Glovo Bridge maps option lists and options one-to-one to Glovo.

### Deals

Glovo Bridge maps HubRise deals to products with attributes in Glovo. However, Glovo only supports one level of options. Therefore, if products in a deal has associated options, Glovo Bridge will ignore those options.

For example, if your deal contains a choice of pizzas with multiple toppings, Glovo Bridge will ignore the toppings when creating the corresponding product on Glovo.

### Product Images

The product images that you send to Glovo must satisfy the following requirements:

- Orientation: square.
- Dimensions: 1000 x 1000 px.
- Format: JPG.
- File size: below 1 Mb.
- Background: light, plain colour or plain texture (e.g. wooden).
- The product must be in a frontal plane.
- The image must show a single product.

## Technical Reference

The following sections describe in detail how Glovo Bridge maps HubRise catalogs to Glovo.

### Categories

For every category, Glovo Bridge sends the following HubRise fields to Glovo:

- `name`: The name of the category
- `ref`: The ref code of the category
- `image_ids`: The images of the category

The order in which categories and products appear on HubRise is maintained on Glovo.

### Products and Skus

For every sku in a product, Glovo Bridge sends the following information to Glovo:

- `name` + " " + `sku.name`: Glovo Bridge joins the name of the product and of the sku to create the product name
- `sku.ref`: The ref of the sku, which will be passed along in orders
- `description`: The description of the product
- `sku.price`: The price of the sku
- `tags`: Tags describing the characteristics and restrictions of the product, such as allergens or spiciness.
- `image`: The URL of the image of the parent product
- `sku.option_list_refs`: The list of options attached to the sku

For more information about skus in the HubRise catalog, see [Skus](/developers/api/catalogs#skus).

### Options

For every option list in the catalog, Glovo Bridge sends the following information to Glovo:

- `name`: The name of the option list
- `ref`: The ref code of the option list
- `min_selections`: The minimum number of options that customers can select
- `max_selections`: The maximum number of options that customers can select

For every option in an option list, Glovo Bridge sends the following information to Glovo:

- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single option

### Deals

For each deal in the catalog, Glovo Bridge creates a Glovo product with the following details:

- `name`: The name of the deal becomes the name of the product.
- `category_ref`: If empty, Glovo Bridge creates a default category in Glovo called "Offers".
- `ref`: The ref code of the deal becomes the ref of the product, preceded by `DEAL-`. For example, for a deal with ref code `abc123`, Glovo Bridge creates a Glovo product with plu `DEAL-abc123`.
- `lines`: For each object in the array, Glovo Bridge creates an attribute group, with `lines.name` as the name.
