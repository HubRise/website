---
title: Food Ordering Platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | Lightspeed Restaurant (K Series) | HubRise
  description: Integrating Lightspeed Restaurant (K Series) with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

---

**IMPORTANT NOTE:** Lightspeed Restaurant (K Series) was formerly known as iKentoo. iKentoo Bridge will soon be renamed Lightspeed Bridge to align with the new name.

---

To connect Lightspeed Restaurant (K Series) to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided below.

By convention, Lightspeed support team uses these predefined codes when they set up the integration. If you configure the Lightspeed back office autonomously, we recommend that you use the same codes, as this simplifies troubleshooting.

---

**IMPORTANT NOTE:** These codes must be present in your Lightspeed back office and must be included in the configuration page of the food platform bridge.

---

For detailed instructions on how to create ref codes in the Lightspeed back office, see [Creating Ref Codes](/apps/ikentoo-lightspeed/faqs/create-ref-codes).

## Deliveroo

To receive Deliveroo orders in Lightspeed, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, specify the following values in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section       | Name                                  | Ref code          |
| ------------- | ------------------------------------- | ----------------- |
| Service types | Deliveroo fulfilled ref code          | `DVAP`            |
| Service types | Restaurant fulfilled ref code         | `DVMD`            |
| Service types | Takeaway ref code                     | `DVMTA`           |
| Service types | Send orders delivered by Deliveroo as | `delivery orders` |
| Discounts     | Offer ref code                        | `DELD99`          |
| Charges       | Delivery charge ref code              | `DELD77`          |
| Charges       | Surcharge ref code                    | `DELD88`          |
| Payments      | Deliveroo payment ref code            | `DVPM`            |
| Payments      | Cash payment ref code                 | (leave empty)     |

If you prefer to let Lightspeed support configure these ref codes for you, ask them to set up the **Deliveroo** channel. 

## Uber Eats

To receive Uber Eats orders in Lightspeed, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Section        | Name                                  | Ref code or value                                    |
| -------------- | ------------------------------------- | ---------------------------------------------------- |
| Service types  | Uber delivery ref code                | `UEAP`                                               |
| Service types  | Restaurant delivery ref code (\*)     | `UENDAP`                                             |
| Service types  | Takeaway ref code                     | `UEPUAP`                                             |
| Service types  | Eat-in ref code                       | `UEDIAP`                                             |
| Service types  | Send orders delivered by Uber Eats as | `delivery orders`                                    |
| Special items  | Disposable items ref code             | Create a product in Lightspeed and use its **Code**. |
| Discounts      | Discount ref code                     | `UE99`                                               |
| Payments       | Payment ref code                      | `UEPM`                                               |
| Order statuses | Mark the order as Accepted            | `When it is sent to HubRise`                         |
| Order statuses | Mark the order as Denied              | `When HubRise status changes to "Rejected"`          |
| Order statuses | Mark the order as Cancelled           | `When HubRise status changes to "Cancelled"`         |

(\*) BYOC - Bring Your Own Courier

If you prefer to let Lightspeed support configure these ref codes for you, ask them to set up the **Uber Eats** channel.

---

**IMPORTANT NOTE:** Product-level comments are not supported in Lightspeed Restaurant (K Series). Therefore, if your customers include product-level comments in an order, you will not be able to see them. To prevent this, product-level comments are automatically disabled on your Uber Eats store when you connect it to HubRise.

If you rely on these comments for cooking or serving instructions (for example, "Medium rare cooking", or "Cut in slices"), you should add the corresponding items in your EPOS and include them as options in the Uber Eats menu, so that they are correctly encoded.

---

## Just Eat

To receive Just Eat orders in Lightspeed, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Flyt Bridge configuration page.

| Section       | Name                                     | Ref code          |
| ------------- | ---------------------------------------- | ----------------- |
| Service types | Just Eat delivery ref code               | `JEAP`            |
| Service types | Restaurant delivery ref code             | `JEDRAP`          |
| Service types | Takeaway ref code                        | `JETAAP`          |
| Service types | Send orders delivered by the platform as | `delivery orders` |
| Charges       | Delivery charge ref code                 | `JE77`            |
| Charges       | Service charge ref code                  | `JE66`            |
| Payments      | Just Eat payment ref code                | `JEPM`            |
| Payments      | Cash payment ref code                    | (leave empty)     |

If you prefer to let Lightspeed support configure these ref codes for you, ask them to set up the **Just Eat (JE)** channel.

## Takeaway.com

To receive Takeaway.com orders in Lightspeed, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page.

| Section       | Name                                     | Ref code          |
| ------------- | ---------------------------------------- | ----------------- |
| Service types | Takeaway.com delivery ref code           | `TAAP`            |
| Service types | Restaurant delivery ref code             | `TADRAP`          |
| Service types | Takeaway ref code                        | `TATAAP`          |
| Service types | Send orders delivered by the platform as | `delivery orders` |
| Charges       | Delivery charge ref code                 | `TA77`            |
| Charges       | Service charge ref code                  | `TA66`            |
| Discounts     | Discount ref code                        | `TA99`            |
| Payments      | Takeaway.com payment ref code            | `TAPM`            |
| Payments      | Cash payment ref code                    | (leave empty)     |

If you prefer to let Lightspeed support configure these ref codes for you, ask them to set up the **Takeaway.com (TA)** channel.

## Thuisbezorgd.nl

To receive Thuisbezorgd.nl orders in Lightspeed, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page.

| Section       | Name                                     | Ref code          |
| ------------- | ---------------------------------------- | ----------------- |
| Service types | Thuisbezorgd.nl delivery ref code        | `THAP`            |
| Service types | Restaurant delivery ref code             | `THDRAP`          |
| Service types | Takeaway ref code                        | `THTHAP`          |
| Service types | Send orders delivered by the platform as | `delivery orders` |
| Charges       | Delivery charge ref code                 | `TH77`            |
| Charges       | Service charge ref code                  | `TH66`            |
| Discounts     | Discount ref code                        | `TH99`            |
| Payments      | Thuisbezorgd.nl payment ref code         | `THPM`            |
| Payments      | Cash payment ref code                    | (leave empty)     |

If you prefer to let Lightspeed support configure these ref codes for you, ask them to set up the **Thuisbezorgd.nl (TH)** channel.

## Eat.ch

To receive Eat.ch orders in Lightspeed, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page.

| Section       | Name                                     | Ref code          |
| ------------- | ---------------------------------------- | ----------------- |
| Service types | Eat.ch delivery ref code                 | `EATAP`           |
| Service types | Restaurant delivery ref code             | `EATDRAP`         |
| Service types | Takeaway ref code                        | `EATEATAP`        |
| Service types | Send orders delivered by the platform as | `delivery orders` |
| Charges       | Delivery charge ref code                 | `EAT77`           |
| Charges       | Service charge ref code                  | `EAT66`           |
| Discounts     | Discount ref code                        | `EAT99`           |
| Payments      | Eat.ch payment ref code                  | `EATPM`           |
| Payments      | Cash payment ref code                    | (leave empty)     |

If you prefer to let Lightspeed support configure these ref codes for you, ask them to set up the **Eat.ch (EAT)** channel.
