---
title: Settings
position: 5
layout: documentation
meta:
  title: Settings | OrderLine | HubRise
  description: Change OrderLine's settings, including status flow, and language preferences. Synchronise data between your EPOS and your apps.
---

The **Settings** page lets you customise the display and functionality of OrderLine. To access the **Settings** page, select the gear icon <InlineImage width="20" height="20">![OrderLine Settings Icon](../images/035-settings.jpg)</InlineImage> in the upper right hand corner of the screen.

<video controls title="OrderLine Access Settings">
  <source src="../images/031-en-access-settings.webm" type="video/webm" />
</video>

The following options are available through the **Settings** menu:

- **General**
- **Order status**
- **Notifications**

## General

In **Settings** > **General**, you can select the display language. OrderLine currently supports **English** and **French**.

![General Settings](../images/009-en-settings-general.png)

## Order Status

In **Settings** > **Order status**, you can configure the order status flow, which determines the statuses that an order can change to from the current status.

![Settings status](../images/014-en-settings-order-status.png)

Orders always start with **New**, but can proceed in different ways, depending on how you set up the status flow. For example, a status flow might allow orders to be **Accepted**, then **In delivery**, then ending with **Completed**, with every status except **Completed** able to lead to **Rejected**:

![Status flow example](../images/010-en-2x-status-flow-example.png)

You can use the OrderLine standard status flow, simplify it, or personalise it completely to match the way you work.

The following statuses are available:

- New
- Received
- Accepted
- In Preparation
- Awaiting Shipment
- Awaiting Collection
- In delivery
- Completed
- Rejected
- Cancelled
- Delivery Failed

To change the status flow, follow these steps:

1. For each status, select the <InlineImage width="40" height="42">![OrderLine Plus Icon](../images/034-orderline-status-add-specific.jpg)</InlineImage> plus symbol to set the statuses that an order can change to from the current status. The <InlineImage width="40" height="40">![OrderLine Status Added Checkmark Icon](../images/037-orderline-status-added.jpg)</InlineImage> checkmark indicates that the status was already selected. To remove all options, select **Uncheck all**.
1. Repeat for each status you want to change.

For example, if you want to add **Delivery Failed** as a possible status from **In Delivery**, you need to select **Delivery Failed** from the list of possible statuses for **In Delivery**.

<video controls title="OrderLine Set Status Flow Example">
  <source src="../images/011-en-set-status-flow.webm" type="video/webm" />
</video>

## Additional Data Prompt

When an order is set to a specified status, OrderLine can prompt the user for an updated **Delivery Time**, or a **Comment**.

---

**IMPORTANT NOTE:** OrderLine does not send out emails or updates to clients directly. These are sent by your online ordering solution under two conditions: Your online ordering solutions supports customer messaging.
Customer messaging has been integrated with HubRise. Before setting up this feature, check that both of these conditions are met. It is recommended to create a test order and verify that the updated confirmation time and comments are sent to the client.

---

To prompt the user to update the **Delivery Time** based on the status, follow these steps:

1. Select the status list under **Prompt for expected delivery time...**
1. Select the <InlineImage width="40" height="42">![OrderLine Plus Icon](../images/034-orderline-status-add-specific.jpg)</InlineImage> plus symbol to set a status a user can select from. To remove all options, select **Uncheck all**. The <InlineImage width="40" height="40">![OrderLine Status Added Checkmark Icon](../images/037-orderline-status-added.jpg)</InlineImage> checkbox symbol indicates that status was already selected.

The following demonstrates adding a delivery time prompt when an order is set to the status **In Delivery**.

<video controls title="OrderLine in Delivery Prompt">
  <source src="../images/012-en-add-prompt-in-delivery.webm" type="video/webm" />
</video>

Users can be prompted to add a comment when an order is set to a specific status, which will be related to the client. Use these steps to prompt users for a comment based on the new order status:

1. Select the status list under **Prompt for user's comment when updating the order status to**.
1. Select the <InlineImage width="40" height="42">![OrderLine Plus Icon](../images/034-orderline-status-add-specific.jpg)</InlineImage> symbol to set a status a user can select from. To remove all options, select **Uncheck all**. The <InlineImage width="40" height="40">![OrderLine Status Added Checkmark Icon](../images/037-orderline-status-added.jpg)</InlineImage> indicates that status was already selected.

The following example adds a prompt for a user to comment when Orders are set to **COMPLETED**.

<video controls title="OrderLine Prompt Comment Example">
  <source src="../images/013-en-add-prompt-user-comment.webm" type="video/webm" />
</video>

## Hide Orders

Orders that match a specific status can be hidden from the **Today's Orders** list. Hidden Orders can be displayed from **Today's Orders** by selecting the hidden order card.

To hide Orders from the **Today's Orders** list, follow these steps:

1. Select the status list under **Hide orders in these statuses from Today's orders list**.
1. Select the <InlineImage width="40" height="42">![OrderLine Plus Icon](../images/034-orderline-status-add-specific.jpg)</InlineImage> symbol to hide an order with this status. To remove all options, select **Uncheck all**. The <InlineImage width="40" height="40">![OrderLine Status Added Checkmark Icon](../images/037-orderline-status-added.jpg)</InlineImage> indicates that status was already selected.

The following example shows the setting to hide **Completed** Orders.

<video controls title="OrderLine Status Hide Example">
  <source src="../images/015-en-setting-hidden-completed.webm" type="video/webm" />
</video>

## Notifications

Users can be prompted with a sound when new Orders are fetched by OrderLine based on the Notification settings. This applies both to **Today's Orders** and **Future Orders**.

![Notifications settings](../images/016-en-settings-notifications.png)

The following settings are available:

| Settings | Description                                                               |
| -------- | ------------------------------------------------------------------------- |
| Repeat   | How many times the notification sound is played.                          |
| Internal | How long OrderLine will wait before playing the notification sound again. |
| Ringtone | The tune that the notification sound will play.                           |

Some ringtones have sharper sounds than others. Select the tone that best suits your taste and environment. Volume can be changed in your device settings and not in OrderLine.

See the following video as an example of how to set the Notifications settings.

<video controls title="OrderLine Set Notifications Settings Examples">
  <source src="../images/025-en-settings-notifications.webm" type="video/webm" />
</video>
