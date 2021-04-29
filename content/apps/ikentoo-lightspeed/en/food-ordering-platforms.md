---
title: Food Ordering Platforms
position: 6
layout: documentation
meta:
  title: Food Ordering Platforms | iKentoo by Lightspeed | HubRise
  description: Integrating iKentoo with food ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

To connect iKentoo to Deliveroo, Uber Eats, or Just Eat, use the configuration parameters provided below.

By convention, Lightspeed support team uses these predefined codes when they set up the integration. If you configure the iKentoo back office autonomously, we recommend that you use the same codes, as this simplifies troubleshooting.

---

**IMPORTANT NOTE:** These codes must be present in your iKentoo back office and must be included in the configuration page of the food platform bridge.

---

For detailed instructions on how to create ref codes in the iKentoo back office, see [Creating Ref Codes for Delivery Platforms](/apps/ikentoo-lightspeed/map-ref-codes/#creating-ref-codes-in-ikentoo).

## Deliveroo

To receive Deliveroo orders in iKentoo, you first need to connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, specify the following values in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | Deliveroo fulfilled ref code  | `DVAP`        |
| Service types | Restaurant fulfilled ref code | `DVMD`        |
| Service types | Takeaway ref code             | `DVMTA`       |
| Discounts     | Offer ref code                | `DELD99`      |
| Charges       | Delivery charge ref code      | `DELD77`      |
| Charges       | Surcharge ref code            | `DELD88`      |
| Payments      | Deliveroo payment ref code    | `DVPM`        |
| Payments      | Cash payment ref code         | (leave empty) |

## Uber Eats

To receive Uber Eats orders in iKentoo, you first need to connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

| Section        | Name                              | Ref code or value                                 |
| -------------- | --------------------------------- | ------------------------------------------------- |
| Service types  | Uber delivery ref code            | `UEAP`                                            |
| Service types  | Restaurant delivery ref code (\*) | `UENDAP`                                          |
| Service types  | Takeaway ref code                 | `UEPUAP`                                          |
| Service types  | Eat-in ref code                   | `UEDIAP`                                          |
| Special items  | Disposable items ref code         | Create a product in iKentoo and use its **Code**. |
| Discounts      | Discount ref code                 | `UE99`                                            |
| Payments       | Payment ref code                  | `UEPM`                                            |
| Order statuses | Mark the order as Accepted        | `When it is sent to HubRise`                      |
| Order statuses | Mark the order as Denied          | `When HubRise status changes to "Rejected"`       |
| Order statuses | Mark the order as Cancelled       | `When HubRise status changes to "Cancelled"`      |

(\*) BYOC - Bring Your Own Courier

## Just Eat

To receive Just Eat orders in iKentoo, you first need to connect Just Eat Flyt Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Flyt Bridge configuration page.

| Section       | Name                         | Ref code      |
| ------------- | ---------------------------- | ------------- |
| Service types | Just Eat delivery ref code   | `JEAP`        |
| Service types | Restaurant delivery ref code | `JEDRAP`      |
| Service types | Takeaway ref code            | `JETAAP`      |
| Charges       | Delivery charge ref code     | `JE77`        |
| Charges       | Service charge ref code      | `JE66`        |
| Payments      | Just Eat payment ref code    | `JEPM`        |
| Payments      | Cash payment ref code        | (leave empty) |

## Takeaway.com 

To receive Takeaway.com orders in iKentoo, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page.

| Section       | Name                           | Ref code      |
|---------------|--------------------------------|---------------|
| Service types | Takeaway.com delivery ref code | `TAAP`        |
| Service types | Restaurant delivery ref code   | `TADRAP`      |
| Service types | Takeaway ref code              | `TATAAP`      |
| Charges       | Delivery charge ref code       | `TA77`        |
| Charges       | Service charge ref code        | `TA66`        |
| Discounts     | Discount ref code              | `TA99`        |
| Payments      | Takeaway.com payment ref code  | `TAPM`        |
| Payments      | Cash payment ref code          | (leave empty) |

## Thuisbezorgd.nl

To receive Thuisbezorgd.nl orders in iKentoo, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page.

| Section       | Name                              | Ref code      |
|---------------|-----------------------------------|---------------|
| Service types | Thuisbezorgd.nl delivery ref code | `THAP`        |
| Service types | Restaurant delivery ref code      | `THDRAP`      |
| Service types | Takeaway ref code                 | `THTHAP`      |
| Charges       | Delivery charge ref code          | `TH77`        |
| Charges       | Service charge ref code           | `TH66`        |
| Discounts     | Discount ref code                 | `TH99`        |
| Payments      | Thuisbezorgd.nl payment ref code  | `THPM`        |
| Payments      | Cash payment ref code             | (leave empty) |

## Eat.ch 

To receive Eat.ch orders in iKentoo, you first need to connect Just Eat Takeaway Bridge, an app included in your HubRise subscription.

To correctly receive your orders, specify the following values in the Just Eat Takeaway Bridge configuration page.

| Section       | Name                         | Ref code      |
|---------------|------------------------------|---------------|
| Service types | Eat.ch delivery ref code     | `EATAP`       |
| Service types | Restaurant delivery ref code | `EATDRAP`     |
| Service types | Takeaway ref code            | `EATEATAP`    |
| Charges       | Delivery charge ref code     | `EAT77`       |
| Charges       | Service charge ref code      | `EAT66`       |
| Discounts     | Discount ref code            | `EAT99`       |
| Payments      | Eat.ch payment ref code      | `EATPM`       |
| Payments      | Cash payment ref code        | (leave empty) |
