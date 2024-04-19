---
title: Pull Orders
path_override: pull-orders
position: 7
layout: documentation
meta:
  title: Pull Orders | PrestaShop | HubRise
  description: Find out the technical details of how orders are pulled from PrestaShop into HubRise, which fields are passed and which are not.
---

When you connect PrestaShop Bridge to HubRise, orders placed on your PrestaShop store are automatically pulled into HubRise. This allows you to process these orders directly in your EPOS or any other solution connected to your HubRise account.

If orders are not syncing as expected, see [Troubleshooting](/apps/prestashop/troubleshooting#orders-not-syncing) for help.

This page describes the information that HubRise receives from PrestaShop for your orders.

## Items, Options, and Deals

PrestaShop orders contain the complete information about items, including name, POS ref code, quantity, and price. Options and deals, however, are not supported.

## Order Statuses

When an order status changes in HubRise, PrestaShop Bridge notifies PrestaShop, and the change can be seen by the customer.

From the Configuration page of PrestaShop Bridge, you can customise how to map the different HubRise order statuses to PrestaShop. To learn how to map order statuses in the Configuration page, see [Order Statuses](/apps/prestashop/configuration#order-statuses).

## Service Types

PrestaShop Bridge sends to HubRise the information about the carrier used for the delivery. From the Configuration page, you can customise the ref code associated with each carrier. To learn how to set ref code for service types, see [Service Types](/apps/prestashop/configuration#service-types).

## Customer Details

PrestaShop provides full customer's details for all orders. PrestaShop Bridge creates a customer in HubRise every time you receive an order from a new customer, and the customer's details are reused or updated in the following orders.

## Discounts and Charges

PrestaShop Bridge provides information about discounts and delivery charges, if present.

## Technical Reference

This section describes how orders are encoded in the JSON payloads you receive from PrestaShop Bridge.

### Items

For every item in the order, PrestaShop Bridge provides the following information:

- `product_name`: The item name.
- `sku_name`: The name of the sku or variation, if available.
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

PrestaShop Bridge always includes all the personal details provided by the customer in the `customer` object. This information is stored in a HubRise customer and can be retrieved using the HubRise customer ID. For more information, see [how to retrieve customer's details](/developers/api/customers#retrieve-customer).

### Discounts

The discount applied to the order is passed as a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is "Discount" by default.
- `price_off`: The total amount of the discount.

PrestaShop does not provide any ref code for discounts.

<details>

<summary>Sample JSON for discounts</summary>

```json
"discounts": [
  {
    "name": "Discount",
    "price_off": "0.50 EUR"
  }
]
```

</details>

### Delivery Charges

PrestaShop Bridge encodes delivery charges in the `charges` array, if they are present.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is `Delivery charge` by default.
- `ref`: The ref code of the charge that you set in the Configuration page.
- `price`: The total amount of the delivery charge.
- `tax_rate`: The tax rate applied to the delivery charge.

### Wrapping Fees

PrestaShop Bridge encodes wrapping fees in the `charges` array, if they are present.

The available fields in the payloads are the following:

- `name`: The name of the wrapping fee, which is `Wrapping charge` by default.
- `ref`: The ref code of the charge that you set in the Configuration page.
- `price`: The total amount of the wrapping fee.
- `tax_rate`: The tax rate applied to the wrapping fee.

<details>

<summary>Sample JSON for charges</summary>

```json
"charges": [
  {
    "name": "Delivery charge",
    "price": "1.50 EUR",
    "ref": "DELCH",
    "tax_rate": 4
  },
  {
    "name": "Wrapping charge",
    "price": "0.50 EUR",
    "ref": "WRAPCH",
    "tax_rate": 4
  }
]
```

</details>

### Payment

Information about the payment is included in the `payments` array. Only a single payment is supported per order.

The available fields in the payloads are the following:

- `name`: The name of the payment method.
- `ref`: The ref code of the payment that you specify in the Configuration page.
- `amount`: The total amount of the payment.
