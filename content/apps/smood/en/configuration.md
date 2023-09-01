---
title: Configuration
path_override: configuration
position: 3
layout: documentation
meta:
  title: Configuration | Smood | HubRise
  description: Instructions on configuring Smood to work seamlessly with your EPOS or other apps connected to HubRise. Configuration is simple.
---

The Smood **Configuration** page allows you to configure how orders are sent to your EPOS, or any other solution connected to HubRise. It includes other types of settings as well.

This page explains how to open the configuration page and assists you in setting the appropriate configurations.

## Open the Configuration Page

To open the configuration page, follow these steps:

- Log in to your [Smood back office](https://manager.smood.ch/).
- Select the restaurant from the dropdown menu in the left sidebar.
- Click the **Settings** tab, then in the **Integrations** section, click **Edit POS references**.

You will also be redirected to the configuration page when you connect Smood to HubRise. For more information, see [Connect to HubRise](/apps/smood/connect-hubrise).

## Configure Your Parameters

![Smood configuration page](./images/003-configuration.png)

### Service Types

Service types such as Smood **Platform delivery**, **Restaurant delivery**, or **Takeaway**, might require the corresponding ref code entry. To verify, refer to your EPOS documentation on the HubRise website [Apps page](/apps/). For more information, see the **Terminology** paragraph, section [Smood Service Types](/apps/smood/terminology#smood-service-types).

Additionally, from this section you can choose to mark Smood delivery orders as delivery orders or collection orders for other connected apps to process them as needed. Restaurant delivery orders are always marked as delivery orders.

### Discounts

In this section, you can configure the ref codes to use for discounts and deals sent to HubRise:

- **Discount**: for discounts applied to the whole order, for example a 10% discount.
- **Promotion**: for discounts applied to a set of items within the menu, such as a three-course meal (starter, main course, and dessert).

### Charges

Delivery charges are sent to the EPOS for orders delivered by the restaurant. In this section, you can configure the ref code to use.

### Payments

All Smood orders are paid online. Smood includes a payment in the order sent to the EPOS. In this section, you can configure the ref code to use.

### Synchronisation Settings

The checkboxes in this section control the synchronisation workflow between Smood and HubRise:

- **Enable automatic sync of the catalog**: When checked, the Smood menu is automatically updated when the HubRise catalog changes.
- **Enable automatic sync of the inventory**: When checked, items are automatically removed from the Smood menu when they are out of stock in the HubRise inventory.
- **Enable automatic sync of status from Smood to HubRise**: When an order is cancelled on Smood, the status update is always sent to HubRise. When this option is checked other Smood statuses are also sent. 

### Save Your Changes

When you are done configuring your parameters, click **Save**.
