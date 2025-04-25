---
title: iPad Errors
path_override: ipad-disconnected-errors
position: 9
layout: documentation
meta:
  title: Troubleshoot iPad Errors | Lightspeed Restaurant | HubRise
  description: Instructions to solve errors due to disconnected or not properly configured iPads.
---

This page describes how to troubleshoot errors due to a disconnected or misconfigured iPad.

## Business Location Not Accepting Online Orders

In certain circumstances, orders may fail, causing the following error message to appear:

```json
{
  "status": "FAILURE",
  "reason": "The specified business location doesn't accept online orders at the moment.",
  "thirdPartyReference": "xxx|xxx-0|yyy"
}
```

This problem arises due to the fact that online ordering has not been enabled on the relevant iPad. To resolve this issue, you should activate online ordering on the iPad. For more information, see [API Activation in the Tablet](/apps/lightspeed-restaurant/faqs/troubleshooting-failed-orders#api-activation).

## No Available Devices

Occasionally, order processing can fail due to a lack of available devices. This problem can lead to two equivalent error messages:

```json
{
  "reason": "Not processed before validity ended",
  "thirdPartyReference": "xxx|xxx-0|yyy",
  "businessLocationId": 123456789,
  "status": "FAILURE",
  "type": "ORDER"
}
```

and

```json
{
  "reason": "No devices available to handle the task, the task has been rejected.",
  "thirdPartyReference": "xxx|xxx-0|yyy",
  "businessLocationId": 123456789,
  "status": "FAILURE",
  "type": "ORDER"
}
```

These errors typically arise under the following circumstances:

- No iPads are available to receive orders.
- The iPad is turned off or is not connected to the internet.
- The iPad is connected, but the Lightspeed app is running in the background, for example when the user is not on the Lightspeed app.

HubRise sets the validity period of the order to 12 hours by default. If no device is active within this 12-hour validity period, the order will fail.
