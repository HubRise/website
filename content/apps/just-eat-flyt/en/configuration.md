---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration | Just Eat Flyt | HubRise
  description: See instructions to configure Just Eat Flyt Bridge to work seamlessly with Just Eat and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The configuration page allows you to customise the behaviour of Just Eat Flyt Bridge based on your preferences.
These are divided into different sections for an easier navigation.

![Just Eat Flyt Bridge configuration page](../images/011-en-just-eat-configuration-page-cropped.png)

## Language

Choose the language to use for generic items such as `Delivery charge`. These names may appear in your EPOS and in customer receipts.

## Orders

### Service Types

Service types such as platform delivery, restaurant delivery or takeaway might require the corresponding ref code entry. Refer to your EPOS documentation on the HubRise website to verify.

Additionally, from this section you can choose to mark Just Eat orders as delivery orders or collection orders.
This is useful if you have specific business requirements for financial reporting.

### Discounts

In this section, include the ref code associated with Just Eat discounts on your EPOS.
Refer to your EPOS documentation on the HubRise website to know how to handle discounts in your EPOS.

### Charges

If charges apply, a ref code might be required. Refer to your EPOS documentation on the HubRise website to verify.

In this section, you can specify the ref codes for the following charges:

- Delivery charge
- Service charge
- Bag fee
- Driver tip
- Other charge

### Payments

Just Eat customers can pay for their order either online or by cash for restaurant delivery orders.

This section of the configuration page allows you to specify the ref codes for these two payment methods. Refer to your EPOS documentation on the HubRise website to verify the correct codes to use.

## Catalog

Choose if you want to push your HubRise catalog to Just Eat every time it is updated on HubRise. By default, this option is turned off. To enable it, tick the box **Publish the menu on Deliveroo with it is updated in HubRise**.

![Just Eat Flyt Bridge configuration page, Catalog section](../images/012-en-just-eat-configuration-page-menu.png)

### Opening Hours

In the **Opening hours** section, you can choose to make your products available for delivery, collection, or both.

For each day of the week, set the opening and closing times of your store by specifying one or two time shifts. Customers will not be able to order from your Just Eat store outside of these time windows.

If your restaurant is closed on a specific day, click **Close the day**.
To quickly copy opening hours to all the following days on the list, click **Copy to bottom**.

---

**IMPORTANT NOTE:** By default, closing times for delivery will be set half an hour earlier on the Just Eat store than the value you set on Just Eat Flyt Bridge. Closing times for collection, instead, are not modified.

---

## Inventory

You can push inventory data into Just Eat from the **Actions** page. When you do so, products set as out of stock in HubRise are hidden on Just Eat.

You might also set the Just Eat Flyt Bridge to automatically push inventory to Just Eat whenever your HubRise inventory is updated. This is done by ticking the **Enable automatic inventory push** checkbox.

## Save the Configuration

Once you are happy with the configuration of Just Eat Bridge, click **Save** at the top of the page to go back to the **Latest operations** page.

## Reset the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your integration settings. To continue receiving Just Eat orders, you will need to enter your integration settings again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
