---
title: Pull Orders
path_override: pull-orders
position: 8
layout: documentation
meta:
  title: Pull Orders | Shopify | HubRise
  description: Find out the technical details of how orders are pulled from Shopify into HubRise, which fields are passed and which are not.
---

Connecting Shopify to HubRise allows you to receive orders directly in your EPOS or any other solution connected to your HubRise account.

This page describes the information that HubRise receives from Shopify for your orders.

## Items, Options, and Deals

Shopify orders contain the complete information about items, including name, POS ref code, quantity, and price. Options and deals, however, are not supported.

## Order Statuses

When an order status changes in HubRise, Shopify Bridge notifies Shopify, and the change can be seen by the customer.

From the configuration page of Shopify Bridge, you can customise how to map the different HubRise order statuses to Shopify. For more information, see [Order Statuses](/apps/shopify/configuration#order-statuses).

## Service Types

Shopify Bridge supports only delivery orders.

## Customer Details

Shopify provides full customer's details for all orders.
Shopify Bridge creates a customer in HubRise every time you receive an order from a new customer, and the customer's details are reused or updated in the following orders.

## Discounts and Charges

Shopify Bridge provides information about discounts and delivery charges, if present.

## Technical Reference

This section describes how orders are encoded in the JSON payloads you receive from Shopify Bridge.

### Items

For every item in the order, Shopify Bridge provides the following information:

- `product_name`: The product name.
- `sku_ref`: The ref code of the item.
- `price`: The price for a single item.
- `quantity`: The quantity of items included in the order.

<details>

<summary>Sample JSON containing a single item</summary>

```json
"items": [
  {
    "product_name": "Eiernoedels",
    "sku_ref": "1",
    "price": "4.50 EUR",
    "quantity": "1",
  }
]
```

</details>

### Customer

Shopify Bridge always includes all the personal details provided by the customer in the `customer` object.
This information is stored in a HubRise customer and can be retrieved using the HubRise customer ID.
For more information, see [how to retrieve customer's details](/developers/api/customers#retrieve-customer).

### Discounts

The discount applied to the order is passed as a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is "Total discount" by default.
- `price_off`: The total amount of the discount.

Shopify does not provide any ref code for discounts.

<details>

<summary>Sample JSON for discounts</summary>

```json
"discounts": [
  {
    "name": "10% off",
    "price_off": "0.50 EUR"
  }
]
```

</details>

### Delivery Charges

Shopify Bridge encodes delivery charges in the `charges` array, if they are present.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is `Delivery charge` by default.
- `type`: The type of charge. It has always the value `delivery`.
- `price`: The total amount of the delivery charge.

Shopify does not provide any ref code for delivery charges.

<details>

<summary>Sample JSON for charges</summary>

```json
"charges": [
  {
    "name": "Delivery charge",
    "type": "delivery",
    "price": "1.50 EUR"
  }
]
```

</details>

### Payment

Information about the payment is included in the `payments` array. Only a single payment is supported per order.

The available fields in the payloads are the following:

- `name`: The name of the payment method.
- `type`: The type of payment. It has always the value `online`.
- `amount`: The total amount of the payment.

### Total Price

The total price paid for the order, including charges and discounts applied, is encoded in the `total` field.
