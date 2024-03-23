---
title: Online Ordering Solutions
path_override: online-ordering-solutions
position: 7
layout: documentation
meta:
  title: Online Ordering Solutions | SOLUTION | HubRise
  description: Integrating SOLUTION with online ordering solutions requires you to specify particular ref codes in Lightspeed and in the ordering solution configuration page.
---

To connect SOLUTION to online ordering solutions, use the configuration parameters provided below.

By convention, SOLUTION support team uses these predefined codes when they set up the integration. If you configure the SOLUTION back office autonomously, we recommend that you use the same codes, as this simplifies troubleshooting.

---

**IMPORTANT NOTE:** These codes must be present in your SOLUTION back office and must be included in the configuration page of the online ordering solution.

---

---

**IMPORTANT NOTE:** For codes related to the configuration of food ordering and delivery platforms such as Deliveroo, Uber Eats, and Just Eat, see [Food Ordering Platforms](/apps/SOLUTION/food-ordering-platforms).

---

In your online ordering solution configuration page, use the following codes.

| Section       | Name                          | Ref code      |
| ------------- | ----------------------------- | ------------- |
| Service types | Delivery                      | `HUBOLODEL`   |
| Service types | Collection                    | `HUBOLOCOL`   |
| Service types | Eat-in                        | `HUBOLOEATIN` |
| Payments      | Generic online payment method | `HUBOLOPM`    |
| Charges       | Service charge                | `HUBOLO66`    |
| Charges       | Delivery charge               | `HUBOLO77`    |
| Discounts     | Generic discount              | `HUBOLO99`    |
