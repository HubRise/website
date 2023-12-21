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

For each day of the week, you can specify multiple opening hour time slots for your store. 
A restaurant can, for instance, have three time slots within a day. It can be open early morning for breakfast from 6:00 to 10:00. Then again for lunch from 11:30 from 14:30. And later for diner from 19:00 to 23:30. 

Follow these steps to configure your time slots:

- Click the **Add time slot** button.
- Edit the time slot where prompted.  
- Click the **Add time slot** button again to add a new time slot to the same day if needed. Make sure you have no time slot overlap.
- Start the process again for each day of the week or click  **Copy to bottom** to replicate time slots to all remaining days of the week.
- To remove an erroneous time slot, click the trash bin icon next to it.
- Remember to **Save**.

The store is considered closed for days without any defined time slot. Ensure at least one time slot is defined for the week.

## Edit Time Slots

Each time slot has two editable fields to enter the start and end time. These fields can be formatted in 12-hour or 24-hour time formats, depending on your browser settings. Click on any time field to edit the hours.

Time slots must not overlap, and their start and end times must be in chronological order. The cutoff time is 6am by default, meaning that any hour between midnight and 6am is considered to be the next day. The cutoff time can be changed by contacting HubRise support, if your establishment remains open through 6am.

## Save Changes

When you make any changes to the opening hours, the **Save** and **Cancel** buttons will appear at the bottom of the page. These buttons will disappear after you have either saved or reverted the changes.

- To apply your changes, click the **Save** button.
- To discard any changes, click the **Cancel** button or leave the page without saving.

## Platform Support {#platform-support}

Opening hours synchronisation is currently supported with:

- Deliveroo
- Uber Eats
- Just Eat, in markets using Flyt.

Ensure that the feature is enabled on the respective platform as described below.

### Enable Synchronisation

To enable the synchronisation of opening hours to these platforms:

1. Open the platform's bridge, and navigate to the **Settings** page.
2. In the **Location** section, tick the checkbox labelled **Enable automatic opening hours push**.
3. Save the changes.

### Just Eat

For Just Eat integrations, a quick eligibility check can be performed:

- Open the **Connections** page in the HubRise back office.
- Verify that the bridge listed is **Just Eat Flyt Bridge** rather than **Just Eat Takeaway Bridge**.

Only the Flyt Bridge supports opening hours synchronisation.

### Support for Other Apps

Other apps may support opening hours synchronisation. Refer to the documentation of the other app on the HubRise website, or contact HubRise support to verify.
