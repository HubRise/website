---
title: Orders
path_override: orders
position: 4
layout: documentation
meta:
  title: Orders | API | HubRise
  description:
---

## 1. Orders

### 1.1. Create Order {#create-order}

This method creates an order.

Almost all the fields are optional. In fact the simplest order that can be created only has a `status`.

<CallSummaryTable
  endpoint="POST /locations/:location_id/orders"
  shortEndpoint="POST /location/orders (location only)"
  accessLevel="location, account"
/>

##### Parameters:

| Name                                                                  | Type                                                     | Description                                                                                                                                                    |
| --------------------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref` <Label type="optional" />                                       | string                                                   | Reference of the order on the app creating the order. Unicity is recommended but not enforced.                                                                 |
| `private_ref` <Label type="optional" />                               | string                                                   | A private unique reference for the order. Used for order lookups if defined. See [Private Refs](/developers/api/general-concepts#private-refs).                |
| `status`                                                              | [OrderStatus](#status)                                   | Current status of the order.                                                                                                                                   |
| `service_type` <Label type="optional" />                              | string                                                   | Method of delivery/serving to the customer. Can be: `delivery`, `collection`, or `eat_in`.                                                                     |
| `service_type_ref` <Label type="optional" />                          | string                                                   | Identifier for the order type. Can be used to identify the channel, brand, and delivery method.                                                                |
| `expected_time` <Label type="optional" />                             | [Time](/developers/api/general-concepts#dates-and-times) | Time the customer expects to receive the order.                                                                                                                |
| `confirmed_time` <Label type="optional" />                            | [Time](/developers/api/general-concepts#dates-and-times) | Confirmed time for the customer to receive the order.                                                                                                          |
| `customer_notes` <Label type="optional" />                            | string                                                   | Customer-provided instructions, such as allergies or special requests.                                                                                         |
| `seller_notes` <Label type="optional" />                              | string                                                   | Merchant-provided information, such as product substitution notices.                                                                                           |
| `collection_code` <Label type="optional" />                           | string                                                   | A short, customer-shared, order identifier for simplified collection or delivery. Does not have to be unique.                                                  |
| `coupon_codes` <Label type="optional" />                              | string[]                                                 | Coupon codes applied to the order.                                                                                                                             |
| `items` <Label type="optional" />                                     | [OrderItem](#items)[]                                    | Items included in the order.                                                                                                                                   |
| `deals` <Label type="optional" />                                     | [OrderDealMap](#deals)                                   | Deals used in the order.                                                                                                                                       |
| `discounts` <Label type="optional" />                                 | [OrderDiscount](#discounts)[]                            | Discounts applied to the order.                                                                                                                                |
| `charges` <Label type="optional" />                                   | [OrderCharge](#charges)[]                                | Additional charges incurred on the order.                                                                                                                      |
| `payments` <Label type="optional" />                                  | [OrderPayment](#payments)[]                              | Payment methods used for the order.                                                                                                                            |
| `customer_id` <Label type="optional" />                               | string                                                   | ID of the customer placing the order. Cannot be used with `customer_list_id`, `customer_private_ref`, or `customer`. See [Order's Customer](#customer).        |
| `customer_list_id` & `customer_private_ref` <Label type="optional" /> | string                                                   | Customer list and private reference for the customer placing the order. Cannot be used with `customer_id` or `customer`. See [Order's Customer](#customer).    |
| `customer` <Label type="optional" />                                  | [Customer](#customer)                                    | Details specific to a guest order, used when `customer_id`, `customer_list_id`, or `customer_private_ref` are not provided. See [Order's Customer](#customer). |
| `loyalty_operations` <Label type="optional" />                        | [OrderLoyaltyOperation](#loyalty-operations)[]           | Operations to add or remove points from customer loyalty cards. Only for customer-linked orders.                                                               |
| `custom_fields` <Label type="optional" />                             | [CustomFields](/developers/api/extensions#custom-fields) | Additional data attached to the order.                                                                                                                         |

<details>

<summary>Example request</summary>

`POST /locations/3r4s3-1/orders`

```json
{
  "ref": "17654321",
  "status": "new",
  "service_type": "delivery",
  "service_type_ref": "WEBSITE-DEL",
  "expected_time": "2021-06-24T11:30:00+02:00",
  "items": [
    {
      "product_name": "Margarita",
      "sku_name": "Small",
      "sku_ref": "MAR-SM",
      "price": "9.00 EUR",
      "quantity": "2",
      "options": [
        {
          "option_list_name": "Sauce",
          "name": "Barbecue",
          "ref": "BBQ",
          "price": "1.00 EUR",
          "quantity": 1
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
  "customer_id": "ve343",
  "loyalty_operations": [
    {
      "ref": "LOY",
      "delta": "-5",
      "reason": "Points used on order"
    }
  ]
}
```

</details>

### 1.2. Retrieve Order

Returns an order resource.

<CallSummaryTable
  endpoint="GET /locations/:location_id/orders/:order_id"
  shortEndpoint="GET /location/orders/:order_id (location only)"
  accessLevel="location, account"
/>

All the fields of an order creation request are returned, plus a few more:

| Name          | Type                                                      | Description                                                                  |
| ------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------- |
| ...           |                                                           | See the [order creation fields](#create-order).                              |
| `id`          | string                                                    | Unique id of the order, generated by HubRise.                                |
| `location_id` | string                                                    | The id of the location where the order was created.                          |
| `created_at`  | [Time](/developers/api/general-concepts#dates-and-times)  | Order creation time.                                                         |
| `created_by`  | string                                                    | Name of the API client that created the order.                               |
| `total`       | [Money](/developers/api/general-concepts#monetary-values) | Order total amount. Calculated by HubRise from items, charges and discounts. |
| `customer`    | [Customer](#customer)                                     | Customer details at the time of the order creation.                          |
| `delivery`    | [Delivery](#delivery)                                     | An optional delivery attached to the order.                                  |

**Note:** `total_discrepancy` and `payment_discrepancy` fields are also returned, but these fields are deprecated and their values should not be used.

In addition, each `item`, `charge`, `payment` and `discount` is returned with a HubRise generated `id`, which uniquely identifies the resource and can be used to delete it. See [Update Order](#update-order).

<details>

<summary>Example request</summary>

`GET /locations/3r4s3-1/orders/5dpm9`

##### Response:

```json
{
  "id": "5dpm9",
  "location_id": "3r4s3-1",
  "ref": "17654321",
  "private_ref": null,
  "status": "in_delivery",
  "service_type": "delivery",
  "service_type_ref": null,
  "created_at": "2021-06-24T17:07:53+02:00",
  "created_by": "MyClient",
  "expected_time": "2021-06-24T19:07:52+02:00",
  "confirmed_time": null,
  "customer_notes": null,
  "seller_notes": null,
  "collection_code": null,
  "coupon_codes": [],
  "total": "18.90 EUR",
  "total_discrepancy": null,
  "payment_discrepancy": "0.00 EUR",
  "items": [
    {
      "id": "w6nd4",
      "private_ref": null,
      "product_name": "Carbonara",
      "sku_name": "Large",
      "sku_ref": "3",
      "price": "11.90 EUR",
      "quantity": "1.0",
      "subtotal": "11.90 EUR",
      "tax_rate": null,
      "customer_notes": null,
      "points_earned": null,
      "points_used": null,
      "options": [],
      "deleted": false,
      "deal_line": {
        "deal_key": "0",
        "position": null,
        "label": null,
        "pricing_effect": null,
        "pricing_value": null
      }
    },
    {
      "id": "zvme8",
      "private_ref": null,
      "product_name": "Basil and Pesto",
      "sku_name": null,
      "sku_ref": "17",
      "price": "3.00 EUR",
      "quantity": "2.0",
      "subtotal": "7.00 EUR",
      "tax_rate": null,
      "customer_notes": null,
      "points_earned": null,
      "points_used": null,
      "options": [
        {
          "option_list_name": "Sauce",
          "name": "BBQ",
          "ref": "31",
          "price": "0.50 EUR",
          "quantity": 1
        }
      ],
      "deleted": false
    }
  ],
  "deals": {
    "0": {
      "name": "30% off on pasta",
      "ref": "10"
    }
  },
  "discounts": [
    {
      "id": "wv281",
      "private_ref": null,
      "name": "2€ off",
      "ref": "45",
      "pricing_effect": "price_off",
      "pricing_value": "2.00 EUR",
      "price_off": "2.00 EUR",
      "deleted": false
    }
  ],
  "charges": [
    {
      "id": "wk843",
      "private_ref": null,
      "type": "other",
      "name": "Courier Service",
      "ref": "DEL",
      "price": "2.00 EUR",
      "tax_rate": null,
      "charge_type": "other",
      "charge_ref": "DEL",
      "charge_price": "2.00 EUR",
      "deleted": false
    }
  ],
  "payments": [
    {
      "id": "w2qq8",
      "private_ref": null,
      "type": "online",
      "name": "Payment by cash",
      "ref": "CSH",
      "amount": "18.90 EUR",
      "info": null,
      "deleted": false
    }
  ],
  "customer": {
    "id": "wbq93",
    "customer_list_id": "1dmy1",
    "anonymised": false,
    "private_ref": "49751",
    "email": "charles.moore@dummy-mail.org",
    "first_name": "Charles",
    "last_name": "Moore",
    "gender": "male",
    "birth_date": "1999-01-01",
    "company_name": "HubRise",
    "phone": "+33123456789",
    "phone_access_code": "8888",
    "address_1": "1 avenue des Champs Elysées",
    "address_2": null,
    "postal_code": "75001",
    "city": "Paris",
    "state": null,
    "country": "FR",
    "latitude": "48.858951",
    "longitude": "2.277021",
    "delivery_notes": null,
    "sms_marketing": false,
    "email_marketing": false,
    "nb_orders": 8,
    "order_total": "151.20 EUR",
    "first_order_date": "2021-06-22T11:04:27+02:00",
    "last_order_date": "2021-06-24T17:07:53+02:00",
    "loyalty_cards": [],
    "custom_fields": {}
  },
  "delivery": {
    "carrier": "Uber Direct",
    "carrier_ref": "uber",
    "ref": "1Z12345E0291980793",
    "status": "pickup_approaching",
    "fee": "4.00 EUR",
    "estimated_pickup_at": "2021-06-24T19:01:00+02:00",
    "estimated_dropoff_at": "2021-06-24T19:07:00+02:00",
    "tracking_url": "https://uber.com/track/1Z12345E0291980793",
    "driver_name": "John",
    "driver_phone": "+33612345678",
    "driver_phone_access_code": "1234",
    "driver_latitude": "48.856614",
    "driver_longitude": "2.3522219"
  },
  "loyalty_operations": [],
  "custom_fields": {}
}
```

</details>

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

##### Parameters:

| Name            | Type                                                     | Description                                                                                                                                                                                         |
| --------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_ref`   | string                                                   | Filters orders by `private_ref`, for instance: `private_ref=13456`.                                                                                                                                 |
| `status`        | string                                                   | Filters orders by `status`, for instance: `status=accepted`.                                                                                                                                        |
| `created_by`    | string                                                   | Filters orders by client name. For instance, `created_by=shopify` only returns the orders placed through this client.                                                                               |
| `after, before` | [Time](/developers/api/general-concepts#dates-and-times) | Filters orders by creation time. `after` is inclusive, `before` is exclusive. For instance, `after=2020-07-01T00:00:00+02:00&before=2020-07-02T00:00:00+02:00` returns orders placed on 2020-07-01. |
| `customer_id`   | string                                                   | Returns the orders placed by a customer, for instance: `customer_id=ve343`.                                                                                                                         |

<details>

<summary>Example request</summary>

`GET /locations/3r4s3-1/orders?customer_id=wbq93`

##### Response:

```json
[
 {
   "id": "5dpm9",
   "location_id": "3r4s3-1",
   "private_ref": "3345",
   "status": "new",
   "service_type": "collection",
   "service_type_ref": null,
   "created_at": "2021-06-24T17:07:53+02:00",
   "created_by": "MyClient",
   "expected_time": "2021-06-24T19:07:52+02:00",
   "confirmed_time": null,
   "items": [
     ...
   ],
   ...
 },
 ...
]
```

</details>

### 1.4. Update Order {#update-order}

Updates an order.

<CallSummaryTable
  endpoint="PATCH /locations/:location_id/orders/:order_id"
  shortEndpoint="PATCH /location/orders/:order_id (location only)"
  accessLevel="location, account"
/>

The following fields can be updated by sending their new value:

- `status`
- `confirmed_time`
- `seller_notes`
- `collection_code`
- `private_ref`
- `custom_fields`

You can also delete or add elements to the following collections, and set their private ref:

- `items`
- `discounts`
- `charges`
- `payments`

<details>

<summary>Example request</summary>

This request changes the order status to `accepted`, deletes an item, and adds a payment.

`PATCH /locations/3r4s3-1/orders/5dpm9`

```json
{
  "status": "accepted",
  "items": [
    {
      "id": "xe834v",
      "deleted": true
    }
  ],
  "payments": [
    {
      "name": "Cash",
      "ref": "CSH",
      "amount": "5.90 EUR"
    }
  ]
}
```

</details>

Further in this section, **element** will interchangeably refer to an item, a charge, a payment, or a discount.

### Delete elements

To delete an element, pass the `id` field along with `"deleted": true`. No other fields should be included.

Deleted elements are still present in the order representation, but they are irreversibly marked as deleted. Their `deleted` field cannot be reverted to `false`.

<details>

<summary>Example request</summary>

`PATCH /locations/3r4s3-1/orders/5dpm9`

```json
{
  "items": [
    {
      "id": "xe834v",
      "deleted": true
    }
  ]
}
```

##### Response:

```json
{
  "id": "5dpm9",
  "location_id": "3r4s3-1",
  "private_ref": "3345",
  "status": "new",
  ...
  "items": [
    {
      "id": "xe834v",
      "private_ref": null,
      "product_name": "Carbonara",
      "sku_name": null,
      "sku_ref": "81502",
      "price": "11.90 EUR",
      "quantity": "1.0",
      "subtotal": "11.90 EUR",
      "tax_rate": null,
      "customer_notes": null,
      "points_earned": null,
      "points_used": null,
      "options": [],
      "deleted": true
    }
  ],
  ...
}
```

</details>

### Add elements

To add elements to an existing order, simply include their JSON representation in the request.

Note that it is not possible to modify an element. Instead, you should delete the element and add a new one.

<details>

<summary>Example request</summary>

This request adds two payments to the order.

`PATCH /locations/3r4s3-1/orders/5dpm9`

```json
{
  "payments": [
    {
      "name": "Cash",
      "ref": "CSH",
      "amount": "5.90 EUR"
    },
    {
      "name": "Online",
      "ref": "OL",
      "amount": "11.20 EUR"
    }
  ]
}
```

##### Response:

```json
{
  "id": "5dpm9",
  "location_id": "3r4s3-1",
  "private_ref": "3345",
  "status": "new",
  ...
  "payments": [
    {
      "id": "zq33y",
      "private_ref": null,
      "type": "online",
      "name": "Cash",
      "ref": "CSH",
      "amount": "5.90 EUR",
      "info": null,
      "deleted": false
    },
    {
      "id": "1999d",
      "private_ref": null,
      "type": "online",
      "name": "Online",
      "ref": "OL",
      "amount": "11.20 EUR",
      "info": null,
      "deleted": false
    }
  ],
  ...
}
```

</details>

### Set private refs on elements

It is possible to set a private ref on each element. To do so, pass the `id` and `private_ref` fields. No other fields should be included.

Private refs are typically used to map HubRise objects with the client's internal objects. See [Private Refs](/developers/api/general-concepts#private-refs) for more information.

<details>

<summary>Example request</summary>

This request sets a private ref on an item.

`PATCH /locations/3r4s3-1/orders/5dpm9`

```json
{
  "items": [
    {
      "id": "xe834v",
      "private_ref": "96"
    }
  ]
}
```

##### Response:

```json
{
  "id": "5dpm9",
  "location_id": "3r4s3-1",
  "private_ref": "3345",
  "status": "new",
  ...
  "items": [
    {
      "id": "xe834v",
      "private_ref": "96",
      "product_name": "Carbonara",
      ...
    }
  ],
  ...
}
```

</details>

## 2. Order's Customer {#customer}

When you create an order, you can attach a customer to it. You usually want to do this, unless no customer identifier is available. An order with no attached customer is called a **guest order**.

When customers are uniquely identified, we recommend attaching customers to orders. This not only allows tracking of orders placed by a single customer, but it is also a requirement for some POS systems to successfully process orders.

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

When you retrieve an order using a GET request, you will find the customer fields encoded in a `customer` object. The `customer` object contains the customer values _at the time of the order creation_.

The presence of a `id` field with a non-null value in the `order.customer` object indicates that the order is attached to this customer. Conversely, a null value indicates a guest order.

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
- `phone_access_code`
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

## 3. Order Status {#status}

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
1. `in_delivery`
1. `completed`

#### Retail order created in the POS:

1. `accepted` (order placed in the POS)
1. `completed`

## 4. Order Items {#items}

| Name                                       | Type                                                       | Description                                                                                                                                                                                 |
| ------------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_ref` <Label type="optional" />    | string                                                     | An optional private reference for the item. See [Private Refs](/developers/api/general-concepts#private-refs).                                                                              |
| `product_name`                             | string                                                     | The product name.                                                                                                                                                                           |
| `sku_name` <Label type="optional" />       | string                                                     | The sku name. Typically the product size or color.                                                                                                                                          |
| `sku_ref` <Label type="optional" />        | string                                                     | The ref of the sku.                                                                                                                                                                         |
| `price`                                    | [Money](/developers/api/general-concepts#monetary-values)  | The unit price of the sku, without the cost of options.                                                                                                                                     |
| `quantity`                                 | [decimal](/developers/api/general-concepts#decimal-values) | The quantity of items ordered.                                                                                                                                                              |
| `subtotal` <Label type="optional" />       | [Money](/developers/api/general-concepts#monetary-values)  | Calculated by HubRise. It is the sum of the price of the item and its options, multiplied by the quantity.                                                                                  |
| `tax_rate` <Label type="optional" />       | [decimal](/developers/api/general-concepts#decimal-values) | The tax rate applied to the item. See [Tax Rates](#tax-rates).                                                                                                                              |
| `customer_notes` <Label type="optional" /> | string                                                     | Information provided by the customer about the preparation of the item.                                                                                                                     |
| `points_earned` <Label type="optional" />  | [decimal](/developers/api/general-concepts#decimal-values) | Loyalty points earned by the customer. This field is not linked to a particular loyalty card: a loyalty operation must be included in the order to effectively add/remove points to a card. |
| `points_used` <Label type="optional" />    | [decimal](/developers/api/general-concepts#decimal-values) | Loyalty points used by the customer. Same remark as above.                                                                                                                                  |
| `options` <Label type="optional" />        | [OrderOption](#options)[]                                  | Item customization.                                                                                                                                                                         |
| `deleted` <Label type="optional" />        | boolean                                                    | `false` by default. Setting this field to `true` marks the resource as irreversibly deleted.                                                                                                |

##### Example:

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
      "price": "1.00 EUR",
      "quantity": 1
    }
  ]
}
```

## 5. Order Items in a Deal {#items-in-deal}

Order items which are part of a deal include a `deal_line` field. This field is an object with the following fields:

| Name                                       | Type    | Description                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `deal_key`                                 | string  | A key in the order's `deals` object.                                                                                                                                                                                                                                                                        |
| `label` <Label type="optional" />          | string  | Content of the deal line, for instance "Drink".                                                                                                                                                                                                                                                             |
| `pricing_effect` <Label type="optional" /> | string  | One of: `unchanged`, `fixed_price`, `price_off`, `percentage_off`.                                                                                                                                                                                                                                          |
| `pricing_value` <Label type="optional" />  | depends | The presence and value of this field depends on `pricing_effect`. It is a [Money](/developers/api/general-concepts#monetary-values) for `fixed_price` and `price_off`, a [decimal](/developers/api/general-concepts#decimal-values) between "0" and "100" for `percentage_off`, and `null` for `unchanged`. |

`deal_key` associates an order item to a particular order deal. The particular value of a key has no significance and HubRise renumbers the keys to: "0", "1", … When an order is created, every `deal_key` must have a corresponding entry in the order's `deals` field or the request will fail.

`pricing_effect` and `pricing_value` can be useful in some applications but can generally be omitted. HubRise does not make any computation with these fields.

All the other fields of an order item are the same as in [Order Items](#items). For example, an order item in a deal can have options, as in the example below.

##### Example:

```json
{
  "product_name": "Margarita",
  "price": "9.00 EUR",
  "quantity": "1",
  "options": [
    {
      "option_list_name": "Sauce",
      "name": "Barbecue",
      "price": "1.00 EUR"
    }
  ],
  "deal_line": {
    "deal_key": "0",
    "label": "Pizza"
  }
}
```

## 6. Order Options {#options}

| Name                                 | Type                                                      | Description                                                                                   |
| ------------------------------------ | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `option_list_name`                   | string                                                    | The name of the list the option belongs to, eg. "Toppings", "Sauce", etc.                     |
| `name`                               | string                                                    | The option name.                                                                              |
| `ref` <Label type="optional" />      | string                                                    | The optional ref of the option.                                                               |
| `price` <Label type="optional" />    | [Money](/developers/api/general-concepts#monetary-values) | The unit price of the option. If omitted the option is free.                                  |
| `quantity` <Label type="optional" /> | integer                                                   | The number of selections for this option, relative to a single item unit. Default: `1`.       |
| `removed` <Label type="optional" />  | boolean                                                   | When this flag is true, the option is removed (for instance, a removed ingredient in a dish). |

##### Example:

```json
{
  "option_list_name": "Sauce",
  "name": "Barbecue",
  "ref": "BBQ",
  "price": "1.00 EUR",
  "quantity": 1
}
```

A removed option can define a `price`. In this case, it's the price charged to the customer to remove the option.

## 7. Order Deal Map {#deals}

An order deal map associates order items' `deal_keys` with their corresponding deals names and refs.

##### Attributes:

| Name                            | Type   | Description                       |
| ------------------------------- | ------ | --------------------------------- |
| `name`                          | string | The name of the deal.             |
| `ref` <Label type="optional" /> | string | The ref that identifies the deal. |

##### Example:

```json
{
  "0": {
    "name": "Buy a dessert, get a drink for 1€",
    "ref": "FREEDRINK"
  }
}
```

## 8. Order Discounts {#discounts}

An order discount is a discount applied to the whole order, as opposed to deals which apply to a set of order items.

##### Attributes:

| Name                                    | Type                                                      | Description                                                                                                        |
| --------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `private_ref` <Label type="optional" /> | string                                                    | An optional private reference for the discount. See [Private Refs](/developers/api/general-concepts#private-refs). |
| `name`                                  | string                                                    | The name of the discount.                                                                                          |
| `ref` <Label type="optional" />         | string                                                    | The ref that identifies the discount.                                                                              |
| `price_off`                             | [Money](/developers/api/general-concepts#monetary-values) | The discount value.                                                                                                |
| `deleted` <Label type="optional" />     | boolean                                                   | `false` by default. Setting this field to `true` marks the resource as irreversibly deleted.                       |

**Note:** the `pricing_effect` and `pricing_value` fields are deprecated. They are still present in the API output for backwards compatibility, but their values should be ignored.

##### Example:

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

## 9. Order Charges {#charges}

Order charges increase the price paid by the customer.

##### Attributes:

| Name                                    | Type                                                       | Description                                                                                                      |
| --------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `private_ref` <Label type="optional" /> | string                                                     | An optional private reference for the charge. See [Private Refs](/developers/api/general-concepts#private-refs). |
| `name`                                  | string                                                     | The name of the charge.                                                                                          |
| `ref` <Label type="optional" />         | string                                                     | The ref that identifies the charge.                                                                              |
| `price`                                 | [Money](/developers/api/general-concepts#monetary-values)  | The charge amount.                                                                                               |
| `tax_rate` <Label type="optional" />    | [decimal](/developers/api/general-concepts#decimal-values) | The tax rate applied to the charge. See [Tax Rates](#tax-rates).                                                 |
| `deleted` <Label type="optional" />     | boolean                                                    | `false` by default. Setting this field to `true` marks the resource as irreversibly deleted.                     |

**Note:** the `charge_type`, `charge_price` and `charge_ref` fields are deprecated. They are present in the API for backwards compatibility, but their values should be ignored.

**Note:** the `type` field is deprecated and should be ignored in new integrations.

##### Example:

```json
[
  {
    "name": "Delivery < 15 km",
    "ref": "DEL",
    "price": "1.50 EUR"
  }
]
```

## 10. Order Payments {#payments}

If one or several payments are defined, the sum of the payment amounts should equal the order's `total`. Otherwise, the difference is stored in the order's `payment_discrepancy` field.

If payments are omitted, the order should be considered as unpaid.

##### Attributes:

| Name                                    | Type                                                      | Description                                                                                                           |
| --------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `private_ref` <Label type="optional" /> | string                                                    | An optional private reference for the discount. See [Private Refs](/developers/api/general-concepts#private-refs).    |
| `name` <Label type="optional" />        | string                                                    | The name of the payment method.                                                                                       |
| `ref` <Label type="optional" />         | string                                                    | Identifies the payment method.                                                                                        |
| `amount`                                | [Money](/developers/api/general-concepts#monetary-values) | Amount paid with this payment method.                                                                                 |
| `info` <Label type="optional" />        | object                                                    | Additional info on the payment: transaction id, etc. The content is free and typically depends on the payment method. |
| `deleted` <Label type="optional" />     | boolean                                                   | `false` by default. Setting this field to `true` marks the resource as irreversibly deleted.                          |

**Note:** the `type` field is deprecated and should be ignored in new integrations.

##### Example:

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

## 11. Order Delivery {#delivery}

A delivery can be attached to an order whose service type is `delivery`. This is used for tracking delivery status, pickup and drop-off times, driver details and other details. For more information about attaching and updating deliveries, see [Deliveries](/developers/api/deliveries).

An order with an attached delivery includes a `delivery` field. This field contains the same fields as the [Delivery resource](/developers/api/deliveries#delivery-resource), except for the `driver_latitude` and `driver_longitude` fields.

Attaching or updating a delivery triggers an `order.update` callback event, which includes the `delivery` field in its payload.

The `driver_latitude` and `driver_longitude` fields are typically updated at a high frequency, but intentionally do not trigger `order.update` callback events to minimise the number of events for subscribers. To monitor these fields, opt for `delivery.update` webhooks.

## 12. Order Loyalty Operations {#loyalty-operations}

Add or remove points to a customer's loyalty card(s).

Each operation is linked to a loyalty card, uniquely identified by its name. If a card does not exist with this name, it is created automatically with an initial balance equal to 0.0

Each loyalty operation triggers the automatic recalculation of the loyalty card balance.

##### Attributes:

| Name                               | Type                                                       | Description                                                                              |
| ---------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `ref` <Label type="optional" />    | string                                                     | The loyalty card unique ref. Defaults to `null` if omitted.                              |
| `delta`                            | [decimal](/developers/api/general-concepts#decimal-values) | The number of points to add to the card balance. Use a negative number to remove points. |
| `reason` <Label type="optional" /> | string                                                     | Additional information on the operation.                                                 |

##### Example:

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

## 13. Tax Rates {#tax-rates}

A `tax_rate` can be specified for each order item and order charge.

Tax rate are decimal numbers, representing a percentage of the price. For example, `tax_rate="15.5"` means that the tax is 15.5% of the price of the item or charge.

Whether prices are tax-inclusive or exclusive is a decision taken at the account level. The chosen convention must then be enforced by all clients connected to the account. As a general rule, you can assume that prices in HubRise are **tax-inclusive** for accounts situated in markets where consumer prices are tax-inclusive, for example European countries. On the contrary, prices can generally be considered as **tax-exclusive** in the other markets, for example the U.S.

HubRise does not perform any computation with `tax_rate`, and does not require this field to be present. If needed, use a default value for items with unspecified tax rates.
