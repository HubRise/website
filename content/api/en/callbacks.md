---
title: Callbacks
position: 7
layout: documentation
meta:
  title:
  description:
---

A **callback** is a convenient way for an application to be notified of a change on a particular set or resources. It can be used to monitor orders, customers, locations or catalogs.

There are 2 types of callbacks:

- An **active callback** is a URL which is called by HubRise when the underlying event occurs. If the URL is not immediately available, a couple more attempts are made a few minutes later.

- A **passive callback** records the events associated with it. The application needs to poll HubRise regularly (every minute or so) to check if an event has occurred.

Active callbacks receive a POST HTTP request when an event occurs. The request body mostly contains the JSON representation of the previous and new states of the affected resource.

From the target server point of view, this call looks like this:

`POST [callback_url]`

```json
{
  "resource_type": "customer",
  "resource_id": "sdakm",
  "event_type": "update",
  "previous_state": {
    "id": "jdj9v",
    "email": "tom@wahoo.com"
    ...
  },
  "new_state": {
    "id": "jdj9v",
    "email": "jim@wahoo.com"
    ...
  },
  "account_id": "3r4s3",
  "location_id": "3r4s3-1"
}
```

The callback must return a `200` HTTP code to acknowledge the reception of the event(s). This makes HubRise delete the event.

If the callback fails to acknowledge, HubRise attempts to resend the events later. In the meantime, unacknowledged events are accessible through `GET /callback/events`.

## 1. Callbacks

A callback is specific to a connection. A connection can have no more than one callback.

### 1.1. Retrieve callback

Returns the connection's callback details, including the URL and the types of events the callback listens to.

<CallSummaryTable
  endpoint="GET /callback"
  accessLevel="location, account"
/>

#### Example request:

`GET /callback`

```json
{
  "url": "https://myapp.com/hubrise_callback",
  "events": {
    "order": ["create", "update"]
  }
}
```

The `url` field is set for active callbacks only. A null `url` identifies a passive callback.

If no callback has been set, the response will be as follows:

`GET /callback`

```json
{
  "url": null,
  "events": {}
}
```

### 1.2. Create callback

Creates a callback for the connection.

<CallSummaryTable
  endpoint="POST /callback"
  accessLevel="location, account"
/>

#### Request parameters:

| Name     | Type   | Description                                                                                  |
| -------- | ------ | -------------------------------------------------------------------------------------------- |
| `url`    | string | The URL called when an event occurs.                                                         |
| `events` | map    | A map with the keys being _resource type_ and the values being the *event type*s to monitor. |

- _resource type_ is one of: `order`, `customer`, `location`, `catalog` and `inventory`.
- _event type_ is one of: `create`, `update`, `patch` and `upload`.

The allowed combinations are:

- `order.create`
- `order.update`
- `customer.create`
- `customer.update`
- `location.update`
- `catalog.upload`
- `inventory.patch`
- `inventory.update`

#### Example request:

`POST /callback`

```json
{
  "url": "https://myapp.com/hubrise_callback",
  "events": {
    "order": ["create"],
    "customer": ["create"]
  }
}
```

### 1.3. Delete callback

Unregister the connection's callback.

Events will not be triggered and the callback URL will not be called any more.

<CallSummaryTable
  endpoint="DELETE /callback"
  accessLevel="location, account"
/>

## 2. Events

### 2.1. Retrieve event

Returns the event.

<CallSummaryTable
  endpoint="GET /callback/events/:event_id"
  accessLevel="location, account"
/>

#### Example request:

`GET /callback/events/ks8f6`

```json
{
  "id": "ks8f6",
  "created_at": "2017-06-25T11:43:51Z",
  "resource_type": "customer",
  "event_type": "update",
  "customer_list_id": "sdakm",
  "customer_id": "ve343",
  "previous_state": {
    "id": "sdakm",
    "first_name": "Thomas"
    ...
  },
  "new_state": {
    "id": "sdakm",
    "first_name": "Tomas"
    ...
  }
}
```

The returned event contains:

- the time of the resource modification
- the resource and event types
- the ids of the affected resource and the parent resources
- a copy of the state of the resource before and after the change (for update and create), or the difference between both states (for patch)

### 2.2. List events

Returns the events that have not been acknowledged (ie deleted).

<CallSummaryTable
  endpoint="GET /callback/events"
  accessLevel="location, account"
/>

#### Example request:

`GET /callback/events`

```json
[
  {
    "id": "ks8f6",
    "created_at": "2017-06-25T11:43:51Z",
    "resource_type": "customer",
    "event_type": "update",
    "customer_list_id": "sdakm",
    "customer_id": "ve343"
  },
  ...
]
```

The previous and new states are not included to save bandwidth. Individual retrieve operations must be performed if states are needed.

### 2.3. Delete event

Deletes (ie acknowledges) a callback event

A passive callback should always delete events after retrieval or they will keep on being pulled by the [List events](#22-list-events) operation.

<CallSummaryTable
  endpoint="DELETE /callback/events/:event_id"
  accessLevel="location, account"
/>

#### Example request:

`DELETE /callback/events/ks8f6`
