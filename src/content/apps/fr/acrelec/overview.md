---
position: 1
title: Overview
layout: documentation
gallery:
  - screencap_0.png
  - screencap_1.png
  - screencap_2.png
path_override: /
app_info:
  category: POS
  availability: France, Switzerland, UK
  price_range: $50-150 / month
  website: ikentoo.com
  contact: phone / email
---

A **callback** is a convenient way for an application to be notified of a change on a particular set or resources. It can be used to monitor orders, customers, locations or catalogs.

There are 2 types of callbacks:

- An **active callback** is a URL which is called by HubRise when the underlying event occurs. If the URL is not immediately available, a couple more attempts are made a few minutes later.

- A **passive callback** records the events associated with it. The application needs to poll HubRise regularly (every minute or so) to check if an event has occurred.

Active callbacks receive a POST HTTP request when an event occurs. The request body mostly contains the JSON representation of the previous and new states of the affected resource.
