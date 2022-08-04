---
title: Food Ordering Platforms
position: 4
layout: documentation
meta:
  title: Food Ordering Platforms | MyOrderBox | HubRise
  description: Integrating MyOrderBox with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food ordering and delivery platforms in MyOrderBox. You can also push your menu from MyOrderBox to food platforms. 

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

Below are the parameters to use to connect food ordering platforms to MyOrderBox.

## Deliveroo

To receive Deliveroo orders in MyOrderBox, you first need to connect Deliveroo Bridge, an app included in your HubRise
subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, specify the following values in the Deliveroo Bridge configuration page. To learn how
to view and modify the configuration page for Deliveroo Bridge, see
the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section        | Name                                  | Ref code                                                   |
| -------------- | ------------------------------------- | ---------------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | `DLO` or `DLO_xxx` - see [Virtual Brands](#virtual-brands) |
| Service types  | Restaurant fulfilled ref code         | (same as above)                                            |
| Service types  | Takeaway ref code                     | (same as above)                                            |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                                        |
| Discounts      | Offer ref code                        | (leave empty)                                              |
| Charges        | Delivery charge ref code              | (leave empty)                                              |
| Charges        | Surcharge ref code                    | (leave empty)                                              |
| Payments       | Deliveroo payment ref code            | (leave empty)                                              |
| Payments       | Cash payment ref code                 | (leave empty)                                              |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Accepted"`          |

## Just Eat Flyt

To receive Just Eat orders in MyOrderBox, you first need to connect Just Eat Flyt Bridge, an app included in your
HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Flyt Bridge configuration page.

| Section        | Name                                     | Ref code                                                   |
| -------------- | ---------------------------------------- | ---------------------------------------------------------- |
| Service types  | Just Eat delivery ref code               | `JUE` or `JUE_xxx` - see [Virtual Brands](#virtual-brands) |
| Service types  | Restaurant delivery ref code             | (same as above)                                            |
| Service types  | Takeaway ref code                        | (same as above)                                            |
| Service types  | Send orders delivered by the platform as | `collection orders`                                        |
| Discounts      | Discount ref code                        | (leave empty)                                              |
| Charges        | Delivery charge ref code                 | (leave empty)                                              |
| Charges        | Service charge ref code                  | (leave empty)                                              |
| Charges        | Bag fee ref code                         | (leave empty)                                              |
| Charges        | Driver tip ref code                      | (leave empty)                                              |
| Charges        | Other charge ref code                    | (leave empty)                                              |
| Payments       | Online payment ref code                  | (leave empty)                                              |
| Payments       | Cash payment ref code                    | (leave empty)                                              |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Accepted"`          |

## Uber Eats

To receive Uber Eats orders in MyOrderBox, you first need to connect Uber Eats Bridge, an app included in your HubRise
subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how
to view and modify the configuration page for Uber Eats Bridge, see
the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Section        | Name                                         | Ref code or value                                           |
| -------------- | -------------------------------------------- | ----------------------------------------------------------- |
| Service types  | Uber delivery ref code                       | `UBE` or `UBE_xxx` - see [Virtual Brands](#virtual-brands). |
| Service types  | Restaurant delivery ref code (\*)            | (same as above)                                             |
| Service types  | Takeaway ref code                            | (same as above)                                             |
| Service types  | Eat-in ref code                              | (same as above)                                             |
| Service types  | Send orders delivered by Uber Eats as        | `collection orders`                                         |
| Special items  | Disposable items ref code                    | Create a product in MyOrderBox and use its ref code. (\*\*) |
| Discounts      | Discount ref code                            | (leave empty)                                               |
| Charges        | Delivery charge ref code                     | (leave empty)                                               |
| Charges        | Small order fee ref code                     | (leave empty)                                               |
| Charges        | Tip ref code                                 | (leave empty)                                               |
| Payments       | Payment ref code                             | (leave empty)                                               |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Accepted"`           |
| Menu           | Enable preparation notes on individual items | Tick the checkbox to enable it.                             |

(\*) BYOC - Bring Your Own Courier
(\*\*) Only applies if you offer disposable items, such as cutlery or napkins on the Uber Eats checkout. To know more, see [Special items](/apps/uber-eats/configuration#special-items).

MyOrderBox can display the preparation notes customers might write for you after selecting a product. You can thus leave this feature enabled on Uber Eats.

MyOrderBox can also display notes on orders customers might write for you in the Uber Eats basket or at checkout. You can thus leave this feature enabled on Uber Eats.

## Virtual Brands

MyOrderBox uses service type ref codes to identify the source of orders. To connect several virtual brands to a single MyOrderBox EPOS, you need to include virtual brand identification information in the service type ref codes. To connect a single brand, just use the service type ref codes provided in the sections below.

For example, to connect Deliveroo:

- If you operate a single Deliveroo account, use `DLO` as the service type ref code
- If you operate multiple Deliveroo accounts, look up the virtual brand id for the account you need to connect in MyOrderBox. If the id is `123456789`, the service type ref code you need to enter is `DLO_123456789`.

To find a virtual brand id:

1. Log in to your [MyOrderBox back office](https://go.myorderboxhq.com/).
1. Check that no store is selected in the store selector dropdown at the top. If a store is selected, click on the cross icon to unselect. If you cannot unselect the store, check that you have account manager permissions.
1. From the navigation menu, select **Management** > **Menu** > **Virtual Brands** > **Products**.
1. Open the **Virtual brand** dropdown.
1. The virtual brand id is the number next to the brand name, after the **-** character.

![Finding virtual brand id in MyOrderBox back office](../images/006-en-find-virtual-brand-ids.png)
