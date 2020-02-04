---
title: Data fields
position: 2
layout: documentation
meta:
  title:
  description:
---

## Location

All times are in minutes.

| Field name | Type | Description |
| --- | --- | --- |
| `average_preparation_time` | float | Average time between order reception and order being ready for delivery. |
| `average_wait_time` | float | Average time orders wait to leave after being prepared. |
| `average_delivery_time` | float | Average delivery time |


#### Example:

`GET /location`

```json
{
  "id": "3r4s3-1",
  "name": "Paris",
  ...
  "extended_fields": {
    "delivery.hubrise.com": {
      "average_preparation_time": 15.0,
      "average_delivery_time": 8.5
    }
  }
}
```

The __door time__ is the total time between order reception and order delivered. It is calculated as: `average_preparation_time` + `average_wait_time` + `average_delivery_time`
