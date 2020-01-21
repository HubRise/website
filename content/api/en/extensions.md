---
title: API Extensions
position: 6
layout: documentation
meta:
    title:
    description:
---

The HubRise API can be extended in two ways:

- **Custom fields** let you attach arbitrary data to existing resources. For instance, you could add a `tracking_url` field to orders.

- **Custom endpoints** let you create new endpoints in the API and bind them to 3rd party services. For instance, you could bind a cloud printing service to a location, so that calling `POST /location/orders/bd1f2/:print` would actually print the `bd1f2` order

Extensions let clients implement use cases not natively supported by the API.

The HubRise development team monitors how extensions are used in an effort to document and "standardize" the most common fields and endpoints. You can <ContactFormToggle text="contact us" /> to discuss about your use case and see if it could fit into existing and well supported extensions.

## 1. Custom fields

Custom fields can be defined on the following resources:

- `Customer`
- `Order`
- `Location`

Each resource of the above types has a `custom_fields` field, which can be populated with arbitrary data.

The field is retrieved in `GET` operations upon the resources, and is updated with `POST`, `PUT` or `PATCH` operations.

### 1.1. Example workflow

```http
POST /location/orders
{
  "status": "new",
  "custom_fields": {
    "tracking_url": "https://order.tracking.com/orders/664578",
    "delivery_out": "2018-03-19T19:25:00"
  }
}
```

This request creates a new order, with 2 custom fields.

Now let's modify the custom fields:

```http
PUT /location/orders/bd1f2
{
  "custom_fields": {
    "tracking_url": "https://order.tracking.com/orders/664579",
    "delivery_out": null,
    "timeout": "1800"
  }
}
```

This request:

- updates the value of the `tracking_url` custom field to ...664579 (instead of 664578)
- removes the `delivery_out` custom field
- adds a new `timeout` custom field to the order

Now if you retrieve the same order:

```http
GET /location/orders/bd1f2
->
{
  ...,
  "custom_fields": {
    "tracking_url": "https://order.tracking.com/orders/664579",
    "timeout": "1800"
  }
}
```

Custom fields work in the same way on orders, customers and locations.

### 1.2. Data constraints

A custom field can be of any type. You can even pass JSON objects as values:

```http
PUT /customer_lists/map4g/customers/g56qf
{
  "custom_fields": {
    "position": {
      "latitude": 48.8697246,
      "longitude": 2.3061506
    }
  }
}
```

In other words, `custom_fields` just has to be a JSON object.

The only limitation is the size: the JSON representation of `custom_fields` must not exceed 8 kilobytes.

### 1.3. Callbacks

Custom fields work nicely with [callbacks](/api/callbacks). Updating the custom fields of a resource triggers the update callback of the resource.

## 2. Custom endpoints

Coming soon
