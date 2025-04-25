---
title: How to Create a Product With Variations in Uber Eats?
path_override: create-product-with-skus
position: 5
layout: documentation
meta:
  title: Creating a Product With Variations in Menu Maker | Uber Eats FAQs | HubRise
  description: Instructions on how to create a product with variations or skus in Menu Maker, the catalog management tool in Uber Eats back office.
---

Uber Eats menus do not natively support products with multiple variations, such as a pizza available in multiple sizes.
However, Uber Eats items with a specific structure are interpreted as products with variations by Uber Eats Bridge.
This page describes the conventional structure you need to use to create products with variations.

In HubRise, a variation of a product is called [sku](/docs/data#view-catalog), and can represent, for example, each specific size of the parent product.
If your EPOS supports products with skus, and you want to receive such products in your Uber Eats orders, you have the following two options:

- If you [push your HubRise catalog](/apps/uber-eats/push-catalog) into Uber Eats with Uber Eats Bridge, products with skus are automatically created with the correct format on Uber Eats.
- If you manually create your menu with [Menu Maker](https://merchants.ubereats.com/us/en/technology/simplify-operations/menu-management), the catalog management tool in Uber Eats back office, create your products following the steps on this page.

## Product Structure

In Menu Maker, there are two main building blocks: items and modifier groups.

To create a product with multiple skus, you need to create the following structure using items and modifier groups:

- Parent product (Item)
  - Choice of skus (Modifier group)
    - Sku 1 (Item)
    - Sku 2 (Item)
    - Sku 3 (Item)

For example, if you want to create a pizza size variations, use the following structure:

- Pizza Margherita (Item)
  - Choose your Margherita size (Modifier group)
    - Pizza Margherita 8" (Item)
    - Pizza Margherita 10" (Item)
    - Pizza Margherita 12" (Item)

To ensure that Uber Eats Bridge sends the correct information to HubRise when customers order a product with a sku, follow this convention:

- The ref code of the parent product, in this case `Pizza Margherita`, must be `MULTISKU`.
- Invidivual skus must have the same ref code they have in your EPOS.

## Step-By-Step Guide to Create a Product With Skus

The following sections explains the steps required to create a product with multiple skus on Uber Eats Menu Maker.

### 1. Create the Skus

To create the individual skus that are part of the product, follow these steps:

1. Log in to your [Uber Eats back office](https://restaurant.uber.com).
1. Select **Menu** > **Items**, then click **New item**.
1. Fill in the details for your sku.
   - Enter the name of the sku, for example `Pizza Margherita 8"`.
   - Under **Sell item on its own**, select **No**.
     ![Sku name and sell item on its own choice](./images/012-product-name-menu-maker.png)
   - Under **Default price**, enter the difference with the price of the main product, or `0`.
   - Expand **Extra details**, then under **External data**, enter the ref code of the sku.
     ![Ref code under extra details](./images/013-extra-details-menu-maker.png)
   - Optional: Fill in the other relevant fields in the page.
1. To confirm the sku, click **Save**.
1. Repeat the process for all the other skus that are part of the product. Click **Duplicate** to use the current sku as a starting point for the next ones.

### 2. Create the Modifier Group

After creating all the skus, to group them together within a modifier group follow these steps:

1. Select **Menu** > **Modifier groups**, then click **New group**.
1. Fill in the details of your modifier group.
   - Enter the name of the modifier group, for example `Choose your Margherita size`.
   - In the **Add item** field, select all the skus that are part of the product, then click **Add**.
     ![Modifier group name and skus](./images/014-modifier-group-name-menu-maker.png)
   - Drag the skus in the order you want them to appear on the list.
   - In the **Rules** section, enter the following values:
     - **Minimum number of options a customer must select**: `1`
     - **Maximum number of options a customer can select**: `1`
     - **How many times can customers select any single option**: `1`
       ![Modifier group rules](./images/015-modifier-group-rules-menu-maker.png)
1. To confirm the modifiers group, click **Save**.

### 3. Create the Main Product

Finally, create the product and attach the modifier group to it.
Follow these steps:

1. Select **Menu** > **Items**, then click **New item**.
1. Fill in the details for the main product.
   - Enter the name of the product, for example `Pizza Margherita`.
   - Under **Sell item on its own**, select **Yes**.
   - Under **Categories**, select the category that contains the product.
   - Under **Default price**, enter the price of the cheapest sku.
     ![Main product name](./images/016-main-product-name-menu-maker.png)
   - Expand **Customise item**, then click **Add modifier group**. From the modifier groups list, select the modifier group that contains the skus, then click **Add**.
     ![Main product customisation](./images/017-main-product-customisation-menu-maker.png)
   - Expand **Extra details**, then under **External data**, enter `MULTISKU`.
     ![Main product details](./images/018-main-product-details-menu-maker.png)
   - Optional: Fill in the other relevant fields in the page.
1. To confirm the product, click **Save**.
