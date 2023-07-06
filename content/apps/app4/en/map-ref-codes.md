---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | App4 | HubRise
  description: Instructions on mapping App4 product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

Once your App4 website is connected with HubRise, customer and order information are pushed into HubRise automatically.

For orders to be processed in your EPOS, ref codes are required for each item in the menu, including product variants, toppings and options as well as ingredients, product sizes and deals. Your App4 menu can be imported from a HubRise catalog to ensure that these codes are included.

In some cases, the EPOS will also require codes for payment methods, service types and delivery charges to understand some of the App4 functionalities. Always refer to your EPOS documentation on the HubRise website for details.

---

**IMPORTANT NOTE:** App4 and HubRise have their own vocabulary, and may refer to the same things by different names. For example, the menu in App4 is a catalog in HubRise. For more information on the terms and definitions used between these two platforms, see [HubRise Definitions vs App4 Definitions](/apps/app4/app4-terms).

---

## Catalog Import

You can import a HubRise Catalog into your App4 menu. When you do this, the following data is imported:

- Category and product names.
- Product and category assignments. (For example, if you have a Category for Beverages, and a product called Coffee in a HubRise Category, this import will assign Coffee into the Beverages Category).
- Images.

---

**IMPORTANT NOTE:** This will not create new categories and products in App4. As of this time, this will only update existing categories and products.

---

To import a HubRise Catalog, contact App4 support and ask them to take the following steps:

1. Connect to the App4 back office.
1. Click **HubRise Settings**.
1. For the restaurant to sync, select **Sync Systems**.
1. Tick the options you need:
   - **Move existing products into the imported categories**: reset the categories of existing menu items back to how they are set in HubRise.
   - **Update the product names**: update product names of existing menu items to HubRise names.
   - **Update imported category names**: same as above, for category names.
   - **Update existing images**: replace existing menu items images with HubRise images.
1. Click **Import** to update the restaurant's App4 menu.

[//]: # "- Does catalog import actually create products, categories, deals and options? Or it just updates names, prices, ... of already create items? In other words, if you import into a blank site, will it populate the whole menu from HubRise?"
[//]: # "- Does the user have access to a user interface similar to their admin dashboard, to synchronise their menu with HubRise?"

## Product Mapping

[//]: # " - Can users manually edit a product or an option, for example to change a ref code or a price? How?"

## Deals & Discounts Mapping

[//]: # "- Can you provide a few examples of deals supported by App4?"
[//]: # "- Can they be configured manually? If they can, how can you set the deal ref code?"

## Payment Methods Mapping

[//]: # " - Our understanding is that you can now associate payment methods with unique ref codes, is that correct? Are you passing these codes in orders?"
[//]: # " - How can these codes be configured?"

## Service Types Mapping

Currently not supported by the integration.

## Charges Mapping

[//]: # "- Is it possible to define charges, such as a tip, or a delivery charge?"
[//]: # "- Can you configure a ref code for each type of charge? How?"
[//]: # "- Are charges encoded in orders, along with their ref code?"

## Discounts Mapping

[//]: # 'Discounts are the opposite of charges: they reduce the total price of the order. Examples: "10% off your order".'
[//]: # "Our understanding is that discounts are supported by App4."
[//]: # " - Can you give a few example of supported discounts?"
[//]: # " - Can you configure a ref code for each discount? How?"
[//]: # " - Are discounts encoded in orders, along with their ref code?"
