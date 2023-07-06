---
title: Food Ordering Platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | Lightspeed Restaurant | HubRise
  description: Integrating Lightspeed Restaurant with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

With HubRise, you can receive orders from Deliveroo, Just Eat, Uber Eats and other food platforms in Lightspeed Restaurant. You can also push your menu from Lightspeed Restaurant to food platforms.

This page describes the settings to use to connect food ordering platforms to Lightspeed Restaurant.

For more information, check the documentation of these platforms in our [Apps page](/apps/food-ordering-platforms).

## Configuration on Lightspeed Restaurant

Depending on your needs, you will need to create items, payment methods and account profiles in Lightspeed Restaurant.

If you prefer to let Lightspeed support configure these items for you, make sure to use the following channel names in support tickets to avoid any confusion:

| Platform        | Channel name           |
| --------------- | ---------------------- |
| Deliveroo       | `Deliveroo`            |
| Just-Eat.ch     | `Eat.ch (EAT)`         |
| Just Eat        | `Just Eat (JE)`        |
| HOP Delivery    | `HOP Delivery`         |
| Smood           | `Smood`                |
| Takeaway.com    | `Takeaway.com (TA)`    |
| Thuisbezorgd.nl | `Thuisbezorgd.nl (TH)` |
| Uber Eats       | `Uber Eats`            |

By convention, Lightspeed support team uses the predefined ref codes documented in this page when they set up the integration. If you configure the Lightspeed back office autonomously, we recommend that you use the same codes, as this will simplify troubleshooting.

For detailed instructions on how to create ref codes in the Lightspeed back office, see [Creating Ref Codes](/apps/lightspeed-restaurant/faqs/create-ref-codes).

## Deliveroo

To receive Deliveroo orders in Lightspeed Restaurant, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

In the Deliveroo Bridge configuration page, use the following settings:

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | `DVAP`                                            |
| Service types  | Restaurant fulfilled ref code         | `DVMD`                                            |
| Service types  | Takeaway ref code                     | `DVMTA`                                           |
| Service types  | Send orders delivered by Deliveroo as | `delivery orders`                                 |
| Discounts      | Discount ref code                     | `DELD99`                                          |
| Charges        | Delivery charge ref code              | `DELD77`                                          |
| Charges        | Surcharge ref code                    | `DELD88`                                          |
| Charges        | Bag fee ref code                      | (ask support@hubrise.com if you need it)          |
| Payments       | Online payment ref code               | `DVPM`                                            |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Received"` |

## Just Eat

Just Eat offers two APIs:

- The Flyt API is used on the Just-Eat.co.uk, Just-Eat.ie, Menulog and SkipTheDishes platforms, and for chains on other markets. This API allows you to synchronise the orders and the menu.
- The Takeaway API, the older one, is used for independents on other markets. It allows you to receive orders, but not to send the menu.

If you are not sure which API to use, contact [support@hubrise.com](mailto:support@hubrise.com).

### Just Eat via Takeaway API

To receive Just Eat orders in Lightspeed Restaurant via Takeaway API, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription. For more information about Just Eat Takeaway Bridge, see the [Just Eat Takeaway Bridge documentation](/apps/just-eat-takeaway).

### Just Eat via Flyt API

To receive Just Eat orders in Lightspeed Restaurant via Flyt API, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt).

### Just-Eat.ch

Just-Eat.ch uses the Just Eat via TakeawayAPI. In the Just Eat Takeaway Bridge configuration page, use the following settings:

| Section        | Name                                     | Ref code                                          |
| -------------- | ---------------------------------------- | ------------------------------------------------- |
| Service types  | Just-Eat.ch delivery ref code            | `EATAP`                                           |
| Service types  | Restaurant delivery ref code             | `EATDRAP`                                         |
| Service types  | Takeaway ref code                        | `EATEATAP`                                        |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                 |
| Discounts      | Discount ref code                        | `EAT99`                                           |
| Charges        | Delivery charge ref code                 | `EAT77`                                           |
| Payments       | Online payment ref code                  | `EATPM`                                           |
| Payments       | Cash payment ref code                    | (leave empty)                                     |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Received"` |

### Just Eat.co.uk and Just Eat.ie

These platforms use the Just Eat via Flyt API. In the Just Eat Flyt Bridge configuration page, use the following settings:

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

### Takeaway.com

Takeaway.com uses the Just Eat via Takeaway API. In the Just Eat Takeaway Bridge configuration page, use the following settings:

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

### Thuisbezorgd.nl

Thuisbezorgd.nl uses the Just Eat via Takeaway API. In the Just Eat Takeaway Bridge configuration page, use the following settings:

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

## HOP Delivery

To receive your HOP Delivery orders in Lightspeed, use the following values to configure HOP Delivery. For assistance, contact HOP Delivery support team.

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | HOP fulfilled ref code        | `HOPDEL`      |
| Service types | Restaurant fulfilled ref code | `HOPREST`     |
| Service types | Takeaway ref code             | `HOPCOL`      |
| Discounts     | Discount ref code             | `HOP99`       |
| Charges       | Delivery charge ref code      | `HOP77`       |
| Charges       | Service fee ref code          | `HOP88`       |
| Payments      | HOP payment ref code          | `HOPPM`       |
| Payments      | Cash payment ref code         | (leave empty) |

## Smood

To receive your Smood orders in Lightspeed, use the following values to configure Smood. For assistance, contact Smood support team.
For more details on how to configure the parameters in Smood, see the [Smood documentation](/apps/smood).

| Section       | Name                              | Ref code    |
| ------------- | --------------------------------- | ----------- |
| Service types | Platform delivery ref code        | `SMOODDEL`  |
| Service types | Restaurant delivery ref code      | `SMOODRDEL` |
| Service types | Takeaway ref code                 | `SMOODCOL`  |
| Service types | Send orders delivered by Smood as | `Delivery`  |
| Discounts     | Discount ref code                 | `SMOOD99`   |
| Discounts     | Promotion ref code                | `SMOOD99`   |
| Charges       | Delivery charge ref code          | `SMOOD77`   |
| Payments      | Online payment ref code           | `SMOODPM`   |

## Uber Eats

To receive Uber Eats orders in Lightspeed Restaurant, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

In the Uber Eats Bridge configuration page, use the following settings:

| Section        | Name                                         | Ref code or value                                                        |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| Service types  | Uber delivery ref code                       | `UEAP`                                                                   |
| Service types  | Restaurant delivery ref code                 | `UENDAP`                                                                 |
| Service types  | Takeaway ref code                            | `UEPUAP`                                                                 |
| Service types  | Eat-in ref code                              | `UEDIAP`                                                                 |
| Service types  | Send orders delivered by Uber Eats as        | `delivery orders`                                                        |
| Special items  | Disposable items ref code                    | Create a product with price = 0 in Lightspeed and use its **Code**. (\*) |
| Discounts      | Discount ref code                            | `UE99`                                                                   |
| Charges        | Delivery charge ref code                     | `UE77`                                                                   |
| Charges        | Small order fee ref code                     | Create a product with variable positive price and use its **Code**.      |
| Charges        | Tip ref code                                 | Create a product with variable positive price and use its **Code**.      |
| Payments       | Online payment ref code                      | `UEPM`                                                                   |
| Payments       | Cash payment ref code                        | (leave empty)                                                            |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Received"`                        |
| Menu           | Enable preparation notes on individual items | Tick if you wish to enable them                                          |

(\*) Only applies if you offer disposable items, such as cutlery, napkins, etc.
