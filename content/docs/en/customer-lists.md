---
title: Customer Lists
position: 13
layout: documentation
meta:
  title: Customer Lists | HubRise
  description: How to manage HubRise customer lists.
---

The **Customer lists** section in the **SETTINGS** page allows you to add, edit, and delete customer lists.

Customer Lists can be added to Accounts and Locations with the following conditions:

- By default, Accounts define one Customer list named after the Account. Locations do not have a Customer list defined by default.
- An Account **must** have at least one Customer list. If you attempt to delete the last Customer list of an Account, an error notification will be displayed.
- You can create as many Customer lists as you need. For example:
  - You can create a test Customer list to be used without impacting production.
  - You can create a Customer list for a Location that have different Customers than other Locations.

You can connect integrated apps to a specific customer list. Your customers are registered, managed and imported from your third party application into HubRise, and cannot be edited from the HubRise interface.

Adding or editing a customer list does not affect third party applications.

## Add a Customer List

To add a customer list, follow these steps:

1. Select **SETTINGS**.
1. To add the Customer list at Account level, verify that **All locations** is selected. To add it to a Location, select the Location from the **Location** dropdown.
1. From the **Customer lists** section, click **Add a customer list**.
1. Enter the name for the customer list. If you only have one customer list, we recommend using your Account or Location name.
1. Click **Create** to save the new list.

## Customer List Details

The **Customer lists** section displays the following information:

- **Name**: The name of the customer list, followed by its unique identifier. This unique identifier does not change even if the name of the customer list is changed. For example: The customer list `Baker Street` would be displayed as `Baker Street - abc123`. If the catalog `Baker Street` is renamed to `Dunning Street`, it will be displayed as `Dunning Street - abc123`.
- **Customer Count**: The number of customers imported into HubRise. To view customer list details, see [Customers](/docs/data/#customers).

To view the details of a customer list, click the name of the list. It will automatically link you to the **DATA** > **Customers** page for the specific list.

## Edit a Customer List

To change the name of a customer list:

1. In **SETTINGS**.
1. In the **Customer lists** section, click the edit icon <InlineImage width="15" height="15">![Edit Icon](../images/028-en-pen-icon.png)</InlineImage> for the customer list to update.
1. Enter the new name of the customer list.
1. Click **Update** to save the changes.

![Edit or remove a customer list](../images/074-en-edit-remove-customer-list.png)

## Remove a Customer List

Customer lists can only be deleted when there are no active connections to them from an app, or when removing them will leave no Customer lists connected to the Account.

1. Select **SETTINGS**.
1. In the **Customer lists** section, click the remove icon <InlineImage width="15" height="16">![Trash icon](../images/057-2x-trash-icon.png)</InlineImage> for the customer list to delete.
1. Click **Delete** to confirm.
