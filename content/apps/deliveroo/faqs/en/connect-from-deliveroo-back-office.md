---
title: Can I Connect to HubRise From Deliveroo Back Office?
position: 4
layout: documentation
meta:
  title: Connect From Deliveroo Back Office | Deliveroo FAQs | HubRise
  description: Instructions on how to connect your existing Deliveroo stores with HubRise directly from the Deliveroo back office.
---

To connect your Deliveroo stores to HubRise by yourself, enable HubRise directly from the Deliveroo back office, and then connect Deliveroo Bridge to your HubRise location.

To enable HubRise, follow these steps:

1. Log in to your [Deliveroo back office](https://restaurant-hub.deliveroo.net/).
1. Click **Settings** > **Till (POS)**, then click **Connect sites**.
1. From the **Connect sites** page, under **Which POS system do you use?**, enter `HubRise`.
1. Select all the sites you want to connect from the sites' list, then for each site enter the corresponding **Site location ID**.
1. Under **Webhook URL**, copy the following value:
   `https://deliveroo.hubrise-apps.com/deliveroo_webhook`.
1. Choose if you want to manage your Deliveroo menu from the till:
   - To update your menu by [pushing the HubRise catalog](/apps/deliveroo/pulling-menu) to Deliveroo, select **Yes**.
   - To update your menu manually from the Deliveroo back office, select **No**. Make sure all the products in your menu have a PLU code.
1. Confirm that your products have a PLU code.
1. Click **Connect your till (POS)** to confirm.

To complete the connection and start receiving your Deliveroo orders in HubRise, [connect Deliveroo Bridge](/apps/deliveroo/connect-hubrise#connect-the-bridge) to all the HubRise locations that you want to associate to Deliveroo stores. If you need help with this operation, contact [HubRise support](mailto:support@hubrise.com).
