---
title: Order Management
position: 3
layout: documentation
meta:
  title:
  description:
---

## 1. Orders

### 1.1. Create Order

This method creates an order.

Almost all fields are optional. In fact the simplest order that can be created only has a `status`.

<CallSummaryTable
  endpoint="POST /locations/:location_id/orders"
  shortEndpoint="POST /location/orders (location only)"
  accessLevel="location, account"
/>

#### Parameters:

| Name                                                                  | Type                                                       | Description                                                                                                                                                                                                |
| --------------------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_ref` <Label type="optional" />                               | string                                                     | The client internal id for this order. It must be unique if defined. This field is only visible by the client and will typically be used to lookup an order.                                               |
| `status`                                                              | [OrderStatus](#order-status)                               | The order status.                                                                                                                                                                                          |
| `service_type` <Label type="optional" />                              | string                                                     | How the order is delivered/served to the customer. One of: `delivery`, `collection` or `eat_in`.                                                                                                           |
| `service_type_ref` <Label type="optional" />                          | string                                                     | A ref identifying the method of delivering/serving the order to the customer.                                                                                                                              |
| `expected_time` <Label type="optional" />                             | [Time](/developers/api/general-concepts/#dates-and-times)  | The time the customer is expecting to get his order.                                                                                                                                                       |
| `confirmed_time` <Label type="optional" />                            | [Time](/developers/api/general-concepts/#dates-and-times)  | The time the customer will receive his order.                                                                                                                                                              |
| `customer_notes` <Label type="optional" />                            | string                                                     | Information provided by the customer, eg: delivery notes, etc.                                                                                                                                             |
| `seller_notes` <Label type="optional" />                              | string                                                     | Information or message by the merchant, for example a note to notify the customer that a product has been switched with another.                                                                           |
| `coupon_codes` <Label type="optional" />                              | string[]                                                   | The coupon codes used in this order.                                                                                                                                                                       |
| `collection_code` <Label type="optional" />                           | string                                                     | An order reference shared with the customer to ease the processing and collection or delivery of an order. It does not have to be unique.                                                                  |
| `total` <Label type="optional" />                                     | [Money](/developers/api/general-concepts/#monetary-values) | The amount paid by the customer.                                                                                                                                                                           |
| `custom_fields` <Label type="optional" />                             | [CustomFields](/developers/api/extensions/#custom-fields)  | Additional data attached to the order.                                                                                                                                                                     |
| `items` <Label type="optional" />                                     | [OrderItem](#order-items)[]                                | The order items.                                                                                                                                                                                           |
| `loyalty_operations` <Label type="optional" />                        | [OrderLoyaltyOperation](#order-loyalty-operations)[]       | Add or remove points to the customer loyalty card(s). Can only be used for orders linked to a customer.                                                                                                    |
| `charges` <Label type="optional" />                                   | [OrderCharge](#order-charges)[]                            | The charges incurred on this order.                                                                                                                                                                        |
| `payments` <Label type="optional" />                                  | [OrderPayment](#order-payments)[]                          | The payment method(s) used.                                                                                                                                                                                |
| `discounts` <Label type="optional" />                                 | [OrderDiscount](#order-discounts)[]                        | The discounts applied.                                                                                                                                                                                     |
| `deals` <Label type="optional" />                                     | [OrderDeal](#order-deals)[]                                | The deals used in this order.                                                                                                                                                                              |
| `customer_id` <Label type="optional" />                               | string                                                     | The id of the customer who placed the order. Cannot be used together with `customer_list_id`, `customer_private_ref`, or `customer`. (\*)                                                                  |
| `customer_list_id` & `customer_private_ref` <Label type="optional" /> | string                                                     | The private ref and customer list of the customer who placed the order. Cannot be used together with `customer_id` or `customer`. (\*)                                                                     |
| `customer` <Label type="optional" />                                  | [Customer](#order-s-customer)                              | When neither of `customer_id`, `customer_list_id`, or `customer_private_ref` are passed, the order is a **guest order**. This object can be used to pass the customer details specific to this order. (\*) |

(\*) More information about these fields in the [Order's Customer](#order-s-customer) section.

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
      "quantity": "2",
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
      "quantity": "1",
      "deal_line": {
        "deal_key": "0",
        "label": "Dessert"
      }
    },
    {
      "product_name": "Coke",
      "sku_ref": "COK",
      "price": "1.00 EUR",
      "quantity": "1",
      "deal_line": {
        "deal_key": "0",
        "label": "Drink"
      }
    },
    {
      "product_name": "Wings BBQ",
      "sku_ref": "WBBQ",
      "price": "4.00 EUR",
      "quantity": "1",
      "points_used": "5.0"
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
      "name": "Delivery < 15 km",
      "ref": "DEL",
      "price": "1.50 EUR"
    }
  ],
  "payments": [
    {
      "name": "PayPal",
      "ref": "PP",
      "amount": "23.50 EUR",
      "info": {
        "email": "john@doe.com"
      }
    }
  ],
  "loyalty_operations": [
    {
      "name": null,
      "ref": "LOY",
      "delta": "-5",
      "reason": "Points used on order",
      "new_balance": "1.5"
    }
  ],
  "total": "23.50 EUR"
}
```

HubRise calculates the order total. If total is passed but not matching HubRise's calculation, the difference is stored in the `total_discrepancy` field.

### 1.2. Retrieve Order

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
  "private_ref": "3345",
  "status": "new",
  "items": [
    {
      "product_name": "Margarita",
      "sku_name": "Small",
      "sku_ref": "MAR-S",
      "price": "7.80 EUR",
      "quantity": "2",
      "subtotal": "15.60 EUR"
    }
  ],
  "customer": {
    "id": "s9Egdk",
    "private_ref": "charles@dummy-mail.org",
    "customer_list_id": "ag8u4",
    "first_name": "Charles",
    ...
  }
}
```

The `customer` object represents the state of the customer at the time of the order creation. It is not present if the order was created without a customer attached.

The `id`, `private_ref` and `customer_list_id` fields of this object are returned only if the customer has not been deleted since the order was created.

### 1.3. List Orders

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

| Name            | Type                                                      | Description                                                                                                                                      |
| --------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `private_ref`   | string                                                    | filter results by `private_ref`, for instance: `private_ref=13456`.                                                                              |
| `status`        | string                                                    | filter results by `status`, for instance: `status=accepted`.                                                                                     |
| `created_by`    | string                                                    | filter results by client name. For instance, `created_by=shopify` only returns the orders placed through this client.                            |
| `after, before` | [Time](/developers/api/general-concepts/#dates-and-times) | `after` is inclusive, `before` is exclusive. For instance, `after=2020-07-01T00:00&before=2020-07-02T00:00` returns orders placed on 2020-07-01. |
| `customer_id`   | string                                                    | returns the orders placed by a customer, for instance: `customer_id=ve343`.                                                                      |

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

### 1.4. Update Order

Updates an order. The following fields can be updated:

- `status`
- `confirmed_time`
- `seller_notes`
- `collection_code`
- `private_ref`
- `custom_fields`

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

## 2. Order's Customer

When you create an order, you can attach a customer to it. You would usually do this, unless no customer identifier is available. An order with no attached customer is called a **guest order**.

If your customers are uniquely identified, we recommend attaching customers to your orders. Not only does this allow the tracking of orders placed by a single customer, it is also a requirement for some POS systems to successfully process orders.

Guest orders can however be useful in a limited number of cases, such as:

- Orders placed on a self ordering kiosk, where no customer identification is usually available.
- Orders placed on an online platform not willing to share unique identifiers for their customers.

### Order with an attached customer

There are two ways to create an order with an attached customer:

- By passing `customer_id` in the order creation request as in the example below. If a customer with this id exists, it is attached to the order, otherwise an error is returned.

```json
{
  "status": "new",
  "customer_id": "ve343",
  "items": [...]
}
```

- By passing `customer_list_id` and `customer_private_ref` simultaneously. If a customer with this private ref exists in this customer list, it is attached to the order, otherwise an error is returned.

```json
{
  "status": "new",
  "customer_list_id": "ag8u4",
  "customer_private_ref": "charles@dummy-mail.org",
  "items": [...]
}
```

When you retrieve an order using a GET request, you will find the customer fields encoded in a `customer` object . The presence of an `id` field with a non null value in this object indicates that the order is attached to this customer. Conversely, a null value indicates a guest order.

Note that the customer values _at the time of the order creation_ are returned in the `customer` object when you retrieve the order. The only exception is the `custom_fields` customer field, whose value _at the time of the order retrieval_ is returned.

### Order with no attached customer (guest order)

To create a guest order, simply omit the `customer_id`, `customer_list_id`, and `customer_private_ref` fields in the order creation request. Doing so "unlocks" a `customer` object, which you can optionally use to pass customer data relative to this order, as in the following `POST /location/orders` request:

```json
{
  "status": "new",
  "customer": {
    "first_name": "John",
    "last_name": "Doe"
  },
  "items": [...]
}
```

The following fields are available in the `customer` object:

- `email`
- `first_name`
- `last_name`
- `gender`
- `birth_date`
- `company_name`
- `phone`
- `address_1`
- `address_2`
- `postal_code`
- `city`
- `state`
- `country`
- `latitude`
- `longitude`
- `delivery_notes`
- `sms_marketing`
- `email_marketing`

When you retrieve a guest order, the customer fields passed at creation time are returned in the `customer` object, along with a few fields computed by HubRise.

## 3. Order Status

The status of an order. Used in the order's `status` field.

Here are the possible "normal" values, and their meaning:

| Name                  | Description                                                                                                                    |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `new`                 | Order placed but not received yet in the EPOS. Default status for a new order placed outside of the EPOS (eg an online order). |
| `received`            | Order which was previously new, but it has later been received by the POS.                                                     |
| `accepted`            | Order accepted by the store. Default status for an order created from within the POS.                                          |
| `in_preparation`      | Order is being prepared.                                                                                                       |
| `awaiting_shipment`   | Order is ready to be shipped.                                                                                                  |
| `awaiting_collection` | Order is ready to be collected by the customer.                                                                                |
| `in_delivery`         | Order has been sent out for delivery.                                                                                          |
| `completed`           | Order successfully delivered to the customer.                                                                                  |

These additional statuses can be used in the event of an anomaly:

| Name              | Description                                                                       |
| ----------------- | --------------------------------------------------------------------------------- |
| `rejected`        | Order could not be transmitted to the store, generally because of a system error. |
| `cancelled`       | Order has been cancelled by either the customer or the store.                     |
| `delivery_failed` | Order could not be delivered.                                                     |

Orders do not have to go through all steps. The sequence actually depends on the use case. Let's consider two sample scenarios and a possible workflow for each:

#### Delivery order placed online:

1. `new` (order placed online)
1. `received` (received in the POS)
1. `accepted` (accepted by a store operator)
1. `shipped`
1. `completed`

#### Retail order created in the POS:

1. `accepted` (order placed in the POS)
1. `completed`

## 4. Order Items

| Name                                       | Type                                                        | Description                                                                                                                                                                                 |
| ------------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `product_name`                             | string                                                      | The product name.                                                                                                                                                                           |
| `sku_name` <Label type="optional" />       | string                                                      | The sku name. Typically the product size or color.                                                                                                                                          |
| `sku_ref` <Label type="optional" />        | string                                                      | The ref of the sku.                                                                                                                                                                         |
| `price`                                    | [Money](/developers/api/general-concepts/#monetary-values)  | The unit price of the sku, without the cost of options.                                                                                                                                     |
| `quantity`                                 | [decimal](/developers/api/general-concepts/#decimal-values) | The quantity of items ordered.                                                                                                                                                              |
| `subtotal` <Label type="optional" />       | [Money](/developers/api/general-concepts/#monetary-values)  | Calculated by HubRise. It is the sum of the price of the item and its options, multiplied by the quantity.                                                                                  |
| `tax_rate` <Label type="optional" />       | [decimal](/developers/api/general-concepts/#decimal-values) | The tax rate applied to the item. See [Tax Rates](#tax-rates).                                                                                                                              |
| `customer_notes` <Label type="optional" /> | string                                                      | Information provided by the customer about the preparation or delivery of the item.                                                                                                         |
| `points_earned` <Label type="optional" />  | [decimal](/developers/api/general-concepts/#decimal-values) | Loyalty points earned by the customer. This field is not linked to a particular loyalty card: a loyalty operation must be included in the order to effectively add/remove points to a card. |
| `points_used` <Label type="optional" />    | [decimal](/developers/api/general-concepts/#decimal-values) | Loyalty points used by the customer. Same remark as above.                                                                                                                                  |
| `options` <Label type="optional" />        | [OrderOption](#order-options)[]                             | Item customization.                                                                                                                                                                         |

#### Example:

```json
{
  "product_name": "Margarita",
  "sku_name": "Small",
  "sku_ref": "MAR-SM",
  "price": "9.00 EUR",
  "quantity": "2",
  "tax_rate": "20.0",
  "customer_notes": "Well cooked",
  "points_earned": "1.5",
  "points_used": null,
  "options": [
    {
      "option_list_name": "Sauce",
      "name": "Barbecue",
      "ref": "BBQ",
      "price": "1.00 EUR"
    }
  ]
}
```

## 5. Order Items in a Deal

Order items which are part of a deal include a `deal_line` field. This field is an object with the following fields:

| Name                                       | Type    | Description                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deal_key`                                 | string  | A key in the order's `deals` object.                                                                                                                                                                                                                                                                          |
| `label` <Label type="optional" />          | string  | Content of the deal line, for instance "Drink".                                                                                                                                                                                                                                                               |
| `pricing_effect` <Label type="optional" /> | string  | One of: `unchanged`, `fixed_price`, `price_off`, `percentage_off`.                                                                                                                                                                                                                                            |
| `pricing_value` <Label type="optional" />  | depends | The presence and value of this field depends on `pricing_effect`. It is a [Money](/developers/api/general-concepts/#monetary-values) for `fixed_price` and `price_off`, a [decimal](/developers/api/general-concepts/#decimal-values) between "0" and "100" for `percentage_off`, and `null` for `unchanged`. |

`deal_key` associates an order item to a particular order deal. The particular value of a key has no significance and HubRise renumbers the keys to: "0", "1", … When an order is created, every `deal_key` must have a corresponding entry in the order's `deals` field or the request will fail.

`pricing_effect` and `pricing_value` can be useful in some applications but can generally be omitted. HubRise does not make any computation with these fields.

## 6. Order Options

| Name                                | Type                                                       | Description                                                                                   |
| ----------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `option_list_name`                  | string                                                     | The name of the list the option belongs to, eg. "Toppings", "Sauce", etc.                     |
| `name`                              | string                                                     | The option name.                                                                              |
| `ref` <Label type="optional" />     | string                                                     | The optional ref of the option.                                                               |
| `price` <Label type="optional" />   | [Money](/developers/api/general-concepts/#monetary-values) | The unit price of the option. If omitted the option is free.                                  |
| `removed` <Label type="optional" /> | boolean                                                    | When this flag is true, the option is removed (for instance, a removed ingredient in a dish). |

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

## 7. Order Deals

An order deal associates an order item's `deal_key` to a particular deal.

#### Attributes:

| Name                            | Type   | Description                       |
| ------------------------------- | ------ | --------------------------------- |
| `name`                          | string | The name of the deal.             |
| `ref` <Label type="optional" /> | string | The ref that identifies the deal. |

#### Example:

```json
{
  "0": {
    "name": "Buy a dessert, get a drink for 1€",
    "ref": "FREEDRINK"
  }
}
```

## 8. Order Discounts

An order discount is a discount applied to the whole order, as opposed to deals which apply to a set of order items.

#### Attributes:

| Name                            | Type                                                       | Description                           |
| ------------------------------- | ---------------------------------------------------------- | ------------------------------------- |
| `name`                          | string                                                     | The name of the discount.             |
| `ref` <Label type="optional" /> | string                                                     | The ref that identifies the discount. |
| `price_off`                     | [Money](/developers/api/general-concepts/#monetary-values) | The discount value.                   |

**Note:** the `pricing_effect` and `pricing_value` fields are deprecated. They are still present in the API output for backwards compatibility, but their values should be ignored.

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

## 9. Order Charges

Order charges increase the price paid by the customer.

#### Attributes:

| Name                                 | Type                                                        | Description                                                        |
| ------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------ |
| `name`                               | string                                                      | The name of the charge.                                            |
| `ref` <Label type="optional" />      | string                                                      | The ref that identifies the charge.                                |
| `price`                              | [Money](/developers/api/general-concepts/#monetary-values)  | The charge amount.                                                 |
| `tax_rate` <Label type="optional" /> | [decimal](/developers/api/general-concepts/#decimal-values) | The tax rate applied to the charge. See [Tax Rates](#tax-rates).   |

**Note:** the `charge_type`, `charge_price` and `charge_ref` fields are deprecated. They are present in the API for backwards compatibility, but their values should be ignored.

**Note:** the `type` field is deprecated and should be ignored in new integrations.

#### Example:

```json
[
  {
    "name": "Delivery < 15 km",
    "ref": "DEL",
    "price": "1.50 EUR"
  }
]
```

## 10. Order Payments

If one or several payments are defined, the sum of the payment amounts should equal the order's `total`. Otherwise, the difference is stored in the order's `payment_discrepancy` field.

If payments are omitted, the order should be considered as unpaid.

#### Attributes:

| Name                             | Type                                                       | Description                                                                                                           |
| -------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `name` <Label type="optional" /> | string                                                     | The name of the payment method.                                                                                       |
| `ref` <Label type="optional" />  | string                                                     | Identifies the payment method.                                                                                        |
| `amount`                         | [Money](/developers/api/general-concepts/#monetary-values) | Amount paid with this payment method.                                                                                 |
| `info` <Label type="optional" /> | object                                                     | Additional info on the payment: transaction id, etc. The content is free and typically depends on the payment method. |

**Note:** the `type` field is deprecated and should be ignored in new integrations.

#### Example:

```json
[
  {
    "name": "PayPal",
    "ref": "PP",
    "amount": "15.00 EUR",
    "info": {
      "email": "john@doe.com"
    }
  },
  {
    "name": "Freebies4me",
    "ref": "FBFM",
    "amount": "4.50 EUR",
    "info": {
      "card_id": "648664679312"
    }
  }
]
```

## 11. Order Loyalty Operations

Add or remove points to a customer's loyalty card(s).

Each operation is linked to a loyalty card, uniquely identified by its name. If a card does not exist with this name, it is created automatically with an initial balance equal to 0.0

Each loyalty operation triggers the automatic recalculation of the loyalty card balance.

#### Attributes:

| Name                               | Type                                                        | Description                                                                              |
| ---------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ref` <Label type="optional" />    | string                                                      | The loyalty card unique ref. Defaults to `null` if omitted.                              |
| `delta`                            | [decimal](/developers/api/general-concepts/#decimal-values) | The number of points to add to the card balance. Use a negative number to remove points. |
| `reason` <Label type="optional" /> | string                                                      | Additional information on the operation.                                                 |

#### Example:

```json
[
  {
    "ref": "LOY",
    "delta": "-5",
    "reason": "Points used on order"
  },
  {
    "ref": "LOY",
    "delta": "1.5",
    "reason": "Points earned on order"
  }
]
```

## 12. Tax Rates

A `tax_rate` can be specified for each order item and order charge.

Tax rate are decimal numbers, representing a percentage of the price. For example, `tax_rate=15.5` means that the tax is 15.5% of the price of the item or charge.

Whether prices are tax-inclusive or exclusive is a decision taken at the account level. The chosen convention must then be enforced by all clients connected to the account. As a general rule, you can assume that prices in HubRise are **tax-inclusive** for accounts situated in markets where consumer prices are tax-inclusive, for example European countries. On the contrary, prices can generally be considered as **tax-exclusive** in the other markets, for example the U.S.

HubRise does not perform any computation with `tax_rate`, and does not require this field to be present. If needed, use a default value for items with unspecified tax rates.
