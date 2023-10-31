---
title: Food Ordering Platforms
path_override: food-ordering-platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | SOLUTION | HubRise
  description: Integrating SOLUTION with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in SOLUTION. You can also push your menu from SOLUTION to food platforms.

This page describes the settings to use to connect food ordering platforms to SOLUTION.

For more information, check the documentation of these platforms in our [Apps page](/apps#food-ordering-platforms).

## Configuration on SOLUTION

Depending on your needs, you will need to create PRODUCTS, PROMOTIONS, PAYMENT METHODS... specific to the platforms in SOLUTION.

If you don't use these features, you can skip the creation of these items, and leave the corresponding fields empty.

### PRODUCTS, PROMOTIONS...

Describe the items to create before connecting food platforms.

## Deliveroo

To receive Deliveroo orders in SOLUTION, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo/overview).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |
| Service types  | Deliveroo fulfilled ref code          | (leave empty)                                     |
| Service types  | Restaurant fulfilled ref code         | (leave empty)                                     |
| Service types  | Takeaway ref code                     | (leave empty)                                     |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Offer ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code              | (leave empty)                                     |
| Charges        | Surcharge ref code                    | (leave empty)                                     |
| Charges        | Bag fee ref code                      | (leave empty)                                     |
| Payments       | Online payment ref code               | (leave empty)                                     |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Customers      | Duplicate phone access code in [...]  | Leave unchecked                                   |

## Just Eat

Just Eat offers two APIs:

- The Flyt API is used on the Just-Eat.co.uk, Just-Eat.ie, Menulog and SkipTheDishes platforms, and for chains on other markets. This API allows you to synchronise the orders and the menu.
- The Takeaway API, the older one, is used for independents on other markets. It allows you to receive orders, but not to send the menu.

If you are not sure which API to use, contact support@hubrise.com.

### Just Eat via Takeaway API

To receive Just Eat orders in SOLUTION via Takeaway API, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway/overview).

In the Just Eat Takeaway Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |
| Service types  | Just Eat delivery ref code               | (leave empty)                                     |
| Service types  | Restaurant delivery ref code             | (leave empty)                                     |
| Service types  | Takeaway ref code                        | (leave empty)                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | (leave empty)                                     |
| Charges        | Service fee ref code                     | (leave empty)                                     |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |

### Just Eat via Flyt API

To receive Just Eat orders in SOLUTION via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |
| Service types  | Just Eat delivery ref code               | (leave empty)                                     |
| Service types  | Restaurant delivery ref code             | (leave empty)                                     |
| Service types  | Takeaway ref code                        | (leave empty)                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | (leave empty)                                     |
| Charges        | Service charge ref code                  | (leave empty)                                     |
| Charges        | Bag fee ref code                         | (leave empty)                                     |
| Charges        | Driver tip ref code                      | (leave empty)                                     |
| Charges        | Other charge ref code                    | (leave empty)                                     |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Customers      | Duplicate phone access code in [...]     | Leave unchecked                                   |

## Uber Eats

To receive Uber Eats orders in SOLUTION, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats/overview).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code or value                                       |
| -------------- | ------------------------------------- | ------------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"`       |
| Service types  | Uber delivery ref code                | (leave empty)                                           |
| Service types  | Restaurant delivery ref code          | (leave empty)                                           |
| Service types  | Takeaway ref code                     | (leave empty)                                           |
| Service types  | Eat-in ref code                       | (leave empty)                                           |
| Service types  | Send orders delivered by Uber Eats as | `collection orders`                                     |
| Special items  | Disposable items ref code             | Create a product in SOLUTION and use its ref code. (\*) |
| Discounts      | Discount ref code                     | (leave empty)                                           |
| Charges        | Delivery charge ref code              | (leave empty)                                           |
| Charges        | Small order fee ref code              | (leave empty)                                           |
| Charges        | Tip ref code                          | (leave empty)                                           |
| Payments       | Online payment ref code               | (leave empty)                                           |
| Payments       | Cash payment ref code                 | (leave empty)                                           |
| Customers      | Duplicate phone access code in [...]  | Leave unchecked                                         |
| Catalog        | Enable customer notes on products     | Tick if you wish to enable them / Leave unchecked       |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.

---

**IMPORTANT NOTE:** Preparation notes on individual items are not supported in SOLUTION. If you rely on these comments for cooking or serving instructions (for example, "Medium cooking", or "Cut in slices"), you need to replace them by options in your Uber Eats menu.

---
