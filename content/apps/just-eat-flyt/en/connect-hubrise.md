---
title: Connect to HubRise
path_override: connect-hubrise
position: 2
layout: documentation
meta:
  title: Connect to HubRise | Just Eat Flyt | HubRise
  description: See how to connect your Just Eat online store to HubRise. Connection is simple. Send the link of your Just Eat page to HubRise and follow a few steps to connect.
---

Connecting Just Eat to HubRise can be done with a few steps.

---

**IMPORTANT NOTE:** If you do not have a HubRise account yet, register on our [Signup Page](https://manager.hubrise.com/signup). It only takes a minute!

---

## 1. Enable HubRise on Just Eat Flyt

As a first step, the Just Eat integration team must activate the HubRise API integration for your stores.

Contact us at support@hubrise.com and include the following information in your email:

- The URL link to your restaurant page on the Just Eat website. For example: https://www.just-eat.ie/restaurants-saba-to-go-rathmines/.
- Whether Auto-Accept should be `Activated` or `Deactivated`. For more details, see [Do I Want Auto-Accept Activated on Just Eat?](/apps/just-eat-flyt/faqs/auto-accept).
- Whether your Just Eat store is already connected to another middleware or EPOS.
- Your HubRise location name and identifier. For example: `Fast Pizza Baker Street z6q31-0`.

With this information in hand, we will ask the Just Eat integration team to enable the HubRise connection for your store.

## 2. Connect Just Eat Flyt Bridge

To connect Just Eat Flyt Bridge to HubRise, follow these steps.

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select the location you want to connect from the dropdown menu.
1. Select **CONNECTIONS**, then **View available apps**.
1. Select **Just Eat Flyt Bridge** from the list of apps.
1. Click **Connect**.
1. Click **Allow** to grant Just Eat Flyt Bridge permission to access the location of your store registered in HubRise. If your account has multiple locations, expand the **Choose location** section to select the desired location, and then click **Allow**.
1. A new page asks you to enter your credentials:
   - **Menu API key**: The API key used by HubRise for uploading the menu.
   - **Order API key**: The API key used by HubRise for receiving and updating orders.
   - **Restaurant ID**: Your store unique identifier.
     HubRise will provide the above credentials. Once you have them, copy and paste them into the corresponding fields, then click **Save** to complete the connection process.

![Credentials page for Just Eat Flyt Bridge](./images/001-just-eat-credentials.png)

## 3. Configure Your Preferences

After connecting the bridge, you need to configure a few parameters on the **Configuration** page to send orders correctly to your EPOS.

For more information about the configuration page and how to navigate to it, see [Configuration Page](/apps/just-eat-flyt/user-interface#configuration). For details on how to configure the parameters of Just Eat Flyt Bridge, see [Configuration](/apps/just-eat-flyt/configuration).

## 4. Push Your Menu

For the Just Eat Flyt integration to be activated, you need to push your HubRise catalog into Just Eat Flyt.

To learn how to push your HubRise catalog into Just Eat, see [Push the Catalog](/apps/just-eat-flyt/push-catalog). For more information on HubRise catalogs, see [Catalogs](/docs/catalog).
