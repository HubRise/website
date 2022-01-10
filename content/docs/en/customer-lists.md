---
title: Customer Lists
position: 13
layout: documentation
meta:
  title: Customer Lists | HubRise
  description: How to manage HubRise customer lists.
---

The **SETTINGS** > **ACCOUNTS** > **Customer lists** section allows you to add, edit, and delete customer lists.

Customer Lists can be added to Accounts and Locations with the following conditions:

- By default, Accounts define one Customer list named after the Account. Locations do not have a Customer list defined by default.
- An Account **must** have at least one Customer list. If you attempt to delete the last Customer list of an Account, an error notification will be displayed.
- You can create as many Customer lists as you need. For example:
  - You can create a test Customer list to be used without impacting production.
  - Create a Customer list for a Location that have different Customers as other Locations.

You can connect integrated apps to a specific customer list. Your customers are registered, managed and imported from your third party application into HubRise, and can not be edited from the HubRise interface.

Adding or editing a customer list does not effect third party applications.

The **Customer list** section displays the following information:

- **Name**: The name of the customer list, followed by its unique character code. This unique character code does not change even if the name of the catalog is changed. For example: The catalog **Baker Street** would be displayed as **Baker Street - abc123**. If the catalog **Baker Street** is renamed to **Dunning Street**, it will be displayed as **Dunning Street - abc123**.
- **Customer Count**: The number of customers imported into HubRise. To view customer list details, see [Customers](/docs/data/#customers).

## Add a Customer List

To add a customer list:

1. In the section **SETTINGS** > **ACCOUNTS** > **Customer lists**, click **Add a customer list**.
1. Enter the name for the new customer list. The recommended naming convention is to name the Account customer list with the same name as your Account, and location customer lists as **Account Name - Location Name**. For example, your default Account customer list may be **Fast Pizza**, and the customer list for a location would be **Fast Pizza - Baker Street**.
1. Click **Add a customer list** to save the new list.

## View a Customer List

To view the details of a customer list, click the name of the list. It will automatically link you to the **DATA** > **Customers** page for the specific list.

<video controls title="Customer list link">
  <source src="../images/049-en-access-account-from-dashboard.webm" type="video/webm"/>
</video>

## Edit a Customer List

To change the name of a customer list:

1. In **SETTINGS** > **ACCOUNTS** > **Customer lists** section, click the edit icon <InlineImage width="15" height="15">![Edit Icon](../images/028-en-pen-icon.png)</InlineImage>for the customer list to update.
1. Enter the new name of the customer list.
1. Click **Edit customer list** to save the changes.

## Delete a Customer List

Customer lists can only be deleted when there are no active connections to them from an app, or when removing them will leave no Customer lists connected to the Account.

1. In **SETTINGS** > **ACCOUNTS** > **Customer lists** section, click the remove icon <InlineImage width="15" height="16">![Trash icon](../images/057-2x-trash-icon.png)</InlineImage>for the customer list to delete.
1. Click **Delete** to confirm.
