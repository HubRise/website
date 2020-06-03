---
title: Troubleshooting
position: 4
layout: documentation
meta:
  title: LivePepper Connection to HubRise Troubleshooting
  description: Instructions on how resolve connection issues.
---

## Verify Product Mapping

To verify that all LivePepper menu items have had a POS code assigned, select **Maintenance** > **Custom Actions** menu from the left navigation panel. One of the reports displayed is **Missing POS codes**. It shows all products, deals and related attributes that do not have POS codes assigned. 

[comment]: # (Might want to include screenshot of this page here)

Missing POS codes for payment methods, service type and delivery charges will not be reported here as these depend on the EPOS you are connecting with.

## Verify the Connection to HubRise

Verifying your connection between LivePepper and HubRise involves tracking the path between orders to HubRise through the following steps:

1. Create test orders in LivePepper.
1. Verify the test orders in LivePepper.
1. View test orders transmitted to HubRise.

### Create Test Orders in LivePepper

The first step in verifying the connection between LivePepper and HubRise is by creating test orders.

These steps require that you have already connected LivePepper to HubRise. For more information on connecting LivePepper to HubRise, see [Connect to HubRise](/apps/livepepper/connect-hubrise/).

Once the connection is complete, test orders generated from LivePepper will be transmitted to HubRise. Follow this process to create a test order and verify it has been transmitted to HubRise.

1. Login to your LivePepper back office.
2. Select **View your website** from the top of the page. This will open your Livepepper site in another browser tab or window.
3. Generate an order.
4. Return to LivePepper, and from the left navigation panel click **Orders**. The new order will be present.

### View Test Orders Transmitted to HubRise

With the test order created in LivePepper, the next step is to verify that the order was transmitted to HubRise through the following steps:

1. Login to your HubRise account. This can be done from your LivePepper back office by selecting **Settings > Add-ons**, then click **Go to your HubRise account**.
2. If prompted, log into your HubRise user account.
3. From HubRise, click **Data** > **Orders**. The new Order will be displayed.
4. Click the new Order to verify the customer and order information is accurate.
5. The **Logs** section will contain the detailed JSON records of the communication between LivePepper and HubRise. For more information on how to read these logs, see [Understanding Logs in HubRise](/docs/hubrise-logs).

## HubRise Definitions vs LivePepper Definitions

Both HubRise and LivePepper have their own vocabulary. Understanding the differences between the terms used can help resolve troubleshooting issues.

| Description                           | HubRise Name | LivePepper Name |
| ------------------------------------- | ------------ | --------------- |
| Product code                          | sku_ref      | POS Code        |
| Special offer on the overall order    | Discount     | Deal            |
| Special offer on products             | Deal         | Deal            |
| The actual restaurant                 | Location     | Branch          |
| Restaurant Managers unique identifier | User ID      | Account         |
| Business brand                        | Account      | Site            |
