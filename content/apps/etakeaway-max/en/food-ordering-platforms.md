---
title: Food Ordering Platforms
path_override: food-ordering-platforms
position: 4
layout: documentation
meta:
  title: Food Ordering Platforms | eTakeaway Max | HubRise
  description: Integrating eTakeaway Max with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in eTakeaway Max. You can also push your menu from eTakeaway Max to food platforms.

This page describes the settings to use to connect food ordering platforms to eTakeaway Max.

For more information, check the documentation of these platforms in our [Apps page](/apps#food-ordering-platforms).

## Deliveroo

To receive Deliveroo orders in eTakeaway Max, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo/overview).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |
| Service types  | Deliveroo fulfilled ref code          | `DLVRCLCT`                                        |
| Service types  | Restaurant fulfilled ref code         | `DLVRDEL`                                         |
| Service types  | Takeaway ref code                     | `DLVRTKWY`                                        |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Discount ref code                     | (leave empty)                                     |
| Charges        | Delivery charge ref code              | (leave empty)                                     |
| Charges        | Surcharge ref code                    | (leave empty)                                     |
| Charges        | Bag fee ref code                      | (leave empty)                                     |
| Payments       | Online payment ref code               | (leave empty)                                     |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                     |

## Just Eat

Just Eat offers two APIs:

- The Flyt API is used on the Just-Eat.co.uk, Just-Eat.ie, Menulog and SkipTheDishes platforms, and for chains on other markets. This API allows you to synchronise the orders and the menu.
- The Takeaway API, the older one, is used for independents on other markets. It allows you to receive orders, but not to send the menu.

If you are not sure which API to use, contact support@hubrise.com.

### Just Eat via Takeaway API

To receive Just Eat orders in eTakeaway Max via Takeaway API, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway/overview).

In the Just Eat Takeaway Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |
| Service types  | Just Eat delivery ref code               | `COLLECT`                                         |
| Service types  | Restaurant delivery ref code             | `DEL`                                             |
| Service types  | Takeaway ref code                        | `COLLECT`                                         |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | (leave empty)                                     |
| Charges        | Service fee ref code                     | (leave empty)                                     |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |

### Just Eat via Flyt API

To receive Just Eat orders in eTakeaway Max via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |
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
| Customers      | Duplicate phone access code in [...]     | Tick this box                                     |

## Uber Eats

To receive Uber Eats orders in eTakeaway Max, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats/overview).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code or value                                            |
| -------------- | ------------------------------------- | ------------------------------------------------------------ |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`            |
| Service types  | Uber delivery ref code                | `UBECLCT`                                                    |
| Service types  | Restaurant delivery ref code          | `UBEDEL`                                                     |
| Service types  | Takeaway ref code                     | `UBETKWY`                                                    |
| Service types  | Eat-in ref code                       | `eatin_ref`                                                  |
| Service types  | Send orders delivered by Uber Eats as | `collection orders`                                          |
| Special items  | Disposable items ref code             | Create a product in eTakeaway Max and use its ref code. (\*) |
| Discounts      | Discount ref code                     | (leave empty)                                                |
| Charges        | Delivery charge ref code              | (leave empty)                                                |
| Charges        | Small order fee ref code              | (leave empty)                                                |
| Charges        | Tip ref code                          | (leave empty)                                                |
| Payments       | Online payment ref code               | (leave empty)                                                |
| Payments       | Cash payment ref code                 | (leave empty)                                                |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                                |
| Catalog        | Enable customer notes on products     | Tick if you wish to enable them                              |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
