---
title: Configuration
position: 4
layout: documentation
meta:
  title: Uber Eats Connection to HubRise - Configuration
  description: See instructions to configure Uber Eats Bridge to work seamlessly with Uber Eats and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The Configuration page allows you to customise the behaviour of Uber Eats Bridge based on your preferences.

These are divided into different categories for an easier navigation.

![Uber Eats Bridge configuration page](../images/002-en-configuration-page.png)

## Menu

This section allows you to customise the behaviour of the menu.

When you select the checkbox, your HubRise catalog will be synced with the Uber Eats menu, and every time you make a change to your HubRise catalog, this will be reflected on Uber Eats.

## Order Statuses

Uber Eats has only three possible statuses for the orders: `accepted`, `denied`, and `cancelled`.

You can therefore decide which HubRise status triggers a certain status on Uber Eats. For example, when an order is marked as `received` on HubRise, this will automatically mark the order as `accepted` on Uber Eats.

On the other hand, you can also customise which status to use on HubRise for new orders received from Uber Eats. This choice typically depends on the status your POS expects to receive.

## Special Ref Codes and Other Options

This section allows you to customise several miscellaneous options:

- The service type ref code associated to Uber Eats orders.
- The payment type and ref code associated with Uber Eats orders.
- The ref code used when a customer includes disposable items in an order.

Special ref codes associated with Uber Eats might be required by your EPOS for service type and payment.
Refer to your connected EPOS documentation on the HubRise website to verify.

**Disposable items** is an option that clients can tick in the Uber Eats basket on checkout. Not all restaurants include this option in their basket but if they do, they need to include the ref code.

## Saving the Configuration

Once you are happy with the configuration of Uber Eats Bridge, click **Save** at the top of the page to go back to the Operations page.

## Resetting the Configuration

You can always restore the Configuration page to its default values and change the Uber Eats store ID associated with your HubRise location by clicking on **Reset the configuration** at the bottom of the page.
