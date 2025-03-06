---
title: Sync Customers
path_override: sync-customers
position: 4
layout: documentation
meta:
  title: Sync Customers | Mailchimp | HubRise
  description: Learn how HubRise syncs customer data with Mailchimp, including automatic updates, merge field handling, and manual exports.
---

Connecting Mailchimp to HubRise allows customer data to be automatically exported to your Mailchimp audience.

## Automatic Customer Sync

Once Mailchimp Bridge is connected to HubRise, customers are automatically added or updated in Mailchimp based on the selected **Create a contact in Mailchimp when** option in the [Configuration](/apps/mailchimp/configuration) page.

- If **An order is placed in HubRise** is selected, customer details are synced when an order is created. This mode provides the most comprehensive customer data, including order history and preferences.
- If **A customer is added to HubRise** is selected _(deprecated)_, only basic customer details are synced when a new customer is created in HubRise.

### Data Synced to Mailchimp

When a customer is added or updated in HubRise, Mailchimp Bridge ensures that the following data is sent to Mailchimp, based on the selected fields in the Configuration page:

- **Email address** (required by Mailchimp)
- **First and last name** (required by Mailchimp)
- **Phone number**
- **Postal code** – Space characters are removed before syncing.
- **Total number of orders and spend** – Sent as plain numbers.
- **Loyalty balance** – Sent as a plain number.
- **First and last ordered dates** – Dates of the first and last orders registered in HubRise.
- **Last ordered location** – The name and HubRise ID of the last location the customer ordered from.
- **Last service type (Delivery/Collection/Eat-in)** – The last service type the customer used.
- **SMS marketing opt-in/out** – Unlike all other fields, this is sent as a member tag.

### Merge Fields Creation

When a customer update is sent to Mailchimp, Mailchimp Bridge checks if all required merge fields are present in the Mailchimp audience:

- If any of the selected fields are missing, they are automatically added to Mailchimp before updating the customer record.
- If a field exists but has an incorrect data type, Mailchimp Bridge updates it to match the expected type.

## Customer Export

If you already have customers registered in HubRise when you first connect Mailchimp, you can export them manually:

1. Open the **Actions** tab in Mailchimp Bridge.
2. In the **Export HubRise customers to Mailchimp** section, click **Export**.
3. Confirm the export.

This will push all customers from your HubRise customer list to your selected Mailchimp audience.
