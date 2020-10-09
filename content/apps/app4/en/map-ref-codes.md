---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: App4 Connection to HubRise Configuration
  description: Instructions on how to configure App4 for optimal connection to HubRise and other platforms.
---

Once your App4 website is connected with HubRise, customer and order information are pushed into HubRise automatically.

For orders to be processed in your EPOS, ref codes are required for each item in the menu, including product variants, toppings and options as well as ingredients, product sizes and deals. Your App4 menu can be imported from a HubRise catalog to ensure that these codes are included.

In some cases, the EPOS will also require codes for payment methods, service types and delivery charges to understand some of the App4 functionalities. Always refer to your EPOS documentation on the HubRise website for details.

---

**IMPORTANT NOTE**: App4 and HubRise have their own vocabulary, and may refer to the same things by different names. For example, the menu in App4 is a catalog in HubRise. For more information on the terms and definitions used between these two platforms, see [HubRise Definitions vs App4 Definitions](/apps/app4/app4-terms).

---

## Catalog Import

You can import a HubRise Catalog into your App4 menu. When you do this, the following data is imported:

- Category and product names.
- Product and category assignments. (For example, if you have a Category for Beverages, and a product called Coffee in a HubRise Category, this import will assign Coffee into the Beverages Category).
- Images.
- Day restrictions

<!--
---

**IMPORTANT NOTE**: This will not create new categories and products in App4. As of this time, this will only update existing categories and products. -->

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

<!--
 - Does catalog import actually create products, categories, deals and options? Or it just updates names, prices, ... of already create items? In other words, if you import into a blank site, will it populate the whole menu from HubRise?
CJ: Import will create a product/deal/category/option the first time it see them. After that an option on the import has to be checked to update prices and names.
  The import will populate a blank menu.


 - Does the user have access to a user interface similar to their admin dashboard, to synchronise their menu with HubRise?
 CJ: the user currently does not have access to this dashboard as whilst we're still testing it we would prefer to do the import ourselves so we can handle any issues that might occur. Once we're happy that the system works as it should we will make this avilable to the user.
 -->

## Product Mapping

<!--
 - Can users manually edit a product or an option, for example to change a ref code or a price? How?
CJ: Users can not manually enter a product or option. The App4 menu is current a slave to HubRise
-->

## Deals & Discounts Mapping

<!--
 - Can you provide a few examples of deals supported by App4?
Fixed price deals are supported, and so are "bundle" deals. 
% off deals are not supported completly, they will attempt to import if all the items have the same price, but App4 does not support % off deals in our system

- Can they be configured manually? If they can, how can you set the deal ref code?
Discounts can currently be configured manually but we current can not add a ref code to them for HubRise.
-->

## Payment Methods Mapping

<!--
 - Our understanding is that you can now associate payment methods with unique ref codes, is that correct? Are you passing these codes in orders?
You can now associate payment methods with custom codes.
 - How can these codes be configured?
These will have to be provided to App4 as the set up for HubRise is not currently accessable to the user.
-->

## Service Types Mapping

Currently not supported by the integration.

## Charges Mapping

<!--
 - Is it possible to define charges, such as a tip, or a delivery charge?
Delivery, tip, and admin fees are passed through in the order.

 - Can you configure a ref code for each type of charge? How?
 These can be set up in the same way the payment references are done.
 
 - Are charges encoded in orders, along with their ref code?
 Yes.
-->

## Discounts Mapping

<!--
Discounts are the opposite of charges: they reduce the total price of the order. Examples: "10% off your order".
Our understanding is that discounts are supported by App4.
 - Can you give a few example of supported discounts? App4 allows only 1 discount to be applied to an order. App4 should supports % off discounts,  fixed value, and Buy X get X free discounts. The example menu provided by HubRise currently doesn't have any discounts on them, so a best guess has been attempted. Once someone has a discount set up we'll make sure it works properly.

 - Can you configure a ref code for each discount? How? - the reference codes are the ones provided by hubrise, currently setting custom references on the discounts is not possible.
 - Are discounts encoded in orders, along with their ref code? We pass back the Reference code provided by hubrise - if we have it. If it's an App4 discount that doesn't exist on Hubrise we will still pass it, but it'll have a null reference code.
-->
