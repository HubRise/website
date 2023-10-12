---
title: Food Ordering Platforms
path_override: food-ordering-platforms
position: 7
layout: documentation
meta:
  title: Food Ordering Platforms | App4 | HubRise
  description: Integrating App4 with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in App4.

This page describes the settings to use to connect food ordering platforms to App4.

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

## Service Type Refs {#service-type-refs}

App4 displays the ref codes configured in the Service Type fields in the order notes. You can leave these ref codes empty, or use any value that will help you identify the source and service type of an order.

For example, you can use `Deliveroo` for all Deliveroo orders, or differentiate between delivery and collection orders with `Deliveroo delivery` and `Deliveroo collection`. You can also include your restaurant name in the ref code, such as `Deliveroo My Restaurant`, if you operate multiple brands and want to differentiate between them.

## Deliveroo

To receive Deliveroo orders in App4, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo/overview).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |
| Service types  | Deliveroo fulfilled ref code          | See [Service Type Refs](#service-type-refs)       |
| Service types  | Restaurant fulfilled ref code         | Same as above                                     |
| Service types  | Takeaway ref code                     | Same as above                                     |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Offer ref code                        | (leave empty)                                     |
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

To receive Just Eat orders in App4 via Takeaway API, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway/overview).

In the Just Eat Takeaway Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |
| Service types  | Just Eat delivery ref code               | See [Service Type Refs](#service-type-refs)       |
| Service types  | Restaurant delivery ref code             | Same as above                                     |
| Service types  | Takeaway ref code                        | Same as above                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | (leave empty)                                     |
| Charges        | Service fee ref code                     | (leave empty)                                     |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |

### Just Eat via Flyt API

To receive Just Eat orders in App4 via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |
| Service types  | Just Eat delivery ref code               | See [Service Type Refs](#service-type-refs)       |
| Service types  | Restaurant delivery ref code             | Same as above                                     |
| Service types  | Takeaway ref code                        | Same as above                                     |
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

To receive Uber Eats orders in App4, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats/overview).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code or value                                   |
| -------------- | ------------------------------------- | --------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`   |
| Service types  | Uber delivery ref code                | See [Service Type Refs](#service-type-refs)         |
| Service types  | Restaurant delivery ref code          | Same as above                                       |
| Service types  | Takeaway ref code                     | Same as above                                       |
| Service types  | Eat-in ref code                       | Same as above                                       |
| Service types  | Send orders delivered by Uber Eats as | `collection orders`                                 |
| Special items  | Disposable items ref code             | Create a product in App4 and use its ref code. (\*) |
| Discounts      | Discount ref code                     | (leave empty)                                       |
| Charges        | Delivery charge ref code              | (leave empty)                                       |
| Charges        | Small order fee ref code              | (leave empty)                                       |
| Charges        | Tip ref code                          | (leave empty)                                       |
| Payments       | Online payment ref code               | (leave empty)                                       |
| Payments       | Cash payment ref code                 | (leave empty)                                       |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                       |
| Catalog        | Enable customer notes on products     | Tick if you wish to enable them                     |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
