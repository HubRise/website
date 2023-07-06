---
title: Manage Orders
position: 6
layout: documentation
meta:
  title: Manage Orders | OrderLine | HubRise
  description: Instructions on how to view order details, to update the order status, and to print a receipt. Connect apps and synchronise your data.
---

OrderLine users can change the statuses flow to manage orders in the way that best suits the business. This section describes the default status flow to accept, or print the order receipt by selecting the corresponding button. To customise this flow, see [Order Status](/apps/orderline/settings/#order-status).

## Receive Orders

Upon order receipt, OrderLine displays it under the **Today's Orders** or **Future Orders** tab, based on the delivery date.

OrderLine can also emit a sound notification to inform you of new orders. To configure sound notifications, see [Notifications](/apps/orderline/settings#notifications) in the **Settings** section.

---

**IMPORTANT NOTE:** Browsers may block sound notifications. To keep them permanently enabled, follow the instructions in the [Keep Sound Notifications Enabled](/apps/orderline/faqs/keep-sound-notifications-enabled/) FAQ.

---

On first connection, OrderLine synchronizes all orders from the past 30 days.

## View Order

To view the order details, click on the order card. To close it, click the close icon <InlineImage width="23" height="23">![OrderLine Close icon](../images/032-close.png)</InlineImage> or anywhere outside the card.

![OrderLine Order Card Details](../images/019-en-order-card-details.png)

Order cards display all the details needed to process the order, including the following:

- Client address. A **View in Google Maps** link will be displayed if the online ordering solutions sends the GPS coordinates to HubRise.
- Order creation date and time.
- Expected date and time for delivery or collection requested by the customer.
- Confirmed date and time, which initially matches the expected time, until an OrderLine user updates it to the actual delivery time.
- Order type, indicating processing mode: **DELIVERY**, **COLLECTION** or **EAT-IN**.
- List of products to prepare, including customer notes if any.
- Current order status. Users can update the status for an order, or print the order receipt by selecting the corresponding button.

## Update Order's Status

To update an order's status, open the order card and select the relevant button on the card's right column.

![OrderLine Order Card Details](../images/019-en-order-card-details.png)

Your OrderLine configuration may allow you to provide additional data during certain status updates, such as:

- An optional comment, typically requested when marking an order as **Cancelled** to justify the cancellation. For more information, see [Additional Data Prompt](/apps/orderline/settings/#additional-data-prompt).
- A confirmed delivery time, generally requested when an order is marked as **Accepted**. If not specified, the order's expected delivery time will be used. For more information, see [Additional Data Prompt](/apps/orderline/settings/#additional-data-prompt).

To modify the delivery time or add beside the status button. After making your adjustments, click the button to confirm.

---

**IMPORTANT NOTE:** Your online ordering system must support delivery time updates and messaging for additional data prompts to be taken into account.

---

Certain status updates, like marking an order as **Completed**, can remove the order from the **Today's Orders** list based on your OrderLine configuration. To view it again, select the **Today's Orders** hidden card. To adjust the hidden statuses, see [Hide Orders](/apps/orderline/settings/#hide-orders).

## Print Order

OrderLine supports printing on any printer recognized by your web browser via the system's print dialog.

To print an order receipt, follow these steps:

1. Access the order details.
1. Click **PRINT**.
1. Follow the instructions on the browser print dialog.

Receipts are presented into sections for readability with a solid line starting and ending each section, mirroring the order card's information. For more information on order cards, see [View Order](#view-order).

![OrderLine Order Receipt Example](../images/030-en-2x-receipt-example.jpg)

Receipts include the following information:

- Order type: **DELIVERY**, **COLLECTION** or **EAT-IN**.
- Payment method.
- Delivery address, comments, and GPS coordinates (if supplied by the online ordering solution).
- Expected date and time.
- Confirmed date and time will only be displayed if it differs from the expected delivery time.
- Deal names followed by the associated products.
- Ordered products, grouped with any included additions or exclusions. Standard options that were removed are struck out.
- Order number reference.
