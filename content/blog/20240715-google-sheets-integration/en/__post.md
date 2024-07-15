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

Integrating HubRise with Make.com enables you to build custom data workflows. You can create dashboards, maintain customer lists, trigger marketing campaigns based on order history, or feed data into business intelligence tools.

In this post, we will set up a basic integration from scratch: centralising order data in Google Sheets. We will guide you through creating a Make.com scenario to receive HubRise orders and log them in a spreadsheet.

While we are focusing here on a simple example, the principles apply to more complex integrations. Our goal is to show you the basics and encourage you to explore further.

## Prerequisites

Before we begin, make sure you have:

1. A HubRise account with administrator access
2. A Make.com account (a free account is sufficient for testing)
3. A Google account to access Google Sheets

## Step 1: Create a HubRise OAuth 2.0 Client

1. Log in to your HubRise back office.
2. Click on **Developer** in the main menu.
3. Select **Create an OAuth 2.0 client**.
4. Choose a name for your client (e.g., "Make.com") and click **Create**.
5. Once created, click **Download** next to client secret.
6. Take note of the client ID and secret from the downloaded JSON file.

## Step 2: Set Up OAuth 2.0 Connection in Make.com

1. Log in to Make.com (or create a free account).
2. Set up a new OAuth 2.0 connection with the following parameters:
   - Authorisation URL: `https://manager.hubrise.com/oauth2/v1/authorize`
   - Token URL: `https://manager.hubrise.com/oauth2/v1/token`
   - Scope: `account[account.read]`
3. Authorise the connection.

## Step 3: Retrieve the Access Token

Due to a current limitation in Make.com, we need to manually retrieve the access token:

1. In the HubRise back office, open **Connections**.
2. Select your account from the **Location** dropdown at the top.
3. Find the Make.com connection and click **Actions** > **View logs**.
4. In the new page, expand **Connection details**.
5. Click **show** next to "access token" and copy the token.

## Step 4: Create a Webhook in Make.com

1. In Make.com, create a new scenario.
2. Add a **HubRise new order** webhook module.
3. Copy the webhook URL provided by Make.com.

## Step 5: Register the Webhook with HubRise

1. In Make.com, create a new **HTTP** module in a separate scenario.
2. Configure it as follows:
   - URL: `https://api.hubrise.com/v1/callbacks`
   - Method: POST
   - Body:
     ```json
     {
       "url": "[Your Make.com webhook URL]",
       "events": {
         "order": ["create"]
       }
     }
     ```
   - Headers: Add `X-Access-Token` with the value of the token from Step 3.
3. Run this scenario once to register the webhook.
4. Verify in the HubRise back office that the callback has been registered under the Make.com connection.

## Step 6: Create the Order Processing Scenario

1. In Make.com, create a new scenario named "Get orders from webhook".
2. Add a webhook module and connect it to a Google Sheets module.
3. Configure the Google Sheets module to add a new row for each order, including relevant information such as order date, total, and status.

## Step 7: Test the Setup

1. In the HubRise back office, install the **Developer tools** application.
2. Use it to inject test orders.
3. Verify that new rows are added to your Google Sheet as orders are injected.

## Expanding Your Automation

This setup is just the beginning of what you can achieve with HubRise and Make.com. Here are some ideas to expand on this foundation:

- Collect detailed order items for in-depth analysis
- Create graphs and statistics based on your order data
- Integrate with other apps available in Make.com
- Set up notifications for high-value orders or specific conditions

While we have used Make.com in this guide, you can apply similar principles with other automation platforms like Zapier, or n8n.

We encourage you to explore and experiment with integrations to streamline your operations. Happy automating!
