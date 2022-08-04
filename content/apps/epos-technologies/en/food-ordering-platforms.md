---
title: Food Ordering Platforms
position: 2
layout: documentation
meta:
  title: Food Ordering Platforms | EPOS Technologies | HubRise
  description: Integrating EPOS Technologies with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food ordering and delivery platforms in EPOS Technologies. You can also push your menu from EPOS Technologies to food platforms.

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

Below are the parameters to use to connect platforms to EPOS Technologies.

## Deliveroo

To receive Deliveroo orders in EPOS Technologies, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

In the Deliveroo Bridge configuration page, use the following values:

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | `DV_ST_PLATFORM`                                  |
| Service types  | Restaurant fulfilled ref code         | `DV_ST_RESTAURANT`                                |
| Service types  | Takeaway ref code                     | `DV_ST_TAKEAWAY`                                  |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Offer ref code                        | `DV_DC`                                           |
| Charges        | Delivery charge ref code              | `DV_CH_DELIVERY`                                  |
| Charges        | Surcharge ref code                    | `DV_CH_SURCHARGE`                                 |
| Payments       | Deliveroo payment ref code            | `DV_PM_PLATFORM`                                  |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |

## Just Eat Flyt

To receive Just Eat orders in EPOS Technologies, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt).

In the Just Eat Flyt Bridge configuration page, use the following values:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Just Eat delivery ref code               | `JE_ST_PLATFORM`                                  |
| Service types  | Restaurant delivery ref code             | `JE_ST_RESTAURANT`                                |
| Service types  | Takeaway ref code                        | `JE_ST_TAKEAWAY`                                  |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | `JE_DC`                                           |
| Charges        | Delivery charge ref code                 | `JE_CH_DELIVERY`                                  |
| Charges        | Service charge ref code                  | `JE_CH_SERVICE`                                   |
| Charges        | Bag fee ref code                         | (leave empty)                                     |
| Charges        | Driver tip ref code                      | (leave empty)                                     |
| Charges        | Other charge ref code                    | (leave empty)                                     |
| Payments       | Online payment ref code                  | `JE_PM_PLATFORM`                                  |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Uber Eats

To receive Uber Eats orders in EPOS Technologies, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

In the Uber Eats Bridge configuration page, use the following values:

| Section        | Name                                         | Ref code or value                                                  |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------ |
| Service types  | Uber delivery ref code                       | `UE_ST_PLATFORM`                                                   |
| Service types  | Restaurant delivery ref code (\*)            | `UE_ST_RESTAURANT`                                                 |
| Service types  | Takeaway ref code                            | `UE_ST_TAKEAWAY`                                                   |
| Service types  | Eat-in ref code                              | `UE_ST_EATIN`                                                      |
| Service types  | Send orders delivered by Uber Eats as        | `collection orders`                                                |
| Special items  | Disposable items ref code                    | Create a product in EPOS Technologies and use its ref code. (\*\*) |
| Discounts      | Discount ref code                            | `UE_DC`                                                            |
| Charges        | Delivery charge ref code                     | `UE_CH_DELIVERY`                                                   |
| Charges        | Small order fee ref code                     | `UE_CH_SURCHARGE`                                                  |
| Charges        | Tip ref code                                 | (leave empty)                                                      |
| Payments       | Payment ref code                             | `UE_PM_PLATFORM`                                                   |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Received"`                  |
| Menu           | Enable preparation notes on individual items | Tick the checkbox to enable it.                                    |

(\*) BYOC - Bring Your Own Courier
(\*\*) Only applies if you offer disposable items, such as cutlery or napkins on the Uber Eats checkout. To know more, see [Special items](/apps/uber-eats/configuration#special-items).

EPOS Technologies can display the preparation notes customers might write for you after selecting a product. You can thus leave this feature enabled on Uber Eats.

EPOS Technologies can also display notes on orders customers might write for you in the Uber Eats basket or at checkout. You can thus leave this feature enabled on Uber Eats.