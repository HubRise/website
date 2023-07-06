---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Connect to HubRise | TastyCloud | HubRise
  description: Instructions on connecting TastyCloud with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

---

**IMPORTANT NOTE:** TastyCloud cannot simultaneously have a connection with HubRise, and a direct connection to an EPOS. Once your TastyCloud website is connected to HubRise, your EPOS will necessarily be connected via HubRise. To see available EPOS solutions on HubRise, check our [Apps](/apps) page.

---

Follow these steps to connect TastyCloud to HubRise:

1. If you have no HubRise Account, create one on the [HubRise Registration page](https://manager.hubrise.com/signup).
1. Give support@tastycloud.fr permission to access your HubRise Account as **Manager**. For instructions, see [Add a User Permission](/docs/permissions/#add-a-user).
1. Contact your TastyCloud support representative and share your HubRise Location name and unique identifier. For instance, `Fast Pizza London (e34ss-8)`. They will assist you with the connection. You can refer them to the next section of this page if they need more information on the connection process.

At this stage, the connection of a HubRise Location to a TastyCloud website can only be performed by TastyCloud's support team, but users will soon be able to do it autonomously.

## Instructions for TastyCloud support

Here is the process to connect a customer location:

1. Open [the HubRise authorization page for TastyCloud](https://manager.hubrise.com/oauth2/v1/authorize?redirect_uri=urn:ietf:wg:oauth:2.0:oob&client_id=93423377549.clients.hubrise.com&scope=location[orders.write,customer_list.write,all_catalogs.write]). You may check with the development team that the URL is correct.
1. Select the HubRise location to connect, and click **Allow**.
1. Send the displayed code to your development team, and ask them to generate an access token with it.
1. Login to the TastyCloud back office.
1. Select **POS** > **Ajouter un restaurant**.
1. Select the restaurant to connect from a dropdown list.
1. Select **HubRise** from the **Logiciel de caisse** dropdown list.
1. Copy the access token your development team has sent.
1. Save the settings.
