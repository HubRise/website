---
title: Send Orders
position: 5
layout: documentation
meta:
  title: Send Orders | App4 | HubRise
  description: App4 sends orders to your EPOS or any other connected solution through HubRise. Find out the technical details of how orders are sent, and which fields are passed.
---

App4 can send orders to your EPOS or any other connected solution through HubRise. You just need to connect App4 to send orders, no additional configuration is required.

## Information Sent To HubRise

The following sections describe which information App4 sends to HubRise.

### Items and Options

App4 sends the complete information about items and options, including name, ref code, quantity, and price.

For table orders, App4 sends a new order every time the order is updated at the restaurant.

### Order Statuses

App4 sends orders in the `New` status. Status updates on HubRise are immediately reflected on App4.

### Payments

App4 sends the complete information about the payment in a local order, including name, ref code, and amount.

### Service Types

The service type and service type ref are included in the order. To specify the service type ref for your store, contact the App4 support.
