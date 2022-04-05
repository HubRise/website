---
title: Connection to HubRise
position: 2
layout: documentation
meta:
  title: Connection to HubRise | Aquila | HubRise
  description: Instructions on connecting Aquila CMS with HubRise for your EPOS to work with other apps as a cohesive whole. Connect apps and synchronise your data.
---

To connect Aquila to HubRise, you need to install the HubRise plugin. For more information, contact [contact@nextsourcia.com](mailto:contact@nextsourcia.com).

## Install the HubRise Plugin

To install the HubRise plugin in Aquila, follow these steps:

1. Locate the zip file containing the plugin on your computer.
1. Log in to your Aquila back office.
1. Select **Plugins** from the left navigation panel.
1. Click on the **+ Drop files here or click to upload** button.
1. In the new dialog window, navigate to the plugin's folder.
1. Select the zip file and click **Open**.

## Enable the HubRise Plugin

To enable the HubRise plugin in Aquila, follow these steps:

1. Log in to your Aquila back office.
1. Select **Plugins** from the left navigation panel.
1. Verify the **Module HubRise** is set to **Activé**.

Aquila will then complete the process of activating the plugin.

![Aquila Plugin Installation](../images/004-en-2x-plugin-installation.png)

## Connect to Account

Once the plugin has been installed and enabled, the connection between Aquila to HubRise can be easily setup either to an existing HubRise Account, or a new one.

The process below details how to create a new HubRise account when connecting your Aquila site. For instructions on how to connect a site with multiple points of sale, or on how to connect a site to an existing HubRise Account, see the [FAQs](/apps/aquila-cms/faqs).

Once the HubRise plugin has been activated, the connection to a HubRise Account can be set through the following process:

1. Log in to your Aquila back office.
1. Select **HubRise** from the left navigation panel.
1. To allow HubRise to create new products on Aquila, set **Only create new product** to **YES**. To allow the HubRise connection to update existing products in Aquila, set **Only create new product** to **NO**.
1. Click **Login to HubRise**.
1. Select the HubRise Account and Catalog you wish to use, and press **Allow**.

At this point the connection between Aquila and HubRise is done at Account level.

![HubRise Settings on Aquila](../images/003-en-2x-hubrise-settings.png)

## Connect to Locations

To distinguish between each Point of Sale, a unique identifier for the location needs to be added. It can be done in the following way:

1. Log in to your Aquila back office.
1. Select **Point de vente** from the left navigation panel.
1. Click on the point of sale you want to connect?
1. Fill in the HubRise unique identifier for the Location the **ID HubRise** input field. For example **wg8tl-1** indicates the HubRise Account **wg8tl**, and **-1** the Location on the account. For more information, see HubRise [Locations](/docs/locations/).
