---
title: I Just Migrated from Deliverect. What Should I Do To Receive Orders?
position: 2
layout: documentation
meta:
  title: Migrate From Deliverect To HubRise | Lightspeed Restaurant | HubRise
  description: Instructions to migrate from Deliverect to HubRise and receive orders in Lightspeed Restaurant.
---

If you recently migrated from Deliverect to HubRise and previously used Deliverect to connect your Lightspeed Restaurant EPOS with food delivery platforms such as Deliveroo, Uber Eats, or Just Eat, you need to verify that all products have the correct ref codes.

When Deliverect syncs products with food delivery platforms, it appends the string `-M-` to all modifiers' ref codes. For example, if you have a modifier with the ref code `sauce-123` in your Lightspeed catalog, it appears on Deliveroo as `sauce-123-M-`. When you receive an order from Deliveroo, Deliverect automatically removes the `-M-` string from the ref code before sending it to Lightspeed Restaurant.

After migrating from Deliverect to HubRise, you must remove the `-M-` string from all products in your food delivery store menus to ensure they are correctly received in your Lightspeed Restaurant EPOS.
