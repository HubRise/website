---
title: Troubleshooting
path_override: troubleshooting
position: 4
layout: documentation
meta:
  title: Troubleshooting | TastyCloud | HubRise
  description: Troubleshooting TastyCloud connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

From time to time it may be necessary to troubleshoot certain issues with the connection between TastyCloud or HubRise. Should this need arise, the following information may be helpful.

## Verify Product Mapping

Follow these steps to verify the product mapping:

1. Log in to your TastyCloud back office.
1. Open the **Mapping des produits** (Products mapping) page
1. Successively open the 4 sections: **Produits** (Products), **Options** (Options), **Quantité** (Quantity), and **Menus** (Deals). Make sure that all TastyCloud items are mapped to HubRise by opening the dropdown on the left and checking that it is empty.

For more information, check the [Product Ref Code Mapping](/apps/tastycloud/map-ref-codes#products-and-options) section.

## Check Order Logs in HubRise

Place a test order on your website to verify the connection between TastyCloud and HubRise.

You should view the test order transmitted to HubRise through the following steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Click **Data** > **Orders**. Order will be displayed.
1. Click the new Order to verify the customer and order information is accurate.
1. The **Logs** section will contain the detailed JSON records of the communication between TastyCloud and HubRise. For more information on how to read these logs, see [Understanding Logs in HubRise](/docs/hubrise-logs/overview).

If the order is not visible, [check your connection with HubRise](/apps/tastycloud/connect-hubrise). If the order details are incorrect, [verify the Product Mapping](/apps/tastycloud/map-ref-codes). If none of this works, [contact TastyCloud support](#contact-support).

## TastyCloud Support {#contact-support}

The TastyCloud support team can be contacted at support@tastycloud.fr for issues with the configuration of the connection.
