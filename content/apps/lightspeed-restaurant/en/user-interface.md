---
title: User Interface
path_override: user-interface
position: 3
layout: documentation
meta:
  title: User Interface | Lightspeed Restaurant | HubRise
  description: Instructions on how to navigate through the Lightspeed Restaurant Bridge user interface. Connect apps and synchronise your data.
---

The user interface for Lightspeed Restaurant Bridge provides basic diagnostic information about your connection with Lightspeed Restaurant.
It also provides a link to the logs of the latest HubRise requests sent to the EPOS.

## Main Page

The main page of Lightspeed Restaurant Bridge displays the latest operations. Each row shows:

- **TIME**: The date and time of the operation.
- **STATUS**: The status of the operation. The value OK indicates that the operation has been successfull, otherwise a message will explain the type of error occurred.

Clicking on a row will open a new page displaying all the information about it.

In the top right corner of the Lightspeed Restaurant Bridge main page, the connected HubRise user and location are displayed, alongside with the Lightspeed business location currently used. Clicking the down arrow expands a menu where it is possible to change the language of the interface and to access the **Configuration page**.

---

**IMPORTANT NOTE:** The first time you access the logs from Lightspeed Restaurant Bridge, you will be asked to **Allow** the Bridge to access the information on your HubRise account.

---

![Main page](./images/003-main-page-truncated.png)

## Operation Page

Selecting an operation from the list will display all the logs of the API requests exchanged between HubRise and the Lightspeed Restaurant EPOS via Lightspeed Restaurant Bridge.

Requests are ordered with the latest on top, and each of them displays the following information:

- **Time**: The date and time the order was placed.
- **Direction**: The apps sending and receiving the request, in the format Origin → Destination.
- **Endpoint**: The status of the request. The value `OK` indicates that the request has been successfully received, otherwise a message will explain the type of error occurred.

Clicking on a request will expand it to reveal the detailed logs of the request and its response.

![Order page](./images/005-operations-page.png)

Logs are a powerful debugging tool in case of issues. To understand in detail how to read logs, see [Understanding HubRise Logs](/docs/hubrise-logs/).

## Configuration Page

In the **Configuration page**, it is possible to customise the behaviour of Lightspeed Restaurant Bridge.
For more information, see [Configuration](/apps/lightspeed-restaurant/configuration).
