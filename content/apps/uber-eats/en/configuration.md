---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration | Uber Eats | HubRise
  description: Instructions on configuring Uber Eats Bridge to work seamlessly with Uber Eats and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The Configuration page can be accessed by clicking on the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> In the top right corner of the screen. For more details, see [User Interface](/apps/uber-eats/user-interface).

The Configuration page allows you to customise the behaviour of Uber Eats Bridge based on your preferences.

![Uber Eats Bridge configuration page](../images/010-en-2x-configuration-page-cropped.png)

## Language

Choose the language to use for generic items such as `Delivery charge`. These names may appear in your EPOS and in customer receipts.

## Orders

### Order Statuses

Select from the dropdown menu the HubRise status which should make the order accepted in Uber Eats. Refer to your EPOS documentation on the HubRise website to verify your EPOS requirements.

### Service Types

Service types such as Uber Eats delivery, restaurant delivery, takeaway, or eat-in might require the corresponding ref code entry. Refer to your EPOS documentation on the HubRise website to verify your EPOS requirements.

Additionally, from this section you can choose to mark Uber Eats orders as delivery orders or collection orders.
This is useful if you have specific business requirements for financial reporting.

### Special Items

By default, Uber Eats activates a checkbox in the checkout flow for costumers to **Request utensils, straws, etc.**, as shown in the screenshot below.

![Disposable items checkbox in Uber Eats checkout](../images/009-en-disposable-items.png)

You can request Uber Eats to disable this functionality. If you prefer to keep it, create a "Disposable items" product in your EPOS, and use its ref code in the **Disposable items ref code** field.

### Discounts

**Discount ref code** is the ref code associated with Uber Eats discounts in your EPOS. Refer to your EPOS documentation on the HubRise website to know how to handle discounts in your EPOS.

### Charges

In this section, include the ref codes for the following charges:

- Delivery charges
- Small order fees
- Tips

The ref codes in this section are only applied to orders delivered by your restaurant fleet.

### Payments

Uber Eats customers can pay for their order either online or by cash for restaurant delivery orders.

This section of the configuration page allows you to specify the ref codes for these two payment methods. Refer to your EPOS documentation on the HubRise website to verify the correct codes to use.

## Catalog

![Uber Eats Bridge configuration page, Catalog section](../images/011-en-2x-configuration-page-menu.png)

### Catalog Variant to Push

Catalog variants give you the flexibility to disable specific items or adjust prices for Uber Eats.

If your catalog includes variants, you have the option to select which one to use. When **(none)** is selected, the default items along with their standard prices are used.

### Automatic Catalog Push

To synchronize your HubRise catalog with Uber Eats whenever it is updated, select the **Enable automatic catalog push** checkbox.

### Opening Hours

In the **Opening hours** section, set the opening times for your Uber Eats store.

For each day of the week, set the opening and closing times of your store by specifying one or two time shifts. Customers will not be able to order from your Uber Eats store outside of these time windows.

If your restaurant is closed on a specific day, click **Close the day**.
To quickly copy opening hours to all the following days on the list, click **Copy to bottom**.

---

**IMPORTANT NOTE:** To apply the updated opening hours, push your catalog to Uber Eats. For more details, see [Push the Catalog](/apps/uber-eats/push-catalog).

---

### Customer Notes

Customer notes for individual products can be activated by contacting Uber Eats support. This integration feature is supported, but it cannot be activated by HubRise.

If you enable customer notes, make sure that your connected EPOS supports product level customer notes.

## Inventory

![Uber Eats Bridge configuration page inventory section](../images/023-en-2x-configuration-page-inventory.png)

Through inventory synchronization, products and options that have a stock quantity of zero can be hidden can be hidden on your Uber Eats store.

To synchronize your HubRise inventory with Uber Eats whenever it is updated, select the **Enable automatic inventory push** checkbox.

Additionally, you can manually push your inventory to Uber Eats via the **Actions** page.

## Save the Configuration

Once you are happy with the configuration of Uber Eats Bridge, click **Save** at the top of the page to go back to the **Latest operations** page.

## Reset the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your Uber Eats Store UUID. To continue receiving Uber Eats orders, you will need to enter your Uber Eats Store UUID again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
