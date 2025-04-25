---
title: Map Ref Codes
path_override: map-ref-codes
position: 5
layout: documentation
meta:
  title: Map Ref Codes | Lightspeed Restaurant | HubRise
  description: Instructions on mapping Lightspeed Restaurant product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

Lightspeed expects all incoming orders to contain specific ref codes for each sku, option, deal, discount, charge, service type, and payment present. You must ensure that all connected apps use the correct ref codes if you want your orders to be correctly processed.

This page explains how to find the ref codes by either downloading your Lightspeed catalog in bulk, or by checking individual items in the back office.

You can also export your Lightspeed catalog directly into HubRise with Lightspeed Restaurant Bridge.
Some connected apps offer the ability to import the catalog directly from HubRise, and therefore to autopopulate the ref codes.
For more details about this feature and its limitations in Lightspeed Restaurant Bridge, see [Pull the Catalog](/apps/lightspeed-restaurant/pull-catalog).

## Download the Catalog in Bulk

You can download your Lightspeed catalog to manage the items and the ref codes with a separate software.

To download the Lightspeed catalog, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Items** > **Items**.
1. Click the **Export** button.
   ![Export button in the items page of the Lightspeed back office](./images/006-2x-lightspeed-export-items.png)
1. In the popup window, choose your operating system type: Mac or Windows (or Manual configuration), then click **Export**.
   ![Choosing the operating system when exporting the catalog in Lightspeed](./images/007-2x-lightspeed-system-choice.png)
1. After the export is complete, select **Click here to download the exported file** to download the CSV file with your menu.
   ![Download items CSV](./images/008-2x-lightspeed-download-csv.png)

To check the ref codes for the items, you can open the downloaded CSV file in Excel or a text editor. The ref codes appear under the **SKU** column.

## Find Ref Codes for Individual Items

You can find the ref codes for skus, options, deals, discounts, charges, service types, and payments from your Lightspeed back office.

### Skus, Options, Discounts, and Charges

To find the ref codes for specific skus, options, discounts, and charges, follow these steps:

1. From the top menu in your Lightspeed back office, select **Configuration**, then **Items** > **Items**.
1. The ref codes appear under the **Code** column.
   ![](./images/009-2x-lightspeed-skus-options-codes.png)

You can then copy the codes in the connected app. For detailed instructions, follow the documentation for the connected app in the HubRise website.

Note that charges and discounts must be created as items to be compatible with the HubRise data model. For more information see [Create Ref Codes](/apps/lightspeed-restaurant/faqs/create-ref-codes).

### Production Instructions

Production instructions in Lightspeed can be mapped to HubRise options. To find the ref codes for production instructions, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Production instructions**.
1. To download the complete list of production instructions, click **Export to csv**.
1. In the CSV file, ref codes appear under the **identifier** column.

When you map production instructions to connected apps, add `+` before the ref code. For example, if your instruction has ref code `52355651338378`, use `+52355651338378` to map it to connected apps.

---

**IMPORTANT NOTE:** Production instructions have no associated price. Adding a price in a connected app can cause [price differences errors](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors).

---

### Service Types {#service-types}

Service types are called _account profiles_ on Lightspeed. To find the ref code for a specific service type, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Account profiles**.
1. For each service type available under the **Name** column, you can find the corresponding ref code under the **Code** column.

### Payment Methods {#payment-methods}

To find the ref code for a payment method, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Payment methods**.
1. For each payment method available under the **Name** column, you can find the corresponding ref code under the **Code** column.
