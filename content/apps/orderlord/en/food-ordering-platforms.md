---
title: Food Ordering Platforms
position: 5
layout: documentation
meta:
  title: Food Ordering Platforms | OrderLord | HubRise
  description: Integrating OrderLord with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food ordering and delivery platforms in OrderLord. You can also push your menu from OrderLord to food platforms.

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

Below are the parameters to use to connect platforms to OrderLord.

## Deliveroo

To receive Deliveroo orders in OrderLord, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your Deliveroo orders in OrderLord, specify the following values in the Deliveroo Bridge configuration page. To find out how to view and modify it, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | (leave empty)                                     |
| Service types  | Restaurant fulfilled ref code         | (leave empty)                                     |
| Service types  | Takeaway ref code                     | (leave empty)                                     |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Offer ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code              | `delivery`                                        |
| Charges        | Surcharge ref code                    | (leave empty)                                     |
| Payments       | Deliveroo payment ref code            | (leave empty)                                     |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |

## Eat.ch

To receive Eat.ch orders in OrderLord, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway).

To correctly receive your Eat.ch orders in OrderLord, specify the following values in the Just Eat Takeaway Bridge configuration page.  To find out how to view and modify it, see the [Just Eat Takeaway Configuration page](/apps/just-eat-takeaway/configuration).

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Eat.ch delivery ref code                 | (leave empty)                                     |
| Service types  | Restaurant delivery ref code             | (leave empty)                                     |
| Service types  | Takeaway ref code                        | (leave empty)                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | `delivery`                                        |
| Payments       | Eat.ch payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## HOP Delivery

To receive your HOP Delivery orders in OrderLord, use the following values to configure HOP Delivery. For assistance, contact HOP Delivery support team.

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | HOP fulfilled ref code        | (leave empty) |
| Service types | Restaurant fulfilled ref code | (leave empty) |
| Service types | Takeaway ref code             | (leave empty) |
| Discounts     | Offer ref code                | (leave empty) |
| Charges       | Delivery charge ref code      | `delivery`    |
| Charges       | Service fee ref code          | (leave empty) |
| Payments      | HOP payment ref code          | (leave empty) |
| Payments      | Cash payment ref code         | (leave empty) |

## Just Eat Flyt

To receive Just Eat orders in OrderLord, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt).

To correctly receive your Just Eat orders OrderLord, specify the following values in the Just Eat Flyt Bridge configuration page. To find out how to view and modify it, see the [Just Eat flyt Configuration page](/apps/just-eat-flyt/configuration).

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Just Eat delivery ref code               | (leave empty)                                     |
| Service types  | Restaurant delivery ref code             | (leave empty)                                     |
| Service types  | Takeaway ref code                        | (leave empty)                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | `delivery`                                        |
| Charges        | Service charge ref code                  | (leave empty)                                     |
| Charges        | Bag fee ref code                         | (leave empty)                                     |
| Charges        | Driver tip ref code                      | `tip`                                             |
| Charges        | Other charge ref code                    | (leave empty)                                     |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Just Eat Takeaway

To receive Takeaway.com orders in OrderLord, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway).

To correctly receive your Just Eat orders in OrderLord, specify the following values in the Just Eat Takeaway Bridge configuration page. To find out how to view and modify it, see the [Just Eat flyt Configuration page](/apps/just-eat-flyt/configuration).

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Takeaway.com delivery ref code           | (leave empty)                                     |
| Service types  | Restaurant delivery ref code             | (leave empty)                                     |
| Service types  | Takeaway ref code                        | (leave empty)                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | `delivery`                                        |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Thuisbezorgd.nl

To receive Thuisbezorgd.nl orders in OrderLord, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway).

To correctly receive your Thuisbezorgd orders in OrderLord, specify the following values in the Just Eat Takeaway Bridge configuration page.  To find out how to view and modify it, see the [Just Eat Takeaway Configuration page](/apps/just-eat-takeaway/configuration).

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Thuisbezorgd.nl delivery ref code        | (leave empty)                                     |
| Service types  | Restaurant delivery ref code             | (leave empty)                                     |
| Service types  | Takeaway ref code                        | (leave empty)                                     |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        | (leave empty)                                     |
| Charges        | Delivery charge ref code                 | `delivery`                                        |
| Payments       | Online payment ref code                  | (leave empty)                                     |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Uber Eats

To receive Uber Eats orders in OrderLord, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your Uber Eats orders OrderLord, specify the following values in the Uber Eats Bridge configuration page. To find out how to view and modify it, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Section        | Name                                         | Ref code or value                                 |
| -------------- | -------------------------------------------- | ------------------------------------------------- |
| Service types  | Uber delivery ref code                       | (leave empty)                                     |
| Service types  | Restaurant delivery ref code (\*)            | (leave empty)                                     |
| Service types  | Takeaway ref code                            | (leave empty)                                     |
| Service types  | Eat-in ref code                              | (leave empty)                                     |
| Service types  | Send orders delivered by Uber Eats as        | `collection orders`                               |
| Special items  | Disposable items ref code                    | Create a product and use its ref code. (\*\*)     |
| Discounts      | Discount ref code                            | (leave empty)                                     |
| Charges        | Delivery charge ref code                     | `delivery`                                        |
| Charges        | Small order fee ref code                     | (leave empty)                                     |
| Charges        | Tip ref code                                 | `tip`                                             |
| Payments       | Payment ref code                             | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Received"` |
| Menu           | Enable preparation notes on individual items | Tick the checkbox to enable it                    |

(\*) BYOC - Bring Your Own Courier
(\*\*) Only applies if you offer disposable items, such as cutlery or napkins on the Uber Eats checkout. You can skip creating the product and leave the corresponding field empty if you don't use this feature. To know more, see [Special items](/apps/uber-eats/configuration#special-items).

Orderlord can display the preparation notes customers might write for you after selecting a product. You can thus leave this feature enabled on Uber Eats.