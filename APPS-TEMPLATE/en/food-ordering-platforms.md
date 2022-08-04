---
title: Food Ordering Platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | SOLUTION | HubRise
  description: Integrating SOLUTION with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in SOLUTION. You can also push your menu from SOLUTION to food platforms.

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

Below are the parameters to use to connect platforms to SOLUTION.

## Deliveroo

To receive Deliveroo orders in SOLUTION, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription.

For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo). In the Deliveroo Bridge configuration page, use the following values:

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          |                                                   |
| Service types  | Restaurant fulfilled ref code         |                                                   |
| Service types  | Takeaway ref code                     |                                                   |
| Service types  | Send orders delivered by Deliveroo as | `collection orders`                               |
| Discounts      | Offer ref code                        |                                                   |
| Charges        | Delivery charge ref code              |                                                   |
| Charges        | Surcharge ref code                    |                                                   |
| Payments       | Deliveroo payment ref code            |                                                   |
| Payments       | Cash payment ref code                 |                                                   |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |

## Just Eat (JUST EAT FLYT)

To receive Just Eat orders in SOLUTION, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription.

For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt). In the Just Eat Flyt Bridge configuration page, use the following values:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Just Eat delivery ref code               |                                                   |
| Service types  | Restaurant delivery ref code             |                                                   |
| Service types  | Takeaway ref code                        |                                                   |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        |                                                   |
| Charges        | Delivery charge ref code                 |                                                   |
| Charges        | Service charge ref code                  |                                                   |
| Charges        | Bag fee ref code                         |                                                   |
| Charges        | Driver tip ref code                      |                                                   |
| Charges        | Other charge ref code                    |                                                   |
| Payments       | Online payment ref code                  |                                                   |
| Payments       | Cash payment ref code                    |                                                   |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Eat.ch / Takeaway.com / Thuisbezorgd.nl (JUST EAT TAKEAWAY)

To receive Just Eat orders in SOLUTION, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription.

For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway). In the Just Eat Takeaway Bridge configuration page, use the following values:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Just Eat delivery ref code               |                                                   |
| Service types  | Restaurant delivery ref code             |                                                   |
| Service types  | Takeaway ref code                        |                                                   |
| Service types  | Send orders delivered by the platform as | `collection orders`                               |
| Discounts      | Discount ref code                        |                                                   |
| Charges        | Delivery charge ref code                 |                                                   |
| Payments       | Just Eat payment ref code                |                                                   |
| Payments       | Cash payment ref code                    |                                                   |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Uber Eats

To receive Uber Eats orders in SOLUTION, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription.

For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats). In the Uber Eats Bridge configuration page, use the following values:

| Section        | Name                                         | Ref code or value                                         |
| -------------- | -------------------------------------------- | --------------------------------------------------------- |
| Service types  | Uber delivery ref code                       |                                                           |
| Service types  | Restaurant delivery ref code (\*)            |                                                           |
| Service types  | Takeaway ref code                            |                                                           |
| Service types  | Eat-in ref code                              |                                                           |
| Service types  | Send orders delivered by Uber Eats as        | `collection orders`                                       |
| Special items  | Disposable items ref code                    | Create a product in SOLUTION and use its ref code. (\*\*) |
| Discounts      | Discount ref code                            |                                                           |
| Charges        | Delivery charge ref code                     |                                                           |
| Charges        | Small order fee ref code                     |                                                           |
| Charges        | Tip ref code                                 |                                                           |
| Payments       | Payment ref code                             |                                                           |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Received"`         |
| Menu           | Enable preparation notes on individual items | Tick the checkbox / Leave unchecked                       |

(\*) BYOC - Bring Your Own Courier
(\*\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.

---

**IMPORTANT NOTE:** Preparation notes on individual items are not supported in SOLUTION. If you rely on these comments for cooking or serving instructions (for example, "Medium rare cooking", or "Cut in slices"), you should add the corresponding items in your EPOS and include them as options in the Uber Eats menu, so that they are correctly encoded.

---
