---
title: Online Ordering Solutions
path_override: online-ordering-solutions
position: 7
layout: documentation
meta:
  title: Online Ordering Solutions | SOLUTION | HubRise
  description: Learn how to connect SOLUTION to your online ordering solution by configuring the correct ref codes for service types, payments, fees, and discounts.
---

---

**IMPORTANT NOTE:** This page is about white-label online ordering websites. For food ordering and delivery platforms such as Deliveroo, Uber Eats, and Just Eat, see [Food Ordering Platforms](/apps/SOLUTION/food-ordering-platforms).

---

To connect SOLUTION to your online ordering solution, you must use specific ref codes. These ref codes allow your EPOS to correctly interpret and process incoming orders.

In the configuration page of your online ordering solution, use the following settings:

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | Delivery                      | `HUBOLODEL`   |
| Service types | Collection                    | `HUBOLOCOL`   |
| Service types | Eat-in                        | `HUBOLOEATIN` |
| Payments      | Generic online payment method | `HUBOLOPM`    |
| Charges       | Service charge                | `HUBOLO66`    |
| Charges       | Delivery charge               | `HUBOLO77`    |
| Discounts     | Generic discount              | `HUBOLO99`    |
