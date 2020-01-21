---
title: Order management
position: 3
layout: documentation
meta:
  title:
  description:
---

## 1. Orders

### 1.1. Create order

This method creates an order.

Almost all fields are optional. In fact the simplest order that can be created only has a `status`.

<CallSummaryTable
  endpoint="POST /locations/:location_id/orders"
  shortEndpoint="POST /location/orders (location only)"
  accessLevel="location, account"
/>

#### Parameters:

| Name                                                                  | Type                                                 | Description                                                                                                                                                                     |
| --------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_ref` <Label type="optional" />                               | string                                               | The client internal id for this order. This field is only visible by the client and will typically be used to lookup an order.                                                  |
| `status`                                                              | [OrderStatus](#order-status)                         | The order status                                                                                                                                                                |
| `service_type` <Label type="optional" />                              | [ServiceType](/api/general-concepts/#service-type)   | How the order is delivered/served to the customer.                                                                                                                              |
| `customer` <Label type="optional" />                                  | [Customer](#orders-customer)                         | The id of the customer who placed the order. See the customer matching rules section.                                                                                           |
| `customer_list_id` / `customer_private_ref` <Label type="optional" /> | string                                               | If `customer_id` is not provided, a combination of `customer_list_id` and `customer_private_ref` can be used to identify the customer. See the customer matching rules section. |
| `expected_time` <Label type="optional" />                             | [Time](/api/general-concepts/#date-time)             | The time the customer is expecting to get his order.                                                                                                                            |
| `customer_notes` <Label type="optional" />                            | string                                               | Information given by the customer, eg: delivery notes, etc.                                                                                                                     |
| `total` <Label type="optional" />                                     | [Money](/api/general-concepts/#monetary-value)       | The amount paid by the customer.                                                                                                                                                |
| `custom_fields` <Label type="optional" />                             | [CustomFields](/api/extensions/#custom-fields)       | Additional data attached to the order.                                                                                                                                          |
| `items` <Label type="optional" />                                     | [OrderItem](#order-items)[]                          | The order items.                                                                                                                                                                |
| `deals` <Label type="optional" />                                     | [OrderDeal](#order-items)[]                          | The deals used in this order.                                                                                                                                                   |
| `discounts` <Label type="optional" />                                 | [OrderDiscount](#order-discounts)[]                  | The discounts applied.                                                                                                                                                          |
| `charges` <Label type="optional" />                                   | [OrderCharge](#order-charges)[]                      | The charges incurred on this order.                                                                                                                                             |
| `payments` <Label type="optional" />                                  | [OrderPayment](#order-payments)[]                    | The payment method(s) used.                                                                                                                                                     |
| `loyalty_operations` <Label type="optional" />                        | [OrderLoyaltyOperation](#order-loyalty-operations)[] | Add or remove points to the customer loyalty card(s). Can only be used for orders linked to a customer.                                                                         |

#### Example request:

`POST /locations/3r4s3-1/orders`

```json
{
  "status": "new",
  "private_ref": "3345",
  "customer_id": "ve343",
  "items": [
    {
      "product_name": "Margarita",
      "sku_ref": "MAR-SM",
      "sku_name": "Small",
      "price": "9.00 EUR",
      "quantity": 2,
      "options": [
        {
          "option_list_name": "Sauce",
          "name": "Barbecue",
          "ref": "BBQ",
          "price": "1.00 EUR"
        }
      ]
    },
    {
      "product_name": "Brownie",
      "sku_ref": "BROWN",
      "price": "3.00 EUR",
      "quantity": 1,
      "deal_line": {
        "deal_key": "0",
        "label": "Dessert"
      }
    },
    {
      "product_name": "Coke",
      "sku_ref": "COK",
      "price": "1.00 EUR",
      "quantity": 1,
      "deal_line": {
        "deal_key": "0",
        "label": "Drink"
      }
    },
    {
      "product_name": "Wings BBQ",
      "sku_ref": "WBBQ",
      "price": "4.00 EUR",
      "quantity": 1,
      "points_used": 5.0
    }
  ],
  "deals": {
    "0": {
      "name": "Buy a dessert, get a drink for 1€",
      "ref": "FREEDRINK"
    }
  },
  "discounts": [
    {
      "name": "5€ off your order",
      "ref": "5OFF",
      "price_off": "5.00 EUR"
    }
  ],
  "charges": [
    {
      "type": "delivery",
      "name": "Delivery < 15 km",
      "ref": "DEL",
      "price": "1.50 EUR"
    }
  ],
  "payments": [
    {
      "type": "online",
      "name": "PayPal",
      "info": {
        "email": "john@doe.com"
      },
      "ref": "PP",
      "amount": "23.50 EUR"
    }
  ],
  "loyalty_operations": [
    {
      "name": "",
      "delta": -5,
      "reason": "Points used"
    }
  ],
  "total": "23.50 EUR"
}
```

HubRise calculates the order total. If total is passed but not matching HubRise's calculation, the difference is stored in the `total_discrepancy` field.

### 1.2. Retrieve order

Returns an order resource.

<CallSummaryTable
  endpoint="GET /locations/:location_id/orders/:order_id"
  shortEndpoint="GET /location/orders/:order_id (location only)"
  accessLevel="location, account"
/>

#### Example request:

`GET /locations/3r4s3-1/orders/5dpm9`

```json
{
  "id": "5dpm9",
  "status": "new",
  "private_ref": "3345",
  "items": [
    {
      "product_name": "Margarita",
      "sku_name": "Small",
      "sku_ref": "MAR-S",
      "price": "7.80 EUR",
      "quantity": 2.0,
      "subtotal": "15.60 EUR"
    },
    ...
  ],
  "customer": {
    "id": "s9Egdk",
    "private_ref": "charles@gmail.com",
    "customer_list_id": "ag8u4",
    "first_name": "Charles"
    ...
  }
}
```

The `customer` object represents the state of the customer at the time of order creation. It is not present if the order was created without a customer attached.

The `id`, `private_ref` and `customer_list_id` fields of this object are returned only if the customer has not been deleted since the order was created.

### 1.3. List orders

Returns the orders of a location or an account.

Orders of a given location:

<CallSummaryTable
  endpoint="GET /locations/:location_id/orders"
  shortEndpoint="GET /location/orders (location only)"
  accessLevel="location, account"
/>

Orders of any location of the account:

<CallSummaryTable
  endpoint="GET /accounts/:account_id/orders"
  shortEndpoint="GET /account/orders (account only)"
  accessLevel="account"
/>

#### Parameters:

| Name            | Type                                     | Description                                                                                                                                     |
| --------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_ref`   | string                                   | filter results by `private_ref`, for instance: `private_ref=13456`                                                                              |
| `status`        | string                                   | filter results by `status`, for instance: `status=accepted`                                                                                     |
| `created_by`    | string                                   | filter results by client name. For instance, `created_by=shopify` only returns orders placed through this client                                |
| `after, before` | [Time](/api/general-concepts/#date-time) | `after` is inclusive, `before` is exclusive. For instance, `after=2017-07-01T00:00&before=2017-07-02T00:00` returns orders placed on 2017-07-01 |
| `customer_id`   | string                                   | returns the orders placed by a customer, for instance: `customer_id=ve343`                                                                      |

#### Example request:

`GET /locations/3r4s3-1/orders`

```json
[
 {
   "id": "5dpm9",
   "status": "new",
   "private_ref": "3345",
   ...
 },
 ...
]
```

### 1.4. Update order

Updates an order. The following fields can be updated:

- `status`
- `private_ref`
- `customer_notes`
- `confirmed_time`

<CallSummaryTable
  endpoint="PUT /locations/:location_id/orders/:order_id"
  shortEndpoint="PUT /location/orders/:order_id (location only)"
  accessLevel="location, account"
/>

#### Example request:

`PUT /locations/3r4s3-1/orders/5dpm9`

```json
{
  "status": "accepted"
}
```

## 2. Order's customer

A customer can optionally be attached to an order. There are 3 possible cases:

- `customer_id` is passed: if a customer with this id exists, the customer is attached to the order. Otherwise an error is returned.
- `customer_list_id` and `customer_private_ref` are passed: if a customer has this private_ref in the customer list, it is attached to the order. Otherwise an error is returned.
- Otherwise the order is not attached to a customer.

When a customer is attached to an order, all customer fields are copied in the order. If the order is later retrieved using a GET operation, the customer state _at the time of the order creation_ is returned in the `customer` field.

## 3. Order status

The status of an order. Used in the order's `status` field.

Here are the possible "normal" values, and their meaning:

| Name                  | Description                                                                                                                 |
| --------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `new`                 | Order placed but not received yet in the POS. Default status for a new order placed outside of the POS (eg an online order) |
| `received`            | Order which was previously new, but it has later been received by the POS                                                   |
| `accepted`            | Order accepted by the store. Default status for an order created from within the POS.                                       |
| `in_preparation`      | Order is being prepared.                                                                                                    |
| `awaiting_shipment`   | Order is ready to be shipped.                                                                                               |
| `awaiting_collection` | Order is ready to be collected by the customer.                                                                             |
| `in_delivery`         | Order has been sent out for delivery                                                                                        |
| `completed`           | Order successfully delivered to the customer                                                                                |

These additional statuses can be used in the event of an anomaly:

| Name              | Description                              |
| ----------------- | ---------------------------------------- |
| `rejected`        | Order has been rejected by the store     |
| `cancelled`       | Order has been cancelled by the customer |
| `delivery_failed` | Order could not be delivered             |

Orders do not have to go through all steps. The sequence actually depends on the use case. Let's consider two example scenarios and a possible workflow for each:

#### Delivery order placed online:

1. `new` (order placed online)
1. `received` (received in the POS)
1. `accepted` (accepted by a store operator)
1. `shipped`
1. `completed`

#### Retail order created in the POS:

1. `accepted` (order placed in the POS)
1. `completed`

## 4. Order items

| Name                                      | Type                                           | Description                                                                                                                                                                                 |
| ----------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `product_name`                            | string                                         | The product name                                                                                                                                                                            |
| `sku_name` <Label type="optional" />      | string                                         | The sku name. Typically the product size or color.                                                                                                                                          |
| `sku_ref` <Label type="optional" />       | string                                         | The ref of the sku.                                                                                                                                                                         |
| `price`                                   | [Money](/api/general-concepts/#monetary-value) | The unit price of the sku, without the cost of options.                                                                                                                                     |
| `quantity`                                | decimal                                        | The quantity of items ordered.                                                                                                                                                              |
| `options` <Label type="optional" />       | [OrderOption](#order-options)[]                | Item customization.                                                                                                                                                                         |
| `points_earned` <Label type="optional" /> | decimal                                        | Loyalty points earned by the customer. This field is not linked to a particular loyalty card: a loyalty operation must be included in the order to effectively add/remove points to a card. |
| `points_used` <Label type="optional" />   | decimal                                        | Loyalty points used by the customer. Same remark as above.                                                                                                                                  |

#### Example:

```json
{
  "product_name": "Margarita",
  "sku_name": "Small",
  "sku_ref": "MAR-SM",
  "price": "9.00 EUR",
  "quantity": 2,
  "options": [
    {
      "option_list_name": "Sauce",
      "name": "Barbecue",
      "ref": "BBQ",
      "price": "1.00 EUR"
    }
  ],
  "points_earned": 1.0
}
```

## 5. Order items (deal line)

Order items which are part of a deal include a `deal_line` field. This field is an object with the following fields:

| Name                                       | Type    | Description                                                                                                                                                          |
| ------------------------------------------ | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deal_key`                                 | string  | A key in the order's `deals` object.                                                                                                                                 |
| `label` <Label type="optional" />          | string  | Content of the deal line, for instance "Drink".                                                                                                                      |
| `pricing_effect` <Label type="optional" /> | string  | One of: `unchanged`, `fixed_price`, `price_off`, `percentage_off`.                                                                                                   |
| `pricing_value` <Label type="optional" />  | depends | The presence and value of this field depends on `pricing_effect`. It is a Money for `fixed_price` and `price_off`, a decimal between 0 and 100 for `percentage_off`. |

`deal_key` associates an order item to a particular order deal. The particular value of a key has no significance and HubRise renumbers the keys to: "0", "1", …

When an order is created, each `deal_key` used in an order item must exist in the order's `deals` field, or the request will fail.

## 6. Order options

| Name                                | Type                                           | Description                                                                                   |
| ----------------------------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `option_list_name`                  | string                                         | The name of the list the option belongs to, eg. "Toppings", "Sauce", etc.                     |
| `name`                              | string                                         | The option name                                                                               |
| `ref` <Label type="optional" />     | string                                         | The optional ref of the option.                                                               |
| `price`                             | [Money](/api/general-concepts/#monetary-value) | The option price. The option is free when `price` is omitted.                                 |
| `removed` <Label type="optional" /> | boolean                                        | When this flag is true, the option is removed (for instance, a removed ingredient in a dish). |

#### Example:

```json
{
  "option_list_name": "Sauce",
  "name": "Barbecue",
  "ref": "BBQ",
  "price": "1.00 EUR"
}
```

A removed option can define a `price`. In this case, it's the price charged to the customer to remove the option.

## 7. Order deals

An order deal associates an order item's `deal_key` to a particular deal.

#### Attributes:

| Name                            | Type   | Description                      |
| ------------------------------- | ------ | -------------------------------- |
| `name`                          | string | The name of the deal             |
| `ref` <Label type="optional" /> | string | The ref that identifies the deal |

#### Example:

```json
{
  "0": {
    "name": "Buy a dessert, get a drink for 1€",
    "ref": "FREEDRINK"
  }
}
```

## 8. Order discounts

An order discount is a discount applied to the whole order, as opposed to deals which apply to a set of order items.

#### Attributes:

| Name                            | Type                                           | Description                          |
| ------------------------------- | ---------------------------------------------- | ------------------------------------ |
| `name`                          | string                                         | The name of the discount             |
| `ref` <Label type="optional" /> | string                                         | The ref that identifies the discount |
| `price_off`                     | [Money](/api/general-concepts/#monetary-value) | The discount value                   |

#### Example:

```json
[
  {
    "name": "5€ off your order",
    "ref": "5OFF",
    "price_off": "5.00 EUR"
  },
  {
    "name": "30% off your order",
    "ref": "30OFF",
    "price_off": "7.65 EUR"
  }
]
```

## 9. Order charges

Order charges increase the price paid by the customer.

#### Attributes:

| Name                            | Type                                           | Description                                                        |
| ------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------ |
| `type`                          | string                                         | Can be one of: `delivery`, `payment_fee`, `tip`, `tax` or `other`. |
| `name`                          | string                                         | The name of the charge                                             |
| `ref` <Label type="optional" /> | string                                         | The ref that identifies the charge                                 |
| `price`                         | [Money](/api/general-concepts/#monetary-value) | The charge amount                                                  |

#### Example:

```json
[
  {
    "type": "delivery",
    "name": "Delivery < 15 km",
    "ref": "DEL",
    "price": "1.50 EUR"
  }
]
```

## 10. Order payments

If one or several payments are defined, the sum of the amounts of the payments should equal the order's `total`, otherwise the difference is stored in the order's `payment_discrepancy` field.

If order payments are omitted, the order should be considered as not paid.

#### Attributes:

| Name                             | Type                                           | Description                                                                                                          |
| -------------------------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                           | string                                         | Either `online`, `gift_card` or `cash`                                                                               |
| `name` <Label type="optional" /> | string                                         | The name of the payment method                                                                                       |
| `info` <Label type="optional" /> | object                                         | Additional info on the payment: transaction id, etc. The content is free and typically depends on the payment method |
| `ref` <Label type="optional" />  | string                                         | Identifies the payment method                                                                                        |
| `amount`                         | [Money](/api/general-concepts/#monetary-value) | Amount paid with this payment method                                                                                 |

#### Example:

```json
[
  {
    "type": "online",
    "name": "PayPal",
    "info": {
      "email": "john@doe.com"
    },
    "ref": "PP",
    "amount": "15.00 EUR"
  },
  {
    "type": "gift_card",
    "name": "Freebies4me",
    "info": {
      "card_id": "648664679312"
    },
    "ref": "FBFM",
    "amount": "4.50 EUR"
  }
]
```

## 11. Order loyalty operations

Add or remove points to a customer's loyalty card(s).

Each operation is linked to a loyalty card, uniquely identified by its name. If a card does not exist with this name, it is created automatically with an initial balance equal to 0.0

Each loyalty operation triggers the automatic recalculation of the loyalty card balance.

#### Attributes:

| Name                               | Type    | Description                                                                              |
| ---------------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `name`                             | string  | The loyalty card name                                                                    |
| `delta`                            | decimal | The number of points to add to the card balance. Use a negative number to remove points. |
| `reason` <Label type="optional" /> | string  | Additional information on the operation.                                                 |

#### Example:

```json
[
  {
    "name": "",
    "delta": -5,
    "reason": "Points used"
  },
  {
    "name": "",
    "delta": 1.5,
    "reason": "Points earned"
  }
]
```
