---
title: Food Ordering Platforms
path_override: food-ordering-platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | Next Order | HubRise
  description: Integrating Next Order with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Uber Eats, Menulog, Just Eat and other food platforms in Next Order. You can also push your menu from Next Order to food platforms.

This page describes the settings to use to connect food ordering platforms to Next Order.

For more information, check the documentation of these platforms in our [Apps page](/apps#food-ordering-platforms).

## Deliveroo

To receive Deliveroo orders in Next Order, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo/overview).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                                  |
| -------------- | ------------------------------------- | --------------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Accepted"`         |
| Service types  | Deliveroo delivery ref code           | PLATFORM_DELIVERY-DELIVEROO                               |
| Service types  | Restaurant delivery ref code          | STORE_DELIVERY-DELIVEROO                                  |
| Service types  | Takeaway ref code                     | PICKUP-DELIVEROO                                          |
| Service types  | Send orders delivered by Deliveroo as | `delivery orders`                                         |
| Special items  | Deposit option ref code               | Create an option in Next Order and use its ref code. (\*) |
| Discounts      | Offer ref code                        | DISCOUNT                                                  |
| Charges        | Delivery charge ref code              | DELIVERY                                                  |
| Charges        | Surcharge ref code                    | MIN_ORDER_VALUE                                           |
| Charges        | Bag fee ref code                      | (leave empty)                                             |
| Payments       | Online payment ref code               | (leave empty)                                             |
| Payments       | Cash payment ref code                 | (leave empty)                                             |
| Customers      | Duplicate phone access code in [...]  | Leave unchecked                                           |

(\*) Only applies if some of your products require a deposit.

### Just Eat via Flyt API

To receive Just Eat orders in Next Order via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                                  |
| -------------- | ---------------------------------------- | --------------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Accepted"`         |
| Service types  | Just Eat delivery ref code               | PLATFORM_DELIVERY-JUST_EAT                                |
| Service types  | Restaurant delivery ref code             | STORE_DELIVERY-JUST_EAT                                   |
| Service types  | Takeaway ref code                        | PICKUP-JUST_EAT                                           |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                         |
| Special items  | Deposit option ref code                  | Create an option in Next Order and use its ref code. (\*) |
| Discounts      | Discount ref code                        | DISCOUNT                                                  |
| Charges        | Delivery charge ref code                 | DELIVERY                                                  |
| Charges        | Service charge ref code                  | (leave empty)                                             |
| Charges        | Bag fee ref code                         | (leave empty)                                             |
| Charges        | Small order fee ref code                 | MIN_ORDER_VALUE                                           |
| Charges        | Driver tip ref code                      | TIP                                                       |
| Charges        | Other charge ref code                    | (leave empty)                                             |
| Payments       | Online payment ref code                  | (leave empty)                                             |
| Payments       | Cash payment ref code                    | (leave empty)                                             |
| Customers      | Duplicate phone access code in [...]     | Tick this box                                             |

(\*) Only applies if some of your products require a deposit.

### Menulog

To receive Menulog orders in Next Order via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                                  |
| -------------- | ---------------------------------------- | --------------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Accepted"`         |
| Service types  | Just Eat delivery ref code               | PLATFORM_DELIVERY-MENULOG                                 |
| Service types  | Restaurant delivery ref code             | STORE_DELIVERY-MENULOG                                    |
| Service types  | Takeaway ref code                        | PICKUP-MENULOG                                            |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                         |
| Special items  | Deposit option ref code                  | Create an option in Next Order and use its ref code. (\*) |
| Discounts      | Discount ref code                        | DISCOUNT                                                  |
| Charges        | Delivery charge ref code                 | DELIVERY                                                  |
| Charges        | Service charge ref code                  | (leave empty)                                             |
| Charges        | Bag fee ref code                         | (leave empty)                                             |
| Charges        | Small order fee ref code                 | MIN_ORDER_VALUE                                           |
| Charges        | Driver tip ref code                      | TIP                                                       |
| Charges        | Other charge ref code                    | (leave empty)                                             |
| Payments       | Online payment ref code                  | (leave empty)                                             |
| Payments       | Cash payment ref code                    | (leave empty)                                             |
| Customers      | Duplicate phone access code in [...]     | Tick this box                                             |

## Uber Eats

To receive Uber Eats orders in Next Order, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats/overview).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code or value                                         |
| -------------- | ------------------------------------- | --------------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`         |
| Service types  | Uber Eats delivery ref code           | PLATFORM_DELIVERY-UBER_EATS                               |
| Service types  | Restaurant delivery ref code          | STORE_DELIVERY-UBER_EATS                                  |
| Service types  | Takeaway ref code                     | PICKUP-UBER_EATS                                          |
| Service types  | Eat-in ref code                       | DINE_IN-UBER_EATS                                         |
| Service types  | Send orders delivered by Uber Eats as | `delivery orders`                                         |
| Special items  | Disposable items ref code             | Create a product in Next Order and use its ref code. (\*) |
| Discounts      | Discount ref code                     | DISCOUNT                                                  |
| Charges        | Delivery charge ref code              | DELIVERY                                                  |
| Charges        | Small order fee ref code              | MIN_ORDER_VALUE                                           |
| Charges        | Tip ref code                          | TIP                                                       |
| Payments       | Online payment ref code               | (leave empty)                                             |
| Payments       | Cash payment ref code                 | (leave empty)                                             |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                             |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
