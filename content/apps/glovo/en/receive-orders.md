---
title: Receive Orders
position: 7
layout: documentation
meta:
  title: Receive Orders | Glovo | HubRise
  description: Find out the technical details of how orders are received from Glovo to HubRise, which fields are passed and which are not.
---

Connecting Glovo to HubRise lets you receive orders directly in your EPOS or any other solution connected to your HubRise account.

This page describes the information that HubRise receives from Glovo for your orders.

## Items and Options

Glovo orders contain the complete information about items and options, including name, POS ref code, quantity, and price.

## Deals

Glovo Bridge supports deals. It sends the deal name to HubRise, and the discounted price for each item.

## Order Statuses

---

**IMPORTANT NOTE:** In this section, we capitalise the first letter of Glovo statuses to make them easier to distinguish from HubRise status names. For example, `Confirmed` is a Glovo status, while `accepted` is a HubRise status.

---

### Glovo Statuses

A Glovo order goes through several statuses during its lifecycle:

- `Accepted`: The order was confirmed.
- `Ready_for_pickup`: The order is ready for collection by the customer or by the rider.
- `Out_for_delivery`: The order is in delivery.
- `Picked_up_by_customer`: The order has been collected by the customer.

### When the Status Changes in HubRise

When an order status changes in HubRise, Glovo Bridge notifies Glovo. The correspondence between HubRise and Glovo statuses is as follows:

| HubRise status                                | Glovo status                                                              |
| --------------------------------------------- | ------------------------------------------------------------------------- |
| `new`, `received` or `accepted`               | You can configure which one of these statuses makes the order `Accepted`. |
| `awaiting_shipment` and `awaiting_collection` | `Ready_for_pickup`                                                        |
| `in_delivery`                                 | `Out_for_delivery`                                                        |
| `completed`                                   | `Picked_up_by_customer`                                                   |

Glovo Bridge lets you decide which HubRise status triggers the `Accepted` status. This is useful to handle different scenarios when your EPOS updates the order status. For example, if your EPOS marks an accepted order as `received` on HubRise, you can still notify Glovo that the order has been confirmed.

Other HubRise status values are not supported and are not sent on Glovo.

---

**IMPORTANT NOTE:** Glovo Bridge cannot cancel an existing order. To cancel a Glovo order, contact Glovo support.

---

### When the Status Changes in Glovo

If Glovo cancels an order, Glovo Bridge is notified and cancels the order in HubRise as a result.

## Service Types

Glovo supports three service types:

- Delivery by Glovo riders
- Delivery by the restaurant's fleet
- Customer collection

These are typically associated with specific ref codes in your EPOS, which you can set in the Configuration page of the Bridge. For more information about ref codes, see your EPOS documentation in our [apps page](/apps).

## Order Times

Glovo provides the time when the eater expects to receive or collect the order. Glovo Bridge sends this time to HubRise as the `expected_time` field.
You cannot update the expected delivery time with Glovo Bridge.

## Customer Details

Glovo provides the customer name and address, including geographical coordinates, for all orders, regardless of the service type.
The email address is never provided by Glovo, so this field is always missing on HubRise.
The customer's phone number, however, is available for restaurant-fulfilled orders only.

## Discounts and Charges

In the order, you can find information about Glovo discounts and delivery charges, if present.

---

## Technical Reference

This section describes how orders are encoded in the JSON payloads you receive from Glovo Bridge.

### Glovo Order IDs

Glovo uses two different codes to identify orders, which are stored in the following HubRise fields:

- `ref`: the ID that appears on the invoice and that Glovo support teams use to identify the order.
- `collection_code`: a three-digit ID used by couriers to pick up orders.

### Items

For every item in the order, Glovo Bridge provides the following information:

- `sku_ref`: The ref code of the item
- `product_name`: The product name
- `price`: The price for a single item
- `quantity`: The quantity of items included in the order
- `options`: The array of options attached to the item

### Options

For every option in the order, Glovo Bridge provides the following information:

- `option_list_name`: The placeholder for the option list name, with default value `Options`
- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single item
- `quantity`: The quantity of the option

<details>

Below is a sample payload containing a single item with multiple options.

```json
"items": [
  {
    "product_name": "Eiernoedels",
    "sku_ref": "1",
    "price": "4.50 EUR",
    "quantity": "1",
    "options": [
      {
        "option_list_name": "Options",
        "name": "Rundvlees",
        "ref": "102",
        "price": "2.25 EUR",
        "quantity": "1",
      },
      {
        "option_list_name": "Options",
        "name": "Extra garnalen",
        "ref": "116",
        "price": "2.45 EUR",
        "quantity": "2",
      }
    ]
  }
]
```

</details>

### Customer

Glovo Bridge always includes the customer's details in the `customer` object.

The customer's name is provided as a single field by Glovo.
The `first_name` and `last_name` fields are created on HubRise by splitting the full name by the first space character.

Glovo Bridge receives the following information from Glovo about the customer's address, if available in the original payload:

- `address_1`: The street and street number.
- `city`: The city of the address.
- `latitude`: The latitude of the address.
- `longitude`: The longitude of the address.
- `phone`: The customer's phone number, only for restaurant deliveries.

<details>

Below is a sample payload with customer details.

```json
"customer": {
  "first_name": "Jacques",
  "last_name": "Renaud",
  "address_1": "Rue Duquesne, 13, 69006",
  "city": "Lyon",
  "latitude": "45.7724845",
  "longitude": "4.8390106"
}
```

</details>

### Discounts

The discount applied to the order is passed as a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is `Discount` by default.
- `ref`: The ref code of the discount. Its default value can be set from the Configuration page of Glovo Bridge and should match the value in your EPOS.
- `price_off`: The total amount of the discount.

<details>

Below is a sample payload for discounts.

```json
"discounts": [
  {
    "name": "Discount",
    "ref": "TH99",
    "price_off": "0.50 EUR"
  }
]
```

</details>

### Delivery Charges

Delivery charges are applied for orders delivered by the restaurant.
Glovo Bridge encodes this information in the `charges` array.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is `Delivery charge` by default.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Glovo Bridge and should match the value in your EPOS.
- `price`: The total amount of the delivery charge.

### Small Order Surcharge

Glovo applies a fixed surcharge to all orders below a minimum value.

The available fields in the payloads are the following:

- `name`: The name of the charge, which is `Small order fee` by default.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Just Eat Bridge and should match the value in your EPOS.
- `price`: The total amount of the small order surcharge.

<details>

Below is a sample payload for charges.

```json
{
  "charges": [
    {
      "name": "Delivery charge",
      "ref": "1111",
      "price": "3.50 EUR"
    },
    {
      "name": "Small order fee",
      "ref": "2222",
      "price": "0.50 EUR"
    }
  ]
}
```

</details>

## Customer Notes

If the order contains special requirements or allergy information, these are available in the `customer_notes` field.
