---
title: iPad Errors
path_override: ipad-disconnected-errors
position: 9
layout: documentation
meta:
  title: Troubleshoot iPad Errors | Lightspeed Restaurant | HubRise
  description: Instructions to solve errors due to disconnected or not properly configured iPads.
---

This document provides you with troubleshooting steps when facing issues caused by a disconnected or improperly configured iPad.

## iPad EPOS Not Available

Sometimes, orders may fail due to error messages resembling the ones shown below:

- The specified business location is not accepting online orders currently.

  ```json
  {
    "status": "FAILURE",
    "reason": "The specified business location doesn't accept online orders at the moment.",
    "thirdPartyReference": "xxx|xxx-0|yyy"
  }
  ```

- No devices are available to handle the order, hence it was rejected.

  ```json
  {
    "reason": "No devices available to handle the task, the task has been rejected.",
    "thirdPartyReference": "xxx|xxx-0|yyy",
    "businessLocationId": 123456789,
    "status": "FAILURE",
    "type": "ORDER"
  }
  ```

- No iPad was active during the validity period. HubRise sets this period to 12 hours following the placement of the order.

  ```json
  {
    "reason": "Not processed before validity ended",
    "thirdPartyReference": "xxx|xxx-0|yyy",
    "businessLocationId": 123456789,
    "status": "FAILURE",
    "type": "ORDER"
  }
  ```

These errors can happen in the following cases:

- No devices are available to process the orders.
- The iPad is switched off or not connected to the Internet.
- Although The iPad is connected, the app is running in the background. For example, the user is not actively on the Lightspeed app.
- Online ordering has not been enabled on the iPad. For more information, see [API Activation in the Tablet](/apps/lightspeed-restaurant/faqs/troubleshooting-failed-orders/#api-activation-in-the-tablet).
