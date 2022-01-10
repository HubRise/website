---
title: I Just Migrated from Deliverect. What Should I Do To Receive Orders?
position: 2
layout: documentation
meta:
  title: Migrating From Deliverect To HubRise | Lightspeed Restaurant (K Series) | HubRise
  description: Instructions to migrate from Deliverect to HubRise and receive orders in Lightspeed Restaurant (K Series).
---

If you recently migrated from Deliverect to HubRise, follow these instructions to make sure that your setup works correctly.

## Changing Ref Codes on Food Delivery Platforms

If you previously used Deliverect to connect your Lightspeed Restaurant (K Series) EPOS with food delivery platforms like Deliveroo, Uber Eats, or Just Eat, you need to check that all products have the correct ref codes.

When Deliverect syncs the products with food delivery platforms, it appends the string `-M-` to all the modifiers' ref codes. For example, if you have a modifier with ref code `sauce-123` in your Lightspeed catalog, on Deliveroo this appears as `sauce-123-M-`. When you receive an order from Deliveroo, Deliverect automatically removes the string `-M-` from the ref code before sending it to Lightspeed Restaurant (K Series).

When you migrate from Deliverect to HubRise, you need to remove the string `-M-` from all the products in your food delivery store menus, so that they can be correctly received in your Lightspeed Restaurant (K Series) EPOS.
