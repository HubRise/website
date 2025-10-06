---
title: Receive Orders
path_override: receive-orders
position: 5
layout: documentation
meta:
  title: Receive Orders | Uber Direct | HubRise
  description: Find out the technical details of how orders trigger Uber Direct deliveries, how delivery status updates are synchronised, and how to track courier location in real-time.
---

When Uber Direct Bridge is connected to HubRise, it automatically requests delivery quotes or bookings to Uber Direct for orders created or updated in HubRise.

This page describes how orders trigger delivery requests, how delivery status is synchronised between Uber Direct and HubRise, and the information sent to Uber Direct when creating a delivery.

## Order Processing Flow

When an order is created or updated in HubRise, Uber Direct Bridge evaluates whether a delivery should be requested based on the criteria defined in the [Configuration](/apps/uber-direct/configuration#delivery-criteria) page.

### Delivery Quote Creation

If the order matches the delivery criteria and no quote has been created yet, Uber Direct Bridge will:

1. Request a delivery quote to Uber Direct. See [Delivery Information Sent to Uber Direct](#delivery-information) for the information sent.
2. Saves the quote in HubRise as a delivery quote resource attached to the order. The saved information includes:
   - **Carrier**: `Uber Direct`
   - **Carrier ref**: `uber_direct`
   - **Quote reference**: The unique quote ID from Uber Direct
   - **Fee**: The estimated delivery cost
   - **Estimated pickup time**: When the courier is expected to arrive at your location
   - **Estimated dropoff time**: When the courier is expected to deliver the order

### Delivery Creation

Depending on the booking mode configured in Uber Direct Bridge:

- **Auto-book deliveries**: The delivery is created immediately.
- **Request a quote and wait for confirmation**: The delivery is only created when the quote is accepted.

When the delivery is created, Uber Direct Bridge:

1. Sends a delivery creation request to Uber Direct with the quote ID and full order details.
2. Creates a delivery resource attached to the HubRise order. The delivery resource includes:
   - **Carrier**: `Uber Direct`
   - **Carrier ref**: `uber_direct`
   - **Delivery reference**: The unique delivery ID from Uber Direct
   - **Status**: `pending`
   - **Fee**: The final delivery cost
   - **Estimated pickup time**: When the courier will arrive at your location
   - **Estimated dropoff time**: When the order will be delivered
   - **Tracking URL**: A link to track the courier in real-time
   - **Driver name**: The name of the assigned courier
   - **Driver phone**: The phone number to contact the courier

## Delivery Information Sent to Uber Direct {#delivery-information}

When creating a delivery, Uber Direct Bridge sends the following information from HubRise to Uber Direct:

### Pickup Information

- Business name (from configuration)
- Pickup address (from configuration)
- Pickup phone number (from configuration)
- Pickup latitude and longitude (from configuration)
- Pickup instructions (from configuration)

### Dropoff Information

- Customer name (from order `customer.first_name` and `customer.last_name`)
- Delivery address (from order `customer` address fields)
- Delivery phone number (from order `customer.phone`)
- Delivery business name (from order `customer.company_name`, if available)
- Delivery latitude and longitude (from order `customer.latitude` and `customer.longitude`, if available)
- Delivery notes (from order `customer.delivery_notes`)

### Order Information

- Order ID (as external ID)
- Collection code (from order `collection_code`, used as manifest reference)
- Expected delivery time (from order `expected_time`, if available)
- Total order value
- List of items with names, quantities, and prices (including options)

### Delivery Settings

- Undeliverable action: `leave_at_door` or `return` (from configuration)
- Return instructions (from configuration, if applicable)

## Delivery Status Updates {#delivery-status-updates}

Uber Direct sends real-time updates about the delivery status via webhooks. The delivery status on Uber Direct comprises two fields: `status` and `courier_imminent`. The `courier_imminent` field indicates that the courier is approximately 1 minute away from the pickup or dropoff location.

Uber Direct Bridge maps the HubRise order status and delivery status according to the following table:

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

## Courier Location Updates {#courier-location}

In addition to status updates, Uber Direct sends real-time courier location updates approximately every 20 seconds while the courier is en route.

When a courier location update is received, Uber Direct Bridge updates the following fields in the HubRise delivery resource:

- **Driver phone**: The phone number to contact the courier
- **Driver phone access code**: A PIN code required when calling the driver
- **Driver latitude**: The current latitude of the courier
- **Driver longitude**: The current longitude of the courier

## Delivery Time

The `expected_time` field in the HubRise order is used as the dropoff ready time in Uber Direct. This indicates when the order should be ready for the courier to pick up and deliver to the customer.

If the `expected_time` is not set, Uber Direct will aim to pick up and deliver the order as soon as possible.

## Testing Deliveries {#testing-deliveries}

Uber Direct provides an **Automated Delivery Testing** feature that simulates courier movement and status changes at predefined intervals (approximately every 30 seconds). This is useful for testing the integration without requesting real deliveries.

To enable automated testing, add a custom field to your HubRise order:

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

When this custom field is present, Uber Direct will simulate the delivery lifecycle, including all status changes from `pending` to `delivered`.

You can further customise the testing behaviour, by setting the `robo_courier` custom field to any supported `robo_courier_specification` value in the [Uber Direct API documentation](https://developer.uber.com/docs/deliveries/guides/robocourier). For example, you can set the mode to `custom` and define specific status changes at given timestamps.
