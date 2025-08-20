---
title: Push Orders
path_override: push-orders
position: 9
layout: documentation
meta:
  title: Push Orders | Lightspeed Restaurant | HubRise
  description: Find out the technical details of how orders are sent to Lightspeed from HubRise, which fields are passed and which are not.
---

HubRise can push orders from different connected solutions directly into your Lightspeed Restaurant EPOS. You just need to connect Lightspeed Restaurant Bridge to HubRise for orders to be sent to your EPOS, with no additional configuration.

## Information Sent to Lightspeed

### Items and Options {#items-and-options}

Lightspeed Restaurant Bridge sends your EPOS the complete information about items and options, including name, EPOS ref code, quantity, and price.

Lightspeed Restaurant Bridge converts options with a ref code that starts with `+` to production instructions. Note that production instructions have no associated price. Adding a price in a connected app can cause [price differences errors](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors).

Every item on Lightspeed must have a ref code. Orders containing items with incorrect or missing ref codes are rejected by the EPOS. For this reason, when sending an order to the EPOS, Lightspeed Restaurant Bridge skips all items without a ref code.

### Order Status

Lightspeed Restaurant Bridge creates an order in Lightspeed for each order from HubRise. The order status in HubRise is updated as follows:

- `received`: When the order is created in Lightspeed.
- `rejected`: If the order creation fails. The detailed error is available in the order custom fields, under the key `epos.rejection_reason.cause`.
- `awaiting_collection`: When the order is marked ready in Lightspeed Kitchen.
- `completed`: When the order is closed in Lightspeed, and if the bridge is configured to mark orders as completed. For more information, refer to the [Order Statuses](/apps/lightspeed-restaurant/configuration#order-statuses) section of the Configuration page.

When an order is marked as `cancelled` in HubRise, Lightspeed Restaurant prints a message on the connected printer to indicate the cancellation. Depending on your settings, this message may also appear on the EPOS screen. The order remains in Lightspeed and is not deleted.

### Discounts

Discounts are sent to Lightspeed Restaurant, including their name, ref code, and discount amount.

Discounts must be created as items in Lightspeed. To find out how to create and check discount ref codes in your Lightspeed back office, see [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#skus-options-discounts-charges).

Discounts with incorrect or missing ref codes are rejected by the EPOS, therefore Lightspeed Restaurant Bridge skips discounts without a ref code.

### Charges

Charges are sent to Lightspeed Restaurant, including their name, ref code, and price.

Charges must be created as items in Lightspeed. To find out how to create and check charge ref codes in your Lightspeed back office, see [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#skus-options-discounts-charges).

Charges with incorrect or missing ref codes are rejected by the EPOS, therefore Lightspeed Restaurant Bridge skips charges without a ref code.

There is one exception: charges with ref code `TIP` are not sent as items but are instead included in the payment as a tip amount. In Lightspeed, tips are part of the payment and cannot exist without one. To add a tip without a payment, use a charge with a different ref code that corresponds to an item in Lightspeed.

### Payments

Zero, one, or multiple payments can be associated with an order.

Ref codes are used to map each payment in HubRise to the correct payment method in Lightspeed. Payments without a ref code are not sent to Lightspeed.

To find out how to check the payment methods ref codes available in your Lightspeed back office, see [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#payment-methods).

#### Handling Price Differences

When the total payment amount does not match the total price for the order as calculated by Lightspeed Restaurant, two scenarios might happen:

- If the total payment amount is greater than the expected amount, Lightspeed rejects the order.
- If the total payment amount is less than the expected amount, Lightspeed accepts the order. However, the order remains open for payment in the EPOS.

---

**Related FAQ**: [How Do I Troubleshoot Price Difference Errors?](/apps/lightspeed-restaurant/troubleshooting/price-differences-errors)

---

#### Swiss Market Rounding Rules

In the Swiss market, Lightspeed automatically rounds the order total to the nearest 5 cents, as required by Swiss law due to the absence of 1 and 2 cent coins.

To avoid discrepancies between the order total and payment amount, HubRise rounds payments using the same rules. For example, an order total of CHF 12.03 is rounded to CHF 12.05.

### Service Types

Lightspeed Restaurant requires each service type (delivery, collection, eat-in) to be defined as an account profile.

The ref code of the service type is used to map the HubRise order to the correct account profile on Lightspeed.

To find out how to check the service types ref codes available in your Lightspeed back office, see [Map Ref Codes](/apps/lightspeed-restaurant/map-ref-codes#service-types).

### Customer Information

Lightspeed Restaurant Bridge sends to Lightspeed the complete customer information, when available, including name, email address, and delivery address.

When customer information is not available, Lightspeed Restaurant Bridge creates an anonymous customer with `Anonymous` as the first name.

## Order Modifications {#order-modifications}

Orders created in HubRise are synchronised in both directions. When an order created in HubRise is modified in Lightspeed, Lightspeed Restaurant Bridge sends both item and payment changes to HubRise. When the order is modified in HubRise, Lightspeed Restaurant Bridge sends any new items and payments to Lightspeed, but does not send modifications to existing items or payments.

Orders created in Lightspeed can be pulled into HubRise only when they are closed. Modifications to these orders are not sent to HubRise. For more information, see [Pull Orders](/apps/lightspeed-restaurant/pull-orders).

## Local Orders

Local orders in Lightspeed correspond to orders with a service type of `eat-in` in HubRise. When a table name is associated with a local order, it is handled slightly differently. Here are the specifics:

- When a local order is created, the bridge checks if the table is already open in Lightspeed. If it is, the bridge will add the items and payments from the check to the HubRise order.
- If the table is open, but another HubRise order is already associated with that table, the bridge will mark the new HubRise order as `rejected`.

The following scenarios illustrate how local orders can be used:

- **Booking solution:** When the customer checks in, the booking solution creates an empty eat-in order in HubRise with the table name. When the customer orders and pays, the booking solution is informed of the order and payment details.
- **Table ordering app:** When the customer places an order, the app creates an eat-in order in HubRise. This order can be supplemented with additional items later, either via the app or directly in Lightspeed (for example, if a server adds items). At the end of the meal, the order can be paid either through the app or in Lightspeed, with one or multiple payments.
- **Pay-at-the-table solution:** When the customer is ready to pay, the app creates an empty eat-in order in HubRise with the table name. The bridge then fetches the open check for that table and adds the items in HubRise. The app is notified of the update, and it displays the items and payment amount to the customer. When the customer pays, the app sends the payment to HubRise, which closes the check in Lightspeed.
