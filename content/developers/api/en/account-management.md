---
title: Account Management
position: 3
layout: documentation
meta:
  title: Account Management | API | HubRise
  description:
---

## 1. Location

### 1.1 Retrieve Location

Get location details.

<CallSummaryTable
  endpoint="GET /locations/:id"
  shortEndpoint="GET /location (location only)"
  accessLevel="location, account"
/>

#### Example request:

`GET /locations/3r4s3-1`:

```json
{
  "id": "3r4s3-1",
  "name": "Paris",
  "account": {
    "id": "3r4s3",
    "name": "Bella Pizza",
    "currency": "EUR"
  },
  "address": "13 rue du Chant des Oiseaux",
  "postal_code": "75003",
  "city": "Paris",
  "country": "FR",
  "timezone": {
    "name": "Europe/Paris",
    "offset": 7200
  },
  "custom_fields": {
    "latitude": "48.8697246",
    "longitude": "2.3061506"
  }
}
```

### 1.2 Update Location

Update the `custom_fields` of the location

<CallSummaryTable
  endpoint="PATCH /locations/:id"
  shortEndpoint="PATCH /location (location only)"
  accessLevel="location, account"
/>

#### Example request:

`PATCH /locations/3r4s3-1`:

```json
{
  "custom_fields": {
    "latitude": 48.8526388,
    "longitude": 2.3042135
  }
}
```

### 1.3 List Locations

Returns the locations of the account.

<CallSummaryTable
  endpoint="GET /locations/"
  accessLevel="account"
/>

#### Example request:

`GET /locations`:

```json
[
  {
    "id": "3r4s3-1",
    "name": "Paris",
    "account": {
      "id": "3r4s3",
      "name": "Bella Pizza",
      "currency": "EUR"
    }
    ...
  }
  ...
]
```

## 2. Account

### 2.1 Retrieve Account

Get account details.

<CallSummaryTable
  endpoint="GET /accounts/:id"
  shortEndpoint="GET /account"
  accessLevel="account"
/>

#### Example request:

`GET /accounts/3r4s3`:

```json
{
  "id": "3r4s3",
  "name": "Mister Pizza",
  "currency": "EUR"
}
```

## 3. User

### 3.1 Retrieve User

Get user information.

<CallSummaryTable
  endpoint="GET /user"
  accessLevel="profile, profile_with_email"
/>

#### Example request:

`GET /user`:

```json
{
  "id": "v6ap7",
  "first_name": "Tom",
  "last_name": "Jones",
  "email": "tom.jones@dummy-mail.org",
  "timezone": {
    "name": "Europe/Paris",
    "offset": 7200
  },
  "locales": ["en-GB", "fr-FR"]
}
```

The `email` field is included only if the access level is `profile_with_email`.
