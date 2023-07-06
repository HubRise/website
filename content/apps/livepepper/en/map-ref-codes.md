---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | LivePepper | HubRise
  description: Instructions on mapping LivePepper product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

To receive LivePepper orders correctly on your EPOS, you need to configure ref codes for each item in the catalog, including toppings and options, ingredients, product sizes and deals. In some cases, the EPOS also requires ref codes for payment methods, service types and delivery charges. Refer to your EPOS documentation on the HubRise website for details.

This page explains how to configure ref codes in LivePepper.
Some EPOS solutions offer the ability to export the menu to HubRise, allowing you to populate your LivePepper menu automatically with the correct ref codes. For more details, see [Pulling and Pushing the Menu](/apps/livepepper/menu).

## Products and Skus

Products can have different ref codes depending on the different skus available.

To update the ref code for each sku, follow these steps.

1. From your LivePepper back office, select **Products** under **My Menu**.
1. Select the product to update.
1. For each sku in the **Price & Availability** section, update the ref code under the **POS code** column.
1. Click **Save** to confirm.

![Mapping ref codes for skus](../images/001-en-livepepper-skus-ref-codes.png)

At the end of the process you can check if all products have been mapped. For more information, see [Verify Product Mapping](/apps/livepepper/troubleshooting#verify-product-mapping)

## Toppings, Variants, Ingredients, and Options

LivePepper supports different types of optional changes to the products, called toppings, variants, ingredients, and options. These can be defined at the category- or product-level.

The following table provides an overview all these features.

| Name       | Description                                                                  | Level Definition     | Example                                               |
| ---------- | ---------------------------------------------------------------------------- | -------------------- | ----------------------------------------------------- |
| Variant    | Different choice of a product                                                | Category and Product | Choosing a pizza with thin crust or hand tossed crust |
| Topping    | Ingredients not available by default that customers can add to their product | Category             | Adding mushrooms to a pizza                           |
| Ingredient | An ingredient present by default that can be removed from the product        | Product              | Removing the pickles from a cheeseburger              |
| Option     | An optional service or item added to the product                             | Category             | Asking to slice the pizza                             |

To update the ref code for ingredients or variants defined at the product-level, follow these steps.

1. Select the product.
1. From the **Customization** section, select the item you want to update.
1. If the ingredient or variant is used in other products and they share the same ref code, you can update the ref code everywhere with these additional steps.
   - From the **Quick Copy** section, select whether the change applies to **All menu** items or to all products in a category.
   - Select **Use POS codes above**.
1. Click **Save** to confirm.

To update the ref code for toppings, options, and variants defined at the category-level, follow these steps.

1. Select the category.
1. From the **Customization** section, select the item you want to update.
1. If the item is used in other products and they share the same ref code, you can update the ref code everywhere with these additional steps
   - From the **Quick Copy** section, select whether the change applies to **All menu** items or to all products in a category.
   - Select **Use POS codes above**.
1. Click **Save** to confirm.

At the end of the process you can check if all product values and attributes have been mapped. For more information, see [Verify Product Mapping](/apps/livepepper/troubleshooting#verify-product-mapping).

<video controls title="Update Ingredients EPOS Code">
  <source src="../images/018-ingredients-pos-code-update.webm" type="video/webm" />
</video>

## Deals and Discounts

Deals in LivePepper offer savings on products or on the entire order. Correct ref codes are essential for orders containing deals to be properly transmitted to your EPOS system and other apps connected to HubRise.

To add ref code to a deal, follow these steps.

1. From your LivePepper back office, select **Deals** under **My Menu**.
1. For the deal to update, select **Edit**.
1. Under **Advanced Settings**, enter the ref code in the **POS code** field.
1. Click **Save** to confirm.

At the end of the process you can check if all deals have been mapped. For more information, see [Verify Product Mapping](/apps/livepepper/troubleshooting#verify-product-mapping)

<video controls title="Update Deals Ref Code">
  <source src="../images/019-deals-pos-code-update.webm" type="video/webm" />
</video>

---

**IMPORTANT NOTE:** Depending on your EPOS, deals may be transmitted to the EPOS even without a ref code. Verify that your deals are properly set up to comply with your EPOS requirements.

---

## Payment Methods

Payment methods you set up on LivePepper may require a ref code. Refer to your EPOS documentation on the HubRise website to verify.

To add a ref code to a payment method, follow these steps.

1. From your LivePepper back office, select **Payment settings** under **Settings**.
1. Click the payment method to update.
1. Click the <InlineImage width="20" height="20">![Pencil icon](../images/__pencil-icon.png)</InlineImage> Edit icon.
1. Under **Advanced settings**, enter the ref code in the **POS code** field.
1. Click **Save** to confirm.

<video controls title="Add Ref Code to Payment Method">
  <source src="../images/024-payment-method-add-pos-code.webm" type="video/webm" />
</video>

## Service Types

Service types such as delivery, collection or eat-in might require a ref code. Refer to your EPOS documentation on the HubRise website to verify.

To add a ref code to a service type, follow these steps:

1. From your LivePepper back office, select **Delivery settings** under **Settings**.
1. Under **Delivery methods**, find the service type to update and add the ref code in the **POS code** field.
1. Click **Save** to confirm.

## Delivery Charges

If delivery charges apply for the service offered, a ref code might be required. Refer to your EPOS documentation on the HubRise website to verify.

To add a ref code to a delivery charge, follow these steps:

1. From your LivePepper back office, select **Delivery settings** under **Settings**.
1. Under **Delivery charge**, add the ref code in the **POS code** field.
1. Click **Save** to confirm.
