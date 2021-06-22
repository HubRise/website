---
title: General Concepts
position: 1
layout: documentation
meta:
  title: General Concepts | API | HubRise
  description:
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

## 3. Rate Limiting

If a connection makes too many requests over a defined time window, HubRise will return a `429` (Too Many Requests) HTTP status code.

A connection should not exceed any of the following limits:

- 500 requests over a 1-minute window
- 2,500 requests over a 1-hour window
- 10,000 requests over a 1-day window

There is an additional limit of 10 "heavy" requests per minute, applying to high load queries such as `GET /catalogs/:id`, `GET /orders` or `GET /customer_lists/:id/customers`. Make sure to throttle requests if you need to retrieve many orders or customers in a row.

Time windows start at a round minute, hour, and day respectively. For example, 1-hour windows begin at the start of an hour. So if a connection has used its hourly limit by 10:35, it will remain throttled until the start of the next hour, ie 11:00.

## 4. Overriding HTTP Method

Some HTTP clients can only send GET and POST requests.

To increase accessibility to these limited clients, the HTTP method can be overridden by setting the `X-Http-Method-Override` header in a POST request:

```http
POST /location/orders/sd89mm
Headers: X-Http-Method-Override=PUT
```

This parameter is **not** accepted in a GET request, since a GET request should not change the state of a resource.

## 5. Common Data Types

### Monetary Values

A number with 2 decimal digits, followed by a space and the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency name. Can be preceded by a `-` sign for negative amounts.

#### Examples:

- `8.90 EUR`
- `-0.05 GBP`

### Decimal Values

HubRise represent decimal values as **strings** to eliminate any ambiguity and loss of precision during the parsing.

Most JSON implementations parse decimal numbers (eg `1.5`) as floating point numbers, primarily because of the lack of decimal native type in their programming language. However in HubRise, decimal numbers are always precise numeric values and using floating point numbers would result in abnormalities such as quantities being handled as `1.000000001`.

In order to enforce the use of a "precise" decimal type and to avoid the default floating point number conversion by JSON parsers, decimal values are encoded as strings in HubRise. These strings should be handled using either a decimal built-in type or a fixed point number library (such as `bigdecimal` in Ruby) and never converted to floating point numbers.

#### Examples:

- `"1"`
- `"-2.5"`

### Dates and Times

Dates and times are encoded in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601).

Locations have a default timezone, which can be configured from the back office. HubRise converts times to the location default timezone, for all resources attached to a location (eg orders).

#### Examples:

- Date: `2020-08-20`
- Time: `2020-08-20T06:42:46+02:00`

### Days of the Week

A `DOW` (= "Days of the Week") value designates specific days of the week.

It is a string of 7 characters, where each character represents a day of the week, from Monday (`1`) to Sunday (`7`). When the digit is replaced by `-`, the particular day is excluded from the list.

#### Examples:

- `1234567`: every day of the week
- `12----7`: Monday, Tuesday and Sunday

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
