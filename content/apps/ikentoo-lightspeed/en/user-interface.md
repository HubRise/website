---
title: User Interface
position: 3
layout: documentation
meta:
  title: User Interface | Lightspeed Restaurant (K Series) | HubRise
  description: Instructions on how to navigate through the iKentoo Bridge user interface. Connect apps and synchronise your data.
---

---

**IMPORTANT NOTE:** Lightspeed Restaurant (K Series) was formerly known as iKentoo. iKentoo Bridge will soon be renamed Lightspeed Bridge to align with the new name.

---

The user interface for iKentoo Bridge provides basic diagnostic information about your connection with Lightspeed Restaurant (K Series).
It also provides a link to the logs of the latest HubRise requests sent to the EPOS.

## Main Page

The main page of iKentoo Bridge displays the latest operations. Each row shows:

- **TIME**: The date and time of the operation.
- **STATUS**: The status of the operation. The value OK indicates that the operation has been successfull, otherwise a message will explain the type of error occurred.

Clicking on a row will open a new page displaying all the information about it.

On the top right corner of the iKentoo Bridge main page, the HubRise user and location connected are displayed, together with the iKentoo business location currently used. Clicking the down arrow <InlineImage width="28" height="21">![Down arrow icon](../images/001-arrow.jpg)</InlineImage> expands a menu where it is possible to change the language of the interface and to access the **Configuration page**.

---

**IMPORTANT NOTE:** The first time you access the logs from iKentoo Bridge, you will be asked to **Allow** the Bridge to access the information on your HubRise account.

---

![Main page](../images/003-en-2x-main-page-truncated.png)

## Operation Page

Selecting an operation from the list will display all the logs of the API requests exchanged between HubRise and the Lightspeed Restaurant (K Series) EPOS via iKentoo Bridge.

Requests are ordered with the latest on top, and each of them displays the following information:

- **TIME**: The date and time the order was placed.
- **DIRECTION**: The apps sending and receiving the request, in the format Origin → Destination.
- **STATUS**: The status of the request. The value **OK** indicates that the request has been successfully received, otherwise a message will explain the type of error occurred.
  **Clicking** on a request will expand it to reveal the detailed logs of the request and its response. Logs are a powerful debugging tool in case of issues. To understand in detail how to read logs, see the [HubRise documentation](/docs/hubrise-logs/).

![Order page](../images/005-en-2x-operations-page.png)

## Configuration Page

In the **Configuration page**, it is possible to change the Lightspeed business location associated with the HubRise location.

![Configuration page](../images/002-en-2x-configuration-page.png)
