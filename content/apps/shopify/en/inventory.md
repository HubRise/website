---
title: Inventory
path_override: inventory
position: 7
layout: documentation
meta:
  title: Inventory | Shopify | HubRise
  description: Find out how to synchronise your HubRise inventory with Shopify to automatically remove out-of-stock products from your e-commerce websites.
---

You can use Shopify Bridge to synchronise your HubRise inventory with Shopify and automatically remove out-of-stock products from your e-commerce websites. This page explains how you can synchronise your inventory.

---

**IMPORTANT NOTE:** Inventory synchronisation is based on product ref codes. Map ref codes before you sync inventory with Shopify. Inventory synchronisation will not work on items with missing or erroneous ref codes. For more information see,  [Map Ref Codes](/apps/shopify/map-ref-codes).

---

## Inventory Synchronisation

EPOS solutions and unventory management solutions connected to your HubRise location can push your inventory information into HubRise. Every time your HubRise inventory is updated, Shopify Bridge automatically updates the products' inventory counters in Shopify. To verify, if any of the apps you use can do this, refer to the corresponding documentation on our [Apps page](/apps). If you use no such solution, you can manually make a product unavailable using [OrderLine](/apps/orderline/overview).

To set up inventory sychronisation, manually push the existing inventory into Shopify and then activate the automatic inventory push.

## Manual Inventory Push

To push your existing inventory from HubRise into Shopify follow these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Shopify store.
1. Open the **CONNECTIONS** page, then select **Shopify Bridge** from the list of connected apps.
1. In Shopify Bridge, select the **Actions** tab.
1. In the **Synchronise your inventory with Shopify** section, click **Push inventory**.

## Automatic Inventory Push

Once you pushed the existing inventory information into Shopify, Shopify Bridge can automatically push your inventory into Shopify every time it is updated in HubRise. By default, this option is turned off. You can enable it by following these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the HubRise account and location connected with your Shopify store.
1. Open the **CONNECTIONS** page, then select **Shopify Bridge** from the list of connected apps.
1. In Shopify Bridge, select the **Configuration** tab.
1. In the **Inventory** section, tick **Enable automatic inventory push**.
1. Click **Save**.

