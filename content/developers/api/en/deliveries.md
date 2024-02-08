---
title: Deliveries
path_override: deliveries
position: 5
layout: documentation
meta:
  title: Deliveries | API | HubRise
  description:
---

A delivery can optionally be attached to an order. This tracks the delivery details, including estimated pickup and drop-off times, driver information, and delivery status.

### 1. Create a Delivery

Attaches a delivery to an order.

<CallSummaryTable
endpoint="POST /locations/:location_id/orders/:order_id/delivery"
shortEndpoint="POST /location/orders/:order_id/delivery (location only)"
accessLevel="location, account"
/>

This endpoint can only be called if:

- The order has no delivery yet.
- The order's `service_type` is set to `delivery`.

##### Parameters: {#delivery-resource}

| Name                                                 | Type                                                       | Description                                                          |
| ---------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------- |
| `carrier`                                            | `string`                                                   | The name of the carrier.                                             |
| `carrier_ref` <Label type="optional" />              | `string`                                                   | A ref code that identifies the carrier.                              |
| `ref` <Label type="optional" />                      | `string`                                                   | The carrier's identifier of the delivery, such as a tracking number. |
| `status`                                             | `string`                                                   | The delivery status. See [Delivery Statuses](#delivery-statuses).    |
| `fee` <Label type="optional" />                      | `string`                                                   | The delivery fee charged by the carrier to the business.             |
| `estimated_pickup_at` <Label type="optional" />      | [Time](/developers/api/general-concepts#dates-and-times)   | The pickup time, estimated by the carrier.                           |
| `estimated_dropoff_at` <Label type="optional" />     | [Time](/developers/api/general-concepts#dates-and-times)   | The drop-off time, estimated by the carrier.                         |
| `tracking_url` <Label type="optional" />             | `string`                                                   | The URL of a page where the customer can track the delivery.         |
| `driver_name` <Label type="optional" />              | `string`                                                   | The driver name.                                                     |
| `driver_phone` <Label type="optional" />             | `string`                                                   | The driver phone number.                                             |
| `driver_phone_access_code` <Label type="optional" /> | `string`                                                   | The access code to provide when calling the phone number above.      |
| `driver_latitude` <Label type="optional" />          | [decimal](/developers/api/general-concepts#decimal-values) | The current latitude of the driver.                                  |
| `driver_longitude` <Label type="optional" />         | [decimal](/developers/api/general-concepts#decimal-values) | The current longitude of the driver.                                 |
| `assigned_at` <Label type="optional" />              | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `pickup_enroute`.                         |
| `pickup_at` <Label type="optional" />                | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `dropoff_enroute`.                        |
| `delivered_at` <Label type="optional" />             | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `delivered`.                              |
| `cancelled_at` <Label type="optional" />             | [Time](/developers/api/general-concepts#dates-and-times)   | Time the status changed to `cancelled`.                              |

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
  "tracking_url": "https://www.ups.com/track?tracknum=1Z12345E0291980793",
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
accessLevel="location, account"
/>

If the order has no delivery, an error is returned.

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
  "assigned_at": "2023-01-01T12:11:03+01:00",
  "pickup_at": null,
  "delivered_at": null,
  "cancelled_at": null,
  "driver_latitude": "48.856702",
  "driver_longitude": "2.35222"
}
```

</details>

### 3. Update a Delivery

Updates the delivery attached to an order.

<CallSummaryTable
endpoint="PATCH /locations/:location_id/orders/:order_id/delivery"
shortEndpoint="PATCH /location/orders/:order_id/delivery (location only)"
accessLevel="location, account"
/>

All fields can be updated, except: `carrier`, `carrier_ref`, `fee`.

If the order has no delivery, an error is returned.

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
