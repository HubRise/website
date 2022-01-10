---
title: Configuration
position: 5
layout: documentation
meta:
  title: Configuration | PixelPoint Bridge | HubRise
  description: See instructions to configure PixelPoint Bridge to work seamlessly with your EPOS or other apps connected to HubRise. Configuration is simple.
---

The configuration page allows you to customise the behaviour of PixelPoint Bridge based on your preferences.
These are divided into different sections for an easier navigation.

![PixelPoint Bridge configuration page](../images/003-en-pixelpoint-configuration-page.png)

## Order Statuses

From this section, you can configure how PixelPoint Bridge handles order statuses.

The **Status for new orders** field lets you configure which default status is associated to new orders when they are sent to your PixelPoint EPOS.

The rest of this section allows you to configure how order status changes on your PixelPoint EPOS are sent back to HubRise, by leveraging the EOIEvents feature in PAR PixelPoint.
This is useful, for example, to notify a delivery platform when an order is ready for collection. In this case, you can update an order as "Awaiting collection" on HubRise whenever you mark the same order as "Pick-up" on your EPOS.

---

**IMPORTANT NOTE:** EOIEvents require PAR PixelPoint version 19.6.x or higher. Contact PAR support to verify.

---

## Discounts

From this section, you can configure how to handle discounts.

Discounts that lack a ref code are not sent to your PixelPoint EPOS. PixelPoint Bridge provides two options to solve this issue:

1. If you specify a ref code in the **Default ref code** field, all orders containing a discount without ref code will use that value, instead.
1. Additionally, if you select the checkbox, PixelPoint Bridge can fetch the list of discounts currently available in your EPOS, and match the incoming discount by name, instead of ref code.

---

**IMPORTANT NOTE:** Fetching discount ref codes from your EPOS requires PAR PixelPoint version 19.12.x or higher. Contact PAR support to verify.

---

If you both specify a default ref code and select the checkbox, PixelPoint Bridge will perform the following actions.

- When it receives an order containing a discount without a ref code, it will first try to match the discount name with the discounts available in your EPOS.
- If a match is found, PixelPoint Bridge will send the discount with the correct ref code to your EPOS.
- If a match is not found, PixelPoint Bridge will send the discount with the default ref code that you specified, instead.

## Resetting the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your integration settings. To continue sending orders to your PixelPoint EPOS, you will need to enter your PixelPoint token again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
