---
title: Food Ordering Platforms
position: 4
layout: documentation
meta:
  title: Food Ordering Platforms | eTakeaway Max | HubRise
  description: Integrating eTakeaway Max with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

To connect eTakeaway Max to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided below.

## Deliveroo

To receive Deliveroo orders in eTakeaway Max, you first need to connect Deliveroo Bridge, an app included in your HubRise
subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, specify the following values in the Deliveroo Bridge configuration page. To learn how
to view and modify the configuration page for Deliveroo Bridge, see
the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | `DLVRCLCT`                                        |
| Service types  | Restaurant fulfilled ref code         | `DLVRDEL`                                         |
| Service types  | Takeaway ref code                     | `DLVRTKWY`                                        |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Offer ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code              | (leave empty)                                     |
| Charges        | Surcharge ref code                    | (leave empty)                                     |
| Payments       | Deliveroo payment ref code            | (leave empty)                                     |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |

## Uber Eats

To receive Uber Eats orders in eTakeaway Max, you first need to connect Uber Eats Bridge, an app included in your HubRise
subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how
to view and modify the configuration page for Uber Eats Bridge, see
the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Section        | Name                                  | Ref code or value                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------- |
| Service types  | Uber delivery ref code                | `UBECLCT`                                               |
| Service types  | Restaurant delivery ref code          | `UBEDEL`                                                |
| Service types  | Takeaway ref code                     | `UBETKWY`                                               |
| Service types  | Eat-in ref code                       | `eatin_ref`                                             |
| Service types  | Send orders delivered by Uber Eats as | `collection orders`                                     |
| Special items  | Disposable items ref code             | Create a product in eTakeaway Max and use its ref code. |
| Discounts      | Discount ref code                     | (leave empty)                                           |
| Charges        | Delivery charge ref code              | (leave empty)                                           |
| Charges        | Small order fee ref code              | (leave empty)                                           |
| Charges        | Tip ref code                          | (leave empty)                                           |
| Payments       | Payment ref code                      | (leave empty)                                           |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`       |

eTakeaway Max can display the product-level comments included by your customers in their orders.

## Just Eat

To receive Just Eat orders in eTakeaway Max, you first need to connect Just Eat Flyt Bridge, an app included in your
HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Flyt Bridge configuration page.

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Just Eat delivery ref code               | `COLLECT`                                         |
| Service types  | Restaurant delivery ref code             | `DEL`                                             |
| Service types  | Takeaway ref code                        | `COLLECT`                                         |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | (leave empty)                                     |
| Charges        | Service charge ref code                  | (leave empty)                                     |
| Charges        | Bag fee ref code                         | (leave empty)                                     |
| Charges        | Driver tip ref code                      | (leave empty)                                     |
| Charges        | Other charge ref code                    | (leave empty)                                     |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |
