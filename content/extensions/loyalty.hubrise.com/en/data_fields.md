---
title: Data fields
position: 2
layout: documentation
meta:
  title:
  description:
---

## Customer

| Field name | Type | Description |
| --- | --- | --- |
| `member_id` | string | Identifies a member of the loyalty club |

#### Example:

`GET /customer_lists/smpse3/customers/jdj9v`

```json
{
  "id": "jdj9v",
  "email": "xxx@yyy.com",
  "first_name": "Jimmy",
  "last_name": "Watson",
  ...
  "extended_fields": {
    "loyalty.hubrise.com": {
      "member_id": "2976000e-0448-48a1-a539"
    }
  }
}
```