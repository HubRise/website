---
title: Customer management
position: 5
layout: documentation
meta:
    title:
    description:
---

## 1. Customer lists

Like catalogs, customer lists exist at either location or account level.

Name unicity is ruled by the same constraints as catalogs: at the location level, they are uniquely identified by their name. And an account level customer list cannot have the same name as another account or location level customer list.

### 1.1. Retrieve customer list

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

### 1.2. List customer lists

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
    "created_at": "2017-06-25T11:43:51Z"
  },
  {
    "id": "s7ma5",
    "name": "POS customers",
    "created_at": "2017-05-19T13:23:10Z"
  }
]
```

### 1.3. Create customer list

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

### 1.4. Update customer list

Update a customer list.

<CallSummaryTable
  endpoint="PUT /customer_lists/:id"
  accessLevel="location, account"
/>

#### Example request:

`PUT /customer_lists/apm3s`

```json
{
  "name": "New customers"
}
```

If `name` is used by another customer list, it returns an error.

### 1.5. Delete customer list

Delete a customer list and its customers.

<CallSummaryTable
  endpoint="DELETE /customer_lists/:id"
  accessLevel="location, account"
/>

#### Example request:

`DELETE /customer_lists/apm3s`

## 2. Customers

### 2.1. Retrieve customer

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
  "email": "xxx@yyy.com",
  "first_name": "Jimmy",
  "last_name": "Watson",
  "gender": "male",
  "birth_date": null,
  "company_name": null,
  "phone": "+44.123456789",
  "address_1": "1 Town Road",
  "address_2": null,
  "postal_code": "N9 0HL",
  "city": "London",
  "state": null,
  "country": "GB",
  "latitude": 45.7571206,
  "longitude": 4.8307575,
  "delivery_notes": null,
  "sms_marketing": true,
  "email_marketing": true,
  "nb_orders": 2,
  "order_total": "28.40 GBP",
  "first_order_date": "2017-01-18T17:15:11+01:00",
  "last_order_date": "2017-01-23T10:13:21+01:00",
  "loyalty_cards": [
    {
      "id": "slp8q",
      "name": "",
      "ref": "av-33489",
      "balance": 13.5
    }
  ],
  "custom_fields": {}
}
```

### 2.2. List customers

Returns the customers of a customer list. Some filters can be passed.

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

`GET /customer_lists/ag8u4/customers?phone=0123*`

```json
[
  {
    "id": "asdf2",
    "first_name": "Charles",
    "last_name": "Moore",
    "phone": "0123456789"
    ...
  }
]
```

### 2.3. Create customer

Creates a new customer. The only mandatory fields are the first and last name.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/customers"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                                     | Type    | Description                                                                                |
| ---------------------------------------- | ------- | ------------------------------------------------------------------------------------------ |
| `private_ref` <Label type="optional" />  | string  | The customer internal id, visible only to the client who set it. Used for customer lookup. |
| `email` <Label type="optional" />        | string  | Email                                                                                      |
| `first_name`                             | string  | First name                                                                                 |
| `last_name`                              | string  | Last name                                                                                  |
| `gender` <Label type="optional" />       | string  | If defined, must be either `male` or `female`                                              |
| `birth_date` <Label type="optional" />   | date    | Birth date (eg. `1999-01-01`)                                                              |
| `company_name` <Label type="optional" /> | string  | Company name                                                                               |
| `phone` <Label type="optional" />        | string  | Phone number                                                                               |
| `address_1` <Label type="optional" />    | string  | 1st line of address                                                                        |
| `address_2` <Label type="optional" />    | string  | 2nd line of address                                                                        |
| `postal_code` <Label type="optional" />  | string  | Postal code                                                                                |
| `city` <Label type="optional" />         | string  | City                                                                                       |
| `state` <Label type="optional" />        | string  | State                                                                                      |
| `country` <Label type="optional" />      | string  | Country                                                                                    |
| `latitude` <Label type="optional" />     | decimal | Latitude                                                                                   |
| `longitude` <Label type="optional" />    | decimal | Longitude                                                                                  |

#### Example request:

`POST /customer_lists/ag8u4/customers`

```json
{
  "first_name": "Charles",
  "last_name": "Moore",
  "email": "charles.moore@xxx.com",
  "private_ref": "charles.moore@xxx.com"
}
```

### 2.4. Update customer

Updates a customer.

<CallSummaryTable
  endpoint="PUT /customer_lists/:customer_list_id/customers/:customer_id"
  accessLevel="location, account"
/>

#### Example request:

`PUT /customer_lists/ag8u4/customers/asdf2`

```json
{
  "first_name": "Claude"
}
```

## 3. Loyalty cards

### 3.1. Retrieve loyalty card

Returns a loyalty card.

A customer can have zero, one or many loyalty cards.

`name` identifies the loyalty scheme or the name of a particular campaign. Each card must have a unique name for any given customer. An empty ("") name is acceptable and will generally be used for a location running a unique loyalty program.

The `ref` must be unique for a given customer list and a given name.

The `balance` is updated automatically by HubRise when a loyalty operation is created. This field cannot be changed through the API.

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
  "name": "",
  "ref": "av-33489",
  "balance": 13.5
}
```

### 3.2. List loyalty cards

Returns the loyalty cards belonging to a customer list. Some filters can be passed.

<CallSummaryTable
  endpoint="GET /customer_lists/:customer_list_id/loyalty_cards"
  accessLevel="location, account"
/>

#### Request parameters:

| Name          | Description                                           |
| ------------- | ----------------------------------------------------- |
| `name`        | Filters the loyalty cards by name.                    |
| `ref`         | Filters by ref.                                       |
| `customer_id` | Returns the cards belonging to a particular customer. |

#### Example request: retrieve by name and ref

`GET /customer_lists/smpre3/loyalty_cards?name=&ref=av-33489`

```json
[
  {
    "id": "slp8q",
    "customer_id": "ve343",
    "name": "",
    "ref": "av-33489",
    "balance": 13.5
  }
]
```

#### Example request: retrieve the loyalty cards belonging to a customer

`GET /customer_lists/smpre3/loyalty_cards?customer_id=ve343`

```json
[
  {
    "id": "slp8q",
    "customer_id": "ve343",
    "name": "",
    "ref": "av-33489",
    "balance": 13.5
  },
  {
    "id": "65rsp",
    "customer_id": "ve343",
    "name": "kiosk",
    "ref": "31",
    "balance": 1.5
  }
]
```

### 3.3. Create loyalty card

Creates a new loyalty card for a customer.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/loyalty_cards"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                            | Type   | Description                                                                                                                                  |
| ------------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `customer_id`                   | string | The customer's `id`. Must exist or the request will fail.                                                                                    |
| `name`                          | string | The loyalty card scheme name. Must be unique among the cards owned by the same customer. Mandatory parameter, but "" is an acceptable value. |
| `ref` <Label type="optional" /> | string | The unique reference of the card. If defined, it must be unique among all the cards of the same customer list having the same name.          |

#### Example request:

`POST /customer_lists/smpre3/loyalty_cards`

```json
{
  "customer_id": "ve343",
  "name": "",
  "ref": "av-33489"
}
```

If the request succeeds, the loyalty card is created with an initial `balance` set to 0.0

### 3.4. Update loyalty card

Update a loyalty card.

<CallSummaryTable
  endpoint="PUT /customer_lists/:customer_list_id/loyalty_cards/:loyalty_card_id"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                             | Type   | Description                       |
| -------------------------------- | ------ | --------------------------------- |
| `name` <Label type="optional" /> | string | The loyalty card scheme name.     |
| `ref` <Label type="optional" />  | string | The unique reference of the card. |

#### Example request:

`PUT /customer_lists/smpre3/loyalty_cards/slp8q`

```json
{
  "ref": "av-20103"
}
```

Note that only the name and the ref can be updated. It's not possible to change the `customer_id`.

`balance` cannot be changed directly as well. To update it, just create an operation.

## 4. Loyalty operations

### 4.1. Retrieve operation

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
  "created_at": "2017-01-18T12:37:21+01:00",
  "order_location_id": "psm98",
  "order_id": "mapcm",
  "reason": "Points earned",
  "delta": 4.2,
  "new_balance": 17.7
}
```

### 4.2. List operations

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
    "created_at": "2017-01-18T12:37:21+01:00"
    ...
  },
  ...
]
```

### 4.3. Create operation

Create a loyalty card operation and updates the balance accordingly.

<CallSummaryTable
  endpoint="POST /customer_lists/:customer_list_id/loyalty_cards/:loyalty_card_id/operations"
  accessLevel="location, account"
/>

#### Request parameters:

| Name                                 | Type    | Description                                                                                                                                                         |
| ------------------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `order_id` <Label type="optional" /> | string  | Attach this operation to a particular order. If defined, an order with this id must exist or the request will fail. An order can be attached to several operations. |
| `reason` <Label type="optional" />   | string  | Describes how the points were obtained/redeemed. The customer will typically see this field when he checks his loyalty account operations from a website.           |
| `delta`                              | decimal | The number of points to add to the customer balance. Use a negative number to remove points.                                                                        |

#### Example request:

`POST /customer_lists/smpre3/loyalty_cards/slp8q/operations`

```json
{
  "order_id": "mapcm",
  "reason": "Points earned",
  "delta": 4.2
}
```

If the request succeeds, the operation's `new_balance` is automatically calculated, as well as the customer's `balance`.

An operation CANNOT be deleted or updated. An operation is voided by creating an opposite operation.
