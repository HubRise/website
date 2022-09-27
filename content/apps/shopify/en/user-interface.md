---
title: User Interface
position: 3
layout: documentation
meta:
  title: User Interface | Shopify | HubRise
  description: How to navigate the Shopify main page to access information about the orders and customise the behaviour of the bridge. Synchronise your data.
---

From Shopify Bridge, you can read the logs of all the operations between HubRise and Shopify, and access the configuration settings of the integration.

## Latest Operations

This is the default page when you open the bridge. It displays the latest API operations between HubRise, Shopify, and Shopify Bridge.

Operations can either be related to a specific order, or be generic system requests performed by Shopify Bridge.

Each row in the page shows the following information about an operation:

- **TIME**: The date and time of the order.
- **ORDER**: The HubRise order ID, for order operations.
- **DESCRIPTION**: An optional description for operations that are not related to a specific order. It could be empty, or inform of a `System request` or a `Catalog push`.
- **STATUS**: The status of the order. The value `OK` indicates that the order has been successfully sent, otherwise an error code will be displayed in red.

The **System request** label indicates that the operation is not related to a specific order.

Clicking on a row will open a new page displaying the logs associated with the operation.

### Order Operation

Selecting an order operation from the list in the main page will display all the logs of the API requests exchanged between HubRise and Shopify via Shopify Bridge.

Requests are ordered with the latest on top, and those related to the same order event (order received, order cancelled, etc.) are visually grouped together.

Each row in the logs displays the following information:

- **Time**: The date and time the request was sent.
- **Direction**: The apps sending and receiving the request, in the format Origin → Destination.
- **Endpoint**: The status of the request. The value `OK` indicates that the request has been successfully received, otherwise a message will explain the type of error occurred.

Clicking on a request will expand it to reveal the detailed logs of the request and its response.

Logs are a powerful debugging tool in case of issues. To understand in detail how to read logs, see [Understanding HubRise Logs](/docs/hubrise-logs/).

### System Request Operation

The layout of a system request page is identical to that of an order page.

System requests are generally sent by Shopify Bridge to notify HubRise about a change in the configuration or to fetch the most up-to-date information. As an example, the following image displays a request to update the Shopify Bridge callback after a configuration change.

System request pages can provide useful debugging insights to support teams, but are rarely of interest to other users.

## Configuration

To access the Shopify Bridge configuration page, open the **Configuration** tab or click on the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> at the top right hand corner of the page to expand the menu, then click **Configuration**.

From this page, you will be able to customise the behaviour of Shopify Bridge. For more details, see [Configuration](/apps/shopify/configuration).

## Language and Navigation

In the top right corner of the screen, you can click on the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> to expand the menu. From there, you can change the language of the page to English or French.

Clicking on the Shopify and HubRise logos on top of any page of Shopify Bridge will bring you back to the **Latest Operations** page.
