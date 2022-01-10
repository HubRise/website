---
title: Sending Orders
position: 6
layout: documentation
meta:
  title: Sending Orders | Uber Eats Technical Details | HubRise
  description: Find out the technical details of how orders are sent from Uber Eats to HubRise, which fields are passed and which are not.
---

Connecting Uber Eats to HubRise allows you to receive Uber Eats orders directly in your EPOS. This page describes the information that is passed by Uber Eats Bridge for the orders you receive.
 
## Items and Options

### Items Encoding

For every item in the order, Uber Eats Bridge provides the following information:

- `sku_ref`: The ref code of the item.
- `product_name`: The product name.
- `sku_name`: The name of the SKU, if available. SKUs are a special kind of modifiers in Uber Eats: their ref code always equals `MULTISKU`.
- `price`: The price for a single item.
- `quantity`: The quantity of items included in the order.
- `options`: The modifiers attached to the item.

### Options Encoding

For every modifier in the order, Uber Eats Bridge provides the following information:

- `option_list_name`: The name of the modifier group.
- `name`: The modifier name.
- `ref`: The modifier ref code.
- `price`: The price for a single modifier.

Every option has single quantity. Multiple identical modifiers are encoded in separate option objects.

## Order Statuses

Uber Eats supports three order statuses:

- `Accepted`: The order has been accepted by the EPOS.
- `Denied`: The order could not be sent to the EPOS.
- `Cancelled`: The order has been cancelled by the EPOS.

New orders must be switched to one of the above statuses within 10 minutes. Orders which are still pending after this period of time are automatically cancelled by Uber Eats.

---

**IMPORTANT NOTE:** You can only update the status of an order once. Further changes are ignored by Uber Eats. Therefore you cannot cancel or deny an order which has already been accepted.

---

### Change the status of an order in Uber Eats

When the status of an order changes to `rejected` or `cancelled` in HubRise, Uber Eats Bridge notifies Uber Eats that the order is respectively `Denied` or `Cancelled`.

Uber Eats Bridge lets you decide which HubRise status triggers the `Accepted` status on Uber Eats. This is useful to handle different scenarios when your EPOS updates the order status. For example, if your EPOS marks an accepted order as `received` on HubRise, you can still notify Uber Eats that the order has been accepted.

Other HubRise status values are not supported and are not sent to Uber Eats.

### Change the status of an order in HubRise

Uber Eats Bridge does not change order statuses in HubRise.

## Service Types

Uber Eats supports four service types:

- Delivery by Uber Eats
- Delivery by the restaurant
- Customer collection
- Eat-in

These are typically associated with specific ref codes in your EPOS. For more information, see your EPOS documentation in our [apps page](/apps).

## Customer

Uber Eats never provides the customer's full name and email address in their API. Therefore, Uber Eats Bridge never creates customers in HubRise, but includes the customer's details directly in the order.

For every type of order, Uber Eats Bridge retrieves the following information from Uber Eats:

- `first_name`: The customer's first name.
- `last_name`: The initial of the customer's last name.
- `phone`: Uber Eats support number. Note: This is not the customer's phone number.
- `delivery_notes`: The access code to identify the order when calling Uber Eats support and the delivery notes left by the customer, in the format "Phone access code: `access_code`. `note`".

Additionally, for restaurant delivery orders, Uber Eats Bridge retrieves the following fields:

- `address_1`: The first line of the address.
- `address_2`: The second line of the address.
- `city`: The city of the address.
- `postal_code`: The postcode of the address.
- `latitude`: The latitude of the address.
- `longitude`: The longitude of the address.

## Discounts

The discounts applied to the order are passed in the HubRise `discounts` array.

The available fields in the payload are the following:

- `name`: The name of the discount, which is "Discount" by default.
- `ref`: The ref code of the discount. Its value is set from the Configuration page of Uber Eats Bridge and should match the value in your EPOS.
- `price_off`: The amount of the discount.

## Charges

Uber Eats Bridge includes charges for restaurant delivery orders only. Charges for every other type of orders are collected by Uber Eats and therefore not transmitted to the restaurant.

Uber Eats Bridge encodes the following types of charges: delivery charges, and small order fee, and tip for the restaurant.

For each charge present in the order, the available fields are the following:

- `name`: The name of the charge, which is "Delivery charge", "Tip", or "Small order fee".
- `type`: The type of charge.
- `ref`: The charge ref code. Its value can be set from the Configuration page of Uber Eats Bridge and should match the value in your EPOS.
- `price`: The charge amount.

## Customers' Notes

Customers' notes about the order are encoded in the `customer_notes` field.
