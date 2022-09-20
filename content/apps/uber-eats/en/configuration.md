---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration | Uber Eats | HubRise
  description: Instructions on configuring Uber Eats Bridge to work seamlessly with Uber Eats and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The Configuration page can be accessed by clicking on the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> at the top right corner of the main page. For more details, see [User Interface](/apps/uber-eats/user-interface).

The Configuration page allows you to customise the behaviour of Uber Eats Bridge based on your preferences.

These are divided into different sections for an easier navigation.

![Uber Eats Bridge configuration page](../images/010-en-configuration-page-cropped.png)

## Language

From this section, you can decide which language is used to localise your receipts.

## Orders

### Service Types

Service types such as Uber Eats delivery, restaurant delivery, takeaway, or eat-in might require the corresponding ref code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

Additionally, from this section you can choose to mark Just Eat orders as delivery orders or collection orders.
This is useful if you have specific business requirements for financial reporting.

### Special Items

By default, Uber Eats activates a checkbox in the checkout flow for costumers to **Request utensils, straws, etc.**, as shown in the screenshot below.

![Disposable items checkbox in Uber Eats checkout](../images/009-en-disposable-items.png)

You can request Uber Eats to disable this functionality. But if you prefer to keep it, create a "Disposable items" product in your EPOS, and use its ref code in the **Disposable items ref code** field.

### Discounts

**Discount ref code** is the ref code associated with Uber Eats discounts in your EPOS. Refer to your connected EPOS documentation on the HubRise website to know how to handle discounts in your EPOS.

### Charges

In this section, include the ref codes for the following charges:

- Delivery charges
- Small order fees
- Tips

The ref codes in this section are only applied to orders delivered by your restaurant fleet.

### Payments

**Payment ref code** is the ref code associated with Uber Eats payments in your EPOS. Without such reference, your EPOS will not know how to correctly identify and process Uber Eats payments. Refer to your connected EPOS documentation on the HubRise website to know how to handle Uber Eats payments in your EPOS.

### Order Statuses

Select from the dropdown menu the HubRise status which should make the order accepted in Uber Eats. Refer to your connected EPOS documentation on the HubRise website for your EPOS requirements.

## Catalog

![Uber Eats Bridge configuration page, Catalog section](../images/011-en-configuration-page-menu.png)

### Automatic Catalog Push

Tick **Publish the menu on Uber Eats when it is updated in HubRise** to push your HubRise catalog to Uber Eats every time it is updated on HubRise. By default, this option it turned off.

### Opening Hours

In the **Opening hours** section, set the opening times for your Uber Eats store.

For each day of the week, set the opening and closing times of your store by specifying one or two time shifts. Customers will not be able to order from your Uber Eats store outside of these time windows.

If your restaurant is closed on a specific day, click **Close the day**.
To quickly copy opening hours to all the following days on the list, click **Copy to bottom**.

### Customer Notes

Select if you want to enable customer notes for individual products in Uber Eats. If you enable this option, make sure that your connected EPOS supports product level customer notes.

---

**IMPORTANT NOTE:** To apply the updated opening hours and customer notes choice, push your catalog to Uber Eats. For more details, see [Push the Catalog](/apps/uber-eats/push-catalog).

---

## Save the Configuration

Once you are happy with the configuration of Uber Eats Bridge, click **Save** at the top of the page to go back to the Operations page.

## Reset the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your Uber Eats Store UUID. To continue receiving Uber Eats orders, you will need to enter your Uber Eats Store UUID again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
