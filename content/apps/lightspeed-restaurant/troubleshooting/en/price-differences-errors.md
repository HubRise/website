---
title: Price Difference Errors
position: 6
layout: documentation
meta:
  title: Troubleshoot Price Difference Errors | Lightspeed Restaurant | HubRise
  description: Instructions to solve errors due to differences between the total amount paid and the total price of items in a Lightspeed order.
---

This page describes possible scenarios when the total amount paid by the customer does not match the total price of the items calculated by Lightspeed Restaurant.

## Payment amount greater than the amount due

Lightspeed recalculates the amount due by summing the price of all items in the order. When the total payment amount in the order is greater than the amount due, Lightspeed rejects the order with an error message similar to the following:

```json
{
  "status": "FAILURE",
  "reason": "the payment amount is greater than the amount due",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

There are two possible causes for this error:

- Missing ref codes in the HubRise order.
- Prices not rounded according to the rules of the currency.

### Missing ref codes

Items without a ref code are [ignored by Lightspeed Restaurant Bridge](/apps/lightspeed-restaurant/push-orders#items-and-options) and not sent to the EPOS, thus causing the error. To solve the issue, ensure that all items available in the online ordering or food delivery platform have a ref code.

### Price rounding errors

Prices need to be rounded according to the rules of the currency. For example, if the currency is CHF (Switzerland), the price needs to be rounded to the nearest 0.05 CHF. If the price of an item in HubRise is not a multiple of 0.05 CHF, Lightspeed will calculate an amount due that is different from the amount paid, which will cause the error.

## Payment amount less than the amount due

When the total payment amount in the order is less than the expected amount, Lightspeed accepts the order.
However, the order remains open for payment in the EPOS.

This error typically happens when a discount present in the order does not have a ref code.
The amount paid by the customer, which includes the discount, is therefore less than the amount calculated by Lightspeed, which does not include the discount.

To solve the issue, ensure that all discounts available in the online ordering or food delivery platform have a ref code.
