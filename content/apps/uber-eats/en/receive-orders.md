---
title: Receive Orders
path_override: receive-orders
position: 6
layout: documentation
meta:
  title: Receive Orders | Uber Eats | HubRise
  description: Find out the technical details of how orders are received from Uber Eats into HubRise, which fields are passed and which are not.
---

Connecting Uber Eats to HubRise allows you to receive Uber Eats orders directly in your EPOS or any other solution connected to your HubRise account.

Your Uber Eats tablet can be switched off if you have enabled tabletless integration. For more information, see [Can Orders Be Sent Directly To My EPOS Without Using Uber Eats Tablets?](/apps/uber-eats/faqs/send-orders-to-epos-without-tablet).

This page describes the information Uber Eats sends to HubRise and the way delivery information is synchronised between the two platforms. It helps you understand how orders will be received on your EPOS and how delivery tracking works when you use your own couriers (BYOC — _Bring Your Own Courier_).

## Items and Options

### Items Encoding

For every item in the order, Uber Eats Bridge provides the following information:

- `sku_ref`: The ref code of the item.
- `product_name`: The product name.
- `sku_name`: The name of the SKU, if available. SKUs are a special kind of modifiers in Uber Eats: their ref code always equals `MULTISKU`.
- `price`: The price for a single item.
- `quantity`: The quantity of items included in the order.
- `options`: The modifiers attached to the item.

### Options Encoding

For every modifier in the order, Uber Eats Bridge provides the following information:

- `option_list_name`: The name of the modifier group.
- `name`: The modifier name.
- `ref`: The modifier ref code.
- `price`: The price for a single modifier.

Every option has single quantity. Multiple identical modifiers are encoded in separate option objects.

## Order Statuses

---

**IMPORTANT NOTE:** In this section, we capitalise the first letter of Uber Eats statuses to make them easier to distinguish from HubRise status names. For example, `Accepted` is a Uber Eats status, while `accepted` is a HubRise status.

---

### Uber Eats Statuses

Uber Eats orders can be updated with the following statuses:

- `Accepted`: The order has been accepted by the EPOS.
- `Denied`: The order could not be sent to the EPOS.
- `Cancelled`: The order has been cancelled.
- `Ready`: The order is ready for delivery.

Status update rules:

1. New orders must be switched to `Accepted`, `Denied`, or `Cancelled` within 10 minutes. Orders which are still pending after this period of time are automatically cancelled by Uber Eats.
2. You can only deny an order before it has been accepted.
3. An order can be cancelled at any time by different parties (customer through Uber support, store through integration or tablet), even after it has been accepted.
4. Once an order reaches a terminal state (completed, cancelled, or failed), no further status updates are possible.

### When the Status Changes in HubRise

Uber Eats Bridge lets you decide which HubRise status triggers the `Accepted` status on Uber Eats. This is useful to handle different scenarios when your EPOS updates the order status. For example, if your EPOS marks an accepted order as `received` on HubRise, you can still notify Uber Eats that the order is `Accepted`.

When the status of an order changes to `rejected` in HubRise, Uber Eats Bridge notifies Uber Eats that the order is `Denied`, but only if the order has not been accepted yet.

When the status of an order changes to `cancelled` in HubRise, Uber Eats Bridge notifies Uber Eats that the order is `Cancelled`. This can be done at any time, even after the order has been accepted.

When the status of an order changes to `awaiting_shipment`, Uber Eats Bridge notifies Uber Eats that the order is `Ready`. Marking orders ready only affects orders delivered by Uber. For such orders, the effects are identical to pressing the **Order Ready** button on the Uber Eats tablet:

1. If Uber has not yet dispatched a driver because the preparation time did not run out, this will let Uber know that it can dispatch a driver immediately.
2. It improves preparation time predictions for future orders.

Marking orders ready is optional. By default, Uber Eats will mark orders ready automatically after the preparation time runs out.

Other HubRise statuses are not supported and are not sent to Uber Eats.

### When the Status Changes in Uber Eats

When eaters cancel their orders, Uber Eats immediately marks them as `cancelled` on HubRise.

When Uber Eats rejects orders because you fail to acknowledge them in time, it does not update their status on HubRise.

## Delivery Tracking {#delivery-tracking}

We keep Uber Eats and HubRise in sync for delivery progress and driver position. The direction of the updates depends on who provides the courier:

- Delivery by Uber Eats: Uber Eats sends driver status and location to HubRise.
- Delivery by the restaurant: HubRise sends status and driver location to Uber Eats.

### Delivery by Uber Eats

Each time the delivery moves to a new state (for example, driver en route, driver arrived, delivered), the Bridge updates the corresponding Delivery resource attached to the HubRise order:

- The delivery `status` is updated according to the following mapping:

| Uber Eats status      | HubRise Delivery status |
| --------------------- | ----------------------- |
| `SCHEDULED`           | `pending`               |
| `EN_ROUTE_TO_PICKUP`  | `pickup_enroute`        |
| `ARRIVED_AT_PICKUP`   | `pickup_waiting`        |
| `EN_ROUTE_TO_DROPOFF` | `dropoff_enroute`       |
| `ARRIVED_AT_DROPOFF`  | `dropoff_waiting`       |
| `COMPLETED`           | `delivered`             |
| `FAILED`              | `cancelled`             |

- Driver and delivery details are saved in the following HubRise delivery fields when provided by Uber Eats:
  - `status` (using the mapping above)
  - `estimated_pickup_at`
  - `estimated_dropoff_at`
  - `driver_pickup_url`
  - `driver_name`
  - `driver_phone`
  - `driver_phone_access_code`
  - `driver_latitude`
  - `driver_longitude`

### Delivery by the Restaurant

When you use your own couriers (BYOC), you can update the delivery status and driver location in HubRise. The Bridge then relays this information to Uber Eats.

#### Updating the Delivery Status

The Bridge maps the HubRise Delivery's `status` field to the corresponding Uber Eats status:

| HubRise Delivery status                  | Uber Eats BYOC status |
| ---------------------------------------- | --------------------- |
| `dropoff_enroute`                        | `started`             |
| `dropoff_approaching`, `dropoff_waiting` | `arriving`            |
| `delivered`                              | `delivered`           |

#### Updating the Driver Location

When the driver coordinates (`driver_latitude`, `driver_longitude`) change in HubRise, the bridge forwards the new position to Uber Eats.

If the order is marked as `delivered`, Uber Eats stops displaying the map and no longer accepts location updates.

## Service Types

Uber Eats supports four service types:

- Delivery by Uber Eats
- Delivery by the restaurant
- Customer collection
- Eat-in

These are typically associated with specific ref codes in your EPOS. For more information, see your EPOS documentation in our [apps page](/apps).

## Order Times

Uber Eats provides the time when the order should be ready for pickup, either by the customer or a delivery rider. For restaurant delivery orders, this is the time the restaurant driver should pick up the order, not the time the customer expects the order to be delivered. Uber Eats Bridge sends this time to HubRise as the `expected_time` field.

To set a different time, update the `confirmed_time` field in HubRise. Uber Eats Bridge will send the updated time to Uber Eats when the order status changes to `Accepted`. Updating this field after the order has been accepted will have no effect.

## Customer

Uber Eats never provides the customer's full name and email address in their API. Therefore, Uber Eats Bridge never creates customers in HubRise, but includes the customer's details directly in the order.

For every type of order, Uber Eats Bridge retrieves the following information from Uber Eats:

- `first_name`: The customer's first name.
- `last_name`: The initial of the customer's last name.
- `phone`: Uber Eats support number. Note: This is not the customer's phone number.
- `delivery_notes`: The access code to identify the order when calling Uber Eats support and the delivery notes left by the customer, in the format `Phone access code: <access_code>. <note>`.

Additionally, for restaurant delivery orders, Uber Eats Bridge retrieves the following fields:

- `address_1`: The first line of the address.
- `address_2`: The second line of the address.
- `city`: The city of the address.
- `postal_code`: The postcode of the address.
- `latitude`: The latitude of the address.
- `longitude`: The longitude of the address.

## Discounts

The discounts applied to the order are passed in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is `Discount` by default.
- `ref`: The ref code of the discount. Its value is set from the Configuration page of Uber Eats Bridge and should match the value in your EPOS.
- `price_off`: The amount of the discount.

## Charges

Uber Eats Bridge includes charges for restaurant delivery orders only. Charges for every other type of orders are collected by Uber Eats and therefore not transmitted to the restaurant.

Uber Eats Bridge encodes the following types of charges: delivery charges, small order fee, and tip for the restaurant.

For each charge present in the order, the available fields are the following:

- `name`: The name of the charge, which is `Delivery charge`, `Tip`, or `Small order fee`.
- `type`: The type of charge.
- `ref`: The charge ref code. Its value can be set from the Configuration page of Uber Eats Bridge and should match the value in your EPOS.
- `price`: The charge amount.

## Customer Notes

Product-level customer notes are encoded in the `customer_notes` field.
