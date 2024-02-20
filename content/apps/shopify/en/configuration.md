---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Shopify | HubRise
  description: Instructions on configuring Shopify to work seamlessly with HubRise and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The configuration page allows you to customise the behaviour of Shopify Bridge.

---

**IMPORTANT NOTE:** Due to its very customisable nature, Shopify Bridge requires a certain level of technical knowledge to configure. If you are not comfortable with the configuration, place a few different test orders, with various payment methods, and contact us at support@hubrise.com, mentioning the EPOS you are using. We will be happy to help you!

---

## Orders

### Order Statuses {#order-statuses}

![Shopify Bridge configuration page, Order status section](./images/010-shopify-configuration-order-status.png)

In this section, you can customise how status changes in HubRise are reflected in Shopify.

For each HubRise order status, specify the corresponding Shopify order status. To ignore a status change, select **Do nothing**.

### Service Types

![Shopify Bridge configuration page, service types](./images/013-shopify-configuration-order-type.png)

In the **Service type ref code** field, enter the ref code for the service type that your EPOS expects for Shopify orders. Refer to your EPOS documentation on our [Apps page](/apps) to check requirements.

### Expected Time

![Shopify Bridge configuration page, order time](./images/014-shopify-configuration-order-time.png)

Support for expected times in Shopify requires a plugin, as Shopify does not natively support this feature.

If you do not use expected times, leave the **Values to use** drop-down menu set to **None**.

Otherwise, you will have to decide between two options for how the order time is encoded by your plugin: **One value containing both date and time**, or **Two values: one for date, one for time**.

To determine how your plugin encodes the expected time, place a test order and review the logs in the [Orders page](/docs/data#orders). Look for the `note_attributes` field in the order JSON, and identify the attribute(s) that contains the expected date and time. If you cannot find the expected time in the `note_attributes` field, contact the plugin developer for support.

Based on the selected option in the **Values to use** drop-down, one or two fields will appear, where you can specify the order attribute name(s) that contain the expected date and time.

If your plugin uses one order attribute, the supported formats are the following:

- ISO 8601. For example: `2021-07-22T12:00:30+02:00`.
- Unix timestamp. For example: `1642422302`.

If your plugin uses two order attributes, the supported formats are the following:

- The date must be in the `dd/mm/yyyy` format.
- The time must be in the `hh:mm` format.

### Payments

![Shopify Bridge configuration page, payment type](./images/012-shopify-configuration-order-payment.png)

The **Payments** section lets you assign a ref code to as many as 15 different payment methods.

For every supported payment method, enter its exact name as it appears in Shopify orders, along with the ref code expected by your EPOS.

To determine the name of a payment method, send a test order to HubRise and review the logs in the [Orders page](/docs/data#orders). Search for the `payment_gateway_names` attribute in the order JSON, which will display a value such as `Stripe` or `PayPal`: this is the name you need to enter in the **Name in Shopify** field.

To find the ref codes to use, refer to your EPOS documentation on our [Apps page](/apps).

### Multi-site

![Shopify Bridge configuration page, Multi-site section](./images/011-shopify-configuration-multisite.png)

If you support multiple stores from the same Shopify website, you need to configure the **Multi-site** section.

Each location must be connected to Shopify Bridge and identified by a unique order attribute value. Orders are only forwarded to the location that matches the configured value.

In the **Name of the note attribute for multisite** field, specify the name of the order attribute that contains the location value.

In the **Value(s) for this location** field, specify the value associated with the location. You can specify multiple values separated by a comma.

## Catalog

![Shopify Bridge configuration page, Catalog section](./images/015-shopify-configuration-catalog.png)

The **Catalog** section lets you customise how you send the HubRise catalog to Shopify.

If you have variants in your catalog, select which catalog variant you want to push to Shopify from the **Variant** drop-down menu. The menu will be hidden if you have no variants.

If you want to automatically update your Shopify products every time your HubRise catalog is updated, tick the **Enable automatic catalog push** checkbox.

By default, when you push a catalog into Shopify, Shopify Bridge creates new products in Shopify but does not update existing products. To update prices of existing products, tick the **Update prices of existing products** checkbox.

## Location

![Shopify Bridge configuration page, location](./images/017-shopify-configuration-location.png)

If your Shopify account has multiple locations, select the location which is associated with the Shopify Bridge. This is used for inventory management.

## Inventory

![Shopify Bridge configuration page, inventory](./images/016-shopify-configuration-inventory.png)

The **Inventory** section lets you configure automatic updates of the Shopify inventory counters when the HubRise inventory changes.
To enable this feature, tick the **Enable automatic inventory push** checkbox.

## Save the Configuration

To save the configuration, click **Save** at the top of the page.

## Reset the Configuration

If you need to reset the configuration, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will instantly disconnect the bridge from Shopify.

---

Resetting the configuration does not delete the operation logs displayed in the main page.
