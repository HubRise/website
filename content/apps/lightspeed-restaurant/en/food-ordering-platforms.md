---
title: Food Ordering Platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | Lightspeed Restaurant | HubRise
  description: Integrating Lightspeed Restaurant with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

To connect Lightspeed Restaurant to food ordering and delivery platforms, including Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided below.

By convention, Lightspeed support team uses predefined ref codes provided when asked to set up the integration for HubRise and one of the platforms channels. If you configure the Lightspeed back office autonomously, we recommend that you use the same ref codes, as this simplifies troubleshooting.

For detailed instructions on how to create ref codes in the Lightspeed back office, see [Creating Ref Codes](/apps/lightspeed-restaurant/faqs/create-ref-codes).

---

**IMPORTANT NOTE:** These ref codes must be present in your Lightspeed back office and must be included in the configuration page of the HubRise food delivery and ordering platform bridge.

---

If you prefer to let Lightspeed support configure these ref codes for you, make sure to use the following channel names in support tickets to avoid any confusion:

| Platform        | Channel name           |
| --------------- | ---------------------- |
| Deliveroo       | `Deliveroo`            |
| Eat.ch          | `Eat.ch (EAT)`         |
| Just Eat        | `Just Eat (JE)`        |
| HOP Delivery    | `HOP Delivery`         |
| Takeaway.com    | `Takeaway.com (TA)`    |
| Thuisbezorgd.nl | `Thuisbezorgd.nl (TH)` |
| Uber Eats       | `Uber Eats`            |

---

**IMPORTANT NOTE:** For the codes for online ordering platforms, see [Online Ordering Platforms](/apps/lightspeed-restaurant/online-ordering-platforms).

---

## Deliveroo

To receive Deliveroo orders in Lightspeed, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your Deliveroo orders in Lightspeed, specify the following values in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | `DVAP`                                            |
| Service types  | Restaurant fulfilled ref code         | `DVMD`                                            |
| Service types  | Takeaway ref code                     | `DVMTA`                                           |
| Service types  | Send orders delivered by Deliveroo as | `delivery orders`                                 |
| Discounts      | Offer ref code                        | `DELD99`                                          |
| Charges        | Delivery charge ref code              | `DELD77`                                          |
| Charges        | Surcharge ref code                    | `DELD88`                                          |
| Payments       | Deliveroo payment ref code            | `DVPM`                                            |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |

## Eat.ch

To receive Eat.ch orders in Lightspeed, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway).

To correctly receive your Eat.ch orders in Lightspeed, specify the following values in the Just Eat Takeaway Bridge configuration page. To learn how to view and modify the configuration page for Just Eat Takeaway Bridge, see the [Just Eat Takeaway Configuration page](/apps/just-eat-takeaway/configuration).

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Eat.ch delivery ref code                 | `EATAP`                                           |
| Service types  | Restaurant delivery ref code             | `EATDRAP`                                         |
| Service types  | Takeaway ref code                        | `EATEATAP`                                        |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                 |
| Discounts      | Discount ref code                        | `EAT99`                                           |
| Charges        | Delivery charge ref code                 | `EAT77`                                           |
| Payments       | Eat.ch payment ref code                  | `EATPM`                                           |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## HOP Delivery

To receive your HOP Delivery orders in Lightspeed, use the following values to configure HOP Delivery. For assistance, contact HOP Delivery support team.

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | HOP fulfilled ref code        | `HOPDEL`      |
| Service types | Restaurant fulfilled ref code | `HOPREST`     |
| Service types | Takeaway ref code             | `HOPCOL`      |
| Discounts     | Offer ref code                | `HOP99`       |
| Charges       | Delivery charge ref code      | `HOP77`       |
| Charges       | Service fee ref code          | `HOP88`       |
| Payments      | HOP payment ref code          | `HOPPM`       |
| Payments      | Cash payment ref code         | (leave empty) |

## Just Eat Flyt

To receive Just Eat orders in Lightspeed, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt).

To correctly receive your Just Eat orders, specify the following values in the Just Eat Flyt Bridge configuration page. To learn how to view and modify the configuration page for Just Eat Flyt Bridge, see the [Just Eat flyt Configuration page](/apps/just-eat-flyt/configuration).

Depending on your needs, you may have to create some products in Lightspeed. If you don't use these features, you can skip creating the products and leave the corresponding fields empty.

| Section        | Name                                     | Ref code                                                            |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------- |
| Service types  | Just Eat delivery ref code               | `JEAP`                                                              |
| Service types  | Restaurant delivery ref code             | `JEDRAP`                                                            |
| Service types  | Takeaway ref code                        | `JETAAP`                                                            |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                                   |
| Discounts      | Discount ref code                        | `JE99`                                                              |
| Charges        | Delivery charge ref code                 | `JE77`                                                              |
| Charges        | Service charge ref code                  | `JE66`                                                              |
| Charges        | Bag fee ref code                         | Create a product with variable positive price and use its **Code**. |
| Charges        | Driver tip ref code                      | Create a product with variable positive price and use its **Code**. |
| Charges        | Other charge ref code                    | Create a product with variable positive price and use its **Code**. |
| Payments       | Online payment ref code                  | `JEPM`                                                              |
| Payments       | Cash payment ref code                    | (leave empty)                                                       |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"`                   |

## Takeaway.com

To receive Takeaway.com orders in Lightspeed, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway).

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page. To learn how to view and modify the configuration page for Just Eat Takeaway Bridge, see the [Just Eat Takeaway Configuration page](/apps/just-eat-takeaway/configuration).

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Takeaway.com delivery ref code           | `TAAP`                                            |
| Service types  | Restaurant delivery ref code             | `TADRAP`                                          |
| Service types  | Takeaway ref code                        | `TATAAP`                                          |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                 |
| Discounts      | Discount ref code                        | `TA99`                                            |
| Charges        | Delivery charge ref code                 | `TA77`                                            |
| Payments       | Online payment ref code                  | `TAPM`                                            |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Thuisbezorgd.nl

To receive Thuisbezorgd.nl orders in Lightspeed, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway).

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page. To learn how to view and modify the configuration page for Just Eat Takeaway Bridge, see the [Just Eat Takeaway Configuration page](/apps/just-eat-takeaway/configuration).

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Thuisbezorgd.nl delivery ref code        | `THAP`                                            |
| Service types  | Restaurant delivery ref code             | `THDRAP`                                          |
| Service types  | Takeaway ref code                        | `THTHAP`                                          |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                 |
| Discounts      | Discount ref code                        | `TH99`                                            |
| Charges        | Delivery charge ref code                 | `TH77`                                            |
| Payments       | Online payment ref code                  | `THPM`                                            |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

## Uber Eats

To receive Uber Eats orders in Lightspeed, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

Depending on your needs, you may have to create some products in Lightspeed. If you don't use these features, you can skip creating the products and leave the corresponding fields empty.

| Section        | Name                                         | Ref code or value                                                          |
| -------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| Service types  | Uber delivery ref code                       | `UEAP`                                                                     |
| Service types  | Restaurant delivery ref code (\*)            | `UENDAP`                                                                   |
| Service types  | Takeaway ref code                            | `UEPUAP`                                                                   |
| Service types  | Eat-in ref code                              | `UEDIAP`                                                                   |
| Service types  | Send orders delivered by Uber Eats as        | `delivery orders`                                                          |
| Special items  | Disposable items ref code                    | Create a product with price = 0 in Lightspeed and use its **Code**. (\*\*) |
| Discounts      | Discount ref code                            | `UE99`                                                                     |
| Charges        | Delivery charge ref code                     | `UE77`                                                                     |
| Charges        | Small order fee ref code                     | Create a product with variable positive price and use its **Code**.        |
| Charges        | Tip ref code                                 | Create a product with variable positive price and use its **Code**.        |
| Payments       | Payment ref code                             | `UEPM`                                                                     |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Received"`                          |
| Menu           | Enable preparation notes on individual items | Tick the checkbox                                                          |

(\*) BYOC - Bring Your Own Courier
(\*\*) Only applies if you offer disposable items, such as cutlery or napkins on the Uber Eats checkout. To know more, see [Special items](/apps/uber-eats/configuration#special-items).

LEO2 can display the preparation notes customers might write for you after selecting a product. You can thus leave this feature enabled on Uber Eats.

Lightspeed can also display feedback on orders customers might write for you in the Uber Eats basket or at checkout. You can thus leave this feature enabled on Uber Eats.
