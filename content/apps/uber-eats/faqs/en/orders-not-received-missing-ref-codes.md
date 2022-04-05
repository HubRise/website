---
title: Why Are My Orders Not Received on HubRise?
position: 2
layout: documentation
meta:
  title: Orders Not Received | Uber Eats FAQs | HubRise
  description: If you think your Uber Eats Bridge configuration is correct, and you still do not receive orders from Uber Eats, there might be products with missing ref codes in your menu.
---

In some cases, your Uber Eats Bridge configuration might be correct, but you may still not be able to receive orders from Uber Eats. When a new order is sent from Uber Eats to HubRise, no new row is created in the orders page of Uber Eats Bridge, and no error message appears in the logs.

The issue might be related to missing ref codes in your Uber Eats menu. If an item with no ref code is added to an Uber Eats order, in fact, Uber Eats fails to send the entire order, and nothing is received on HubRise.

To solve the issue, make sure that all the products in your Uber Eats menu have a corresponding ref code. To learn how to add ref codes to your Uber Eats products, see [Map Ref Codes](/apps/uber-eats/map-ref-codes).
