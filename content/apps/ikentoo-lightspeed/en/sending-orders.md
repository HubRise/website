---
title: Sending Local Orders
position: 8
layout: documentation
meta:
  title: Sending Local Orders | Lightspeed Restaurant (K Series) | HubRise
  description: Find out the technical details of how local orders are sent from Lightspeed to HubRise, which fields are passed and which are not.
---

---

**IMPORTANT NOTE**: Lightspeed Restaurant (K Series) was formerly known as iKentoo. iKentoo Bridge will soon be renamed Lightspeed Bridge to align with the new name.

---

iKentoo Bridge can pull local orders created and closed from your Lightspeed Restaurant (K Series) EPOS to HubRise.
This page explains how to enable this feature from the Bridge and what information is sent to HubRise.

## Enabling The Feature

To start pulling local Lightspeed orders into HubRise, you need to activate this feature from the Configuration page of iKentoo Bridge, first. Follow these steps.

1. From the iKentoo Bridge main page, click the arrow <InlineImage width="20" height="20">![Arrow icon](../images/001-arrow.jpg)</InlineImage> at the top right corner of the page to expand the menu, then click **Configuration**.
1. From the **Orders pulled from iKentoo** section, select the behaviour **Pull iKentoo sales on payment**.
1. Click **Save** to confirm.

![Enable the feature to pull local Lightspeed orders to HubRise from the configuration page of iKentoo Bridge](../images/020-en-bridge-configuration.png)

iKentoo Bridge fetches new orders every 30 seconds.

---

**IMPORTANT NOTE:** Only closed orders, that is, orders that have been paid for in the EPOS, are currently sent to HubRise. Support for open orders will be added soon, as well.

---

## Information Sent To HubRise

The following sections describe which information about local orders is sent to HubRise.

### Items and Options

iKentoo Bridge sends to HubRise the complete information about items and options in a local order, including name, EPOS ref code, quantity, and price.

Information about the course number is not sent to HubRise.

### Order Statuses

All local orders are created in HubRise with the default status "accepted".

### Payments

iKentoo Bridge sends to HubRise the complete information about the payment in a local order, including name, EPOS ref code, and amount.

### Service Types

All local orders are created in HubRise as eat in orders. iKentoo Bridge sends to HubRise the service type ref code corresponding to eat in orders in Lightspeed, when available.

### Additional Information

iKentoo Bridge sends to HubRise additional information about the local order, such as the table number and the time the order was paid for.
