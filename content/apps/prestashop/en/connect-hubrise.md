---
title: Connect to HubRise
position: 2
layout: documentation
meta:
  title: Connect to HubRise | PrestaShop | HubRise
  description: Instructions on connecting PrestaShop with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

Connecting PrestaShop to HubRise can be done with a few steps.

---

**IMPORTANT NOTE:** If you do not have a HubRise account yet, register on our [Signup Page](https://manager.hubrise.com/signup). It only takes a minute!

---

## 1. Install the HubRise Module in PrestaShop

To send orders to HubRise, you must install the HubRise module in your PrestaShop back office.
The HubRise module is a software that lets PrestaShop connect to HubRise and send orders to HubRise in real time.
It also provides you with the API key you need to use to connect to PrestaShop Bridge.

To install the HubRise module, follow these steps:

1. Download the [HubRise module](https://drive.google.com/file/d/1sQxhDnqt3Rywv-n-18nqA8O06fSJsKwG/view?usp=sharing).
2. Log in to your PrestaShop back office.
3. From the menu, select **Modules** > **Modules manager**, then click **Upload a module**.
4. On the upload page, to install the module, drag the ZIP file of the module that you just downloaded. Then, click **Configure**.
5. In the **HubRise** module page, take note of the **PrestaShop API key** value that you will need to activate PrestaShop Bridge in the following step.

## 2. Connect PrestaShop Bridge

To can connect PrestaShop to HubRise, follow these steps.

1. Log in to your HubRise account.
1. Select the location you want to connect from the dropdown menu.
1. Select **CONNECTIONS**, then **View available apps**.
1. Select **PrestaShop Bridge** from the list of apps.
1. Click **Connect**.
1. Click **Allow** to grant PrestaShop Bridge permission to access the location of your restaurant registered in HubRise. For accounts with multiple locations, expand the **Choose location** section to select the correct one first, and then click **Allow**.
1. A new page asks you to configure PrestaShop Bridge.
   - Under **Website URL**, enter the URL of your PrestaShop store.
   - Under **PrestaShop API key**, enter the value you copied from the HubRise module in PrestaShop.
   - Click **Save** to confirm.
     ![PrestaShop URL and API key](../images/001-en-prestashop-initial-config.png)
1. Configure the behaviour of PrestaShop Bridge, then click **Save** to complete the connection. For more information about configuring your PrestaShop Bridge, see [Configuration](/apps/prestashop/configuration).

## 3. Upload Your Catalog

If you have a catalog of products on HubRise, you can upload it to your PrestaShop store with a single click.

For more information on HubRise catalogs, see [Catalogs](/docs/catalog/). To learn how to push your HubRise catalog into PrestaShop, see [Push the Catalog](/apps/prestashop/push-catalog).
