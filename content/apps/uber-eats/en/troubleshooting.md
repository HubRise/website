---
title: Troubleshooting
path_override: troubleshooting
position: 9
layout: documentation
meta:
  title: Troubleshooting | Uber Eats Bridge | HubRise
  description: Troubleshooting Uber Eats Bridge connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

## Menu Issues

### Error 400

If a catalog push results in a `400` error, it could be due to a cache issue on Uber Eats. To resolve this, try the following steps:

1. Attempt to push the menu again. This step is important because you need a recent failing request; otherwise, you will receive a `401` error in the next step.
2. Open the bridge's **Operations** tab.
3. Click on the request you just made.
4. Expand the first line (the one with the `400` error), and click **Modify and resend the request**.
5. In the **Request body** section, replace the menu with the empty menu payload provided below.
6. Click **Send**.

If this works, you can try to push the menu again.

<details>
<summary>Empty menu payload</summary>

```json
{
  "menus": [
    {
      "id": "All-day",
      "title": {
        "translations": {
          "en-GB": "All day"
        }
      },
      "service_availability": [
        {
          "day_of_week": "monday",
          "time_periods": [
            {
              "start_time": "17:00",
              "end_time": "21:00"
            }
          ]
        }
      ],
      "category_ids": []
    }
  ],
  "categories": [],
  "items": [],
  "modifier_groups": [],
  "display_options": {}
}
```

</details>

## Orders Not Received {#orders-not-received}

### Missing Ref Codes

In some cases, your Uber Eats Bridge configuration might be correct, but you may still not be able to receive orders from Uber Eats. When a new order is sent from Uber Eats to HubRise, no new row is created in the orders page of Uber Eats Bridge, and no error message appears in the logs.

The issue might be related to missing ref codes in your Uber Eats menu. If an item with no ref code is added to an Uber Eats order, in fact, Uber Eats fails to send the entire order, and nothing is received on HubRise.

To solve the issue, make sure that all the products in your Uber Eats menu have a corresponding ref code. To learn how to add ref codes to your Uber Eats products, see [Map Ref Codes](/apps/uber-eats/map-ref-codes).
