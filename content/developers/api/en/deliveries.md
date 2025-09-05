---
title: Deliveries
path_override: deliveries
position: 5
layout: documentation
meta:
  title: Deliveries | API | HubRise
  description:
---

HubRise offers two complementary resources to manage order deliveries:

- Delivery quotes enable third-party services to provide cost estimates and delivery timeframes.

- Deliveries represent the actual fulfillment process. They contain real-time tracking information including the estimated and actual pickup and drop-off times, driver details, and current delivery status.

While an order can have multiple delivery quotes, only a single delivery can be created and tracked per order.

The most general workflow is as follows - in scenarios with a single provider, a delivery may be created directly without quotes:

- An order is created, and sent to one or several delivery quote providers.
- Each provider creates a delivery quote for the order.
- The business or customer accepts one of the quotes.
- The provider whose quote was accepted creates a delivery for the order.
- The provider updates the delivery status as the order is picked up and delivered.

## Delivery Quotes

### 1. Create a Delivery Quote

Creates a delivery quote for an order.

<CallSummaryTable
endpoint="POST /locations/:location_id/orders/:order_id/delivery_quotes"
shortEndpoint="POST /location/orders/:order_id/delivery_quotes (location only)"
accessLevel="Location, Account"
/>

This endpoint can only be called for orders whose `service_type` is set to `delivery`.

##### Parameters:

| Name                                             | Type                                                     | Description                             |
| ------------------------------------------------ | -------------------------------------------------------- | --------------------------------------- |
| `carrier`                                        | `string`                                                 | The name of the carrier.                |
| `carrier_ref` <Label type="optional" />          | `string`                                                 | A ref code that identifies the carrier. |
| `ref` <Label type="optional" />                  | `string`                                                 | The carrier's identifier of the quote.  |
| `fee`                                            | `string`                                                 | The quoted delivery fee.                |
| `estimated_pickup_at` <Label type="optional" />  | [Time](/developers/api/general-concepts#dates-and-times) | The estimated pickup time.              |
| `estimated_dropoff_at` <Label type="optional" /> | [Time](/developers/api/general-concepts#dates-and-times) | The estimated drop-off time.            |

<details>

<summary>Example request</summary>

`POST /location/orders/5dpm9/delivery_quotes`

```json
{
  "carrier": "UPS",
  "carrier_ref": "ups",
  "ref": "1Z12345E0291980793",
  "status": "pending",
  "fee": "4.50 EUR",
  "estimated_pickup_at": "2023-01-01T12:00:00+01:00",
  "estimated_dropoff_at": "2023-01-01T12:30:00+01:00"
}
```

</details>

### 2. Accept a Delivery Quote

Marks a delivery quote as accepted, and saves the acceptance time.

This action is not reversible, and will usually result in the creation of a delivery by the carrier. Several quotes can be accepted for the same order, for example if the first carrier does not create a delivery in time.

<CallSummaryTable
endpoint="POST /locations/:location_id/orders/:order_id/delivery_quotes/:id/accept"
shortEndpoint="POST /location/orders/:order_id/delivery_quotes/:id/accept (location only)"
accessLevel="Location, Account"
/>

<details>

<summary>Example request</summary>

`POST /location/orders/5dpm9/delivery_quotes/ez351/accept`

</details>

### 3. Retrieve Delivery Quote

Retrieves a delivery quote attached to an order.

<CallSummaryTable
endpoint="GET /locations/:location_id/orders/:order_id/delivery_quotes/:id"
shortEndpoint="GET /location/orders/:order_id/delivery_quotes/:id (location only)"
accessLevel="Location, Account"
/>

All the fields of a delivery quote creation request are returned, plus a few more:

| Name                                    | Type                                                     | Description                                                                                         |
| --------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `id`                                    | `string`                                                 | The id of the delivery quote.                                                                       |
| `order_id`                              | `string`                                                 | The id of the order.                                                                                |
| `location_id`                           | `string`                                                 | The id of the location.                                                                             |
| `accepted_at` <Label type="optional" /> | [Time](/developers/api/general-concepts#dates-and-times) | Time the quote was accepted by the customer or the business, or `null` if it has not been accepted. |

<details>

<summary>Example request</summary>

`GET /location/orders/5dpm9/delivery_quotes/ez351`

##### Response:

```json
{
    "id": "ez351",
    "order_id": "5dpm9",
    "location_id": "3r4s3-1",
    "carrier": "UPS",
    "carrier_ref": "ups",
    "ref": "Q12345E029198";
    "fee": "4.50 EUR",
    "estimated_pickup_at": "2023-01-01T12:17:00+01:00",
    "estimated_dropoff_at": null,
    "accepted_at": "2023-01-01T11:45:00+01:00"
}
```

</details>

### 4. List Delivery Quotes

Returns the delivery quotes attached to an order.

<CallSummaryTable
endpoint="GET /locations/:location_id/orders/:order_id/delivery_quotes"
shortEndpoint="GET /location/orders/:order_id/delivery_quotes (location only)"
accessLevel="Location, Account"
/>

<details>

<summary>Example request</summary>

`GET /location/orders/5dpm9/delivery_quotes`

```json
[
    {
      "id": "ez351",
      "order_id": "5dpm9",
      "location_id": "3r4s3-1",
      "carrier": "UPS",
      "carrier_ref": "ups",
      "ref": "Q12345E029198";
      "fee": "4.50 EUR",
      "estimated_pickup_at": "2023-01-01T12:17:00+01:00",
      "estimated_dropoff_at": null,
      "accepted_at": "2023-01-01T11:45:00+01:00"
    },
    {
      "id": "a5z32",
      "order_id": "5dpm9",
      "location_id": "3r4s3-1",
      "carrier": "FedEx",
      "carrier_ref": "fedex",
      "ref": "FQ6678136645";
      "fee": "6.50 EUR",
      "estimated_pickup_at": "2023-01-01T12:10:00+01:00",
      "estimated_dropoff_at": "2023-01-01T12:40:00+01:00",
      "accepted_at": null
    }
]
```

</details>

## Deliveries

### 1. Create a Delivery

Attaches a delivery to an order.

<CallSummaryTable
endpoint="POST /locations/:location_id/orders/:order_id/delivery"
shortEndpoint="POST /location/orders/:order_id/delivery (location only)"
accessLevel="Location, Account"
/>

This endpoint can only be called if:

- The order has no delivery yet.
- The order's `service_type` is set to `delivery`.

##### Parameters: {#delivery-resource}

| Name                                                 | Type                                                       | Description                                                                                                                                                                    |
| ---------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `carrier`                                            | `string`                                                   | The name of the carrier.                                                                                                                                                       |
| `carrier_ref` <Label type="optional" />              | `string`                                                   | A ref code that identifies the carrier.                                                                                                                                        |
| `ref` <Label type="optional" />                      | `string`                                                   | The carrier's identifier of the delivery, such as a tracking number.                                                                                                           |
| `status`                                             | `string`                                                   | The delivery status. See [Delivery Statuses](#delivery-statuses).                                                                                                              |
| `fee` <Label type="optional" />                      | `string`                                                   | The delivery fee charged by the carrier to the business.                                                                                                                       |
| `estimated_pickup_at` <Label type="optional" />      | [Time](/developers/api/general-concepts#dates-and-times)   | The pickup time, estimated by the carrier.                                                                                                                                     |
| `estimated_dropoff_at` <Label type="optional" />     | [Time](/developers/api/general-concepts#dates-and-times)   | The drop-off time, estimated by the carrier.                                                                                                                                   |
| `tracking_url` <Label type="optional" />             | `string`                                                   | URL where the customer can track the delivery status, the driver position, or both.                                                                                            |
| `driver_pickup_url` <Label type="optional" />        | `string`                                                   | URL the driver must scan at the pickup location to confirm handover of the order. Often displayed as a QR code; scanning it notifies the carrier that the order was collected. |
| `driver_name` <Label type="optional" />              | `string`                                                   | The driver name.                                                                                                                                                               |
| `driver_phone` <Label type="optional" />             | `string`                                                   | The driver phone number.                                                                                                                                                       |
| `driver_phone_access_code` <Label type="optional" /> | `string`                                                   | The access code to provide when calling the phone number above.                                                                                                                |
| `driver_latitude` <Label type="optional" />          | [decimal](/developers/api/general-concepts#decimal-values) | The current latitude of the driver.                                                                                                                                            |
| `driver_longitude` <Label type="optional" />         | [decimal](/developers/api/general-concepts#decimal-values) | The current longitude of the driver.                                                                                                                                           |
| `assigned_at` <Label type="optional" />              | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `pickup_enroute`.                                                                                                                                   |
| `pickup_at` <Label type="optional" />                | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `dropoff_enroute`.                                                                                                                                  |
| `delivered_at` <Label type="optional" />             | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `delivered`.                                                                                                                                        |
| `cancelled_at` <Label type="optional" />             | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `cancelled`.                                                                                                                                        |

<details>

<summary>Example request</summary>

`POST /location/orders/5dpm9/delivery`

```json
{
  "carrier": "UPS",
  "carrier_ref": "ups",
  "ref": "1Z12345E0291980793",
  "status": "pending",
  "fee": "4.50 EUR",
  "estimated_pickup_at": "2023-01-01T12:00:00+01:00",
  "estimated_dropoff_at": "2023-01-01T12:30:00+01:00",
  "tracking_url": "https://www.ups.com/track/1Z12345E0291980793",
  "driver_pickup_url": "https://driver.ups.com/pickup/1Z12345E0291980793",
  "driver_name": "John",
  "driver_phone": "+33612345678",
  "driver_phone_access_code": "1234",
  "driver_latitude": "48.856614",
  "driver_longitude": "2.3522219"
}
```

</details>

#### Delivery statuses {#delivery-statuses}

The following statuses are available:

| Status                | Description         |
| --------------------- | ------------------- |
| `pending`             | Not started         |
| `pickup_enroute`      | En route to pickup  |
| `pickup_approaching`  | Nearing pickup      |
| `pickup_waiting`      | At pickup           |
| `dropoff_enroute`     | En route to dropoff |
| `dropoff_approaching` | Nearing dropoff     |
| `dropoff_waiting`     | At dropoff          |
| `delivered`           | Completed           |
| `cancelled`           | Cancelled           |

### 2. Retrieve a Delivery

Retrieves the delivery attached to an order.

<CallSummaryTable
endpoint="GET /locations/:location_id/orders/:order_id/delivery"
shortEndpoint="GET /location/orders/:order_id/delivery (location only)"
accessLevel="Location, Account"
/>

If the order has no delivery, a `404 - Not Found` error is returned.

<details>

<summary>Example request</summary>

`GET /location/orders/5dpm9/delivery`

```json
{
  "id": "ez351",
  "order_id": "5dpm9",
  "location_id": "3r4s3-1",
  "carrier": "UPS",
  "carrier_ref": "ups",
  "ref": "1Z12345E0291980793",
  "status": "pickup_waiting",
  "fee": "4.50 EUR",
  "estimated_pickup_at": "2023-01-01T12:17:00+01:00",
  "estimated_dropoff_at": "2023-01-01T12:29:00+01:00",
  "tracking_url": "https://www.ups.com/track?tracknum=1Z12345E0291980793",
  "driver_name": "John",
  "driver_phone": "+33612345678",
  "driver_phone_access_code": "1234",
  "driver_latitude": "48.856702",
  "driver_longitude": "2.35222",
  "assigned_at": "2023-01-01T12:11:03+01:00",
  "pickup_at": null,
  "delivered_at": null,
  "cancelled_at": null
}
```

</details>

### 3. Update a Delivery

Updates the delivery attached to an order.

<CallSummaryTable
endpoint="PATCH /locations/:location_id/orders/:order_id/delivery"
shortEndpoint="PATCH /location/orders/:order_id/delivery (location only)"
accessLevel="Location, Account"
/>

All fields can be updated, except: `carrier`, `carrier_ref`, `fee`.

If the order has no delivery, a `404 - Not Found` error is returned.

<details>

<summary>Example request</summary>

`PATCH /location/orders/5dpm9/delivery`

```json
{
  "driver_latitude": "48.856614",
  "driver_longitude": "2.3522219"
}
```

</details>

#### Auto-updated fields

The following fields are updated automatically when the delivery status changes:

| Status            | Field          |
| ----------------- | -------------- |
| `pickup_enroute`  | `assigned_at`  |
| `dropoff_enroute` | `pickup_at`    |
| `delivered`       | `delivered_at` |
| `cancelled`       | `cancelled_at` |

You can manually override these fields if required. This can be useful when status updates are skipped or delayed.
