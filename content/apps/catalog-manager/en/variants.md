---
title: Variants
path_override: variants
position: 10
layout: documentation
meta:
  title: Variants | Catalog Manager | HubRise
  description: Instructions on how to create and edit Variants in Catalog Manager. Synchronise catalogs between your EPOS and your apps.
---

Variants let you manage different prices and availability across multiple platforms with a single catalog. For example, you can configure different prices between food delivery platforms and your other channels.

Some common setups include:

- Variants by delivery platforms: **Deliveroo**, **Uber Eats**, etc.
- Variants by locations: **London**, **Paris**, etc.
- Variants by groups of locations: **Large cities**, **Small cities**, etc.
- Variants by channels: **Online**, **In-store**, etc.

You can also use a combination of the above examples: **Deliveroo**, **Uber Eats Paris**, **Uber Eats other cities**, etc.

![Catalog Manager Grid View](./images/020-grid-view.png)

For more information about variants, see the <Link href="/blog/catalog-variants">Catalog Variants blog post</Link>.

## Create Variants

To create a variant, follow these steps:

1. In Catalog Manager, click **Grid**.
1. In the **Grid** view, click **Manage variants**.
1. In the dialog that appears, click **New variant**, then enter a name for your variant.
1. To finish, click **Close**.

Repeat the process for any additional variant that you want to create.

## Manage Variants Availability and Prices

After you create all the variants, you can edit the availability and price for each product, option, and deal in your catalog.
When you create a new product, option, or deal in your catalog, this is duplicated for all the variants, and you can then adjust its price and availability.
Disabling the **Default** version of an item automatically disables it for all variants.

When you finish editing your variants, to update the catalog in HubRise click **Save**.

## Use Variants in Apps

To use the availability and prices of a variant in an app connected to the catalog, you need to select the variant in the app settings.

For instance, to use the Deliveroo variant, open Deliveroo Bridge, click **Settings**, then select **Deliveroo** from the **Variant** dropdown. For other apps, refer to the app documentation for specific instructions.

---

**IMPORTANT NOTE:** All HubRise Bridges support catalog variants, but not all the other connected apps for now. Check your app documentation to know if this feature is supported.

---
