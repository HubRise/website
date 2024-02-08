---
title: Pull the Catalog
position: 4
layout: documentation
meta:
  title: Pull the Catalog | App4 | HubRise
  description: Find out how to push a catalog from HubRise to App4, how items and options are encoded, and which features are supported.
---

With App4, you can pull your HubRise catalog into your App4 store with a single click.

This page explains how to pull your HubRise catalog into App4, and what information is sent to App4.

## Populate a HubRise Catalog

To update your menu in App4, you should have a HubRise catalog first. Many apps connected with HubRise, including EPOS solutions, offer the ability to push their menu into HubRise. Refer to your EPOS documentation on the HubRise website to verify.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog).

## Manual Catalog Pull

After you populate your catalog on HubRise, you can pull it manually to your App4 store by following these steps:

1. Log in to your App4 back office.
1. From the menu, select **Settings** > **HubRise Till**.
1. On the **HubRise Till Manager** page, click **Pull menu from HubRise**.

The menu upload might require a few minutes to complete.
When the menu is updated, the page automatically displays a summary of the updated categories, items, and discounts.

---

**IMPORTANT NOTE:** Pulling your HubRise catalog into App4 will erase the current menu on your App4 store. This action cannot be reverted.

---

## Information Sent To App4

The following sections provide more details on how your HubRise catalog is mapped to App4.

### Categories

HubRise categories are mapped one-to-one to categories of products on App4.

The categories names and order are sent to App4.

### Products and Skus

Single sku products are mapped one-to-one to App4 products, keeping the following information:

- Category
- Sku name
- Sku ref code
- Description
- Images
- Price
- Options

For products with multiple skus, App4 creates a new category and an item for each sku, with the following naming convention for the category name: "HubRise category name - HubRise SKU name".
For example, for a pizza Margherita with multiple sizes, App4 creates one category for each size.

|          | HubRise name | App4 name       |
| -------- | ------------ | --------------- |
| Category | Pizza        | Pizza - 10 inch |
| Product  | Margherita   | Margherita      |
| SKU      | 10 inch      |                 |

### Options List and Options

Option lists and options are mapped one-to-one to App4.

### Deals

HubRise deals are mapped one-to-one to App4. However, App4 does not support deal items whose price is set to `unchanged`.
To make sure that your deals are imported correctly on App4, configure all the deal products to use a `fixed` price.

App4 creates a separate category called **Deals** for all of your deals.

### Images

App4 supports only product images, and resizes images to be 600x600 pixels.
