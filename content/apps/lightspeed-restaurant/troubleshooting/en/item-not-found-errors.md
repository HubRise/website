---
title: Item Not Found Errors
position: 3
layout: documentation
meta:
  title: Troubleshoot Item Not Found Errors | Lightspeed Restaurant | HubRise
  description: Instructions to solve errors due to items with incorrect ref codes in the orders you receive from third party apps.
---

This page describes how to troubleshoot errors due to missing ref codes.

## "Could Not Add Item (Not Found)" Error

In some cases, orders can fail with an error message similar to the following:

```
{
  "status": "FAILURE",
  "reason": "Could not add item 6644662335523 (not found)",
  "thirdPartyReference": "zvx25|w998x-0|qdvrjd"
}
```

This is generally due to two possible reasons:

- Incorrect ref codes
- iPad not updated

### Incorrect Ref Codes

If you receive orders from a connected app, for example a food delivery platform, you need to make sure that ref codes are properly configured there. An incorrect ref code in your food delivery platform menu can cause a whole order to be rejected by the Lightspeed Restaurant EPOS.

The `reason` field in the error message indicates the missing ref code in the Lightspeed EPOS. To solve the issue, include the correct ref code in the third party app that sent the order.

### iPad Not Updated

If the iPad you are using does not have the updated menu, you might see the error even if the item is available in the main Lightspeed catalog.
If you experience this error intermittently and have multiple iPads in your store, the error might be caused by a single iPad that is not up to date when it receives the order.

To solve the issue, make sure that all your iPads are up to date.

## "No such item" Error

In some cases, orders can fail with an error message similar to the following:

```
{
  "status": "FAILURE",
  "reason": "No such item id: 6644662335523, sku: abc123, blId: 52000111222",
  "thirdPartyReference": "zvx25|w998x-0|qdvrjd"
}
```

The error is due to a product with an incorrect ref code.
To solve the issue, find the correct ref code in Lightspeed, and update the product ref code in the third party app that sent the order.
