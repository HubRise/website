---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration | Deliveroo | HubRise
  description: Instructions on configuring Deliveroo Bridge to work seamlessly with Deliveroo and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The configuration page allows you to customise the behaviour of Deliveroo Bridge based on your preferences.
These are divided into different sections for an easier navigation.

![Deliveroo Bridge configuration page](../images/014-en-configuration-page-cropped.png)

## Language

Choose the language to use for generic items such as `Delivery charge`. These names may appear in your EPOS and in customer receipts.

## Orders

### Service Types

Service types such as delivery by Deliveroo, restaurant delivery or takeaway might require the corresponding ref code entry. Refer to your EPOS documentation on the HubRise website to verify.

Additionally, from this section you can choose to mark Deliveroo orders as delivery orders or collection orders. This is useful if you have specific business requirements for financial reporting.

### Discounts

This section allows you to specify the discount ref code applied to your products, in case you have one active on your Deliveroo page. Refer to your EPOS documentation on the HubRise website to see how to obtain the corresponding ref code.

Available discounts on Deliveroo appear in the **All offers** page in your Deliveroo back office.

![Example of all offers page in Deliveroo back office](../images/013-en-deliveroo-offer.png)

### Charges

If charges apply, a ref code might be required. Refer to your EPOS documentation on the HubRise website to verify.

In this section, you can specify the ref code for delivery charges, for surcharges applied to orders below the minimum price, and for bag fees.

### Payments

Deliveroo customers can pay for their order either online or by cash for restaurant delivery orders.

This section of the configuration page allows you to specify the ref codes for these two payment methods. Refer to your EPOS documentation on the HubRise website to verify the correct codes to use.

### Order Statuses

Deliveroo requires you to acknowledge every order you receive.
In this section, you can select which HubRise status sends an order confirmation back to Deliveroo.
Refer to your EPOS documentation on the HubRise website to verify the correct value.

## Catalog

![Deliveroo Bridge configuration page, Catalog section](../images/015-en-configuration-page-menu.png)

The **Brand ID** and **Menu ID** fields identify the menu you want to update on Deliveroo. The default values generally work for most users.

To synchronize your HubRise catalog with Deliveroo whenever it is updated, select the **Enable automatic catalog push** checkbox.

The **Menu description** and **Menu banner** replace the current description and banner image on Deliveroo when you push your catalog. The requirements for the banner image are described below:

- At least 1920x1080 pixels, 16:9 ratio
- JPG or PNG format
- Less than 2 Mb

---

**IMPORTANT NOTE:** The menu description and banner image are required to successfully push your catalog to Deliveroo.

---

## Inventory

Through inventory synchronization, products and options that have a stock quantity of zero can be hidden on your Deliveroo store.

To synchronize your HubRise inventory with Deliveroo whenever it is updated, select the **Enable automatic inventory push** checkbox.

Additionally, you can manually push your inventory to Deliveroo via the **Actions** page.

## Save the Configuration

Once you are happy with the configuration of Deliveroo Bridge, click **Save** at the top of the page to go back to the **Latest operations** page.

## Reset the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your Deliveroo Restaurant ID. To continue receiving Deliveroo orders, you will need to enter your Deliveroo Restaurant ID again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
