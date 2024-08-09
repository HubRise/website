---
title: Receive Orders
path_override: receive-orders
position: 4
layout: documentation
meta:
  title: Receive Orders | Expedy | HubRise
  description: Technical information regarding the integration of Expedy with HubRise. Easily connect your apps to HubRise and synchronise your data.
---

The following fields in HubRise orders are printed on Expedy receipts.

| HubRise field name  | Use in Expedy                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------- |
| `service_type`      | Indicates if the order is in delivery, eat-in, take-away or for consultation.                               |
| `service_type_ref`  | Free field, printed at the top of the receipt. Useful for differentiating virtual brands in a Dark Kitchen. |
| `created_by`        | Name of the application that created the order. Printed under `service_type_ref`.                           |
| `expected_time`     | Date and time at which the order will be ready or delivered                                                 |
| `item.product_name` | Product name                                                                                                |
| `item.sku_name`     | SKU name, if the item is available in multiple sizes, colours, etc.                                         |
| `item.price`        | Product price                                                                                               |
| `item.options`      | Product options                                                                                             |
| `deals`             | Deals on specific items in the order                                                                        |
| `charges`           | Extra fees                                                                                                  |
| `total`             | Total order amount                                                                                          |
| `collection_code`   | Order unique code                                                                                           |
| `customer`          | Customer information                                                                                        |
| `payments`          | The name of the payment method used is printed. Default value: "A PAYER".                                   |

To customise the print, see [Customise Receipts](/apps/expedy/configuration#customise-receipts).
