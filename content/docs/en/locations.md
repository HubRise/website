---
title: Locations
position: 8
layout: documentation
meta:
  title: Locations | HubRise
  description: How to manage HubRise Locations.
---

Locations are the different points of sales for an Account. Each Location identifies a physical outlet. Accounts might be associated with one or multiple Locations. You can switch from one Location to another using the **Location** dropdown at the very top of the HubRise back office.

The **SETTINGS** page displays information about your Location and allows you to make configuration changes. You can also make changes to the Account by selecting **All locations** from the **Location** dropdown.

## Location Name and ID

Locations are displayed with:

- The Location name.
- The unique identifier for the Account they are associated with.
- The number indicating in what order the Location was added (starting at zero).

For example, `Baker Street z6q31-0` indicates the Location name of `Baker Street`, that it belongs to Account `z6q31`, and `-0` signifies it was the first Location added to this Account.

---

**IMPORTANT NOTE**: To check our recommended naming convention for Locations, see [Create a Location](/docs/locations#create-a-location).

---

## Location Settings

To view Location details:

1. Go to **SETTINGS**.
1. If you have access to multiple Accounts, select the Account of the Location.
1. From the **Location** dropdown, click on the Location's name.

Locations are managed in the same way as Accounts, but the information is specific to the selected Location.

Different settings for specific locations allow you to have different [payment methods per location](/docs/payment#account-or-location-payments), different users [permissions](/docs/permissions), and so on. For more information, see [Accounts](/docs/account/).

If you operate in a country where including the Intra-Community VAT number is a legal requirement, HubRise will display a notification to update the VAT number if this information is missing from your Account.

---

**IMPORTANT NOTE**: Depending on your business, the Location may have a different VAT number than the Account. Verify that all VAT numbers are correctly configured on all Accounts and Locations you manage.

---

## Create a Location

The first Location must be created with the Account. For more information, see [Create an Account](/docs/account/#create-an-account).

To add a new Location to an existing Account:

1. Click **SETTINGS**.
1. If you have access to multiple Accounts, select the Account you need to add a Location to.
1. In the **Account** section, click **Add a location**.
1. Enter the required information.
1. Click **Create** to save the new Location.

It is recommended to name the Location after the city, the area or street it is located at. For example, if you only have one location in London, the Location name could be `London`. If you have multiple locations in London, you could name them after their street address, for example `Baker Street`, `Dublin Street`, and `Duncannon Street`.

## Modify Location Details

To update the name and address for a Location, follow these steps:

1. Click **SETTINGS**.
1. If you have access to multiple Accounts, select the Account that the Location will be added to.
1. Select the Location to update.
1. In the **Location** section, click **Modify**.
1. Update the values as needed.
1. If this Location has a VAT number separate from the Account, enter it here in the **Intra-Community VAT number** field provided.
1. If the billing address is different than the Location's address, check **The billing address is different from the location address** and fill out the form.
1. Click **Update** to save the changes.
