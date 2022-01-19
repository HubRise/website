---
title: Receiving Orders
position: 7
layout: documentation
meta:
  title: Receiving Orders | Lightspeed Restaurant | HubRise
  description: Find out the technical details of how orders are sent to Lightspeed from HubRise, which fields are passed and which are not.
---

Connecting Lightspeed Restaurant to HubRise allows you to receive orders from different connected solutions directly in your EPOS. As soon as you connect Lightspeed Restaurant Bridge, HubRise orders will be sent to your Lightspeed Restaurant EPOS, without any additional setup required.

This page explains what information Lightspeed Restaurant Bridge sends to your EPOS.

## Items and Options

Lightspeed Restaurant can receive the complete information about items and options, including name, EPOS ref code, quantity, and price.

Every item on Lightspeed must have a ref code. Orders containing items with incorrect or missing ref codes are rejected by the EPOS. For this reason, when sending an order to the EPOS, Lightspeed Restaurant Bridge skips all items without a ref code.

## Payments

Lightspeed does not support split payments. Therefore, when an order contains multiple payments, Lightspeed Restaurant Bridge sends only the first payment of the list, while the others are discarded.

The ref code of the payment is used to map the HubRise order to the correct payment method in Lightspeed. Lightspeed Restaurant Bridge ignores payments without a ref code.

To check the ref codes of the payment methods available in your Lightspeed back office, follow the steps in [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#payment-methods).

### Handling Price Differences

When the total payment amount does not match the total price for the order as calculated by Lightspeed Restaurant, two scenarios might happen:

- If the total payment amount is greater than the expected amount, Lightspeed rejects the order.
- If the total payment amount is less than the expected amount, Lightspeed accepts the order. However, the order remains open for payment in the EPOS.

---

**Related FAQ**: <Link to="/apps/lightspeed-restaurant/faqs/handle-price-differences/">How Do I Troubleshoot Price Difference Errors?</Link>

---

## Service Types

Lightspeed Restaurant requires each service type (delivery, collection, eat-in) to be defined as an account profile.

The ref code of the service type is used to map the HubRise order to the correct account profile on Lightspeed.

To check the ref codes of the service types available in your Lightspeed back office, follow the steps in [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#service-types).

## Customer Information

Lightspeed Restaurant Bridge sends to Lightspeed the complete customer information, when available, including name, email address, and delivery address.

When customer information is not available, Lightspeed Restaurant Bridge creates an anonymous customer with these details:

- First name: `Anonymous`.
- Email address: `anonymous@ikentoo.com`.
