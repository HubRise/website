---
title: Map Ref Codes
path_override: map-ref-codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | MynOber | HubRise
  description: Instructions to map MynOber product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

Most EPOS solutions require a ref code for each product to properly interpret orders. Therefore, if you connect MynOber to your EPOS via HubRise, you need to make sure that each product in your MynOber Cloud menu is assigned to the correct ref code.

---

**IMPORTANT NOTE**: You can skip this page if you only use MynOber Cloud as an EPOS.

---

## Updating Ref Codes Manually

### Products

If you already have a menu in your MynOber Cloud location, you can manually enter the ref codes for your products, so that they match those in your EPOS.

To manually assign ref codes to your MynOber products from the MynOber Cloud back office, follow these steps:

1. Log in to your [MynOber Cloud account](https://cloud.mynober.nl).
1. Select the location where you want to edit the menu.
1. Click **Articles** > **Articles**.
1. Click **Expand All** to reveal all the products available.
1. For every product in the list, check the correct ref code in the EPOS and insert the value in the **PLU** column. The value is automatically saved when you click outside of the entry field.

### Service Types, Charges, And Payments

Service types, charges, and payments might require special ref codes. Refer to your EPOS documentation on the HubRise website to verify.

To assign ref codes to service types, charges, and payments, follow these steps:

1. Log in to your [MynOber Cloud account](https://cloud.mynober.nl).
1. Select the location from the list.
1. Click **External tools** > **HubRise**.
1. Under the **Ref Codes** section of the page, insert the ref code for every service type, payment method, payment fee, or other charge you support. The value is automatically saved when you click outside of the entry field.

## Importing A Menu From HubRise

If you exported your EPOS menu to HubRise, you can automatically import all the products into MynOber Cloud with a single click.

To import your HubRise catalog to MynOber Cloud, follow these steps:

1. Log in to your [MynOber Cloud account](https://cloud.mynober.nl).
1. Select the location from the list.
1. Click **External tools** > **HubRise**.
1. Click **Sync Catalog From HubRise**. If you do not see this button, make sure the **Online Ordering** toggle is active.

To check that the products have been correctly imported, follow these steps:

1. Click **Articles** > **Articles**.
1. Click **Expand All** to reveal all the products available.
1. Check that every product has a ref code under the **PLU** column.

![MynOber Cloud Menu Items Page](./images/002-mynober-cloud-menu-items.png)
