---
title: Map Ref Codes
position: 5
layout: documentation
meta:
  title: Map Ref Codes | Shopify | HubRise
  description: Instructions on mapping Shopify product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

Most EPOS solutions require a ref code for each product to properly interpret orders. Therefore, you need to make sure that each product on Shopify is assigned to the correct ref code.

This page explains how to configure ref codes manually in Shopify. Some EPOS solutions however offer the ability to export their catalog to HubRise, allowing you to populate Shopify products automatically with the correct ref codes. For more details, see [Push the Catalog](/apps/shopify/push-catalog).

To assign ref codes to your Shopify products, follow these steps:

1. Log in to your Shopify back office.
2. From the menu, select **Products** > **All products**.
3. From the list of products, select the product for which you want to add the ref code.
4. In the **Options** section, check whether the product has options:

   - If the product has options, in the **Variants** section, enter the ref code for each variant in the **SKU** field.
     ![Entering ref codes for a Shopify product with options](../images/006-en-shopify-map-ref-codes-multi-sku.png)

   - If the product has no options, in the **Inventory** section, enter the ref code in the **SKU (Stock Keeping Unit)** field.
     ![Entering the ref code in the SKU field for a Shopify product](../images/007-en-shopify-map-ref-codes-single-sku.png)

5. Click **Save** to confirm.

You will need to repeat this manual procedure for all your available items.
