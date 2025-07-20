---
title: Pull Orders
path_override: pull-orders
position: 10
layout: documentation
meta:
  title: Pull Orders | Lightspeed Restaurant | HubRise
  description: HubRise can pull orders from Lightspeed Restaurant EPOS. Find out the technical details of how local orders are received, which fields are passed and which are not.
---

HubRise can pull orders from your Lightspeed Restaurant EPOS as soon as they are paid for.

This page explains how to enable this feature and what information is sent to HubRise.

## Enable Pull Orders

To start pulling Lightspeed orders into HubRise, you need to enable the feature by following these steps:

1. Open Lightspeed Restaurant Bridge.
1. Select the **Configuration** tab.
1. From the **Pull orders from Lightspeed** section, select the **Enabled for dine-in sales** or **Enabled for all paid sales** option, depending on your needs.
1. Click **Save** to confirm.

Lightspeed Restaurant Bridge fetches new orders every 30 seconds. There can be a delay of up to 30 seconds between the time an order is paid for and the time it appears in HubRise.

---

**IMPORTANT NOTE:** Only sales that are registered in Lightspeed and paid are pulled into HubRise. Orders placed from third-party apps that are directly connected to the EPOS, and not via HubRise, are not pulled.

---

## Information Received in HubRise

The following sections describe which information about Lightspeed orders is received in HubRise.

### Items and Options

Lightspeed Restaurant Bridge receives the complete information about items and options, including name, EPOS ref code, quantity, and price.

Information about the course number is not received in HubRise.

### Order Statuses

If the bridge is configured to mark orders as completed, Lightspeed orders are created in HubRise with the default status `completed`. Otherwise, they are created with the status `received`. For more information, refer to the [Order Statuses](/apps/lightspeed-restaurant/configuration#order-statuses) section of the Configuration page.

### Payments

Lightspeed Restaurant Bridge receives the complete information about the payment in a local order, including name, EPOS ref code, and amount.

### Service Type

Orders pulled from Lightspeed are assigned a service type in HubRise based on the following rules:

- `eat_in`: Dine-in sales in Lightspeed.
- `collection`: Take-away sales in Lightspeed, unless they are matched as delivery.
- `delivery`: Orders with an account profile code matching those configured in the [Pull orders from Lightspeed](/apps/lightspeed-restaurant/configuration#pull-orders-from-lightspeed) section.

Without delivery account profiles configured, all take-away orders will be marked as `collection` in HubRise, as there is no native way to distinguish delivery orders in Lightspeed.

### Customer Data

When the customer data is available in Lightspeed, it is pulled into HubRise. This includes the customer's name, phone number, email address, and address.

### Additional Information

Lightspeed Restaurant Bridge receives additional information about the order, such as the table number and the time the order was paid for.
