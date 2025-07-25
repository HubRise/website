---
title: Receive Orders
path_override: receive-orders
position: 8
layout: documentation
meta:
  title: Receive Orders | Deliveroo | HubRise
  description: Find out the technical details of how orders are received from Deliveroo into HubRise, which fields are passed and which are not.
---

Connecting Deliveroo to HubRise allows you to receive Deliveroo orders directly in your EPOS or any other solution connected to your HubRise account.

You have the option to either manually accept orders on the tablet or set up auto-accept. If you prefer not to use a tablet, you can leave it switched off or not have one at all. For more information, see [Can I Stop Using the Deliveroo Tablet?](/apps/deliveroo/faqs/deliveroo-tabletless).

This page describes the information Deliveroo sends to HubRise. It helps you understand how orders will be received on your EPOS.

## Items and Options

If your EPOS solution relies on item and option ref codes to correctly parse the item, make sure that items and options in your Deliveroo menu are mapped to the correct EPOS ref code. For more details, see [Map Ref Codes](/apps/deliveroo/map-ref-codes).

Otherwise, if your EPOS solution does not support ref codes, leave this information blank in your Deliveroo back office.

Customers' comments on single items are not provided by Deliveroo API. If you rely on these comments for cooking or serving instructions (for example, "Medium rare cooking", or "Cut in slices"), you should add the corresponding items in your EPOS and include them as options in the Deliveroo menu, so that they are correctly encoded.

### Items Encoding

For every item in the order, Deliveroo Bridge provides the following information:

- `sku_ref`: The ref code of the item.
- `product_name`: The ref code of the item, if present. Otherwise, the item name.
- `price`: The price for a single item.
- `quantity`: The quantity of items included in the order.
- `options`: The array of options attached to the item.

### Options Encoding

For every option in the order, Deliveroo Bridge provides the following information:

- `option_list_name`: The default value is "Options".
- `ref`: The ref code of the option.
- `name`: The ref code of the option, if present. Otherwise, the option name.
- `price`: The price for a single option.

Every option has single quantity. Multiple identical options are encoded in separate option objects.

## Order Statuses

---

**IMPORTANT NOTE:** In this section, we capitalise the first letter of Deliveroo statuses to make them easier to distinguish from HubRise status names. For example, `Succeeded` is a Deliveroo status, while `accepted` is a HubRise status.

---

### Deliveroo Statuses

A Deliveroo order goes through several statuses during its lifecycle:

- `Succeeded`: The order has been accepted by the EPOS, and is confirmed on Deliveroo.
- `Failed`: The order could not be sent to the EPOS. Deliveroo sends a message to the Deliveroo tablet prompting staff to check their POS for the order, and enter manually into the EPOS if needed.
- `In Kitchen`: Cooking has started.
- `Ready for Collection`: Food is cooked and packaged.
- `Collected`: The order has been collected.

New orders must be marked as `Succeeded` or `Failed` within 3 minutes, otherwise Deliveroo automatically marks them as `Failed`.

---

**IMPORTANT NOTE:** Switching an order status to `Succeeded` or `Failed` is not reversible. Once an order is marked as `Failed`, it can no longer be changed to `Succeeded`, and vice-versa.

---

### When the Status Changes in HubRise

When an order status changes in HubRise, Deliveroo Bridge notifies Deliveroo and the change is reflected in the Deliveroo tablet. The correspondence between HubRise and Deliveroo statuses is as follows:

| HubRise status                               | Deliveroo status                                                           |
| -------------------------------------------- | -------------------------------------------------------------------------- |
| `new`, `received` or `accepted`              | You can configure which one of these statuses makes the order `Succeeded`. |
| `rejected` or `cancelled`                    | `Failed`                                                                   |
| `in_preparation`                             | `In Kitchen`                                                               |
| `awaiting_collection` or `awaiting_shipment` | `Ready for Collection`                                                     |
| `completed`                                  | `Collected`                                                                |

Deliveroo Bridge lets you decide which HubRise status triggers the `Succeeded` status on Deliveroo. This is useful to handle different scenarios when your EPOS updates the order status. For example, if your EPOS marks an accepted order as `received` on HubRise, you can still notify Deliveroo that the order has been accepted.

Other HubRise status values are not supported and are not sent on Deliveroo.

### When the Status Changes in Deliveroo

When an order is cancelled from the Deliveroo tablet, it is marked as `cancelled` on HubRise.

## Service Types

Deliveroo supports three service types:

- Delivery by Deliveroo riders
- Delivery by the restaurant's fleet
- Customer collection

These are typically associated with specific ref codes in your EPOS. For more information, see your EPOS documentation in our [Apps page](/apps).

## Order Times

For restaurant delivery orders, Deliveroo provides the time the customer expects the order to be delivered. For other types of orders, it provides the time the order should be ready for pickup, either by the customer or a Deliveroo rider. In both scenarios, this time is transmitted to HubRise as the `expected_time` field, and cannot be modified by the EPOS.

To delay an order, update the `confirmed_time` field in HubRise. Deliveroo Bridge will calculate the delay between `expected_time` and `confirmed_time`, and send it to Deliveroo when the order status changes to `in_preparation`. The delay is rounded to the nearest even number of minutes between 0 and 10. Updating this field after the order has been marked as in preparation will have no effect.

## Customer

Deliveroo never provides the customer's full name, personal phone number or email address. It does not provide any customer identification number either. Therefore, Deliveroo Bridge does not create customers in HubRise, but includes the customer's details directly in the order.

For restaurant delivery orders, Deliveroo Bridge provides the following details:

- `first_name`: The customer's first name.
- `last_name`: The initial of the customer's last name.
- `address_1`: The first line of the address.
- `address_2`: The second line of the address.
- `city`: The city of the address.
- `postal_code`: The postcode of the address.
- `latitude`: The latitude of the address.
- `longitude`: The longitude of the address.
- `phone`: Deliveroo support number. Note: This is not the customer's phone number.
- `delivery_notes`: The access code to identify the order when calling Deliveroo support and the delivery notes left by the customer, in the format "Phone access code: `access_code`. `note`".

For other types of orders, Deliveroo Bridge provides the following details:

- `first_name`: The customer's first name.
- `phone`: Deliveroo support number. Note: This is not the customer's phone number.

## Discounts

The discount applied to the order is passed in a single object in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is `Discount` by default.
- `ref`: The ref code of the discount. Its default value can be set from the Configuration page of Deliveroo Bridge and should match the value in your EPOS.
- `price_off`: The total amount of the discount.

## Charges

Deliveroo Bridge can encode three types of charges:

- Delivery charges are applied for orders delivered by the restaurant.
- Small order surcharges apply to orders below the minimum order amount.
- Bag fees are required by regulations in some countries.

The available fields in the payloads are the following:

- `name`: The name of the charge, which is either `Delivery charge`, `Surcharge` or `Bag fee`.
- `ref`: The ref code of the charge. Its default value can be set from the Configuration page of Deliveroo Bridge and should match the value in your EPOS.
- `price`: The amount of the charge.

## Customer Notes

Order-level customer notes are encoded in the `customer_notes` field.

## Pause and Preparation Time {#pause-and-preparation-time}

When order acceptance and preparation time sync is enabled, Deliveroo Bridge syncs the `order_acceptance` and `preparation_time` fields from HubRise to Deliveroo.

The `order_acceptance.mode` field controls the store status:
- `normal`: Store open with quiet preparation time
- `busy`: Store open with busy preparation time  
- `paused`: Store closed

The quiet preparation time uses the `preparation_time` value from HubRise, defaulting to 15 minutes if not set. The busy preparation time is calculated as `preparation_time` plus `order_acceptance.extra_preparation_time`.
