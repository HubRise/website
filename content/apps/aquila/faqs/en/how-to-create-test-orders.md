---
title: How to Create Test Orders?
position: 1
layout: documentation
meta:
  title: Create Test Orders | Aquila FAQs | HubRise
  description: Create Test Orders to Verify Connection between Aquila and HubRise.
---

The first step in verifying the connection between Aquila and HubRise is by creating test orders.

These steps require that you have already connected Aquila to HubRise. For more information on connecting Aquila to HubRise, see [Connect to HubRise](/apps/aquila/connect-hubrise/).

Once the connection is complete, test orders generated from Aquila will be transmitted to HubRise. Follow this process to create a test order and verify it has been transmitted to HubRise.

1. Log in to your Aquila back office.
2. Open the corresponding ecommerce website.
3. Generate an order.
4. Return to Aquila, and from the left navigation panel click **Transactions** > **Orders**. The new order will be present.

With the test order created in Aquila, the next step is to verify that the order was transmitted to HubRise through the following steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
2. From HubRise, click **Data** > **Orders**. The new Order will be displayed.
3. Click the new Order to verify the customer and order information is accurate.
4. The **Logs** section will contain the detailed JSON records of the communication between Aquila and HubRise. For more information on how to read these logs, see [Understanding Logs in HubRise](/docs/hubrise-logs).
