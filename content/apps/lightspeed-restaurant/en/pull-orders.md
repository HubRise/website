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

![Enable the feature to pull local Lightspeed orders to HubRise from the configuration page of Lightspeed Restaurant Bridge](./images/014-configuration-page.png)

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

### Service Types

Dine-in sales in Lightspeed are created in HubRise as `eat-in` orders, while take-away sales are created as `collection` orders. There is no way to differentiate between take-away and delivery orders.

### Additional Information

Lightspeed Restaurant Bridge receives additional information about the order, such as the table number and the time the order was paid for.
