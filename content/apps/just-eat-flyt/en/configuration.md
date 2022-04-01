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

From this section, you can decide which language is used to localise your receipts.

## Orders

### Service Types

Service types such as platform delivery, restaurant delivery or takeaway might require the corresponding ref code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

### Discounts

In this section, include the ref code associated with Just Eat discounts on your EPOS.
Refer to your connected EPOS documentation on the HubRise website to know how to handle discounts in your EPOS.

### Charges

If charges apply, a ref code might be required. Refer to your connected EPOS documentation on the HubRise website to verify.

In this section, you can specify the ref codes for the following charges:

- Delivery charge
- Service charge
- Bag fee
- Driver tip
- Other charge

### Payments

Just Eat customers can pay for their order either online or by cash for restaurant delivery orders.

This section of the configuration page allows you to specify the ref codes for these two payment methods. Refer to your connected EPOS documentation on the HubRise website to verify the correct codes to use.

## Menu

![Just Eat Flyt Bridge configuration page, Menu section](../images/012-en-just-eat-configuration-page-menu.png)

From this section, choose if you want to update your Just Eat menu every time you update the HubRise catalog. By default, this option is turned off. 

### Availability

In the **Availability** section, you can choose to make your products available for delivery, collection, or both.

For each day of the week, set the opening and closing times of your store by specifying one or two time shifts. Customers will not be able to order from your Just Eat store outside of these time windows.

If your restaurant is closed on a specific day, click **Close the day**.
To quickly copy the availability to all the following days on the list, click **Copy to bottom**.

---

**IMPORTANT NOTE:** By default, closing times for delivery will be set half an hour earlier on the Just Eat store than the value you set on Just Eat Flyt Bridge. Closing times for collection, instead, are not modified.

---


## Saving the Configuration

Once you are happy with the configuration of Just Eat Bridge, click **Save** at the top of the page to go back to the Operations page.

## Resetting the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your integration settings. To continue receiving Just Eat orders, you will need to enter your integration settings again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
