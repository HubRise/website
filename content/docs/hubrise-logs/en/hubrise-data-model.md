---
title: HubRise Data Model
path_override: hubrise-data-model
position: 7
layout: documentation
meta:
  title: HubRise Data Model | How to Read HubRise logs
  description: The typical JSON keys in the body of a HubRise request.
---

## Order Requests in HubRise

### Data Model

All the orders received by HubRise are logged in the back office. For information on how to access the order logs, see
[HubRise Help, Data Logs](/docs/data/#logs).

The following keys can appear in a HubRise order request.

| Key                  | Description                                                                                                                                                                                               |
| -------------------- |-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `private_ref`        | The internal ID for the order. It can be used to find an order.                                                                                                                                           |
| `service_type`       | The type of service requested by the customer. Typical values are “delivery”, “collection”, “eat_in”.                                                                                                     |
| `service_type_ref`   | The code associated with service_type in the EPOS system.                                                                                                                                                 |
| `expected_time`      | The date and time the customer expects to receive the order.                                                                                                                                              |
| `confirmed_time`     | The delivery date and time confirmed by the sender. It can be specified in case this is different from the customer's expected delivery time.                                                             |
| `status`             | The status of the order. A few typical values are “new”, “accepted”, “received”, and “rejected”. For a complete list, see the [Developers documentation](/developers/api/order-management/#order-status). |
| `total`              | The amount paid by the customer.                                                                                                                                                                          |
| `coupon_codes`       | The coupon codes used by the customer.                                                                                                                                                                    |
| `customer_id`        | The unique customer ID. It can be used to fetch the customer's details from the database.                                                                                                                 |
| `items`              | The list of items in the order. For more information on each item, see [The Item Object](/docs/hubrise-logs/hubrise-data-model#the-item-object).                                                          |
| `payments`           | The list of payment methods used by the customer. For more information on each payment method, see [The Payment Object](/docs/hubrise-logs/hubrise-data-model#the-payment-object).                        |
| `deals`              | The list of deals present in the order. A deal is a combination of products that have a discounted price when bought together. For instance, **Buy One Get One FREE**.                                    |
| `discounts`          | The list of discount codes applied to the entire order. A discount is either a percentage or a fixed value that is discounted from the total price of the order. For instance, 10% off on the whole order. |
| `loyalty_operations` | The list of operations applied to the customer's loyalty card. Each object in the list specifies the number of points added or removed and the reason.                                                    |
| `charges`            | The list of additional charges applied to the order. Typical cases could be delivery charges, payment fees, taxes, etc.                                                                                   |

### The Item Object

Each item object in the items list contains information about a product purchased by the customer. The following keys can appear in an order Item.

| Key             | Description                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| `product_name`  | The name of the product.                                                                                 |
| `sku_name`      | The sku name of the product, typically indicating the size or colour.                                    |
| `sku_ref`       | The code associated with the product. It indicates the EPOS code.                                        |
| `price`         | The price of a single product.                                                                           |
| `quantity`      | The quantity ordered.                                                                                    |
| `subtotal`      | The total price of the product (price x quantity).                                                       |
| `options`       | The optional changes (ingredients or toppings) associated with the product.                              |
| `deal_line`     | If the item is part of a deal, it indicates the information about the deal.                              |
| `points_earned` | The points earned by the customer with this product. They are counted in the loyalty_operations objects. |
| `points_used`   | The points used by the customer with this product. They are counted in the loyalty_operations objects.   |

### The Payment Object

The payments list contains the payment methods used by the customer. In typical cases, only one payment method is present per order. However, HubRise allows several payment methods simultaneously, for example when a customer pays an order partially with a gift card and partially online.

The following keys can appear in a payment object.

| Key      | Description                                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`   | The payment type. Can be `cash` or `online`.                                                                                                                                                                                                                  |
| `name`   | The name associated with the payment method.                                                                                                                                                                                                                  |
| `info`   | The additional information associated with the payment, which depends on the actual payment method. For example, a PayPal payment would include the email address associated with the account; for card payments, it contains all the details about the card. |
| `ref`    | The EPOS code associated with this payment type.                                                                                                                                                                                                              |
| `amount` | The total amount paid by the customer.                                                                                                                                                                                                                        |
