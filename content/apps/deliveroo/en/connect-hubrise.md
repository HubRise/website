---
title: Connection to HubRise
position: 2
layout: documentation
meta:
  title: Connection to HubRise | Deliveroo | HubRise
  description: Instructions on connecting Deliveroo with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

Connecting Deliveroo to HubRise can be done with a few simple steps.

---

**IMPORTANT NOTE:** If you don't already have a HubRise account, start by registering on the [HubRise Signup Page](https://manager.hubrise.com/signup). It only takes a minute!

---

## 1. Enable HubRise on Deliveroo

As a first step, the HubRise integration must be enabled on your Deliveroo account.

Contact us at [support@hubrise.com](mailto:support@hubrise.com) and include the following information in your email:

- The URL link to your restaurant page on the Deliveroo website. For example: [https://deliveroo.co.uk/menu/london/clapham/camile-thai-clapham](https://deliveroo.co.uk/menu/london/clapham/camile-thai-clapham).
- The Deliveroo Restaurant ID of the store. For more details, see our FAQ: [How Do I Find My Deliveroo Restaurant ID](/apps/deliveroo/faqs/find-deliveroo-restaurant-id).
- The email address you use to log in to the Deliveroo back office.
- The email address of your Deliveroo account manager.
- If your Deliveroo store is connected to another middleware or EPOS.
- The type of Deliveroo services you have with the platform: Delivery by Deliveroo, takeaway or delivery by the restaurant. For more information, see [Service Types](/apps/deliveroo/terminology#service-types).
- Your HubRise location name and identifier. For example: `Fast Pizza Baker Street z6q31-0`.

With this information in hand, the Deliveroo integration team will enable the HubRise connection for your store. New connections are approved on Tuesdays and Thursdays only.

---

**IMPORTANT NOTE:** Deliveroo will not enable the HubRise connection if some product ref codes are missing. For details, see [Map Ref Codes](/apps/deliveroo/map-ref-codes/).

---

## 2. Map Products to Ref Codes

Most apps require a ref code for each product to identify every item and process orders correctly. As a result, each item on your Deliveroo menu should have a corresponding product ref code. For more information, see [Map Ref Codes](/apps/deliveroo/map-ref-codes).

## 3. Connect the Bridge

---

**IMPORTANT NOTE:** Deliveroo Bridge connects to HubRise at the location level. For more information, see [Locations](/docs/locations/).

---

To connect Deliveroo Bridge to HubRise, follow these steps.

1. Log in to your HubRise account.
1. Select the location you want to connect from the dropdown menu.
1. Select **CONNECTIONS**, then **View available apps**.
1. Select **Deliveroo** from the list of apps.
1. Click **Connect**.
1. Click **Allow** to grant Deliveroo Bridge permission to access the location of your restaurant registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one first, and then click **Allow**.
1. A new page asks you to provide your Deliveroo Restaurant ID. Enter the ID, then click **Save** to complete the connection process.

![Deliveroo Restaurant ID](../images/001-en-deliveroo-restaurant-id.png)

## 4. Configure Your Preferences

After connecting the bridge, you need to configure a few parameters on the Configuration page to send orders correctly to your EPOS.

For more information about the Configuration page and how to navigate to it, see [User Interface](/apps/deliveroo/user-interface/#configuration-page). For details on how to configure the parameters of Deliveroo Bridge, see [Configuration](/apps/deliveroo/configuration).

