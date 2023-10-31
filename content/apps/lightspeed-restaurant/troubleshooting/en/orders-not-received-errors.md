---
title: Orders Not Received
path_override: orders-not-received-errors
position: 10
layout: documentation
meta:
  title: Troubleshoot Orders Not Received | Lightspeed Restaurant | HubRise
  description: Instructions to troubleshoot orders not received in the EPOS.
---

This page describes how to troubleshoot orders not received in the EPOS

## HubRise Not Enabled

In some cases, you might not receive HubRise orders even if no apparent error is displayed in the logs.

Looking at the [order logs](/apps/lightspeed-restaurant/user-interface#operation), the affected orders display the following message:

```json
{
  "status": "received"
}
```

In this case, the probable cause of the missing orders is that HubRise was not enabled on Lightspeed.
To solve the issue, contact Lightspeed support, and request to enable the HubRise connection for your EPOS.
