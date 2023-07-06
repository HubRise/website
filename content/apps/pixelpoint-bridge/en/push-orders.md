---
title: Push Orders
position: 6
layout: documentation
meta:
  title: Push Orders | PixelPoint Bridge | HubRise
  description: Find out the technical details of how orders are sent to PixelPoint from HubRise, which fields are passed and which are not.
---

HubRise can push orders from different connected solutions directly into your PixelPoint EPOS. This page explains what information are sent to your EPOS.

## Service Types

PixelPoint Bridge sends the order service type ref in HubRise as the **Sales Type Number** in your EPOS.

Service types are ignored, however. PixelPoint relies on service type refs to determine the sales type.

## Items and Options

PixelPoint Bridge sends items and options to your EPOS, including name, quantity, and price.

Ref codes in HubRise are used to match items to products in PixelPoint:

- If the item has a ref code, it must match a product code in PixelPoint, otherwise the order will be rejected.
- Items with no ref codes are skipped. This may lead to a discrepancy between the total price of the order as calculated by PixelPoint and the paid amount, which will cause the order to be rejected by PixelPoint. To avoid this, make sure that all SKUs in your HubRise catalog have ref codes.

PixelPoint uses prices from HubRise, even if they are different from the prices in PixelPoint.

When an item has options, the options are sent to PixelPoint as items attached to the main item. If the option list name is one of `Topping`, `Ingredient removed`, `Toppings`, or `Ingredients`, the options are sent to PixelPoint as forced answers. You will need to configure these option lists as forced questions in PixelPoint before you can use these list names.

## Deals

PixelPoint Bridge sends deals to your EPOS as coupons. Items that belong to the deal in HubRise are sent as the coupon items.

Deal items may have options. In this case, the options are sent to PixelPoint as items attached to the coupon item, which itself is attached to the coupon.

By default, PixelPoint Bridge keeps the price structure of the HubRise deal. For example, if the deal is "2 for 1", the coupon price will be `0`, and it will have two items: the first one with the full price, and the second one with a price of `0`. You can configure the bridge to aggregate the prices of the deal items at the coupon level instead.

Deals with no ref codes are skipped. The order will be accepted by PixelPoint, but it will contain no information about the coupon. The items prices will be correct however, as PixelPoint uses prices from HubRise, which include the deal.

For more information about setting up and mapping combos in PixelPoint, see [Map Ref Codes](/apps/pixelpoint-bridge/map-ref-codes#deals). To learn about the bridge configuration options for deals, see [Configuration](/apps/pixelpoint-bridge/configuration#deals).

## Discounts

PixelPoint Bridge sends discounts to your EPOS as coupons, along with their amount and their name. Discounts apply to the whole order. They are not attached to any specific item.

If the ref code is specified, it must match a coupon product code in PixelPoint, otherwise the order will be rejected. If the ref code is not specified, the behaviour depends on the configuration of the bridge.

For more information about setting up and mapping coupons in PixelPoint, see [Map Ref Codes](/apps/pixelpoint-bridge/map-ref-codes#discounts). To learn about the bridge configuration options for discounts, see [Configuration](/apps/pixelpoint-bridge/configuration#discounts).

## Charges

PixelPoint Bridge sends charges to your EPOS as plain items, with the name and price of the charge. The charge ref code must match a product code in PixelPoint, otherwise the order will be rejected.

## Payments

PixelPoint Bridge sends payments to your EPOS, including the amount and the ref code. Split payments are supported.

PixelPoint matches payments ref codes against the payment method numbers configured in your EPOS. Payments with no ref code are skipped.

## Customer Information

PixelPoint Bridge sends to PixelPoint all customer information available in HubRise, including name, email address, and delivery address.
