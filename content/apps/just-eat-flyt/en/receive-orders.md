---
title: Receive Orders
path_override: receive-orders
position: 5
layout: documentation
meta:
  title: Receive Orders | Just Eat Flyt | HubRise
  description: Find out the technical details of how orders are received from Just Eat into HubRise, which fields are passed and which are not.
---

Connecting Just Eat to HubRise allows you to receive Just Eat orders directly in your EPOS or any other solution connected to your HubRise account.

The Just Eat OrderPad will need to remain switched on to receive orders in HubRise. For more information, see [Can I Turn Off the Orderpad?](/apps/just-eat-flyt/faqs/turn-off-orderpad). Orders can either be manually accepted on the OrderPad, or auto-accepted in some Just Eat markets. For more information, see [Do I Want Auto-Accept Activated?](/apps/just-eat-flyt/faqs/auto-accept)

This page describes the information Just Eat sends to HubRise. It helps you understand how orders will be received on your EPOS.

## Items and Options

Just Eat orders contain the complete information about items and options, including name, POS ref code, quantity, and price.

Customers' comments on single products are not supported on Just Eat. If you rely on these comments for cooking or serving instructions (for example, "Medium rare cooking", or "Cut in slices"), you should add the corresponding items in your EPOS and include them as options in the Just Eat menu, so that they are correctly encoded.

## Order Statuses

---

**IMPORTANT NOTE:** In this section, we capitalise the first letter of Just Eat statuses to make them easier to distinguish from HubRise status names. For example, `Successful` is a Just Eat status, while `accepted` is a HubRise status.

---

### Just Eat Statuses

Just Eat orders can be marked as:

- `Successful`: The order has been accepted by the EPOS.
- `Failed`: The order could not be sent to the EPOS.

New orders must be marked as `Successful` or `Failed` within 3 minutes, otherwise Just Eat automatically marks them as `Failed`.

You can only update the status of an order once. Further changes are ignored by Just Eat.

### When the Status Changes in HubRise

When the status of an order changes to `rejected` or `cancelled` in HubRise, Just Eat Bridge notifies Just Eat that the order is `Failed`.

Just Eat Bridge lets you decide which HubRise status triggers the `Successful` status on Just Eat. This is useful to handle different scenarios when your EPOS updates the order status. For example, if your EPOS marks an accepted order as `received` on HubRise, you can still notify Just Eat that the order has been accepted.

Other HubRise status values are not supported and are not sent to Just Eat.

### When the Status Changes in Just Eat

Just Eat Bridge does not change order statuses in HubRise. If an order is cancelled by Just Eat, HubRise will not be notified.

## Service Types

Just Eat supports three service types:

- Delivery by Just Eat riders
- Delivery by the restaurant's fleet
- Customer collection

These are typically associated with specific ref codes in your EPOS, which you can set in the Configuration page of the Bridge. For more information about ref codes, see your EPOS documentation in our [apps page](/apps).

## Order Times

For restaurant delivery orders, Just Eat provides the time the customer expects the order to be delivered. For other types of orders, it provides the time the order should be ready for pickup, either by the customer or a delivery rider. In both scenarios, this time is transmitted to HubRise as the `expected_time` field. This time cannot be changed by the EPOS.

## Customer Details

The customer's details provided by Just Eat depend on the service type for the order.

- For orders delivered by the restaurant, HubRise receives the customer name and address.
- For pick-up orders, only the customer name is received.
- For orders delivered by Just Eat, the customer name may be received, depending on the market. The address is never received.

## Discounts

Discounts are not supported on Just Eat, and no information is provided in the API.

## Charges

Just Eat Flyt Bridge encodes two types of charges: Delivery charge, and service surcharge.

## Technical Reference

This section describes how orders are encoded in the JSON payloads you receive from Just Eat Flyt Bridge.

### Just Eat Order ID

When a new order is created on HubRise, the Just Eat order ID is stored in the `collection_code` field.
This is the order reference ID that the customer sees on the platform.

### Items Encoding

For every item in the order, Just Eat Flyt Bridge provides the following information:

- `sku_ref`: The ref code of the item
- `product_name`: The product name
- `price`: The price for a single item
- `quantity`: The quantity of items included in the order
- `options`: The array of options attached to the item

### Options Encoding

For every option in the order, Just Eat Flyt Bridge provides the following information:

- `option_list_name`: The placeholder for the option list name, with default value `Options`
- `ref`: The ref code of the option
- `name`: The option name
- `price`: The price for a single option

Every option has single quantity. Multiple identical options are encoded in separate option objects.

<details>

Below is a sample payload containing a single item with an option.

```json
"items": [
  {
    "product_name": "Crispy Chilli Chicken",
    "sku_ref": "2473",
    "price": "12.95 EUR",
    "quantity": "1",
    "options": [
      {
        "option_list_name": "Options",
        "name": "Egg Fried Rice",
        "ref": "2043",
        "price": "0.35 EUR"
      }
    ]
  }
]
```

</details>

### Customer

Just Eat Flyt Bridge never creates customers on HubRise for Just Eat orders, but always includes the customer's details in the `customer` object, when they are available.

The customer's name is provided in the `first_name` and `last_name` fields. A customer might decide to leave blank one of the two fields, so this might remain empty in the payload.

The default placeholder `customer@email.hidden` is used to populate the `email` field for all customers.

For restaurant delivery orders only, Just Eat Flyt Bridge receives the following information from Just Eat:

- `address_1`: The first line of the address.
- `address_2`: The second line of the address.
- `city`: The city of the address.
- `postal_code`: The postcode of the address.
- `latitude`: The latitude of the address.
- `longitude`: The longitude of the address.
- `phone`: Just Eat support number. Note: This is not the customer's phone number.
- `delivery_notes`: The delivery notes that the customer includes at checkout.

<details>

Below is a sample payload with customer details.

```json
"customer": {
    "email": "customer@email.hidden",
    "first_name": "Jane",
    "last_name": "Black",
    "phone": "0131 000 0000",
    "address_1": "2 High St",
    "address_2": "",
    "postal_code": "EH1 1PG",
    "city": "Edinburgh",
    "delivery_notes": "Don't ring the bell",
    "latitude": "55.949779",
    "longitude": "-3.190822"
  }
```

</details>

### Delivery Charges

Delivery charges are applied for orders delivered by the restaurant.

The available fields in the payloads are the following:

- `name`: The name of the delivery charge, which is `Delivery charge` by default.
- `type`: The type of charge. It has always the value `delivery`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Just Eat Bridge and should match the value in your EPOS.
- `price`: The total amount of the delivery charge.

### Just Eat Surcharge

Just Eat applies a fixed surcharge to all the orders.

The available fields in the payloads are the following:

- `name`: The name of the charge, which is `Service charge` by default.
- `type`: The type of charge. It has always the value `other`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Just Eat Bridge and should match the value in your EPOS.
- `price`: The total amount of the small order surcharge.

<details>

Below is a sample payload for charges.

```json
{
  "charges": [
    {
      "type": "delivery",
      "name": "Delivery charge",
      "ref": "1111",
      "price": "3.50 EUR"
    },
    {
      "type": "other",
      "name": "Service charge",
      "ref": 2222,
      "price": "0.50 EUR"
    }
  ]
}
```

</details>

### Total Price

The total price paid for the order, including charges applied, is encoded in the `total` field.
