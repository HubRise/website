---
title: Troubleshooting
path_override: troubleshooting
position: 5
layout: documentation
meta:
  title: Troubleshooting | Mailchimp | HubRise
  description: How to troubleshoot your Mailchimp connection with HubRise. Follow these instructions to resolve common issues.
---

## Check the Connection Between HubRise and Mailchimp

If contacts are not synced with Mailchimp, first check that Mailchimp is connected.

1. Log in to you HubRise back office.
1. Select **CONNECTIONS**.
1. The Mailchimp Bridge app should appear.

If Mailchimp does not appear, connect your HubRise location to your Mailchimp account. For assistance, see [Connect to HubRise](/apps/mailchimp/connect-hubrise).

## Check that Contacts are Pushed to Mailchimp

Depending on your configuration options, contacts are synced either on customer creation or when a new order is placed. To adjust this setup, see [Configuration](/apps/mailchimp/configuration).

To check that contacts are pushed to Mailchimp:

1. Log in to your HubRise back office.
1. Select **CONNECTIONS**.
1. Find the Mailchimp location and select **Actions** > **Logs**. Each row corresponds to an activity.
1. Click on a row to see the **Request** and **Response** logs associated with the activity.

A successful handling is indicated with a `200` response status code. Other status codes generally indicate a failure.

To inspect the logs exchanged between HubRise and Mailchimp:

1. Log in to your HubRise back office.
1. Select **CONNECTIONS**.
1. Find the Mailchimp app and click **Open**.
1. A new window opens. Click on any of the **Latest operations**. You will be able to see the date and time of the activity, the direction of the data transfer and the status.
1. Click on the activity again to show detailed logs.
1. A response status of `OK`, or status code of `200`, generally indicate a successful transfer.

If the status is not `OK`, check the **Response** drop-down to see the error.

The information contained in the **Request** and **Response** logs are in JSON format. For more information on reading and understanding JSON, check our [JSON logs documentation](/docs/hubrise-logs/overview).
