---
title: Connection to HubRise
position: 2
layout: documentation
meta:
  title: Connection to HubRise | Uber Eats | HubRise
  description: Instructions on connecting Uber Eats with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

Connecting Uber Eats to HubRise can be done with a few simple steps.

---

**IMPORTANT NOTE:** If you don't already have a HubRise account, start by registering on the [HubRise Signup Page](https://manager.hubrise.com/signup). It only takes a minute!

---

## 1. Enable HubRise on Uber Eats

As a first step, the HubRise integration must be enabled on your Uber Eats account.

Contact us at [support@hubrise.com](mailto:support@hubrise.com) and include the following information:

- The URL link to your restaurant page on the Uber Eats website. For example: [https://www.ubereats.com/gb/london/food-delivery/basilico-lavender-hill/tG_8KYb4RkaRPKOmZuERUA](https://www.ubereats.com/gb/london/food-delivery/basilico-lavender-hill/tG_8KYb4RkaRPKOmZuERUA).
- The order acceptance mode you want to use for your store: `Manual accept` or `Offered state` mode. For more details, see our [FAQ](/apps/uber-eats/faqs/send-orders-to-epos-without-tablet).
- If you intend to switch off your Uber Eats tablet and only rely on your EPOS to accept orders, ask to `enable RD-optional`. For more details, see our [FAQ](/apps/uber-eats/faqs/send-orders-to-epos-without-tablet).
- If you want to automatically cancel orders that cannot be sent to the EPOS, ask to `Enable auto-cancel`. For more details, see our [FAQ](/apps/uber-eats/faqs/send-orders-to-epos-without-tablet).
- The service type(s) you support on Uber Eats: Uber Delivery, Restaurant delivery, Takeaway, Eat-in. For more information, see [Service Types](/apps/uber-eats/terminology#service-types).
- If your clients can select Disposable Items on your Uber Eats store, inform us as it needs to be configured to reach your EPOS. For more information, see [Special Items](/apps/uber-eats/configuration#special-items).
- If you use product-level comments on your Uber Eats store, inform us if you want to keep using them, otherwise they will be disabled by default. For more information on managing product-level comments on HubRise, see [Product-Level Comments](/apps/uber-eats/map-ref-codes#product-level-comments).
- If your Uber Eats store is already connected to another middleware or EPOS.
- Your HubRise location name and identifier. For example: `Fast Pizza London z6q31-0`.

With this information in hand, the Uber Eats integration team will enable the HubRise connection for your store. HubRise will provide you with the Uber Eats Store UUID needed to connect and inform you of the next step.

## 2. Connect the Bridge

---

**IMPORTANT NOTE:** Uber Eats Bridge connects to HubRise at the location level. For more information, see [Locations](/docs/locations/).

---

With your Uber Eats Store UUID in hand, you can now connect the Uber Eats Bridge:

1. Log in to your HubRise account.
1. Select the location you want to connect from the dropdown menu.
1. Select **CONNECTIONS**, then **View available apps**.
1. Select **Uber Eats** from the list of apps.
1. Click **Connect**.
1. Click **Allow** to grant Uber Eats Bridge permission to access the location of your restaurant registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one first, and then click **Allow**.
1. A new page asks you to provide your Uber Eats Store UUID. Enter your Store UUID, and click **Save** to complete the connection process.

![Uber Eats store UUID](../images/001-en-store-uuid.png)

## 3. Configure Your Preferences

After connecting the bridge, you need to configure a few parameters on the Configuration page to send orders correctly to your EPOS.

For more information about the Configuration page and how to navigate to it, see [Configuration page](/apps/uber-eats/user-interface/#configuration-page). For details on how to configure the parameters of the Uber Eats Bridge, see [Configuration](/apps/uber-eats/configuration).

## 4. Map Products Ref Codes

Most apps require a ref code for each product to process orders correctly. To learn how to map ref codes on Uber Eats, see [Map Ref Codes](/apps/uber-eats/map-ref-codes).

## 5. Receive Test Orders

Before you start receiving orders from real customers, we recommend that you test the whole integration workflow.

You should place a few orders on your Uber Eats restaurant, make sure they are correctly received by your EPOS, and then cancel them to get a refund. This will ensure that your restaurant is ready to go live.

If you want, you will also be able to get rid of your Uber Eats tablet by switching to a direct integration.
For more details, see [Can Orders Be Sent Directly To My EPOS Without Using Uber Eats Tablets](/apps/uber-eats/faqs/send-orders-to-epos-without-tablet).

If you encounter problems during the tests, contact us at support@hubrise.com.
