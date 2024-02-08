---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Shopify | HubRise
  description: Instructions on configuring Shopify to work seamlessly with HubRise and your EPOS or other apps connected to HubRise. Configuration is simple.
---

---

**IMPORTANT NOTE:** This page is being updated. Some of the information may be outdated.

---

The configuration page allows you to customise the behaviour of Shopify Bridge based on your preferences. These are divided into different sections for an easier navigation.

## Orders

### Order Statuses {#order-statuses}

![Shopify Bridge configuration page, Order status section](./images/010-shopify-configuration-order-status.png)

In this section, you can customise how to map order status changes in HubRise back to Shopify. To ignore an order status change in HubRise, select **Do nothing**.

### Multi-site

![Shopify Bridge configuration page, Multi-site section](./images/011-shopify-configuration-multisite.png)

If you support multiple stores from the same Shopify website, you need to configure the **Multi-site** section.

Each location must be connected to Shopify Bridge and identified by a unique order attribute value. Orders are only forwarded to the location that matches the configured value.

In the **Name of the note attribute for multisite** field, specify the name of the order attribute that contains the location value.

In the **Value(s) for this location** field, specify the value associated with the location. You can specify multiple values separated by a comma.

## Catalog

![Shopify Bridge configuration page, Catalog section](./images/015-shopify-configuration-catalog.png)

Select the **Enable automatic catalog push** checkbox to synchronise your HubRise catalog with Shopify whenever it gets updated.

Only new products added to the HubRise catalog will be sent to Shopify. Any existing products within Shopify will remain unchanged.

## Save the Configuration

To save the configuration, click **Save** at the top of the page.

## Reset the Configuration

If you need to reset the configuration, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will instantly disconnect the bridge from Shopify.

---

Resetting the configuration does not delete the operation logs displayed in the main page.
