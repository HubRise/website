---
title: Food Ordering Platforms
path_override: food-ordering-platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | AKK Softtech | HubRise
  description: Integrating AKK Softtech with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in AKK Softtech. You can also push your menu from AKK Softtech to food platforms.

This page describes the settings to use to connect food ordering platforms to AKK Softtech.

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

## Deliveroo

To receive Deliveroo orders in AKK Softtech, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo/overview).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                                     |
| -------------- | ------------------------------------- | ------------------------------------------------------------ |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`            |
| Service types  | Deliveroo fulfilled ref code          | `Deliveroo` or any other value you want printed on receipts. |
| Service types  | Restaurant fulfilled ref code         | Same as above                                                |
| Service types  | Takeaway ref code                     | Same as above                                                |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                                          |
| Discounts      | Offer ref code                        | (leave empty)                                                |
| Charges        | Delivery charge ref code              | (leave empty)                                                |
| Charges        | Surcharge ref code                    | (leave empty)                                                |
| Charges        | Bag fee ref code                      | (leave empty)                                                |
| Payments       | Online payment ref code               | (leave empty)                                                |
| Payments       | Cash payment ref code                 | (leave empty)                                                |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                                |

## Just Eat

To receive Just Eat orders in AKK Softtech, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                                    |
| -------------- | ---------------------------------------- | ----------------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"`           |
| Service types  | Just Eat delivery ref code               | `Just Eat` or any other value you want printed on receipts. |
| Service types  | Restaurant delivery ref code             | Same as above                                               |
| Service types  | Takeaway ref code                        | Same as above                                               |
| Service types  | Send orders delivered by the platform as | `collection orders`                                         |
| Discounts      | Discount ref code                        | (leave empty)                                               |
| Charges        | Delivery charge ref code                 | (leave empty)                                               |
| Charges        | Service charge ref code                  | (leave empty)                                               |
| Charges        | Bag fee ref code                         | (leave empty)                                               |
| Charges        | Driver tip ref code                      | (leave empty)                                               |
| Charges        | Other charge ref code                    | (leave empty)                                               |
| Payments       | Online payment ref code                  | (leave empty)                                               |
| Payments       | Cash payment ref code                    | (leave empty)                                               |
| Customers      | Duplicate phone access code in [...]     | Tick this box                                               |

## Uber Eats

To receive Uber Eats orders in AKK Softtech, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats/overview).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code or value                                            |
| -------------- | ------------------------------------- | ------------------------------------------------------------ |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`            |
| Service types  | Uber delivery ref code                | `Uber Eats` or any other value you want printed on receipts. |
| Service types  | Restaurant delivery ref code          | Same as above                                                |
| Service types  | Takeaway ref code                     | Same as above                                                |
| Service types  | Eat-in ref code                       | Same as above                                                |
| Service types  | Send orders delivered by Uber Eats as | `collection orders`                                          |
| Special items  | Disposable items ref code             | Create a product in AKK Softtech and use its ref code. (\*)  |
| Discounts      | Discount ref code                     | (leave empty)                                                |
| Charges        | Delivery charge ref code              | (leave empty)                                                |
| Charges        | Small order fee ref code              | (leave empty)                                                |
| Charges        | Tip ref code                          | (leave empty)                                                |
| Payments       | Online payment ref code               | (leave empty)                                                |
| Payments       | Cash payment ref code                 | (leave empty)                                                |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                                |
| Catalog        | Enable customer notes on products     | Tick if you wish to enable them                              |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
