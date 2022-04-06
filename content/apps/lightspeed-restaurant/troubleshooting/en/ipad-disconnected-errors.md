---
title: iPad Errors
position: 9
layout: documentation
meta:
  title: Troubleshoot iPad Errors | Lightspeed Restaurant | HubRise
  description: Instructions to solve errors due to disconnected or not properly configured iPads.
---

This page describes how to troubleshoot errors due to a disconnected or misconfigured iPad.

## iPad EPOS Not Available

In some cases, orders can fail with error messages similar to the following:

- The specified business location doesn't accept online orders at the moment.

  ```
  {
    "status": "FAILURE",
    "reason": "The specified business location doesn't accept online orders at the moment.",
    "thirdPartyReference": "zrk8p|wbv7z-0|2ve7gq"
  }
  ```

- No devices available to handle the task, the task has been rejected.

  ```
  {
    "reason": "No devices available to handle the task, the task has been rejected.",
    "thirdPartyReference": "zrk8p|wbv7z-0|3vdg0x",
    "businessLocationId": 210001112231,
    "status": "FAILURE",
    "type": "ORDER"
  }
  ```

Both these errors can happen in the following cases:

- There is no device available to receive orders.
- The iPad is connected, but the app runs in the background, for example when the user is not on the Lightspeed app.
- The iPad is offline or not connected to the Internet.
- Online ordering has not been enabled on the iPad. For more information, see [API Activation in the Tablet](/apps/lightspeed-restaurant/faqs/troubleshooting-failed-orders/#api-activation-in-the-tablet).
