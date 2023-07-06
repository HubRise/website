---
title: Configuration
position: 3
layout: documentation
meta:
  title: Configuration | Smood | HubRise
  description: Instructions on configuring Smood to work seamlessly with your EPOS or other apps connected to HubRise. Configuration is simple.
---

## Open the Configuration Page

The Configuration page allows you to configure how orders are sent to your EPOS, as well as a few other settings.

![Smood configuration page](../images/003-en-configuration.png)

To open the configuration page, follow these steps:

- Log in to your [Smood back office](https://manager.smood.ch/).
- Select the restaurant from the dropdown menu in the left sidebar.
- Click the **Settings** tab, then in the **Integrations** section, click **Edit POS references**.

You will also be redirected to the configuration page when you connect Smood to HubRise. For more information, see [Connect to HubRise](/apps/smood/connect-hubrise).

## Configure Your Parameters

### Service Types

Service types such as Smood delivery, Restaurant delivery, or Takeaway, might require the corresponding ref code entry. Refer to your EPOS documentation on the HubRise website to verify. For more information on the service types supported by Smood, see [Service Types](/apps/smood/terminology#service-types).

Additionally, from this section you can choose to mark Smood delivery orders as delivery orders or collection orders. Restaurant delivery orders are always marked as delivery orders.

### Discounts

In this section, you can configure the ref codes to use for discounts and deals sent to HubRise:

- **Discount**: for discounts applied to the whole order, for example a 10% discount.
- **Promotion**: for discounts applied to a set of items, such as a menu.

### Charges

Delivery charges are sent to the EPOS for orders delivered by the restaurant. In this section, you can configure the ref code to use.

### Payments

All Smood orders are paid online. Smood includes a payment in the order sent to the EPOS. In this section, you can configure the ref code to use.

### Synchronisation Settings

The checkboxes in this section control the synchronisation workflow between Smood and HubRise:

- **Enable automatic sync of the catalog**: When checked, the Smood menu is automatically updated when the HubRise catalog changes.
- **Enable automatic sync of the inventory**: When checked, items are automatically removed from the Smood menu when they are out of stock in the HubRise inventory.
- **Enable automatic sync of status from Smood to HubRise**: When checked, Smood updates the status of orders in HubRise.

### Save Your Changes

When you are done configuring your parameters, click <InlineImage width="24" height="24">![Save icon](../images/save-icon.png)</InlineImage>&nbsp;**Save**.
