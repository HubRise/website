---
title: Troubleshooting
path_override: troubleshooting
position: 6
layout: documentation
meta:
  title: Troubleshooting | LivePepper | HubRise
  description: Troubleshooting LivePepper connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

## Verify Product Mapping {#verify-mapping}

To confirm that every LivePepper menu item has an associated EPOS code, navigate to **Maintenance** > **Custom Actions** from the left navigation panel. Among the various reports displayed, you'll find one labeled **Missing POS codes**. This report lists all products, deals, and their related attributes lacking assigned EPOS ref codes.

Please note that missing EPOS ref codes for payment methods, service types, and delivery charges will not be reported in this section. Not all EPOS systems require these codes, so their absence isn't necessarily indicative of an error.

## Verify the Connection to HubRise

These steps require that you have already connected LivePepper to HubRise. For more information on connecting LivePepper to HubRise, see [Connect to HubRise](/apps/livepepper/connect-hubrise).

To verify the connection between LivePepper and HubRise, place a test order in LivePepper and check that it is transmitted to HubRise.

### Create a Test Order in LivePepper

1. Log in to your LivePepper back office.
1. Select **View your website** from the top of the page. This will open your LivePepper website in another browser tab or window.
1. Place an order on your LivePepper website.
1. Return to the LivePepper back office, and from the left navigation panel click **Orders**. The new order will be present.

### View Test Orders Transmitted to HubRise

When LivePepper is connected to HubRise, orders placed in LivePepper are transmitted to HubRise immediately.

To verify that your test order was transmitted to HubRise, follow these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. If prompted, log in with your HubRise user profile, which is the email address you used when you created your account.
1. From HubRise, click **DATA** > **ORDERS**.
1. Find your test order. If you can see the order, the connection between LivePepper and HubRise is working correctly.

## LivePepper Support

The LivePepper support team can be contacted at support@livepepper.com for issues with the configuration of the online ordering system.
