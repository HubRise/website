---
title: Food Ordering Platforms
path_override: food-ordering-platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | Quantum by Cunninghams | HubRise
  description: Integrating Quantum with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in Quantum EPOS. You can also push your menu from Quantum to food platforms.

This page describes the settings to use to connect food ordering platforms to Quantum.

For more information, check the documentation of these platforms in our [Apps page](/apps#food-ordering-platforms).

## Deliveroo

To receive Deliveroo orders in Quantum, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo/overview).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                               |
| -------------- | ------------------------------------- | ------------------------------------------------------ |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`      |
| Service types  | Deliveroo fulfilled ref code          | (leave empty)                                          |
| Service types  | Restaurant fulfilled ref code         | (leave empty)                                          |
| Service types  | Takeaway ref code                     | (leave empty)                                          |
| Service types  | Send orders delivered by Deliveroo as | `delivery orders`                                      |
| Special items  | Deposit option ref code               | Create an option in Quantum and use its ref code. (\*) |
| Discounts      | Offer ref code                        | (leave empty)                                          |
| Charges        | Delivery charge ref code              | (leave empty)                                          |
| Charges        | Surcharge ref code                    | (leave empty)                                          |
| Charges        | Bag fee ref code                      | (leave empty)                                          |
| Payments       | Online payment ref code               | (leave empty)                                          |
| Payments       | Cash payment ref code                 | (leave empty)                                          |
| Customers      | Duplicate phone access code in [...]  | Leave unchecked                                        |

(\*) Only applies if some of your products require a deposit.

## Just Eat

To receive Just Eat orders in Quantum via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                               |
| -------------- | ---------------------------------------- | ------------------------------------------------------ |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"`      |
| Service types  | Just Eat delivery ref code               | (leave empty)                                          |
| Service types  | Restaurant delivery ref code             | (leave empty)                                          |
| Service types  | Takeaway ref code                        | (leave empty)                                          |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                      |
| Special items  | Deposit option ref code                  | Create an option in Quantum and use its ref code. (\*) |
| Discounts      | Discount ref code                        | (leave empty)                                          |
| Charges        | Delivery charge ref code                 | (leave empty)                                          |
| Charges        | Service charge ref code                  | (leave empty)                                          |
| Charges        | Bag fee ref code                         | (leave empty)                                          |
| Charges        | Small order fee ref code                 | (leave empty)                                          |
| Charges        | Driver tip ref code                      | (leave empty)                                          |
| Charges        | Other charge ref code                    | (leave empty)                                          |
| Payments       | Online payment ref code                  | (leave empty)                                          |
| Payments       | Cash payment ref code                    | (leave empty)                                          |
| Customers      | Duplicate phone access code in [...]     | Leave unchecked                                        |

(\*) Only applies if some of your products require a deposit.

## Uber Eats

To receive Uber Eats orders in Quantum, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats/overview).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code or value                                      |
| -------------- | ------------------------------------- | ------------------------------------------------------ |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`      |
| Service types  | Uber delivery ref code                | (leave empty)                                          |
| Service types  | Restaurant delivery ref code          | (leave empty)                                          |
| Service types  | Takeaway ref code                     | (leave empty)                                          |
| Service types  | Eat-in ref code                       | (leave empty)                                          |
| Service types  | Send orders delivered by Uber Eats as | `delivery orders`                                      |
| Special items  | Disposable items ref code             | Create a product in Quantum and use its ref code. (\*) |
| Discounts      | Discount ref code                     | (leave empty)                                          |
| Charges        | Delivery charge ref code              | (leave empty)                                          |
| Charges        | Small order fee ref code              | (leave empty)                                          |
| Charges        | Tip ref code                          | (leave empty)                                          |
| Payments       | Online payment ref code               | (leave empty)                                          |
| Payments       | Cash payment ref code                 | (leave empty)                                          |
| Customers      | Duplicate phone access code in [...]  | Leave unchecked                                        |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
