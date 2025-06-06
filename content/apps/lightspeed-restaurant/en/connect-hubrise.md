---
title: Connect to HubRise
path_override: connect-hubrise
position: 2
layout: documentation
meta:
  title: Connect to HubRise | Lightspeed Restaurant | HubRise
  description: Instructions on connecting Lightspeed Restaurant with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

---

**IMPORTANT NOTE:** If you do not have a HubRise account yet, register on our [Signup Page](https://manager.hubrise.com/signup). It only takes a minute!

---

## 1. Connect Lightspeed Restaurant Bridge

Lightspeed Restaurant Bridge connects to a HubRise location. You must repeat the process below for each location you want to connect.

1. Open your HubRise back office and click the down arrow next to **Location** to select the location you want to connect. For help, check the HubRise User Guide > [Accounts](/docs/account) and [Locations](/docs/locations).
1. Select **CONNECTIONS** > **View available apps**.
1. Select Lightspeed Restaurant Bridge from the list of apps.
1. Click **Connect**.
1. Allow Lightspeed Restaurant Bridge permission to access your location registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one and **click** on **Allow**. If you have multiple customer lists or catalogs on HubRise, you will also be prompted to confirm the ones you wish to use.
1. You will be redirected to the Lightspeed Restaurant Bridge user interface. Click **Connect to Lightspeed** button.
1. The first time you connect, you will be redirected to the Lightspeed login page. Specify your Lightspeed **Email** and **Password** and click **LOGIN**.
1. Once you are authorised in Lightspeed, the **Configuration** page will appear.
   - In the **Business location** dropdown, select the Lightspeed business location to connect.
   - Click **Save**.
1. You have now connected your EPOS to your HubRise location. Orders sent to HubRise will be flowing into Lightspeed Restaurant once the [HubRise integration is enabled](#enable-integration).

---

**IMPORTANT NOTE:** The Lightspeed user employed during the connection must have the **BO-WRITE** permission in the Lightspeed back office. If this permission is missing, certain operations such as the catalog pull will fail with a _403 Forbidden_ error. See [403 Forbidden Error When Pulling the Catalog](/apps/lightspeed-restaurant/troubleshooting/forbidden-menu-pull-error) for details.

---

## 2. Enable the HubRise Integration {#enable-integration}

Email HubRise at support@hubrise.com to request activation of the connection. No data will flow from HubRise into Lightspeed Restaurant until Lightspeed activates the API for HubRise in your account. HubRise will facilitate this activation by writing to k-series.support@lightspeedhq.com.

When you make your request to HubRise, specify which apps you would like to connect. Also let us know whether you require the standard VAT to be applied or if your business is subject to unique VAT rates. To verify the standard VAT rates configured by Lightspeed when activating the API for HubRise, refer to this article: [VAT rates for restaurants in France, Switzerland, and Belgium](https://www.lightspeedhq.ch/blog/comparaison-taux-tva/) (In French).

---

**Related FAQ**: [Why Are Some Orders Not Received Correctly on Lightspeed Restaurant?](/apps/lightspeed-restaurant/faqs/troubleshooting-failed-orders)

---

## 3. Give Access to Lightspeed Support

We recommend providing Lightspeed support with access to your HubRise location connected with Lightspeed Restaurant. If needed, they will be able to troubleshoot issues by inspecting the logs of Lightspeed Restaurant Bridge.

To give Lightspeed support access to your location, follow these steps:

1. From the HubRise back office, select **SETTINGS** in the left-hand menu.
1. In the **Permissions** section, enter `k-series.support@lightspeedhq.com`.
1. Click on **Add User**.
1. In the dropdown menu for selecting a predefined role, select **Technical Partner**.
1. Click on **Set Permissions**.

---

**IMPORTANT NOTE:** Sharing the username and password of your HubRise user profile is highly discouraged for security reasons.

---
