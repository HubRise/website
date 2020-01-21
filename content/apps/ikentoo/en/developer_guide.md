---
title: Developer guide
position: 4
layout: documentation
---

Order JSON sent to iKentoo API:

```json
{
  "businessLocationId": 12345678901234,
  "endpointId": "HubRise",
  "thirdPartyReference": "abcdef|abcdef-1|12345",
  "items": [
    {
      "quantity": 1,
      "customItemName": "Cheeseburger steak burger",
      "customItemPrice": 5.5,
      "sku": "112",
      "subItems": [
        {
          "quantity": 1,
          "sku": "335",
          "customItemName": "No Tomatoes",
          "customItemPrice": 0.0
        }
      ]
    },
    {
      "quantity": 1,
      "customItemName": "Small french fries",
      "customItemPrice": 3.3,
      "sku": "14"
    }
  ],
  "orderNote": null,
  "orderCollectionTimeAsIso8601": "2019-11-04T12:30:00.000+01:00",
  "payment": {
    "paymentMethod": "LP",
    "paymentAmount": 8.8
  },
  "customerInfo": {
    "firstName": "John",
    "lastName": "Smith",
    "email": "john.smith@gmail.com",
    "notes": "",
    "contactNumberAsE164": "+33601020304"
  },
  "takeAway": true
}
```
