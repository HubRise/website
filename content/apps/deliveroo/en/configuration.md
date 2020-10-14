---
title: Configuration
position: 4
layout: documentation
meta:
  title: Deliveroo Connection to HubRise - Configuration
  description: See instructions to configure the Deliveroo Bridge to work seamlessly with Deliveroo and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The configuration page allows you to customise the behaviour of the Deliveroo Bridge based on your preferences.
These are divided into different categories for an easier navigation.

![Deliveroo Bridge configuration page](../images/002-en-configuration-page.png)

## Language

From this section, you can decide which language will be used to encode the order item names in your receipts.

## Default Customer

By default, Deliveroo does not encode the customer's details when they send an order to HubRise. However, certain EPOS systems require a customer to be specified in every order.

This section allows you to define the default first name, last name and email address that will be used for all your Deliveroo orders.

## Service Types

Service types such as Delivery by Deliveroo, Delivery by your own fleet or Collection might require the corresponding ref code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

## Delivery Charges

If delivery charges apply, a ref code might be required. Refer to your connected EPOS documentation on the HubRise website to verify.

## Payment Methods

Deliveroo customers can pay for their order either online or by cash on delivery.

This section of the configuration page allows you to specify the ref codes for these two payment methods, together with the payment type associated with online payments on the Deliveroo web site. Cash payments are always associated with the `cash` type.

## Discounts

This section allows you to specify the discount name and ref code applied to your products, in case you have one active on your Deliveroo page.

## Saving the Configuration

Once you are happy with the configuration of the Deliveroo Bridge, click **Save** at the top of the page to continue to the main page.

## Resetting the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your Deliveroo location ID. To continue receiving Deliveroo orders, you will need to enter your Deliveroo location ID again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
