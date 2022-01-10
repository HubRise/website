---
title: Sending Orders
position: 8
layout: documentation
meta:
  title: Sending Orders | Just Eat Takeaway | HubRise
  description: Find out the technical details of how orders are sent from Just Eat Takeaway to HubRise, which fields are passed and which are not.
---

Connecting Just Eat Takeaway to HubRise allows you to receive orders directly in your EPOS.
This page describes the information that HubRise receives from Just Eat Takeaway for your orders.

## Items and Options

Just Eat Takeaway orders contain the complete information about items and options, including name, POS ref code, quantity, and price. Deals, however, are not supported.

## Order Statuses

A Just Eat order goes through several statuses during its lifecycle:

- `Confirmed`: The order was confirmed.
- `Error`: There was an error. A Just Eat Takeaway agent calls the restaurant.
- `Kitchen`: The restaurant started preparing the order.
- `In Delivery`: The order is in delivery.
- `Delivered`: The order has been delivered.

As a minimum requirement, Just Eat Takeaway expects every successful order to be marked as `Confirmed`.

### Change the status of an order in Just Eat Takeaway

When an order status changes on HubRise, Just Eat Takeaway Bridge notifies Just Eat Takeaway. The correspondence between HubRise and Just Eat Takeaway statuses is as follows:

| HubRise status                               | Just Eat Takeaway status                                                   |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| `new`, `received` or `accepted`              | You can configure which one of these statuses makes the order `Confirmed`. |
| `rejected`, `cancelled` or `delivery_failed` | `Error`                                                                    |
| `in_preparation`                             | `Kitchen`                                                                  |
| `in_delivery`                                | `In Delivery`                                                              |
| `completed`                                  | `Delivered`                                                                |

Just Eat Takeaway Bridge lets you decide which HubRise status triggers the `Confirmed` status. This is useful to handle different scenarios when your EPOS updates the order status. For example, if your EPOS marks an accepted order as `received` on HubRise, you can still notify Just Eat Takeaway that the order has been confirmed.

Other HubRise status values are not supported and are not sent on Just Eat Takeaway.

### Change the status of an order in HubRise

Just Eat Takeaway Bridge does not change order statuses in HubRise.

## Service Types

Just Eat Takeaway supports three service types:

- Delivery by Just Eat Takeaway riders
- Delivery by the restaurant's fleet
- Customer collection

These are typically associated with specific ref codes in your EPOS, which you can set in the Configuration page of the Bridge. For more information about ref codes, see your EPOS documentation in our [apps page](/apps).

## Customer Details

Full customer's details are provided by Just Eat Takeaway for all orders, regardless of the service type.
Email address is never provided by Just Eat Takeaway, so this field is always missing on HubRise.

## Discounts and Charges

In the order, you can find information about Just Eat Takeaway discounts and delivery charges, if present.

---

## Technical Reference

This section describes how orders are encoded in the JSON payloads you receive from Just Eat Takeaway Bridge.

### Just Eat Takeaway Order ID

When a new order is created on HubRise, the Just Eat Takeaway order ID is stored in the `collection_code` field.
This is the order reference ID that the customer sees on the platform.

### Items

For every item in the order, Just Eat Takeaway Bridge provides the following information:

- `sku_ref`: The ref code of the item
- `product_name`: The product name
- `price`: The price for a single item
- `quantity`: The quantity of items included in the order
- `options`: The array of options attached to the item
- `customer_notes`: The preparation notes that the customer added to the item

### Options

For every option in the order, Just Eat Bridge provides the following information:

- `option_list_name`: The placeholder for the option list name, with default value "Options"
- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single item

Every option has single quantity. Multiple identical options are encoded in separate option objects.

<details>

Below is a sample payload containing a single item with multiple options.

```json
"items": [
  {
    "product_name": "Eiernoedels",
    "sku_ref": "1",
    "price": "4.50 EUR",
    "quantity": "1",
    "customer_notes": "Not too salty, please!",
    "options": [
      {
        "option_list_name": "Options",
        "name": "Rundvlees",
        "ref": "102",
        "price": "2.25 EUR"
      },
      {
        "option_list_name": "Options",
        "name": "Extra garnalen",
        "ref": "116",
        "price": "2.45 EUR"
      },
      {
        "option_list_name": "Options",
        "name": "Teriyaki saus",
        "ref": "121",
        "price": "0.00 EUR"
      }
    ]
  }
]
```

</details>

### Customer

Just Eat Takeaway Bridge always includes the customer's details in the `customer` object.

The customer's name is provided as a single field by Just Eat Takeaway.
The `first_name` and `last_name` fields are created on HubRise by splitting the full name by the first space character.

Just Eat Takeaway Bridge receives the following information from Just Eat about the customer's address, if available in the original payload:

- `address_1`: The street and street number
- `city`: The city of the address
- `postal_code`: The postcode of the address
- `phone`: The customer's phone number
- `delivery_notes`: The delivery notes that the customer includes at checkout
- `company_name`: The name of the company the customer belongs to

<details>

Below is a sample payload with customer details.

```json
"customer": {
  "first_name": "John",
  "company_name": "HubRise",
  "phone": "+3333233232",
  "address_1": "1 Street",
  "postal_code": "8888AB",
  "city": "Alpha",
  "delivery_notes": "companyname: HubRise"
}
```

</details>

### Discounts

The discount applied to the order is passed as a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is "Discount" by default.
- `ref`: The ref code of the discount. Its default value can be set from the Configuration page of Just Eat Takeaway Bridge and should match the value in your EPOS.
- `price_off`: The total amount of the discount.

<details>

Below is a sample payload for discounts.

```json
"discounts": [
  {
    "name": "10% off",
    "ref": "TH99",
    "price_off": "0.50 EUR"
  }
]
```

</details>

### Delivery Charges

Delivery charges are applied for orders delivered by the restaurant.
Just Eat Takeaway Bridge encodes this information in the `charges` array.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is "Delivery charge" by default.
- `type`: The type of charge. It has always the value `delivery`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Just Eat Bridge and should match the value in your EPOS.
- `price`: The total amount of the delivery charge.

<details>

Below is a sample payload for charges.

```json
"charges": [
  {
    "name": "Delivery charge",
    "type": "delivery",
    "ref": "TH77",
    "price": "1.50 EUR"
  }
]
```

</details>

### Customers' Notes

Customers' notes about the order are encoded in the `customer_notes` field.
