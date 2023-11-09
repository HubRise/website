---
title: Online Ordering Platforms
path_override: online-ordering-platforms
position: 7
layout: documentation
meta:
  title: Online Ordering Platforms | Lightspeed Restaurant | HubRise
  description: Integrating Lightspeed Restaurant with online ordering platforms requires you to specify particular ref codes in the configuration page of the delivery platform bridge.
---

To connect Lightspeed Restaurant to several online ordering platforms, use the configuration parameters provided below.

By convention, Lightspeed support team uses these predefined codes when they set up the integration. If you configure the Lightspeed back office autonomously, we recommend that you use the same codes, as this simplifies troubleshooting.

For detailed instructions on how to create ref codes in the Lightspeed back office, see [Creating Ref Codes](/apps/lightspeed-restaurant/faqs/create-ref-codes).

---

**IMPORTANT NOTE:** These codes must be present in your Lightspeed back office and must be included in the configuration page of the online ordering platform bridge.

---

If you prefer to let Lightspeed support configure these ref codes for you, make sure to use the following channel names in support tickets to avoid any confusion:

| Platform                           | Channel name |
| ---------------------------------- | ------------ |
| Online platforms except LivePepper | `HUBOLO`     |
| LivePepper                         | `LivePepper` |

---

**IMPORTANT NOTE:** For the codes for food ordering platforms such as Deliveroo, Uber Eats, and Just Eat, see [Food Ordering Platforms](/apps/lightspeed-restaurant/food-ordering-platforms).

---

### All online ordering platforms except LivePepper

For all online ordering platforms except LivePepper, use the codes in the following table.

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | Delivery                      | `HUBOLODEL`   |
| Service types | Collection                    | `HUBOLOCOL`   |
| Service types | Eat-in                        | `HUBOLOEATIN` |
| Payments      | Generic online payment method | `HUBOLOPM`    |
| Charges       | Service charge                | `HUBOLO66`    |
| Charges       | Delivery charge               | `HUBOLO77`    |
| Discounts     | Generic discount              | `HUBOLO99`    |

### LivePepper

For historic reasons, LivePepper uses their own ref codes. To send orders from LivePepper into Lightspeed, use the codes in the following table.

| Section       | Name                          | Ref code   |
| ------------- | ----------------------------- | ---------- |
| Service types | Delivery                      | `DELIVERY` |
| Service types | Collection                    | `PICKUP`   |
| Service types | Eat-in                        | `LOCAL`    |
| Payments      | Generic online payment method | `LP`       |
| Charges       | Service charge                | See below  |
| Charges       | Delivery charge               | See below  |
| Discounts     | Generic discount              | See below  |

To send charges to LightSpeed, create products with variable _positive_ price in LightSpeed, and use their codes in LivePepper. To send discounts, create products with variable `_negative_` price.
