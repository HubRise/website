---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | Aquila | HubRise
  description: Instructions on mapping Aquila CMS product ref codes with other apps after connecting your EPOS with HubRise. Connect apps and synchronise your data.
---

Once your Aquila site is connected with a HubRise account, customer and order information will be pushed into HubRise automatically. For the connection to work with all apps in HubRise, some configuration on the Aquila side may be needed. This is particularly true for the connection with an EPOS.

To properly process orders from Aquila to your EPOS, product codes are required for each and every item included in the Aquila **Catalog**.

Products and their EPOS ref codes can be set up from in the Aquila backend using the main menu on the left, by navigating to **Catalog**, then selecting **Products**. Once a product is created, the EPOS ref code cannot be changed. If a change of EPOS ref code is required, a new product with the new EPOS ref code must be created and the old one deleted.

Your Aquila menu can either be created directly in Aquila, or imported from the EPOS as described in [Catalog Import](/apps/aquila-cms/map-ref-codes/#catalog-import). To properly process orders from Aquila to your EPOS, product codes are required for all products.

---

**IMPORTANT NOTE:** It is important that each POS code field available in Aquila be mapped with the EPOS ref codes. If the EPOS code is missing, the EPOS will not be unable to correctly process the order.

---

The EPOS ref codes in Aquila can be updated in two ways: manually by creating a new product in Aquila's back office, or imported from the EPOS through a HubRise Catalog import.

## Catalog Import

The catalog is imported automatically when you [connect your HubRise account](/apps/aquila-cms/connect-hubrise).
Manual catalog import is not available.

## Product

It is possible to add products manually in Aquila. Setting the EPOS code is done during the product creation.
To create a new product manually:

1. In Aquila back office, navigate to **Catalog** > **Products**.
1. In the top right corner press the **+ NEW** button.
1. This brings up the New Product menu. Select the applicable product type, whether it is Simple, Composé or Dématerialisé. Press **Submit**.
1. Under **General** > **General informations**, the first item, **Code** is the EPOS Code.

Changing an existing product's EPOS Code is not possible, if a change is needed, a new product must be created, or the catalog re-imported.

## Deals & Discounts

Discounts in Aquila offer savings on the entire order. Discounts should include the corresponding EPOS ref codes for orders containing discounts to be properly transmitted to your EPOS system and other apps connected to HubRise.

Special deals on products rather than the entire order are not supported in Aquila.

## Payment Methods

Payment methods define how customers can pay for their orders. EPOS ref codes may be required for each online payment payment method setup in Aquila. Refer to your connected EPOS documentation on the HubRise website to verify.

## Service Types

Service Types such as Delivery, Collection or Eat in might require an EPOS ref code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

## Charges

If delivery charges apply for the service offered an EPOS ref code might be required. Refer to your connected EPOS documentation on the HubRise website to verify.
