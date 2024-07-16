---
title: Receive HubRise Orders in Google Sheets via Make.com
path_override: google-sheets-integration
date: 2024-07-15
author: Antoine Monnier
meta:
  title: Receive HubRise Orders in Google Sheets via Make.com | Blog | HubRise
  description: Learn how to set up a webhook to automatically receive HubRise orders in Google Sheets using Make.com. This step-by-step guide is perfect for semi-technical users looking to automate their order management process.
excerpt: Discover how to automate your order management by setting up a webhook to receive HubRise orders directly in Google Sheets using Make.com. This guide walks you through the process, from creating a HubRise client to configuring Make.com and Google Sheets.
---

[//]: # "Photo credits: Pixabay - https://pixabay.com/illustrations/statistics-graph-chart-data-3411473/"

Integrating HubRise with Make.com enables you to build custom data workflows. You can create dashboards, maintain
customer lists, trigger marketing campaigns based on order history, or feed data into business intelligence tools.

In this post, we will set up a basic integration to centralise all your orders in Google Sheets. We will use Make.com to
receive order data from HubRise and push them into a Google Sheet. This guide is suited for semi-technical users.

While we are focusing here on a simple example, the principles apply to more complex integrations. Our goal is to show
you the basics and encourage you to explore further.

## Prerequisites

Before we begin, make sure you have:

1. A HubRise account ([sign up](https://manager.hubrise.com/signup))
2. A Make.com account ([sign up](https://www.make.com/en/register))
3. A Google account to access Google Sheets

Note: Free plans for HubRise and Make.com are sufficient for this guide.

## Step 1: Create a HubRise OAuth 2.0 Client

1. Log in to your HubRise back office.
2. Click on **Developer** in the main menu.
3. Select **Create an OAuth 2.0 client**.
4. Choose a name for your client (e.g., "Make.com") and click **Create**.
5. Once created, click **Download** next to client secret.
6. Take note of the client ID and secret from the downloaded JSON file.

## Step 2: Set Up OAuth 2.0 Connection in Make.com

1. Log in to Make.com.
2. Create a new scenario and name it "Register webhook".
3. Add a new module and search for "Make an OAuth 2.0 request". Click to add it to your scenario.
4. Click **Create a connection**.
5. Set up the OAuth 2.0 connection with the following parameters:
   - Connection name: Choose a name (e.g., "HubRise")
   - Flow Type: Authorization Code
   - Authorization URI: `https://manager.hubrise.com/oauth2/v1/authorize`
   - Token URI: `https://manager.hubrise.com/oauth2/v1/token`
   - Scope > Item 1: `account[orders.read]`
   - Client ID: [Your HubRise client ID from Step 1]
   - Client Secret: [Your HubRise client secret from Step 1]
6. Click **Save** to create the connection.
7. Authorise the connection when prompted.

## Step 3: Retrieve the Access Token

Due to a current limitation in Make.com, we need to manually retrieve the access token:

1. In the HubRise back office, open **Connections**.
2. Find the connection you created in Step 2 and click **Actions** > **View logs**.
3. In the new page, expand **Connection details**.
4. Click **show** next to "Access token" and copy the token to a safe place - we will need it in Step 5.

## Step 4: Create a Webhook in Make.com

1. In Make.com, create a new scenario named "Receive orders".
2. Add a **Webhooks** > **Custom webhook** module.
3. Click **Create a webhook** and configure it as follows:
   - Webhook name: Choose a name (e.g., "HubRise")
   - IP restriction: Leave empty
4. Copy the webhook URL to a safe place - we will need in the next step.

## Step 5: Register the Webhook with HubRise

1. Open the scenario "Register webhook" from Step 2.
2. Delete the "Make an OAuth 2.0 request" module - we no longer need it.
3. Add a new **HTTP** > **Make a request** module.
4. Configure it as follows:
   - URL: `https://api.hubrise.com/v1/callback`
   - Method: POST
   - Headers: Add `X-Access-Token` with the value of the token from Step 3
   - Body type: Raw
   - Content type: JSON
   - Request content:
     ```json
     {
       "url": "[The Make.com webhook URL from Step 4]",
       "events": {
         "order": ["create"]
       }
     }
     ```
5. Save the scenario and click **Run once**.

## Step 6: Verify the Configuration

1. Open your HubRise back office.
2. Verify the creation of the webhook:
   - Open **Connections**.
   - Find the Make.com connection and click **Actions** > **View logs**.
   - Expand the **Connection details** section.
   - Check that the webhook URL appears here, and that the correct events are registered.

## Step 7: Inject One Test Order

Now, we need to inject a test order for Make.com to capture the data mapping:

1. Open your HubRise back office.
2. Click **Connections**.
3. Click **View available apps**.
4. Connect the **Developer tools** app.
5. Open the app and inject a test order.

Verify that the order was received by the webhook in Make.com:

1. Open Make.com.
2. Click **Webhooks**.
3. Check that the webhook you created has received an event. Look for a label indicating the number of events received next to a truck icon.

## Step 8: Complete the Order Processing Scenario

We can now map the incoming order data to the Google Sheet.

1. In Make.com, open the scenario "Receive orders" from Step 4.

2. Click the webhook module, then click **Redetermine data structure**.

3. Inject a new test order as in Step 7. This will allow Make.com to capture the incoming data structure.

4. Click **Run once** to activate the webhook.

5. Add a **Google Sheets** module to the right of the webhook module. Configure it as follows:

   - Select the **Add a Row** action.
   - Connect your Google account if you haven't already.
   - Select the "Spreadsheet ID" and the "Sheet Name" where you want to log the orders.
   - In the "Values" section, map the incoming data from the webhook to your spreadsheet columns. Here's an example mapping:
     - A: `{{new_state.created_at}}` (Order creation date)
     - C: `{{new_state.customer.first_name}}` (Customer's first name)
     - D: `{{new_state.customer.last_name}}` (Customer's last name)
     - E: `{{new_state.total}}` (Order total)
     - F: `{{new_state.status}}` (Order status)

6. Save your scenario and click **Run once**.

## Step 8: Test the Integration

You can now open **Developer tools** again and inject test orders.

If your integration is successful, the orders will be injected in your Google Sheet almost instantly.

## Expanding Your Automation

This setup is just the beginning of what you can achieve with HubRise and Make.com. Here are some ideas to expand on this foundation:

- Collect detailed order items for in-depth analysis
- Create graphs and statistics based on your order data
- Integrate with other apps available in Make.com
- Set up notifications for high-value orders or specific conditions

While we have used Make.com in this guide, you can apply similar principles with other automation platforms like Zapier, or n8n.

We encourage you to explore and experiment with integrations to streamline your operations. Happy automating!
