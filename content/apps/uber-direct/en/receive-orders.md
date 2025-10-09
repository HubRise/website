---
title: Receive Orders
path_override: receive-orders
position: 5
layout: documentation
meta:
  title: Receive Orders | Uber Direct | HubRise
  description: Learn how orders trigger Uber Direct deliveries, how delivery status updates are synchronised, and how to track the courier’s position in real time.
---

When Uber Direct Bridge is connected to HubRise, orders created or updated in HubRise trigger delivery quote or booking requests to Uber Direct.

This page explains the conditions for triggering delivery requests, how delivery statuses are synchronised between Uber Direct and HubRise, and the information sent to Uber Direct when a delivery is created.

## Quote and Delivery Requests

Each time an order is created or modified in HubRise, Uber Direct Bridge can send a quote request or a delivery request to Uber Direct, based on the criteria defined on the [Configuration](/apps/uber-direct/configuration#delivery-criteria) page.

### Quote Request

If the order meets the delivery criteria and no quote has yet been created, Uber Direct Bridge:

1. Requests a delivery quote from Uber Direct. See [Information Sent to Uber Direct](#delivery-information) for the data sent.
2. Saves the quote in HubRise as a _Delivery Quote_ attached to the order. The saved information includes:

   - Carrier name: `Uber Direct`
   - Carrier ref code: `uber_direct`
   - Quote ref code, which is the unique quote ID in Uber Direct
   - Delivery fee
   - Pickup time
   - Dropoff time

### Booking the Delivery

Depending on the booking mode configured in Uber Direct Bridge:

- **Auto-book deliveries**: The delivery is created immediately.
- **Request a quote and wait for confirmation**: The delivery is created only when the quote is accepted.

When sending a delivery request, Uber Direct Bridge:

1. Sends the quote ID and order details to Uber Direct.
2. Attaches a _Delivery_ resource to the HubRise order, which contains the quote details plus the following additional information:

   - Delivery ref code, which is the unique delivery ID in Uber Direct
   - Delivery status, initialised to `pending`
   - Tracking URL to locate the courier in real time
   - Courier name
   - Courier phone number

## Information Sent to Uber Direct {#delivery-information}

When a delivery is created, Uber Direct Bridge sends the following information to Uber Direct:

### Pickup Information

These details come from the Uber Direct Bridge configuration.

- Business name
- Pickup address, including latitude and longitude
- Phone number
- Instructions for the courier

### Dropoff Information

- Customer full name
- Customer phone number
- Delivery address, including latitude and longitude
- Order delivery notes

### Order Information

- Requested pickup or delivery time, based on `expected_time` and `expected_time_pickup`. If `expected_time_pickup` is `true`, it is a pickup time; otherwise, it is a delivery time. If `expected_time` is empty, or `delivery_asap` is `true`, Uber Direct dispatches a courier ASAP
- Collection code, from the `collection_code` field
- Order total amount
- List of items with labels, quantities, prices, and options

### Return Settings

These settings are defined in the Uber Direct Bridge configuration.

- Action if delivery fails: leave at the door or return the order
- Return instructions

## Delivery Status

Uber Direct sends real-time delivery status updates via webhooks. The delivery status on Uber Direct is defined by the `status` and `courier_imminent` fields. The `courier_imminent` field indicates that the courier is approximately 1 minute away from the pickup or dropoff point.

Uber Direct Bridge updates the order and delivery status in HubRise according to the following table:

| Uber Direct Status | Courier Imminent | HubRise Delivery Status | HubRise Order Status |
| ------------------ | ---------------- | ----------------------- | -------------------- |
| `pending`          | -                | `pending`               | -                    |
| `pickup`           | `false`          | `pickup_enroute`        | -                    |
| `pickup`           | `true`           | `pickup_approaching`    | -                    |
| `pickup_complete`  | -                | `pickup_waiting`        | `in_delivery`        |
| `dropoff`          | `false`          | `dropoff_enroute`       | -                    |
| `dropoff`          | `true`           | `dropoff_approaching`   | -                    |
| `delivered`        | -                | `delivered`             | `completed`          |
| `canceled`         | -                | `cancelled`             | `delivery_failed`    |
| `returned`         | -                | -                       | `delivery_failed`    |

## Courier Position

While the courier is travelling, Uber Direct sends position updates roughly every 20 seconds.

Upon receiving these updates, Uber Direct Bridge updates the following fields in the _Delivery_ resource attached to the HubRise order:

- Courier phone number and access code, as soon as they are available
- Courier latitude and longitude

## Simulated Delivery

Uber Direct offers a feature to simulate real deliveries for testing purposes. In this mode, Uber Direct simulates the full delivery lifecycle, including status changes and courier position updates.

To enable automated tests, add a custom field to your HubRise order as follows:

```json
{
  "status": "new",
  "service_type": "delivery",
  // other order fields...
  "custom_fields": {
    "uber_direct": {
      "robo_courier": {
        "mode": "auto"
      }
    }
  }
}
```

When this custom field is present, Uber Direct simulates the delivery lifecycle, including status changes from `pending` to `delivered`.

In the `robo_courier` custom field, you can provide any `robo_courier_specification` value supported in the [Uber Direct API documentation](https://developer.uber.com/docs/deliveries/guides/robocourier). For example, you can set the mode to `custom` and specify the desired timings for each status change.
