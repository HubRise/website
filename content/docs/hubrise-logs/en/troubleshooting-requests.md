---
title: Troubleshooting Requests
position: 8
layout: documentation
meta:
  title: Troubleshooting Requests | How to Read HubRise logs
  description: Error codes, order statuses and missing or wrong ref codes shown in HubRise logs help understand issues.
---

## Overview

In some cases, an order might fail to be sent. Troubleshooting the API requests in the back office can help determine the exact point of failure in the path from the customer to the shop.

There is no single strategy that can debug all possible issues, but the following suggestions are a good place to start.

## Error Codes

Every request is associated with a response code. For more information, see [Response Code](/docs/hubrise-logs/json-requests-in-hubrise#code). This is the first detail to check for possible errors.

Any value different from 200 might indicate that one request in the chain failed to get through, causing the entire order to be rejected.

The following list describes possible scenarios and troubleshooting strategies to fix the issue.

### Error 422

The error code 422 appears when a request is successfully sent and received, but its content is not recognised by the system.

In many cases, this error can be traced to the systems connected to HubRise. For example, it often appears when the EPOS cannot recognise the product or deal ref code contained in the request.

### Error 500

The error code 500 appears when the server that was supposed to receive the request had an internal error, but its actual nature is not specified. In this case, the request could not be correctly processed, and you should report this error to the relevant support team. It could be either HubRise or the connected app.

## Order Status

Orders go through a series of different statuses during their lifecycle. Normal values for the status include **new** when an order is first created, and **received** when it is received by the POS. For the complete list of possible values, see the [Developers Documentation](/developers/api/order-management/#order-status).

In some cases, the status might indicate a problem with the order. The following table presents the possible error values.

| Value           | Description                                   |
| --------------- | --------------------------------------------- |
| rejected        | The order has been rejected by the store.     |
| cancelled       | The order has been cancelled by the customer. |
| delivery_failed | The order could not be delivered.             |

## Ref Codes

Ref codes must be correctly set in the apps connected with HubRise. A wrong or missing ref code might lead to errors in the requests.

The following checklist can help you find possible issues.

1. Check that all service types you provide have the correct service_type_ref code.
1. Check that all products have the correct sku_ref code.
1. Check that all ingredients and toppings have the correct ref code. In some cases, adding or removing an identical ingredient might be associated with different ref codes.
1. Check that all the accepted payment methods have the correct ref code.
