---
title: Troubleshooting
position: 5
layout: documentation
meta:
  title: Troubleshooting | LivePepper | HubRise
  description: Troubleshooting LivePepper connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

## Verify Product Mapping

To verify that all LivePepper menu items have had an EPOS code assigned, select **Maintenance** > **Custom Actions** menu from the left navigation panel. One of the reports displayed is **Missing POS codes**. It shows all products, deals and related attributes that do not have EPOS ref codes assigned.

[comment]: # "Might want to include screenshot of this page here"

Missing EPOS ref codes for payment methods, service type and delivery charges will not be reported here as these depend on the EPOS you are connecting with.

## Verify the Connection to HubRise

These steps require that you have already connected LivePepper to HubRise. For more information on connecting LivePepper to HubRise, see [Connect to HubRise](/apps/livepepper/connect-hubrise/).

To verify the connection between LivePepper and HubRise, place a test order in LivePepper and check that it is transmitted to HubRise.

### Create a Test Order in LivePepper

1. Log in to your LivePepper back office.
1. Select **View your website** from the top of the page. This will open your LivePepper website in another browser tab or window.
1. Place an order on your LivePepper website.
1. Return to the LivePepper back office, and from the left navigation panel click **Orders**. The new order will be present.

### View Test Orders Transmitted to HubRise

When LivePepper is connected to HubRise, orders placed in LivePepper are transmitted to HubRise immediately.

To verify that your test order was transmitted to HubRise, follow these steps:

1. Log in to your HubRise account. This can be done from your LivePepper back office by selecting **Settings > Add-ons**, then click **Go to your HubRise account**.
1. If prompted, log in to your HubRise user account.
1. From HubRise, click **Data** > **Orders**.
1. Find your test order. If you can see the order, the connection between LivePepper and HubRise is working correctly.

## LivePepper Support

The LivePepper support team can be contacted at [support@livepepper.com](mailto:support@livepepper.com) for issues with the configuration of the online ordering system.
