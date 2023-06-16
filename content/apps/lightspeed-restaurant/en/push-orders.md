---
title: Push Orders
position: 9
layout: documentation
meta:
  title: Push Orders | Lightspeed Restaurant | HubRise
  description: Find out the technical details of how orders are sent to Lightspeed from HubRise, which fields are passed and which are not.
---

HubRise can push orders from different connected solutions directly into your Lightspeed Restaurant EPOS. You just need to connect Lightspeed Restaurant Bridge to HubRise for orders to be sent to your EPOS, with no additional configuration.

This page explains what information HubRise sends to your EPOS.

## Items and Options

Lightspeed Restaurant Bridge sends your EPOS the complete information about items and options, including name, EPOS ref code, quantity, and price.

Lightspeed Restaurant Bridge converts options with a ref code that starts with `+` to production instructions. Note that production instructions have no associated price. Adding a price in a connected app can cause [price differences errors](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors/).

Every item on Lightspeed must have a ref code. Orders containing items with incorrect or missing ref codes are rejected by the EPOS. For this reason, when sending an order to the EPOS, Lightspeed Restaurant Bridge skips all items without a ref code.

## Order Status

Lightspeed notifies HubRise when an order is received or rejected by sending the statuses `SUCCESS` and `FAILURE`, respectively.

Additionally, Lightspeed notifies HubRise when an order is ready for pick-up.

## Payments

Lightspeed does not support split payments. Therefore, when an order contains multiple payments, Lightspeed Restaurant Bridge sends only the first payment of the list, while the others are discarded.

The ref code of the payment is used to map the HubRise order to the correct payment method in Lightspeed. Lightspeed Restaurant Bridge ignores payments without a ref code.

To learn how to check the ref codes of the payment methods available in your Lightspeed back office, see [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#payment-methods).

### Handling Price Differences

When the total payment amount does not match the total price for the order as calculated by Lightspeed Restaurant, two scenarios might happen:

- If the total payment amount is greater than the expected amount, Lightspeed rejects the order.
- If the total payment amount is less than the expected amount, Lightspeed accepts the order. However, the order remains open for payment in the EPOS.

---

**Related FAQ**: [How Do I Troubleshoot Price Difference Errors?](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors/)

---

## Service Types

Lightspeed Restaurant requires each service type (delivery, collection, eat-in) to be defined as an account profile.

The ref code of the service type is used to map the HubRise order to the correct account profile on Lightspeed.

To learn how to check the ref codes of the service types available in your Lightspeed back office, see [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#service-types).

## Customer Information

Lightspeed Restaurant Bridge sends to Lightspeed the complete customer information, when available, including name, email address, and delivery address.

When customer information is not available, Lightspeed Restaurant Bridge creates an anonymous customer with `Anonymous` as the first name.
