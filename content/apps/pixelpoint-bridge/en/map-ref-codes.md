---
title: Map Ref Codes
position: 3
layout: documentation
meta:
  title: Map Ref Codes | PixelPoint Bridge | HubRise
  description: Instructions on mapping the PAR PixelPoint EPOS product ref codes with other apps after connecting your EPOS with HubRise. Synchronise your data.
---

PixelPoint Bridge pushes but is not able to pull information stored in the PAR PixelPoint EPOS. For this reason, all menu items and prices must be manually set in the system to connect with their corresponding product code and ensure a smooth communication between HubRise and PixelPoint.

Every order received in HubRise is forwarded to the EPOS via PixelPoint Bridge. For the transaction to work, products within the catalog, service types (delivery, collection, eat-in) and payment methods should be mapped.

For a detailed description of how to map the EPOS ref codes in the system connected to HubRise, see [Mapping Ref codes](/apps/pixelpoint/map-ref-codes).

In the following sections, we describe the conventions PixelPoint Bridges uses in the mapping.

## Deals

PixelPoint can convert HubRise deals to combos or coupons.

By default, PixelPoint Bridge converts deals to combos. The HubRise deal's ref code is used as the PixelPoint combo code.

To convert a deal to a coupon, you need to add the `COUPON-` prefix to the deal's ref code. For example, if the deal's ref code is `COUPON-1`, PixelPoint Bridge will encode it as a coupon with the code `1`.
