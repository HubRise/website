---
title: How Do I Troubleshoot Price Difference Errors?
position: 6
layout: documentation
meta:
  title: Troubleshoot Price Difference Errors | Lightspeed Restaurant | HubRise
  description: Instructions to solve errors due to differences between the total amount paid and the total price of items in a Lightspeed order.
---


This page describes possible scenarios when the total amount paid by the customer does not match the total price of the items calculated by Lightspeed Restaurant.

## Total payment amount greater than the expected amount

When the total payment amount in the order is greater than the expected amount, Lightspeed rejects the order with an error message similar to the following:

```
{
  "status": "FAILURE",
  "reason": "the payment amount is greater than the amount due",
  "thirdPartyReference": "zrk8p|wbv7z-0|2ve7gq"
}
```

This error typically happens when some products or options do not have a ref code. Items without a ref code, in fact, are [ignored by Lightspeed Restaurant Bridge](/apps/lightspeed-restaurant/receiving-orders#items-and-options) and are not sent to the EPOS, thus causing the error.

To solve the issue, ensure that all items available in the online ordering or food delivery platform have a ref code.

## Total payment amount less than the expected amount


When the total payment amount in the order is less than the expected amount, Lightspeed accepts the order.
However, the order remains open for payment in the EPOS.

This error typically happens when a discount present in the order does not have a ref code.
The amount paid by the customer, which includes the discount, is therefore less than the amount calculated by Lightspeed, which does not include the discount.

To solve the issue, ensure that all discounts available in the online ordering or food delivery platform have a ref code.