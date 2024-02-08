---
title: Item Not Found Errors
path_override: item-not-found-errors
position: 3
layout: documentation
meta:
  title: Troubleshoot Item Not Found Errors | Lightspeed Restaurant | HubRise
  description: Instructions to solve errors due to items with incorrect ref codes in the orders you receive from third party apps.
---

This page describes how to troubleshoot errors due to missing ref codes.

## "Could Not Add Item (Not Found)" Error

In some cases, orders can fail with an error message similar to the following:

```json
{
  "status": "FAILURE",
  "reason": "Could not add item 6644662335523 (not found)",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

The cause of the error depends on the identifier included in the `reason` field of the error message (e.g. `6644662335523` in the example above).

- If the identifier is one of the ref codes used in the order, the error is caused by an invalid ref code.
- Otherwise, the error is caused by a disconnected item in Lightspeed.

### Invalid ref code

The item whose ref code is indicated in the `reason` field of the error message is not in Lightspeed. To resolve this issue, find the correct ref code in Lightspeed, and include it in the third party app that sent the order.

### Disconnected item

One of the items in the order has a **Disconnected** status in Lightspeed. To fix the issue, check each item of the order in Lightspeed, and make sure they are all linked to a menu. Alternatively, check the disconnected items in Lightspeed and make sure they are not used in any orders.

Unfortunately, the error message does not indicate which item is causing the error.

## "No such item" Error

In some cases, orders can fail with an error message similar to the following:

```json
{
  "status": "FAILURE",
  "reason": "No such item id: 6644662335523, sku: abc123, blId: 52000111222",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

This is generally due to two possible reasons:

- Incorrect ref codes
- iPad not updated

### Incorrect Ref Codes

If you receive orders from a connected app, for example a food delivery platform, you need to make sure that ref codes are properly configured there. An incorrect ref code in the menu of your connected ordering solutions can cause a whole order to be rejected by the Lightspeed Restaurant EPOS.

In the error message, the `sku` in the `reason` field (e.g. `abc123` in the example above) indicates the missing ref code in the Lightspeed EPOS. To solve the issue, include the correct ref code in the third party app that sent the order.

### iPad Not Updated

If the iPad you are using does not have the updated menu, you might see the error even if the item is available in Lightspeed. If you experience this error intermittently and have multiple iPads in your store, the error might be caused by a single iPad that is not up to date when it receives the order.

To solve the issue, make sure that all your iPads are up to date.
