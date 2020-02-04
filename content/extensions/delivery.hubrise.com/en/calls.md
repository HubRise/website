---
title: Calls
position: 3
layout: documentation
meta:
  title:
  description:
---

## Delivery time

__Resource:__ location

__Mount point:__ /delivery_time

__Arguments:__ none

__Returns:__

| Field name | Type | Description |
| --- | --- | --- |
| `delivery_time` | float | Estimated delivery time in minutes |

#### Example:

`POST /customer_lists/smpse3/customers/jdj9v/@delivery.hubrise.com/delivery_time`

Reply:

```json
{
  "delivery_time": 17.0
}
```
