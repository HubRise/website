---
title: Configuration
position: 4
layout: documentation
meta:
  title: Configuration Guide | Uber Eats | HubRise
  description: Instructions on configuring Uber Eats Bridge to work seamlessly with Uber Eats and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The Configuration page can be accessed by clicking on the arrow <InlineImage width="20" height="20">![Arrow icon](../images/arrow-icon.jpg)</InlineImage> at the top right corner of the main page. For more details, see [User Interface](/apps/uber-eats/user-interface).

The Configuration page allows you to customise the behaviour of Uber Eats Bridge based on your preferences.

These are divided into different sections for an easier navigation.

![Uber Eats Bridge configuration page](../images/002-en-configuration-page.png)

## Language

From this section, you can decide which language is used to localise your receipts.

## Service Types

Service types such as Uber Eats delivery, restaurant delivery, takeaway, or eat-in might require the corresponding ref code entry. Refer to your connected EPOS documentation on the HubRise website to verify.

## Special Items

**Disposable items ref code** is the ref code that is used when customers include disposable items in their orders.
Not all Uber Eats restaurants offer their customers the option to request disposable items, such as utensils, straws, and napkins, in an order. But if you do, you need to provide a ref code. Create a "Disposable items" product in your EPOS, and use that ref code here.

The following screenshot shows the **Request utensils, straws, etc.** checkbox that customers can use to request disposable items.

![Disposable items checkbox in Uber Eats checkout](../images/009-en-disposable-items.png)

## Discounts

**Discount ref code** is the ref code associated with Uber Eats discounts in your EPOS. Refer to your connected EPOS documentation on the HubRise website to know how to handle discounts in your EPOS.

## Payments

**Payment ref code** is the ref code associated with Uber Eats payments in your EPOS. Without such reference, your EPOS will not know how to correctly identify and process Uber Eats payments. Refer to your connected EPOS documentation on the HubRise website to know how to handle Uber Eats payments in your EPOS.

## Order Statuses

Select from the dropdown menu the HubRise status which should make the order accepted in Uber Eats. Refer to your connected EPOS documentation on the HubRise website for your EPOS requirements.

## Saving the Configuration

Once you are happy with the configuration of Uber Eats Bridge, click **Save** at the top of the page to go back to the Operations page.

## Resetting the Configuration

If you want to reset the configuration and erase its values, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will also erase your Uber Eats Store UUID. To continue receiving Uber Eats orders, you will need to enter your Uber Eats Store UUID again.

---

Resetting the configuration does not remove the operation logs displayed in the main page.
