---
title: General concepts
position: 1
layout: documentation
---

This chapter takes a close look at the API. If you're looking for a brief introduction, check our [Quick Start](/developers/quick-start) tutorial.

## 1. Endpoints

HubRise API is based on a REST protocol, where methods such as POST, GET, PATCH/PUT and DELETE let you create, retrieve, list, update and delete resources. Data is transmitted in the JSON format.

An **endpoint** is an API operation. It comprises a URL and HTTP method. Endpoints URLs are rooted at https://api.hubrise.com/v1.

Versions are included in the endpoints URLs for compatibility purposes. No breaking change will be made without changing the version, and old versions will be supported for a while.

Every API request must include an access token, which uniquely identifies the connection. The token is passed in the `X-Access-Token` header:

```http
GET https://api.hubrise.com/v1/location/orders
X-Access-Token: [your_access_token]
```

Access tokens are acquired via OAuth 2.0. See [Authentication](/developers/authentication).

**Note**: further in this documentation, the root part of the request URLs will be omitted. In the example above, we would simply use: _GET /location/orders_

## 2. Pagination

Index endpoints (eg `GET /location/orders`) paginate the results. A maximum of 100 results are returned.

If the results cannot be returned in a single response, the endpoint returns the first set of results, along with a `X-Cursor-Next` response header. To get the next set of results, a new request including the previously returned header must be made. Repeat until no `X-Cursor-Next` header is sent back, which indicates that the last set has been returned.

Every index endpoint accepts 2 optional parameters:

- `count`: the maximum number of results to return per request. The default (and maximum) value is 100. Decrease this value if needed.

- `cursor`: the next subset of results to return. Must be set to the value received in the previous `X-Cursor-Next` response header to iterate through the results. If this parameter is omitted, the first set of results is returned.

### Example for a request returning 150 results:

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

## 3. Rate limiting

If a connection makes too many requests in a short time window, HubRise will return a `429` (Too Many Requests) HTTP status code.

A connection is limited to 500 requests per 60-second window.

## 4. Overriding HTTP method

Some HTTP clients can only send GET and POST requests.

To increase accessibility to these limited clients, the HTTP method can be overridden by setting the `X-Http-Method-Override` header in a POST request:

```http
POST /location/orders/sd89mm
Headers: X-Http-Method-Override=PUT
```

This parameter is **not** accepted in a GET request, since a GET request should not change the state of a resource.

## 5. Common data types

### Monetary value

A number with 2 decimal digits, followed by a space and the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency name. Can be preceded by a `-` sign for negative amounts.

Examples:

- `8.90 EUR`
- `-0.05 GBP`

### Date/time

Encoded using the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601). A date/time passed to the API is assumed to be in the location's timezone, unless otherwise specified. The API returns times in the local timezone, with the timezone explicitly specified.

#### Examples:

- Explicit timezone: `2017-08-20T06:42:46+02:00`
- Assume location's timezone: `2017-08-20T06:42:46`

### Service type

Can be one of `delivery`, `collection` or `eat_in`.

## 6. HTTP status codes

The API returns appropriate [HTTP status codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) for every request.

| Code  | Name                   | Description                                                                                                |
| ----- | ---------------------- | ---------------------------------------------------------------------------------------------------------- |
| `200` | OK                     | All Good!                                                                                                  |
| `304` | Not Modified           | There was no new data to return                                                                            |
| `400` | Bad Request            | The request was invalid or cannot be otherwise served. An accompanying error message will explain further. |
| `401` | Unauthorized           | Authentication credentials were missing or incorrect.                                                      |
| `403` | Forbidden              | The request is understood, but it has been refused or access is not allowed.                               |
| `404` | Not Found              | The URI requested is invalid or the requested resource does not exist.                                     |
| `415` | Unsupported Media Type | The provided Content-Type is not supported.                                                                |
| `429` | Too many requests      | You have reached the rate limit for the resource.                                                          |
| `500` | Internal Error         | Something is broken. The HubRise team has been notified and is investigating.                              |

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
