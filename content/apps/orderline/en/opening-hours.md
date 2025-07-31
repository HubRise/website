---
title: Opening Hours
path_override: opening-hours
position: 7
layout: documentation
meta:
  title: Opening Hours | OrderLine | HubRise
  description: Manage and customise your establishment's opening hours on all connected ordering and delivery platforms through OrderLine.
---

You can use OrderLine to manage opening hours of your online stores. It will work with online ordering solutions and food ordering and delivery platforms connected to your HubRise account that support this feature. Refer to your app documentation on the HubRise website [Apps page](/apps) to verify.

To navigate to the Opening Hours page, select the **Opening Hours** tab located at the top of the screen. On mobile devices, select it in the burger menu.

The user interface provides a weekly schedule with options to specify time slots for each day.

![Opening Hours Interface](./images/020-opening-hours.png)

## Manage Opening Hours

Opening hours will be set in 12-hour or 24-hour time formats depending on your browser settings.

Each time slot has two editable fields, one to enter the start and another to enter the end of the time slot.

For each day of the week, you can specify multiple time slots for your store. A restaurant can, for instance, have three time slots within a day. It can be open early morning for breakfast from  6:00 to 10:00, then again for lunch from  11:30 from 14:30, and later for dinner from 19:00 to 23:30. 

Time slots must not overlap. Their start and end times must be configured in chronological order.

The cutoff time is 06:00 by default, meaning that between 24:00 and 06:00 is considered to be the next day. If your store remains open through the night, the cutoff time can be changed by contacting HubRise on [support@hubrise.com](mailto:support@hubrise.com).

The store is considered closed for days without any defined time slot. Ensure at least one time slot is defined for the week, failing this, opening hours will not synch.

## Edit Time Slots

Follow these steps to configure your time slots:

- Click the **Add time slot** button.
- Edit the start and end times or use the available dropdown when prompted.
- To add a new time slot, click on **Add time slot** again but make sure you have no time overlap. Time slots must be configured in chronological order.
- Start the process again for each day of the week or click **Copy to bottom** to replicate time slots to all remaining days.
- To remove an erroneous time slot, click the trash bin icon next to it.
- Remember to **Save**.

## Save Changes

When you make any change to opening hours, the **Save** and **Cancel** buttons will appear at the bottom of the page. These buttons will disappear once you have either saved or reverted the changes.

- To apply your changes, click the **Save** button.
- To discard any changes, click the **Cancel** button or leave the page without saving.

## Online Ordering Support {#online-ordering-support}

Opening hours set on OderLine can be sent to online ordering solutions and food ordering and delivery platforms connected to your HubRise account that support this feature.

The following food ordering and delivery platforms support **Opening Hours** synchronisation:

- Deliveroo
- Uber Eats
- Just Eat, in markets using the [Flyt integration platform](/apps/just-eat-flyt/overview) now called JET Connect.

---

**IMPORTANT NOTE:** In marlets using the [Just Eat Takeaway integration platform](/apps/just-eat-takeaway/overview) opening hours cannot be synched.

---

To find out which online ordering solutions support opening hours synchronisation, refer to your app documentation on the HubRise website [Apps page](/apps).

You must enable opening hours synchronisation for each application to which you want opening hours sent. To find out how, see [Enable Synchronisation](#enable_synchronisation)


## Enable Synchronisation {#enable_synchronisation}

You must enable opening hours synchronisation for each application to which you want opening hours sent. 

### Enable synchronisation with online ordering solutions

To enable the synchronisation of opening hours configured on OrderLine with your online ordering solution, refer to the corresponding documentation on the HubRise website [Apps page](/apps) or contact your online ordering support team for help.

### Enable synchronisation with online ordering solutions

To enable the synchronisation of opening hours with online ordering platforms that support this feature, follow these steps:

1. Log in to your [HubRise account](https://manager.hubrise.com).
1. Select **CONNECTIONS**, find the platform's bridge and click **Open**
1. Navigate to the **Configuration** page.
1. In the **Location** section, tick the checkbox labelled **Enable automatic opening hours push**.
1. Remember to **Save** the changes.

---

**IMPORTANT NOTE:** For Just Eat, opening hours synchronisation works with **Just Eat Flyt Bridge** and not with **Just Eat Takeaway Bridge**. The Just Eat Takeaway integration API does not support this feature. 

---
