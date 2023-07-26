---
title: Map Ref Codes
path_override: map-ref-codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | PixelPoint Windows API | HubRise
  description: Instructions on mapping the PAR PixelPoint EPOS product ref codes with other apps after connecting your EPOS with HubRise. Synchronise your data.
---

PixelPoint Windows API pushes but is not able to pull information stored in the PAR PixelPoint EPOS. For this reason, all menu items and prices must be manually set in the system to connect with their corresponding product code to ensure a smooth communication between HubRise and PixelPoint.

Every order received in HubRise is forwarded to the EPOS via PixelPoint Windows API. For the transaction to work, products within the catalog, service types (delivery, collection, eat-in) and payment methods should to be mapped.

## Setting the Product Catalog

A PAR PixelPoint catalog can include:

- Products
- Options
- Combos

Each product in PAR PixelPoint is identified by a unique product code. When you set up your menu in the system to connect, you need to provide this code for each product you sell.

All options in your menu are also associated with a specific code. The EPOS does not differentiate between actual products and options, but other systems generally do.

These options include:

- Additional toppings to add to a recipe.
- Ingredients included in the original recipe that could be removed.
- Product variants, such as a dip or a flavour, that the customer must choose.
- Additional options, such as adding napkins or cutlery.

Toppings and ingredients set in the online ordering system are automatically passed to the EPOS by PixelPoint Bridge as forced answers to the forced questions previously set in the EPOS.

Combos are particular combinations of products and/or options that are sold as a unit with a discounted price in the PixelPoint EPOS. If you offer combos, you need to create them in the other system and specify the corresponding code.

---

**IMPORTANT NOTE:** The codes for products, options, and combos to use in the system you want to connect must correspond to those present in the EPOS. Order transfer issues often result from an incorrect configuration of the menu.

---

## Setting Service Types

Each service type you provide (delivery, collection, eat-in) must be associated with the correct PixelPoint EPOS code. The exact values of these codes depend on the particular setup of the restaurant, but they are typically numbers in the `1000`-`1010` range.

## Setting Payment Methods

Your PixelPoint EPOS has a different code for each payment method. Each payment method allowed in the system to connect must be defined in the PixelPoint EPOS and must be specified with the corresponding code.

When the customer chooses to pay upon delivery or collection, no payment information is sent to the EPOS, as doing so would close the transaction.

[comment]: # "Need to check all links to: Setting Service Types."
