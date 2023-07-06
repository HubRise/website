---
title: Map Ref Codes
position: 5
layout: documentation
meta:
  title: Map Ref Codes | WooCommerce | HubRise
  description: Instructions on mapping WooCommerce product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

Most EPOS solutions require a ref code for each product to properly interpret orders. Therefore, you need to make sure that each product on WooCommerce is assigned to the correct ref code.

This page explains how to configure ref codes manually in WooCommerce. Some EPOS solutions offer the ability to export their catalog to HubRise, allowing you to populate WooCommerce products automatically with the correct ref codes. For more details, see [Push the Catalog](/apps/woocommerce/push-catalog).

## Products and SKUs

To assign ref codes to your WooCommerce products, follow these steps:

1. Log in to your WooCommerce back office.
1. From the menu, select **Products** > **All products**.
1. From the list of products, find the product for which you want to add the ref code, and click **Edit**.
1. If the product has no variations, follow these instructions:
   - Open the **Inventory** tab.
   - Enter the HubRise SKU ref code in the **SKU** field.
     ![Entering the ref code in the SKU field for a WooCommerce product](../images/008-en-woocommerce-product-ref-code.png)
1. Otherwise, if the product uses variations, follow these instructions:
   - Open the **Variations** tab.
   - Click on the desired variation to expand the form.
   - Enter the HubRise SKU ref code in the **SKU** field.
     ![Entering the ref code in the SKU field for a WooCommerce variation](../images/009-en-woocommerce-variation-ref-code.png)
1. Click **Update** to confirm.

You will need to repeat this manual procedure for all your available products.

## Options

WooCommerce does not support Options. Use Products and SKUS instead.
