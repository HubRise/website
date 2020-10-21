---
title: User Interface Walkthrough
position: 3
layout: documentation
meta:
  title: User Interface Guide for the HubRise PixelPoint Bridge
  description: Informs users on how navigate through the PixelPoint Bridge created by HubRise to connect the PAR PixelPoint EPOS solution to HubRise.
---

The user interface for the PixelPoint Bridge provides basic diagnostic information about your connection. It also provides a link to the logs of the latest HubRise requests sent to the EPOS.

## Main page

The main page of PixelPoint Bridge displays the latest received orders. Each row shows:

- **TIME**: The date and time of the order.
- **ORDER**: The HubRise order ID.
- **STATUS**: The status of the order. The value OK indicates that the order has been successfully sent, otherwise a message will explain the type of error occurred.

Clicking on an order will open a new page displaying all the information about it.

On the top right corner of the PixelPoint Bridge main page, the HubRise user and location connected are displayed, together with the API token currently used. Clicking the down arrow <InlineImage width="28" height="21">![Down arrow icon](../images/007-arrow.jpg)</InlineImage> expands a menu where it is possible to change the language of the interface and to access the **Configuration page**.

---

**IMPORTANT NOTE**: The first time you access the logs from PixelPoint Bridge, you will be asked to **Allow** the Bridge to access the information on your HubRise account.

---

![Main page](../images/004-en-main-page.png)

## Order page

Selecting an order from the list will display all the logs of the API requests exchanged between HubRise and the PixelPoint EPOS via the PixelPoint Bridge.

Requests are ordered with the latest on top, and each of them displays the following information:

- **TIME**: The date and time the order was placed.
- **DIRECTION**: The apps sending and receiving the request, in the format Origin → Destination.
- **STATUS**: The status of the request. The value OK indicates that the request has been successfully received, otherwise a message will explain the type of error occurred. Clicking on a request will expand it to reveal the detailed logs of the request and its response. A detailed description of the logs can be found in [Understanding Logs](/apps/pixelpoint-bridge/understanding-logs).

![Order page](../images/002-en-orders-page.png)

## Configuration page

In the **Configuration page**, it is possible to change or reset the API token associated with the location.

![Configuration page](../images/003-en-configuration-page.png)
