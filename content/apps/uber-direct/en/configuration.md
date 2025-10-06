---
title: Configuration
path_override: configuration
position: 4
layout: documentation
meta:
  title: Configuration | Uber Direct | HubRise
  description: Instructions on configuring Uber Direct Bridge to work seamlessly with Uber Direct and your EPOS or other apps connected to HubRise. Configuration is simple.
---

The Configuration page lets you customise the behaviour of the Uber Direct integration.

The pas is divided into several sections: **Technical Configuration**, **Order Collection**, and **Delivery**.

## Technical Configuration

![Uber Direct Bridge configuration page, Technical Configuration section](./images/010-uber-direct-configuration-technical.png)

### Webhook Signing Key

Enter the webhook signing key that you retrieved from the Uber Direct Developer dashboard. This key is used to verify the authenticity of webhook messages sent by Uber Direct to HubRise.

For more information on how to retrieve the webhook signing key, see [Connect to HubRise](/apps/uber-direct/connect-hubrise#setup-webhook).

## Order Collection {#order-collection}

This section defines the business information and pickup address that will be sent to Uber Direct when creating a delivery request.

![Uber Direct Bridge configuration page, Order Collection section](./images/011-uber-direct-configuration-collection.png)

### General Information

- **Name of the business**: Enter the name of your business as it should appear to the courier.
- **Phone number**: Enter the phone number of your business. This is the number the courier will call if they need to reach you during pickup.
- **Pickup instructions**: Enter any special instructions for the courier when they arrive at your location (maximum 280 characters). For example, "Follow big green 'Pickup' signs in the parking lot" or "Ring the doorbell at the side entrance."

### Address {#address}

Enter the pickup address of your business. This is where the courier will collect the order.

To set the address:

- Use the autocomplete field to search for your business address, and select it from the suggestions.
- Fine-tune the marker position on the map if needed to ensure the exact pickup location.

![Uber Direct Bridge configuration page, Edit Address section](./images/012-uber-direct-configuration-collection-edit-address.png)

## Delivery

This section defines when and how Uber Direct deliveries should be requested.

![Uber Direct Bridge configuration page, Delivery section](./images/013-uber-direct-configuration-delivery.png)

### Delivery Criteria {#delivery-criteria}

Uber Direct Bridge will request a courier for every order that matches the following criteria. Each criterion is optional: just leave it empty to skip it.

#### Order Status

Select the order status(es) that should trigger a delivery request. For example, if you only want to request a courier when an order is ready for pickup, select `awaiting_shipment`.

By default, the following statuses are selected:

- `received`
- `accepted`
- `in_preparation`
- `awaiting_shipment`

#### Service Type Ref Codes

Enter the service type ref codes that should trigger a delivery request. For example, if you only want to request a courier for orders with a service type ref code of `101` or `102`, enter both codes. Press Enter or use comma to separate multiple ref codes.

#### Channels

Enter the channels (e.g. "Uber Eats", "WooCommerce", etc.) that should trigger a delivery request. For example, if you only want to request a courier for orders from the `Uber Eats` channel , enter this exact name. Press Enter or use comma to separate multiple channels.

#### Connection names

Enter the connection names that should trigger a delivery request. Connection names are typically used in Dark Kitchen setups. For example, if you only want to request a courier for orders from the `Sushi Dream` connection, enter this exact name. Press Enter or use comma to separate multiple connection names.

### Booking Mode

Choose how delivery requests should be handled:

- **Request a quote and wait for your confirmation**: Uber Direct Bridge will create a delivery quote but will not automatically book the courier. You will need to manually confirm the delivery from your EPOS or by updating the order in HubRise.
- **Auto-book couriers** (default): Uber Direct Bridge will automatically book the delivery after receiving the quote. This is the recommended option for most use cases.

### Undeliverable Action

If the customer is not available to receive the order, choose what the courier should do:

- **Leave the order at the door** (default): The courier will leave the order at the customer's door if they consider it safe to do so.
- **Return the order to the store**: The courier will return the order to your business. When this option is selected, you can enter special return instructions for the courier (maximum 280 characters). For example, "Please meet store members at the counter."

## Save the Configuration

To save the configuration, click **Save** at the top of the page.

## Reset the Configuration

If you need to reset the configuration, click **Reset the configuration** at the bottom of the page.

---

**IMPORTANT NOTE:** Resetting the configuration will instantly disconnect the bridge from Uber Direct. You will need to reconnect using your Uber Direct credentials.

---

Resetting the configuration does not delete the operation logs displayed in the main page.
