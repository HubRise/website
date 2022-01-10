---
title: Customer Management
position: 6
layout: documentation
meta:
  title: Customer Management | API | HubRise
  description:
---

## 1. Customer Lists

Like catalogs, customer lists exist at either location or account level.

Name unicity is ruled by the same constraints as catalogs:

- At the location level, customer lists are uniquely identified by their name.
- An account level customer list cannot have the same name as another account or location level customer list.

### 1.1. Retrieve Customer List

Returns a customer list.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id"
  accessLevel="location, account"
/>

#### Example request:

`GET /customer_lists/ag8u4`

```json
{
  "id": "ag8u4",
  "name": "Online customers"
}
```

### 1.2. List Customer Lists

Returns a location's Customer Lists. Includes location and account level Customer Lists.

<CallSummaryTable
  endpoint="GET /locations/:location_id/customer_lists"
  shortEndpoint="GET /location/customer_lists (location only)"
  accessLevel="location, account"
/>

Account level Customer Lists of an account:

<CallSummaryTable
  endpoint="GET /accounts/:account_id/customer_lists"
  shortEndpoint="GET /account/customer_lists (account only)"
  accessLevel="account"
/>

#### Example request:

`GET /locations/3r4s3-1/customer_lists`

```json
[
  {
    "id": "apm3s",
    "name": "Online customers",
    "created_at": "2020-06-25T11:43:51+02:00"
  },
  {
    "id": "s7ma5",
    "name": "POS customers",
    "created_at": "2020-05-19T13:23:10+02:00"
  }
]
```

### 1.3. Create Customer List

Creates a new customer list.

To create a location-level customer list, use this request:

<CallSummaryTable
  endpoint="POST /locations/:location_id/customer_lists"
  shortEndpoint="POST /location/customer_lists (location only)"
  accessLevel="location, account"
/>

To create an account-level customer list:

<CallSummaryTable
  endpoint="POST /accounts/:account_id/customer_lists"
  shortEndpoint="POST /account/customer_lists (account only)"
  accessLevel="account"
/>

#### Request parameters:

| Name   | Type   | Description                    |
| ------ | ------ | ------------------------------ |
| `name` | string | The name of the customer list. |

#### Example request:

`POST /locations/3r4s3-1/customer_lists`

```json
{
  "name": "Web customers"
}
```

If a customer list with the same name already exists, it returns an error.

### 1.4. Update Customer List

Update a customer list.

<CallSummaryTable
  endpoint="PATCH /customer_lists/:id"
  accessLevel="location, account"
/>

#### Example request:

`PATCH /customer_lists/apm3s`

```json
{
  "name": "New customers"
}
```

If `name` is already used by another customer list, it returns an error.

### 1.5. Delete Customer List

Delete a customer list. Customers and loyalty cards belonging to the list are also deleted.

No event is fired in the process.

<CallSummaryTable
  endpoint="DELETE /customer_lists/:id"
  accessLevel="location, account"
/>

#### Example request:

`DELETE /customer_lists/apm3s`

## 2. Customers

### 2.1. Retrieve Customer

Returns a customer's details.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id/customers/:customer_id"
  accessLevel="location, account"
/>

#### Example request:

`GET /customer_lists/smpse3/customers/jdj9v`

```json
{
  "id": "jdj9v",
  "customer_list_id": "smpse3",
  "anonymised": false,
  "private_ref": null,
  "email": "jimmy.watson@dummy-mail.org",
  "first_name": "Jimmy",
  "last_name": "Watson",
  "gender": "male",
  "birth_date": null,
  "company_name": null,
  "phone": "+44123456789",
  "address_1": "1 Town Road",
  "address_2": null,
  "postal_code": "N9 0HL",
  "city": "London",
  "state": null,
  "country": "GB",
  "latitude": "45.7571206",
  "longitude": "4.8307575",
  "delivery_notes": null,
  "sms_marketing": false,
  "email_marketing": true,
  "nb_orders": 2,
  "order_total": "28.40 GBP",
  "first_order_date": "2020-01-18T17:15:11+02:00",
  "last_order_date": "2020-01-23T10:13:21+02:00",
  "loyalty_cards": [
    {
      "id": "slp8q",
      "ref": null,
      "name": null,
      "balance": "13.5"
    }
  ],
  "custom_fields": {}
}
```

### 2.2. List Customers

Returns customers belonging to a customer list. Filters can be specified.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id/customers"
  accessLevel="location, account"
/>

#### Request parameters:

| Name          | Description                                            |
| ------------- | ------------------------------------------------------ |
| `private_ref` | Returns customers having this private_ref.             |
| `email`       | Filter customers by email. Wildcards (\*) can be used. |
| `phone`       | Filter customers by phone. Wildcards (\*) can be used. |

#### Example request:

`GET /customer_lists/ag8u4/customers?phone=+44*`

```json
[
  {
    "id": "asdf2",
    "customer_list_id": "ag8u4",
    "anonymised": false,
    "email": "charles.moore@dummy-mail.org",
    "first_name": "Charles",
    "last_name": "Moore",
    "phone": "+44123456789",
    ...
  }
]
```

### 2.3. Create Customer

Creates a new customer.

There is no mandatory field so a customer can be created with no information then referred to by its unique id.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/customers"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                                        | Type                                                        | Description                                                                                                                                              |
| ------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `private_ref` <Label type="optional" />     | string                                                      | The customer internal id, visible only to the client that set it. Typically used for customer lookup. Must be unique among the customer list if defined. |
| `email` <Label type="optional" />           | string                                                      | Email.                                                                                                                                                   |
| `first_name` <Label type="optional" />      | string                                                      | First name.                                                                                                                                              |
| `last_name` <Label type="optional" />       | string                                                      | Last name.                                                                                                                                               |
| `gender` <Label type="optional" />          | string                                                      | If defined, must be either `male` or `female`                                                                                                            |
| `birth_date` <Label type="optional" />      | date                                                        | Birth date in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601) for dates, ie `YYYY-MM-DD`.                                                      |
| `company_name` <Label type="optional" />    | string                                                      | Company name.                                                                                                                                            |
| `phone` <Label type="optional" />           | string                                                      | Phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164) (\*).                                                                                |
| `address_1` <Label type="optional" />       | string                                                      | 1st line of address.                                                                                                                                     |
| `address_2` <Label type="optional" />       | string                                                      | 2nd line of address.                                                                                                                                     |
| `postal_code` <Label type="optional" />     | string                                                      | Postal code.                                                                                                                                             |
| `city` <Label type="optional" />            | string                                                      | City.                                                                                                                                                    |
| `state` <Label type="optional" />           | string                                                      | State.                                                                                                                                                   |
| `country` <Label type="optional" />         | string                                                      | The two-letter country code as defined in [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).                                        |
| `latitude` <Label type="optional" />        | [decimal](/developers/api/general-concepts/#decimal-values) | Latitude of the customer address.                                                                                                                        |
| `longitude` <Label type="optional" />       | [decimal](/developers/api/general-concepts/#decimal-values) | Longitude of the customer address.                                                                                                                       |
| `delivery_notes` <Label type="optional" />  | string                                                      | Information provided by the customer to help with the delivery.                                                                                          |
| `sms_marketing` <Label type="optional" />   | boolean                                                     | Whether the customer agrees to receive marketing messages via SMS. Defaults to `false`.                                                                  |
| `email_marketing` <Label type="optional" /> | boolean                                                     | Whether the customer agrees to receive marketing messages via email. Defaults to `false`.                                                                |
| `custom_fields` <Label type="optional" />   | [CustomFields](/developers/api/extensions/#custom-fields)   | Additional data attached to the customer.                                                                                                                |

(\*) The E.164 format must be used for any new implementation. Be aware however that phone numbers retrieved from the API can be encoded in a different format. The E.164 will become mandatory in a future release.

#### Example request:

`POST /customer_lists/ag8u4/customers`

```json
{
  "private_ref": "2213312",
  "email": "charles.moore@dummy-mail.org",
  "first_name": "Charles",
  "last_name": "Moore",
  "gender": "male",
  "birth_date": "1999-01-01",
  "company_name": "HubRise",
  "phone": "+44123456789",
  "address_1": "1 avenue des Champs Elysées",
  "address_2": null,
  "postal_code": "75001",
  "city": "Paris",
  "state": null,
  "country": "FR",
  "latitude": "48.8589507",
  "longitude": "2.2770205"
}
```

### 2.4. Update Customer

Updates a customer. Only the fields present in the request are updated.

<CallSummaryTable
  endpoint="PATCH /customer_lists/:customer_list_id/customers/:customer_id"
  accessLevel="location, account"
/>

#### Example request:

`PATCH /customer_lists/ag8u4/customers/asdf2`

```json
{
  "first_name": "Claude"
}
```

### 2.5. Anonymise Customer

Deletes a customer's personal information.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/customers/:customer_id/anonymise"
  accessLevel="location, account"
/>

The anonymised fields are: `email`, `first_name`, `last_name`, `gender`, `birth_date`, `company_name`, `phone`, `address_1`, `address_2`, `postal_code`, `latitude`, `longitude`, `delivery_notes`.

When a customer is anonymised, the anonymised fields retun a `null` value and the `anonymised` boolean field is set to `true`.

Anonymization cannot be reverted. Further updates of the anonymised fields will silently be ignored. The other fields (eg `custom_fields`) can still be updated though.

Anonymizing a customer also anonymises his/her orders. The `customer` resources of anonymised orders are modified in the same way as described above.

When a customer is anonymised, an [Event](/api/callbacks/#events) with an `update` type is triggered for the customer and for each affected order.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/customers/:customer_id/anonymise"
  accessLevel="location, account"
/>

#### Example request:

`POST /customer_lists/ag8u4/customers/asdf2/anonymise`

## 3. Loyalty Cards

A customer can have zero, one or many loyalty cards. Each loyalty card defines:

- An optional `name` which represents the marketing name of the loyalty scheme.
- A `ref`, which is unique for any given customer.
- A `balance` of points.

A null `ref` can be used for no more than one of any customer's loyalty cards. A store running a single loyalty scheme would typically use loyalty cards with a null `ref` for each customer.

`balance` is updated automatically by HubRise when loyalty operations are created. This field cannot be changed directly.

### 3.1. Retrieve Loyalty Card

Returns a loyalty card.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id/loyalty_cards/:loyalty_card_id"
  accessLevel="location, account"
/>

#### Example request:

`GET /customer_lists/smpre3/loyalty_cards/slp8q`

```json
{
  "id": "slp8q",
  "customer_id": "ve343",
  "name": "Come back!",
  "ref": "LOY",
  "balance": "13.5"
}
```

### 3.2. List Loyalty Cards

Returns loyalty cards belonging to a customer list. Filters can be specified.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id/loyalty_cards"
  accessLevel="location, account"
/>

#### Request parameters:

| Name          | Description                                   |
| ------------- | --------------------------------------------- |
| `customer_id` | Return loyalty cards belonging to a customer. |
| `name`        | Filter loyalty cards by name.                 |
| `ref`         | Filter loyalty cards by ref.                  |

#### Example request: retrieve by ref

`GET /customer_lists/smpre3/loyalty_cards?ref=LOY`

```json
[
  {
    "id": "slp8q",
    "customer_id": "ve343",
    "name": "Come back!",
    "ref": "LOY",
    "balance": "13.5"
  }
]
```

#### Example request: retrieve loyalty cards belonging to a customer

`GET /customer_lists/smpre3/loyalty_cards?customer_id=ve343`

```json
[
  {
    "id": "slp8q",
    "customer_id": "ve343",
    "name": null,
    "ref": null,
    "balance": "13.5"
  },
  {
    "id": "65rsp",
    "customer_id": "ve343",
    "name": "Come back!",
    "ref": "LOY",
    "balance": "1.5"
  }
]
```

### 3.3. Create Loyalty Card

Creates a new loyalty card for a customer.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/loyalty_cards"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                             | Type   | Description                                                                                                            |
| -------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| `customer_id`                    | string | The customer's `id`. Must exist or the request will fail.                                                              |
| `name` <Label type="optional" /> | string | The marketing name of the loyalty scheme.                                                                              |
| `ref`                            | string | The loyalty card ref. Must be unique for any given customer. No more than one card per customer can have a `null` ref. |

#### Example request:

`POST /customer_lists/smpre3/loyalty_cards`

```json
{
  "customer_id": "ve343",
  "name": "Discounts for You",
  "ref": "DIS"
}
```

If the request succeeds, a loyalty card is created with an initial `balance` set to `"0.0"`.

### 3.4. Update Loyalty Card

Update a loyalty card.

<CallSummaryTable
  endpoint="PATCH /customer_lists/:customer_list_id/loyalty_cards/:loyalty_card_id"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                             | Type   | Description                  |
| -------------------------------- | ------ | ---------------------------- |
| `name` <Label type="optional" /> | string | The loyalty card name.       |
| `ref` <Label type="optional" />  | string | The loyalty card unique ref. |

#### Example request:

`PATCH /customer_lists/smpre3/loyalty_cards/slp8q`

```json
{
  "ref": "LOYALTY"
}
```

Note that only `name` and `ref` can be updated. It is not possible to change `customer_id`.

`balance` cannot be changed directly as well. To update the balance, create a loyalty operation.

## 4. Loyalty Operations

### 4.1. Retrieve Operation

Returns a loyalty card operation.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id/loyalty_cards/:loyalty_card_id/operations/:operation_id"
  accessLevel="location, account"
/>

#### Example request:

`GET /customer_lists/smpre3/loyalty_cards/slp8q/operations/22kmp`

```json
{
  "id": "22kmp",
  "customer_id": "ve343",
  "created_at": "2020-01-18T12:37:21+02:00",
  "order_location_id": "psm98",
  "order_id": "mapcm",
  "reason": "Points earned on order",
  "delta": "4.2",
  "new_balance": "17.7"
}
```

### 4.2. List Operations

Returns the operations on a given loyalty card, sorted by descending chronological order.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id/loyalty_cards/:loyalty_card_id/operations"
  accessLevel="location, account"
/>

#### Example request:

`GET /customer_lists/smpre3/loyalty_cards/slp8q/operations`

```json
[
  {
    "id": "22kmp",
    "customer_id": "ve343",
    "created_at": "2020-01-18T12:37:21+02:00"
    ...
  },
  ...
]
```

### 4.3. Create Operation

Create a loyalty card operation and updates the balance accordingly.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/loyalty_cards/:loyalty_card_id/operations"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                                 | Type                                                        | Description                                                                                                                                                         |
| ------------------------------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `order_id` <Label type="optional" /> | string                                                      | Attach this operation to a particular order. If defined, an order with this id must exist or the request will fail. An order can be attached to several operations. |
| `reason` <Label type="optional" />   | string                                                      | Describes how the points were obtained/redeemed. The customer will typically see this field when he checks his loyalty account operations from a website.           |
| `delta`                              | [decimal](/developers/api/general-concepts/#decimal-values) | The number of points to add to the customer balance. Use a negative number to remove points.                                                                        |

#### Example request:

`POST /customer_lists/smpre3/loyalty_cards/slp8q/operations`

```json
{
  "order_id": "mapcm",
  "reason": "Points earned",
  "delta": "4.2"
}
```

If the request succeeds, the operation's `new_balance` is automatically calculated, as well as the customer's `balance`.

A loyalty operation cannot be deleted or updated. To void a loyalty operation, create an opposite loyalty operation.
