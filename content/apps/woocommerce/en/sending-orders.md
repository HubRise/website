---
title: Sending Orders
position: 7
layout: documentation
meta:
  title: Sending Orders | WooCommerce | HubRise
  description: Find out the technical details of how orders are sent from WooCommerce to HubRise, which fields are passed and which are not.
---

Connecting WooCommerce to HubRise allows you to receive WooCommerce orders directly in your EPOS.
This page describes the information that HubRise receives from WooCommerce for your orders.

## Items and Options

WooCommerce orders contain the complete information about items and options, including name, POS ref code, quantity, and price. Deals, however, are not supported on WooCommerce.

Customers' comments on single products are not supported on WooCommerce. If you rely on these comments for cooking or serving instructions (for example, "Medium rare cooking", or "Cut in slices"), you should add the corresponding items in your EPOS and include them as options in the WooCommerce menu, so that they are correctly encoded.

## Order Statuses

New WooCommerce orders are created on HubRise with status `new`.

Order status changes in WooCommerce trigger a status change in HubRise according to the following rules:

| WooCommerce status change | Corresponding HubRise status |
| ------------------------- | ---------------------------- |
| processing                | accepted                     |
| completed                 | completed                    |
| cancelled                 | cancelled                    |
| refunded                  | cancelled                    |
| failed                    | rejected                     |
| trash                     | cancelled                    |

Conversely, order status changes in HubRise trigger a status change in WooCommerce according to the following rules:

| HubRise status change | Corresponding WooCommerce status |
| --------------------- | -------------------------------- |
| received              | pending                          |
| accepted              | processing                       |
| in_preparation        | processing                       |
| awaiting_shipment     | processing                       |
| awaiting_collection   | processing                       |
| in_delivery           | processing                       |
| completed             | completed                        |
| rejected              | failed                           |
| cancelled             | cancelled                        |
| delivery_failed       | failed                           |

## Service Types

WooCommerce supports two service types:

- Delivery
- Customer collection

[comment]: # "TODO"

## Customer Details

WooCommerce Bridge provides full customer information about orders, including name, delivery address, and contact details, and saves it in HubRise.

## Discounts

WooCommerce discounts are sent to HubRise, if present in an order.

## Charges

WooCommerce supports only delivery charges, which are sent to HubRise if present in an order.

---

## Technical Reference

This section describes how orders are encoded in the JSON payloads you receive from WooCommerce Bridge.

### Items Encoding

WooCommerce products in an order are mapped to HubRise in three different ways.

- Simple products are sent to HubRise as products without sku.
- Variable products with an attributes list named "sku" are sent to HubRise as products with a sku.
- Variable products with an attributes list name different from "sku" are sent to HubRise as products with options.

For every item in the order, WooCommerce Bridge provides the following information:

- `product_name`: The name of the product
- `sku_name`: The name of the sku, for WooCommerce variable products with attribute name "sku". Otherwise, the defaul value is `null`.
- `sku_ref`: The ref code of the item
- `price`: The price for a single item
- `quantity`: The quantity of items included in the order
- `options`: The array of options attached to the item, for WooCommerce variable products with attribute name other than "sku". Otherwise, the default value is an empty array.

### Options Encoding

If a product contains an option, WooCommerce Bridge provides the following information:

- `option_list_name`: The placeholder for the option list name, with default value "Options"
- `name`: The option name

A product can have at most one attached option.

<details>

Below is a sample payload containing a single item with an option.

```json
"items": [
  {
    "product_name": "Vegan Vegetarian - 18inch Classic",
    "sku_name": null,
    "sku_ref": "vegan_vegetarian_a18inch_classic",
    "price": "19.95 EUR",
    "quantity": "1",
    "tax_rate": null,
    "options": [
      {
        "option_list_name": "Options",
        "name": "18inch Classic"
      }
    ]
  }
]
```

</details>

### Customer

For new customers, WooCommerce Bridge creates a `customer` record on HubRise. For existing customers, WooCommerce Bridge simply adds the HubRise `customer_id` to the order.

WooCommerce Bridge encodes all the available customer's details from WooCommerce, such as:

- `address_1`: The first line of the address.
- `address_2`: The second line of the address.
- `city`: The city of the address.
- `postal_code`: The postcode of the address.
- `state`: The state of the address.
- `email`: The customer's email address.
- `phone`: The customer's phone number.
- `delivery_notes`: The delivery notes that the customer includes at checkout.

### Delivery Charges

Delivery charges are applied for orders delivered by the restaurant.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is "Delivery charge" by default.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of WooCommerce Bridge and should match the value in your EPOS.
- `price`: The total amount of the delivery charge.

<details>

Below is a sample payload for charges.

```json
"charges": [
  {
    "name": "Delivery charge",
    "ref": "1111",
    "price": "3.50 EUR"
  }
]
```

</details>

## Discounts

The discount applied to the order is passed in a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount.
- `price_off`: The total amount of the discount.

## Custom Fields

The `custom_fields` object is used by WooCommerce Bridge to store additional information not provided by default by the WooCommerce API.

[comment]: # "TODO"
