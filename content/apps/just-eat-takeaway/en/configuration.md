---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Just Eat Takeaway | HubRise
  description: See instructions to configure Just Eat Takeaway Bridge to work seamlessly with Just Eat Takeaway platforms and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The configuration page allows you to customise the behaviour of Just Eat Takeaway Bridge based on your preferences.
These are divided into different sections for an easier navigation.

![Just Eat Takeaway Bridge configuration page](./images/002-jet-configuration-page.png)

## Language

Choose the language to use for generic items such as `Delivery charge`. These names may appear in your EPOS and in customer receipts.

## Service Types

Service types such as delivery by the platform, restaurant delivery or takeaway might require the corresponding ref code entry. Refer to your EPOS documentation on the HubRise website to verify.

Additionally, from this section, you can choose to categorise orders fulfilled by Just Eat as either delivery or collection orders. Orders fulfilled by the restaurant fleet are always marked as delivery orders. This feature is useful to address specific business requirements or to differentiate these orders in financial reports.

## Discounts

This section allows you to specify the discount ref code applied to your products, in case you have one active on your Just Eat Takeaway store. Refer to your EPOS documentation on the HubRise website to see how to obtain the corresponding ref code.

## Charges

If charges apply, a ref code might be required. Refer to your EPOS documentation on the HubRise website to verify.

In this section, you can specify the ref code for the delivery charges and service fees applied by the delivery platform.

## Payments

Just Eat Takeaway customers can pay for their order either online or by cash for restaurant delivery orders.

This section of the configuration page allows you to specify the ref codes for these two payment methods. Refer to your EPOS documentation on the [Apps page](/apps) to verify the correct codes to use.

## Order Statuses

Just Eat Takeaway requires you to mark every successful order as `confirmed`. In this section, you can select which HubRise status change is used to send the confirmation to Just Eat Takeaway.

## Save the Configuration

To save the configuration, click **Save** at the top of the page.

## Reset the Configuration

If you need to reset the configuration, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your integration settings. To continue receiving Just Eat Takeaway orders, you will need to enter your integration settings again.

---

Resetting the configuration does not delete the operation logs displayed in the main page.
