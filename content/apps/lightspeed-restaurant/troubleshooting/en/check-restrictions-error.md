---
title: Check Restrictions Error
path_override: check-restrictions-error
position: 5
layout: documentation
meta:
  title: Troubleshoot The "Check Restrictions" Error | Lightspeed Restaurant | HubRise
  description: Instructions to troubleshoot errors related to products that contain sales restrictions.
---

This page explains how to troubleshoot failed orders that are caused by products with sales restrictions.

## "Check Restrictions" Error

In some cases, orders sent to Lightspeed Restaurant might fail with the following error in the [logs of Lightspeed Resturant Bridge](/apps/lightspeed-restaurant/user-interface#operation):

```json
{
  "status": "FAILURE",
  "reason": "Could not add item Topping 1 (check sales restrictions)",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

This error happens when sales restrictions applied to a product prevent customers from ordering it.
Sales restrictions are not compatible with online orders.

In the `reason` field, notice how the error message informs you about the item that caused the issue (in this case, `Topping 1`). To resolve the issue, remove the sales restrictions for the product.

## Remove Sales Restrictions

To remove sales restrictions from a product, follow these steps:

1. Log in to your [Lightspeed back office](https://console.ikentoo.com).
1. From the menu bar, select **Items** > **Items**.
1. From the list of products, find the product mentioned in the error message, then click the **Edit** icon in the **Actions** column.
1. In the **Item details** section, disable the checkbox next to **Enable a counter on this item to restrict the available quantity**.
1. Click **Save**.
   ![Disable sales restrictions on an item](./images/023-2x-lightspeed-sales-restrictions.png)
