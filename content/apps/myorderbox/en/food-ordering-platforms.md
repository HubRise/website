---
title: Food Ordering Platforms
path_override: food-ordering-platforms
position: 4
layout: documentation
meta:
  title: Food Ordering Platforms | MyOrderBox | HubRise
  description: Integrating MyOrderBox with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in MyOrderBox. You can also push your menu from MyOrderBox to food platforms.

This page describes the settings to use to connect food ordering platforms to MyOrderBox.

For more information, check the documentation of these platforms in our [Apps page](/apps#food-ordering-platforms).

## Configuration on MyOrderBox

### Virtual Brands {#virtual-brands}

MyOrderBox uses service type ref codes to identify the source of orders. To connect several virtual brands to a single MyOrderBox EPOS, you need to include virtual brand identification information in the service type ref codes. To connect a single brand, just use the service type ref codes provided in the sections below.

For example, to connect Deliveroo:

- If you operate a single Deliveroo account, use `DLO` as the service type ref code
- If you operate multiple Deliveroo accounts, look up the virtual brand id for the account you need to connect in MyOrderBox. If the id is `123456789`, the service type ref code you need to enter is `DLO_123456789`.

To find a virtual brand id:

1. Log in to your [MyOrderBox back office](https://go.myorderboxhq.com).
1. Check that no store is selected in the store selector dropdown at the top. If a store is selected, click on the cross icon to unselect. If you cannot unselect the store, check that you have account manager permissions.
1. From the navigation menu, select **Management** > **Menu** > **Virtual Brands** > **Products**.
1. Open the **Virtual brand** dropdown.
1. The virtual brand id is the number next to the brand name, after the **-** character.

![Finding virtual brand id in MyOrderBox back office](./images/006-find-virtual-brand-ids.png)

## Deliveroo

To receive Deliveroo orders in MyOrderBox, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo/overview).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                                   |
| -------------- | ------------------------------------- | ---------------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Accepted"`          |
| Service types  | Deliveroo fulfilled ref code          | `DLO` or `DLO_xxx` - see [Virtual Brands](#virtual-brands) |
| Service types  | Restaurant fulfilled ref code         | Same as above                                              |
| Service types  | Takeaway ref code                     | Same as above                                              |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                                        |
| Discounts      | Discount ref code                     | (leave empty)                                              |
| Charges        | Delivery charge ref code              | `delivery`                                                 |
| Charges        | Surcharge ref code                    | `service`                                                  |
| Charges        | Bag fee ref code                      | `service`                                                  |
| Payments       | Online payment ref code               | (leave empty)                                              |
| Payments       | Cash payment ref code                 | (leave empty)                                              |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                              |

## Just Eat

Just Eat offers two APIs:

- The Flyt API is used on the Just-Eat.co.uk, Just-Eat.ie, Menulog and SkipTheDishes platforms, and for chains on other markets. This API allows you to synchronise the orders and the menu.
- The Takeaway API, the older one, is used for independents on other markets. It allows you to receive orders, but not to send the menu.

If you are not sure which API to use, contact support@hubrise.com.

### Just Eat via Takeaway API

To receive Just Eat orders in MyOrderBox via Takeaway API, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway/overview).

In the Just Eat Takeaway Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                                   |
| -------------- | ---------------------------------------- | ---------------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"`          |
| Service types  | Just Eat delivery ref code               | `JUE` or `JUE_xxx` - see [Virtual Brands](#virtual-brands) |
| Service types  | Restaurant delivery ref code             | Same as above                                              |
| Service types  | Takeaway ref code                        | Same as above                                              |
| Service types  | Send orders delivered by the platform as | `collection orders`                                        |
| Discounts      | Discount ref code                        | (leave empty)                                              |
| Charges        | Delivery charge ref code                 | `delivery`                                                 |
| Charges        | Service fee ref code                     | `service`                                                  |
| Payments       | Online payment ref code                  | (leave empty)                                              |
| Payments       | Cash payment ref code                    | (leave empty)                                              |

### Just Eat via Flyt API

To receive Just Eat orders in MyOrderBox via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt/overview).

In the Just Eat Flyt Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                                   |
| -------------- | ---------------------------------------- | ---------------------------------------------------------- |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Accepted"`          |
| Service types  | Just Eat delivery ref code               | `JUE` or `JUE_xxx` - see [Virtual Brands](#virtual-brands) |
| Service types  | Restaurant delivery ref code             | Same as above                                              |
| Service types  | Takeaway ref code                        | Same as above                                              |
| Service types  | Send orders delivered by the platform as | `collection orders`                                        |
| Discounts      | Discount ref code                        | (leave empty)                                              |
| Charges        | Delivery charge ref code                 | `delivery`                                                 |
| Charges        | Service charge ref code                  | `service`                                                  |
| Charges        | Bag fee ref code                         | `service`                                                  |
| Charges        | Driver tip ref code                      | `service`                                                  |
| Charges        | Other charge ref code                    | `service`                                                  |
| Payments       | Online payment ref code                  | (leave empty)                                              |
| Payments       | Cash payment ref code                    | (leave empty)                                              |
| Customers      | Duplicate phone access code in [...]     | Tick this box                                              |

## Uber Eats

To receive Uber Eats orders in MyOrderBox, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats/overview).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code or value                                          |
| -------------- | ------------------------------------- | ---------------------------------------------------------- |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Accepted"`          |
| Service types  | Uber delivery ref code                | `UBE` or `UBE_xxx` - see [Virtual Brands](#virtual-brands) |
| Service types  | Restaurant delivery ref code          | Same as above                                              |
| Service types  | Takeaway ref code                     | Same as above                                              |
| Service types  | Eat-in ref code                       | Same as above                                              |
| Service types  | Send orders delivered by Uber Eats as | `collection orders`                                        |
| Special items  | Disposable items ref code             | Create a product in MyOrderBox and use its ref code. (\*)  |
| Discounts      | Discount ref code                     | (leave empty)                                              |
| Charges        | Delivery charge ref code              | `delivery`                                                 |
| Charges        | Small order fee ref code              | `service`                                                  |
| Charges        | Tip ref code                          | `service`                                                  |
| Payments       | Online payment ref code               | (leave empty)                                              |
| Payments       | Cash payment ref code                 | (leave empty)                                              |
| Customers      | Duplicate phone access code in [...]  | Tick this box                                              |
| Catalog        | Enable customer notes on products     | Tick if you wish to enable them                            |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
