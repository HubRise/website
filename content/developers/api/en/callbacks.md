---
title: Callbacks
path_override: callbacks
position: 8
layout: documentation
meta:
  title: Callbacks | API | HubRise
  description:
---

A **callback** notifies a client of changes that occurred on a set of resources. It can be used to monitor orders, customers, locations or catalogs.

---

**IMPORTANT NOTE**: A client does not receive notifications for the events it generated. If you are testing callbacks, you need to use a separate client to trigger events.

---

There are 2 types of callbacks:

- An **active callback** is a URL set up on your server which HubRise calls every time an event occurs. If the URL is not immediately available, HubRise makes a couple more attempts a few minutes later.

- A **passive callback** records events but does not send them. The client needs to poll HubRise regularly (every minute or so) to retrieve new events.

### Active Callbacks

Active callbacks receive a POST HTTP request each time an event occurs.

The JSON body of the request includes the resource and event types, the id of the affected resource, the timestamp of the event, and in some cases, the previous and new values of the resource. The JSON is identical to the response of the `GET /callback/events/:id` request, and is described in greater detail in the [Retrieve Event](#retrieve-event) section.

<details>

<summary>Example of a customer update event</summary>

```json
POST https://your-domain.com/hubrise_callback
Content-Type: application/json
X-HubRise-Hmac-SHA256: e6637f2720b9804f2a14913ce41e0fa53edb1136a4bd15c5ba31b8ad62bad0e5

{
  "id": "ks8f6",
  "resource_type": "customer",
  "event_type": "update",
  "created_at": "2020-06-25T11:43:51+02:00",
  "customer_id": "ve343",
  "customer_list_id": "sdakm",
  "previous_state": {
    "id": "jdj9v",
    "email": "tom@dummy-mail.org",
    ...
  },
  "new_state": {
    "id": "jdj9v",
    "email": "jim@dummy-mail.org",
    ...
  },
}
```

</details>

To acknowledge the reception of an event, your callback must return an HTTP code in the `200-499` range, within 20 seconds. HubRise immediately deletes acknowledged events.

#### Retries

If the callback returns an invalid response (like a `5xx` HTTP code) or takes longer than 20 seconds to respond, HubRise will try to resend the event. This will continue until the event is successfully sent or until it has been tried 6 times. The wait time between these retries starts at 1 minute and doubles after each attempt, up to a maximum of 32 minutes. During this period, unacknowledged events remain accessible through `GET /callback/events`.

If the callback fails to acknowledge the event after 6 retries, HubRise deletes the event.

#### Event Signatures

To check the authenticity of an event received by your callback, in other words to make sure that it comes from HubRise, you can compute the signature of the event (see code below) and compare it with the `X-HubRise-Hmac-SHA256` header of the event. If they are different, simply return an error and ignore the event.

To compute the event signature in Ruby:

```ruby
require "openssl"

client_secret = "your_client_secret"
payload = request.raw_body

digest = OpenSSL::Digest.new("sha256")
calculated_hmac = OpenSSL::HMAC.hexdigest(digest, client_secret, payload)
```

The same script in Javascript, using Node's `crypto` lib:

```javascript
import { createHmac } from "crypto"

client_secret = "your_client_secret"
payload = req.rawBody

const calculatedHmac = createHmac("sha256", client_secret).update(payload).digest("hex")
```

### Passive Callbacks

Passive callbacks are a fallback mechanism for clients that cannot set up an active callback. They record events but do not send them. The client needs to poll HubRise regularly to retrieve new events.

The client runs the following logic at regular intervals:

- Call `GET /callback/events` to retrieve the list of events that occurred since the last call.
- For each event in the list:
  - Process the event.
  - Delete it by calling `DELETE /callback/events/:id`.

The interval between calls should be no less than 30 seconds, otherwise the connection may reach its daily [API rate limit](/developers/api/general-concepts#rate-limiting) before the end of the day.

## 1. Callbacks {#callbacks}

A callback is specific to a connection. A connection can only have one callback.

### 1.1. Retrieve Callback

Returns the connection's callback details, including the URL and the types of events the callback listens to.

<CallSummaryTable endpoint="GET /callback" accessLevel="location, account" />

##### Example request:

`GET /callback`

```json
{
  "url": "https://<<YOUR DOMAIN HERE>>/hubrise_callback",
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

### 1.2. Create or Update Callback

Creates a callback if none exists, replace the existing callback otherwise.

<CallSummaryTable endpoint="POST /callback" accessLevel="location, account" />

##### Request parameters:

| Name     | Type   | Description                                                                                  |
| -------- | ------ | -------------------------------------------------------------------------------------------- |
| `url`    | string | The URL called when an event occurs. Leave it null for a passive callback.                   |
| `events` | map    | A map with the keys being _resource type_ and the values being the *event type*s to monitor. |

- _resource type_ is one of: `catalog`, `customer`, `delivery`, `inventory`, `location` and `order`.
- _event type_ is one of: `create`, `patch` and `update`.

The allowed combinations of resource and event types are:

- `catalog.create`
- `catalog.update`
- `customer.create`
- `customer.update`
- `delivery.create`
- `delivery.update`
- `inventory.patch`
- `inventory.update`
- `location.update`
- `order.create`
- `order.update`

##### Example request:

`POST /callback`

```json
{
  "url": "https://<<YOUR DOMAIN HERE>>/hubrise_callback",
  "events": {
    "order": ["create"],
    "customer": ["create"]
  }
}
```

### 1.3. Delete Callback

Unregister the connection's callback.

HubRise will no longer trigger events or call the callback URL.

<CallSummaryTable endpoint="DELETE /callback" accessLevel="location, account" />

## 2. Events {#events}

### 2.1. Retrieve Event {#retrieve-event}

Returns an event by its id.

<CallSummaryTable endpoint="GET /callback/events/:event_id" accessLevel="location, account" />

##### Example request:

`GET /callback/events/ks8f6`

```json
{
  "id": "ks8f6",
  "resource_type": "customer",
  "event_type": "update",
  "created_at": "2020-06-25T11:43:51+02:00",
  "customer_id": "ve343",
  "customer_list_id": "sdakm",
  "previous_state": {
    "first_name": "Thomas",
    ...
  },
  "new_state": {
    "first_name": "Tom",
    ...
  }
}
```

The returned event contains:

- The id of the event.
- The resource type, for example: `order` or `customer`.
- The event type, for example: `create`.
- The time when the resource modification occurred.
- The ids of the affected resource and its parent resources.
- The state of the resource, before and/or the modification, when applicable.

The state(s) of the resource included in the event depends on the resource and the event types, due to semantic and performance reasons:

- The `new_state` field is only present for `create` and `update` event types.
- The `previous_state` field is only present for `update` and `delete` event types.
- Catalog events contain no state fields, for any event type.
- Inventory events only contain a state field for `patch` event type. In this case, the field is named `state_change` and it contains the list of changes.

When an event affects a catalog or an inventory, you will need to send a `GET` request to the HubRise API to retrieve the full state of the resource.

### 2.2. List Events {#list-events}

Returns the events that have not been acknowledged (ie deleted).

<CallSummaryTable endpoint="GET /callback/events" accessLevel="location, account" />

##### Example request:

`GET /callback/events`

```json
[
  {
    "id": "ks8f6",
    "created_at": "2020-06-25T11:43:51+02:00",
    "resource_type": "customer",
    "event_type": "update",
    "customer_list_id": "sdakm",
    "customer_id": "ve343"
  },
  ...
]
```

The previous and new states are not included to save bandwidth. Individual retrieve operations must be performed if states are needed.

### 2.3. Delete Event

Deletes (ie acknowledges) a callback event

A passive callback should always delete events after retrieval or they will keep on being pulled by the [List events](#list-events) operation.

<CallSummaryTable endpoint="DELETE /callback/events/:event_id" accessLevel="location, account" />

##### Example request:

`DELETE /callback/events/ks8f6`
