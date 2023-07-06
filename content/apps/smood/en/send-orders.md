---
title: Send Orders
position: 5
layout: documentation
meta:
  title: Send Orders | Smood | HubRise
  description: Find out the technical details of how orders are sent from Smood into HubRise, which fields are passed and which are not.
---

When you connect Smood to HubRise, your orders are automatically sent to HubRise. Then HubRise sends them to your EPOS or any other solution connected to HubRise.

This page describes the information Smood sends in orders.

## Status

Order status updates flow from Smood to HubRise, and from HubRise to Smood.

### When the Status Changes in HubRise

When the status of an order changes in HubRise, for example when the EPOS marks the order as completed, HubRise sends the new status to Smood.

Smood then updates the status of the order in its back office, depending on the status received from HubRise:

- `cancelled`, `delivery_failed`, or `rejected`: The order is marked for manual processing. A Smood operator will contact the restaurant.
- `awaiting_collection` or `awaiting_shipment`: The order is ready for collection by the driver or the customer.
- `in_delivery`: The order is being delivered. Only synced for restaurant delivery.
- `completed`: The order has been delivered. Only synced for restaurant delivery.

Other statuses, such as `received`, are ignored by Smood.

### When the Status Changes in Smood

Smood sends the following statuses to HubRise:

- `cancelled`: When the customer cancels the order.
- `in_preparation`: When the status is updated from the restaurant tablet.
- `awaiting_shipment` and `awaiting_collection`: When the status is updated from the restaurant tablet, depending on the service type.
- `in_delivery`: When a Smood driver picks up the order.
- `completed`: When the restaurant completes the order on the Smood tablet, or when the driver marks the order as delivered on the mobile app.

Smood always notifies HubRise about the cancellation of an order by sending the `cancelled` status. The other statuses are only synchronised if the **Enable automatic sync of status from Smood to HubRise** option is enabled in the [Configuration page](/apps/smood/configuration#synchronisation-settings).

## General Information

Smood sends the following general order information to HubRise:

- `service_type`: Can be `delivery` or `collection`.
- `service_type_ref`: The ref code of the service type, if defined in the [Configuration page](/apps/smood/configuration#service-types).
- `collection_code`: The order number, which consists of 3 letters and 4 numbers separated by a dash, e.g. `ABC-1234`.
- `customer_notes`: The preparation notes entered by the customer.

## Items and Options

Smood includes the complete information about items, including: `name`, `ref`, `quantity`, and `price`.

Orders also contain the complete information about options, including: `name`, `option_list_name`, `ref`, `price`, and `quantity`.

## Deals

Smood sends two types of deals to HubRise:

- Promotions created in the Smood back office, from the **Marketing** > **Promotions** section. They can be BOGOF or percentage discounts.
- Deals imported from a HubRise catalog.

Both types of deals are sent as `deals` in HubRise, with the following fields:

- `name`: The name of the promotion or deal.
- `ref`: The **Promotion ref code** defined in the [Configuration page](/apps/smood/configuration#promotions), for promotions, or the deals' ref codes, for deals imported from HubRise.

## Charges

For restaurant delivery orders, Smood sends delivery charges as a `charges` to HubRise:

- `name`: Smood sends `Delivery fee` in this field.
- `ref`: The **Delivery charge ref code** defined in the [Configuration page](/apps/smood/configuration#charges).
- `price`: The delivery charge.

## Discounts

Discounts are set up in the Smood back office, in the **Marketing** > **Discount vouchers** section.

They are sent to HubRise as `discounts`:

- `name`: The Voucher description set in the Smood back office.
- `ref`: The **Discount ref code** defined in the [Configuration page](/apps/smood/configuration#discounts).
- `amount`: The discount amount.

## Payments

Smood sends a payment with the following fields:

- `ref`: The **Online payment ref code** defined in the [Configuration page](/apps/smood/configuration#payments).
- `amount`: The total amount paid by the customer.

## Customer

Smood sends guest orders to HubRise, with the following customer details: `first_name`, `last_name`, `email`, `phone`, `address_1`, `city`, `postal_code`, `country`, `delivery_notes`, `latitude`, and `longitude`. Smood does not use `address_2` or `company_name`.
