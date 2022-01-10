---
title: Understanding Logs
position: 4
layout: documentation
meta:
  title: Understanding Logs | Mailchimp | HubRise
  description: Instructions on how to read the output in the logs coming from Mailchimp Bridge. Synchronise data between your EPOS and your apps.
---

The main page on Mailchimp Bridge shows **Latest operations**. Each operation consists of requests sent from HubRise to Mailchimp Bridge, and from Mailchimp Bridge to Mailchimp.

Logs are in JSON format. For more information, check our [documentation on JSON logs](/docs/hubrise-logs).

## Operations table

The **Latest operations** table might contain an **ORDER** and/or a **CUSTOMER** column depending on the configuration options chosen. For more information, see [Configurations Options](/apps/mailchimp/configuration/#configuration-options).

Operations with a **Customer** or **Order** entry indicate that a single customer was transferred to Mailchimp.

![Mailchimp Bridge Operations Page](../images/001-en-2x-mailchimp-operations.png)

You might also find automated **System request** entries. These can be ignored.

![Mailchimp Bridge Operations Page](../images/002-en-mailchimp-operations-system-requests.png)

Click on an operation to displays the JSON logs exchanged between HubRise and Mailchimp via Mailchimp Bridge. Information about each log is contained in three columns:

- **Time**: The time the operation took place.
- **Direction**: The direction of the operation, i.e. whether data was sent from HubRise to Mailchimp Bridge or from Mailchimp Bridge to Mailchimp.
- **Status**: The status of the request. The value `OK` indicates that the request processed successfully. The value `401` or any other value showing in red means that the request failed.

![Mailchimp Logs](../images/003-en-mailchimp-operation-logs.png)

Each log is divided into two parts: Request and Response. The former displays the information sent in the request, and the latter the response received.

## Requests from HubRise

The request contains the following data fields:

- `id`: The request unique identifier.
- `resource_type`: Always `customer`.
- `event_type`: `create` when the customer is created for the first time in HubRise, `update` for any subsequent actions such as placing an order.
- `customer_id`: The customer unique identifier.
- `customer_list_id`: The identifier of the HubRise list the customer belongs to.
- `email`: The customer email address.
- `first_name`: The customer first name.
- `last_name`: The customer last name.
- `phone`: The customer telephone number.
- `address_1`, `address_2`, `postal_code`, `city`, `state`, and `country`: The customer address.
- `sms_marketing`: `true` if the customer agreed to receive SMS marketing, `false` otherwise.
- `email_marketing`: `true` if the customer agreed to receive email marketing, `false` otherwise.
- `nb_orders`: The number of orders the customer has placed. When the customer is first created, this value is `0`.
- `order_total`: The order amount.
- `first_order_date`: The date on which the customer placed the first order with the location. When the customer is first created, this value is `null`.
- `last_order_date`: The date of the last order of the customer. When the customer is first created, this value is `null`.

## Requests to Mailchimp

Requests made from Mailchimp Bridge to Mailchimp contains the following data fields:

- `email_address`: The email address of the customer which is added to Mailchimp.
- `status`: Whether the customer is subscribed to receive messages through the Mailchimp platform.
- `merge_fields.FNAME`: The customer first name.
- `merge_fields.LNAME`: The customer last name.

The response indicates which values were transferred to Mailchimp and whether the transfer was successful. A status code of `200` indicates a successful handling of the request. In the case of an unsuccessful transfer, an error message is provided in the response.
