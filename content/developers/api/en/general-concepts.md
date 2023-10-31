---
title: General Concepts
path_override: general-concepts
position: 1
layout: documentation
meta:
  title: General Concepts | API | HubRise
  description:
---

This chapter takes a close look at the API. If you're looking for a brief introduction, check our [Quick Start](/developers/quick-start) tutorial.

## 1. Endpoints

HubRise API is based on REST. It uses **POST**, **GET**, **PATCH**, **PUT** and **DELETE** HTTP methods to create, retrieve, list, update and delete resources. Data is exchanged in JSON format.

An **endpoint** defines an API function, consisting of a URL and HTTP method. Endpoints URLs are rooted at `https://api.hubrise.com/v1`.

API versions are embedded in the endpoints URLs for compatibility purposes. Breaking changes will only occur with version updates, and older versions will remain supported for a while.

Each API call must include an access token, which uniquely identifies the connection. The token is passed in the `X-Access-Token` header:

```http
GET https://api.hubrise.com/v1/location/orders
X-Access-Token: [your_access_token]
```

Access tokens are generated via OAuth 2.0. For more details, see [Authentication](/developers/api/authentication).

In this documentation, URLs are abbreviated for clarity. For instance, `GET /location/orders` will be used instead of the full `GET https://api.hubrise.com/v1/location/orders`.

## 2. Pagination

Some endpoints like `GET /location/orders` return a collection of results. They are called **index endpoints**.

These endpoints paginate their results. Each response can contain up to 100 results. If there are more results available, the response will include the initial batch and an `X-Cursor-Next` header.

To retrieve the next batch of results, send a new request and include the previously returned cursor value in the `cursor` URL query parameter. Repeat until there is no cursor value in the response, which indicates that you have received the final batch.

All index endpoints accept two parameters:

- `count`: The maximum number of results to return per request. The default and maximum value is 100. Decrease this value if needed.
- `cursor`: The next batch of results to return. Must be set to the value received in the previous `X-Cursor-Next` response header to iterate through the results. If left unset, the first batch is returned.

##### Example of request with 150 results:

First request:

```http
GET /location/orders
->
Headers:
  X-Cursor-Next: cjkl44
Body:
  [
    // Orders 1-100 returned
    ...
  ]
```

Next request:

```http
GET /location/orders?cursor=cjkl44
->
Headers:
  None
Body:
  [
    // Orders 101-150 returned
    ...
  ]
```

## 3. Rate Limiting {#rate-limiting}

If a connection makes too many requests over a defined time window, HubRise will return a `429` (Too Many Requests) HTTP status code. This keeps HubRise performance consistent for all users.

A connection should not exceed any of the following limits:

- 500 requests over a 1-minute window
- 2,500 requests over a 1-hour window
- 10,000 requests over a 1-day window

There is an additional limit of 10 requests per minute that applies to high load queries such as `GET /catalogs/:id`, `GET /orders` or `GET /customer_lists/:id/customers`. Make sure to throttle your request speed if you need to retrieve many orders or customers in a row.

Time windows start at a round minute, hour, and day respectively. For example, 1-hour windows begin at the start of an hour. So if a connection has used its hourly limit by 10:35, it will remain throttled until the start of the next hour, ie 11:00.

If you need to send more requests, you may be doing something wrong! Contact us at integration@hubrise.com for advice.

## 4. Overriding HTTP Method

Some HTTP clients can only send GET and POST requests.

To increase accessibility to these limited clients, the HTTP method can be overridden by setting the `X-Http-Method-Override` header in a POST request:

```http
POST /location/orders/sd89mm
Headers: X-Http-Method-Override=PUT
```

This parameter is **not** accepted in a GET request, since a GET request should not change the state of a resource.

## 5. Common Data Types

### Monetary Values {#monetary-values}

A number with 2 decimal digits, followed by a space and the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency name. Can be preceded by a `-` sign for negative amounts.

##### Examples:

- `8.90 EUR`
- `-0.05 GBP`

### Decimal Values {#decimal-values}

HubRise represent decimal values as **strings** to eliminate any ambiguity and loss of precision during the parsing.

Most JSON implementations parse decimal numbers (eg `1.5`) as floating point numbers, primarily because of the lack of decimal native type in their programming language. However in HubRise, decimal numbers are always precise numeric values and using floating point numbers would result in abnormalities such as quantities being handled as `1.000000001`.

In order to enforce the use of a "precise" decimal type and to avoid the default floating point number conversion by JSON parsers, decimal values are encoded as strings in HubRise. These strings should be handled using either a decimal built-in type or a fixed point number library (such as `bigdecimal` in Ruby) and never converted to floating point numbers.

##### Examples:

- `"1"`
- `"-2.5"`

### Dates and Times {#dates-and-times}

Dates and times are encoded in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).

Locations have a default timezone, which can be configured from the back office. HubRise converts times to the location default timezone, for all resources attached to a location (eg orders).

##### Examples:

- Date: `2020-08-20`
- Time: `2020-08-20T06:42:46+02:00`

### Days of the Week {#days-of-the-week}

A `DOW` (= "Days of the Week") value designates specific days of the week.

It is a string of 7 characters, where each character represents a day of the week, from Monday (`1`) to Sunday (`7`). When the digit is replaced by `-`, the particular day is excluded from the list.

##### Examples:

- `1234567`: every day of the week
- `12----7`: Monday, Tuesday and Sunday

### Timezones {#timezones}

Timezones are encoded in this format:

```json
{
  "name": "Europe/Paris",
  "offset": 3600
}
```

The timezone `name` is encoded in [IANA Time Zone Database format](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones). For example, the timezone name for Paris is `Europe/Paris`.

The timezone `offset` is deprecated and will be removed in a future version of the API, as it does not provide information about daylight saving time.

## 6. HTTP Status Codes

The API returns appropriate [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for every request.

| Code  | Name                   | Description                                                                                                                               |
| ----- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `200` | OK                     | All Good!                                                                                                                                 |
| `304` | Not Modified           | There was no new data to return. This is not an error.                                                                                    |
| `400` | Bad Request            | The request was invalid or cannot be otherwise served. An accompanying error message will generally explain further.                      |
| `401` | Unauthorized           | Authentication credentials were missing or incorrect.                                                                                     |
| `403` | Forbidden              | The request is understood, but it has been refused or access is not allowed.                                                              |
| `404` | Not Found              | The requested URL is invalid or the requested resource does not exist.                                                                    |
| `415` | Unsupported Media Type | The Content-Type header of the request is not supported.                                                                                  |
| `422` | Unprocessable Entity   | The request syntax is correct but it could not be successfully completed. The requests needs to be modified before being attempted again. |
| `429` | Too many requests      | The rate limit of the user or organization has been reached.                                                                              |
| `500` | Internal Error         | The server encountered an unexpected error. The support team generally needs to be involved to investigate the error.                     |

## 7. Errors

HubRise returns comprehensive error messages when the request cannot be processed.

An error response looks like this:

```json
{
  "error_type": "routing_error"
}
```

The possible `error_type`s are:

- `unauthorized`
- `forbidden`
- `not_found`
- `unprocessable_entity`
- `unsupported_media_type`
- `too_many_requests`
- `internal_error`
- `routing_error`

The response may also include a field breakdown, like this:

```json
{
  "message": "Validation failed",
  "errors": [
    {
      "field": "price",
      "message": "'abc' is not a valid monetary amount"
    },
    ...
  ],
  "error_type": "unprocessable_entity"
}
```

## 8. Private Refs {#private-refs}

HubRise allows API clients to attach their own internal references to various objects, such as orders, order items, customers, and a few others. This can be convenient when clients need to link HubRise objects to their internal objects, but they cannot store HubRise ids.

A private ref is only visible to the client that set it. For example, let's assume client A assigns a private ref to an order:

**CLIENT A**: `PATCH /location/orders/sd89mm`

```json
{
  "private_ref": "6986"
}
```

When client A later retrieves the order, the `private_ref` is included in the response:

**CLIENT A**: `GET /location/orders/sd89mm`

##### Response:

```json
{
  "private_ref": "6986",
  "status": "new",
  ...
}
```

However, when client B retrieves that same order, no `private_ref` is included in the response:

**CLIENT B**: `GET /location/orders/sd89mm`

##### Response:

```json
{
  "private_ref": null,
  "status": "new",
  ...
}
```

Furthermore, client B can set its own private ref on this order, without affecting client A's private ref. They are indeed private!

HubRise indexes private refs efficiently, which allows clients to use private refs in lieu of ids in some endpoints:

**CLIENT A**: `GET /location/orders?private_ref=6986`

##### Response:

```json
[
  {
    "private_ref": "6986",
    "status": "new",
    ...
  }
]
```

## 9. CORS {#cors}

CORS (Cross-Origin Resource Sharing) is a mechanism that restricts the origins that can execute requests against a given API.

HubRise API and HubRise oAuth 2.0 server use different CORS policies:

- HubRise API allows requests to be sent from a browser, from any origin. This is done by setting the `Access-Control-Allow-Origin` header to `*`.
- HubRise oAuth 2.0 server enforces the stricter default CORS policy. As a result, you will not be able to create or revoke tokens from a browser. The rationale is that doing so would expose your client secret.

If you choose to send API requests from the user's browser rather from your server, this will give your users access to their personal access token. You may only do this if your page can only be accessed by trusted users. For security reasons, prefer to use a proxy server to hide the access token.
