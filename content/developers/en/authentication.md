---
title: Authentication
position: 4
layout: documentation
meta:
  title: API Authentication | HubRise
  description:
---

## 1. Introduction to OAuth 2.0

Before your application can access data on HubRise, you need to request your users' permission. The HubRise API relies on the OAuth 2.0 protocol for this purpose.

The OAuth 2.0 flow is a series of interactions between:

- A **resource owner**: the HubRise user.
- A **client**: your application, which makes requests on behalf of the user.
- An **authorisation server**: the HubRise OAuth API, which issues an access token to the client. Hosted on: http://manager.hubrise.com/oauth2/v1.
- A **resource server**: the HubRise API, which provides access to your users' data. Hosted on: http://api.hubrise.com/v1.

Although it seems complicated at first, OAuth actually makes things simpler for both you and your users, and it dramatically reduces security risks for everyone:

- Your application doesn't need to store your users' passwords.
- Your application can only access the data that it needs. For example, your application can request access to orders but not catalogs. Or it can request read-only access.
- Users can easily revoke access to a potentially insecure or compromised application, without resetting their password.

## 2. OAuth scopes

A _scope_ controls the set of resources an application has access to. Users can see the scope before granting access to an application. The good practice is to limit your application's scope to the minimum it needs: not only does this reduce the impact of a potential security breach, it also makes your users more comfortable authorising your application.

A scope is a comma-separated list of:

- 0 or 1 **access-level set of permissions**
- And **general permissions** (eg. `profile`, or `profile_with_email`)

An **access-level set of permissions** is made of:

- An access-level keyword: `location` or `account`
- Followed by a comma separated list of permissions between square brackets. Each permission consists of:
  - A resource: `orders`, `customer_list`, `all_customer_lists`, `catalog`, or `all_catalogs`
  - A `.` character
  - Access rights: `read` or `write`

#### Examples of valid scopes:

- `profile_with_email`: your application can access the profile of the user, including their email.
- `location[orders.write,customer_list.write]`: your application can create orders and customers in a chosen location.
- `account[customer_list.read],profile`: your application can access the user profile and view all customers from a chosen customer list.

## 3. Web application workflow

### 3.1. Request authorisation

To get access to a user's data, your application should redirect the user to this page:

```http
https://manager.hubrise.com/oauth2/v1/authorize?
  redirect_uri=https://<<YOUR-DOMAIN-HERE>>/oauth_callback&
  client_id=<<YOUR-CLIENT-ID>>&
  scope=location[orders.write,customer_list.write,catalog.read]&
  country=FR&
  account_name=Aux+Délices&
  location_name=Paris
```

When the page loads, HubRise:

- Authenticates the user. Users can log in if they already have a HubRise account. If they don't, they can create an account in a few simple steps: `country`, `account_name` and `location_name` parameters are then used to prefill the signup form.
- Prompts the user to select the location, catalog and/or customer list to connect.
- Requests user approval to access the data.

If the user approves the request, HubRise calls the `redirect_uri` URL you specified, and includes the authorisation code in the `code` query parameter:

```http
https://<<YOUR-DOMAIN-HERE>>/oauth_callback?code=ffae0047c4d6b9e02f95e76a3f6a32
```

---

**IMPORTANT NOTE**: authorisation codes are one-use throw-away codes that expire after 10 minutes. They are used to generate API tokens, which do not expire. The next section explains how to get an API token from an authorisation code.

---

If the authorisation fails, HubRise calls the `redirect_uri` URL, with an error message in the `error` query parameter:

```http
https://<<YOUR-DOMAIN-HERE>>/oauth_callback?error=access_denied
```

### 3.2. Get an access token

Once your application gets an authorisation code, it can establish a connection. This step is necessary to get an access token and start sending requests to the API.

To get the access token, send the `POST` request below, and include the authorisation code, client id and client secret in the request body:

```http
POST https://manager.hubrise.com/oauth2/v1/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded
---
code=ffae0047c4d6b9e02f95e76a3f&
client_id=407408718192.clients.hubrise.com&
client_secret=*********
```

If the request succeeds, the response contains the access token. You must save this token, as you will need to include it in all further requests to the API.

The response also contains the ids and names of the resources your application has access to. You should save these identifiers and make them easily accessible from your user interface. They are a convenient way for users to confirm that their connection is bound to the right resources.

#### Example of response:

```json
{
  "access_token": "b9922a78d3ffab6b95e9d72e88",
  "account_id": "3r4s3",
  "location_id": "3r4s3-1",
  "catalog_id": "psmlf",
  "customer_list_id": "xab66",
  "account_name": "Bella Pizza",
  "location_name": "Paris",
  "catalog_name": "Bella Pizza",
  "customer_list_name": "Bella Pizza"
}
```

Note that the request will fail if the authorisation code has expired, or has already been used.

### 3.3. Connect to the API

With the access token, your application can now call the API on behalf of the user. Calls to the API must include a `X-Access-Token` HTTP header.

For example, you can use this request to get location details:

```http
GET https://api.hubrise.com/v1/location HTTP/1.1
X-Access-Token: b9922a78d3ffab6b95e9d72e88
```

Note that you don't need to specify a location's id, because your connection is bound to a single location.

## 4. Installed app workflow

The preceding workflow is not convenient for installed apps, as they generally cannot expose a callback URL to the outside.

We offer an alternative workflow suitable for these apps. The main difference is that the authorisation code appears in the browser, and the user needs to copy/paste the code into your application.

To implement this workflow, simply redirect users to the following page in their default browser:

```http
https://manager.hubrise.com/oauth2/v1/authorize?
  redirect_uri=urn:ietf:wg:oauth:2.0:oob&
  client_id=<<YOUR-CLIENT-ID>>&
  scope=location[orders.write,customer_list.write,catalog.read]&
  country=FR&
  account_name=Aux+Délices&
  location_name=Paris
```

Here, `redirect_uri` contains a special `urn:ietf:wg:oauth:2.0:oob` value, that tells HubRise to display the authorisation code in the browser, rather than sending the code to a callback URL.

After granting access, the user is redirected to a page where the authorisation code appears. Your application must provide an input field for the user to type or paste the code. Your application can then use the code to request an access token, in the same way as a web application.

Note that you will need to ship your client secret within your application binary to implement this workflow.

## 5. Connection reuse

The `access_token` returned by `GET /oauth2/v1/token` is specific to a given client and a given location. Re-authorising the same location with the same client always returns the same token.

---

**IMPORTANT NOTE**: if a different catalog (or customer list) is selected when re-authorising the location, the token will no
longer allow access to the former catalog (or customer list) when the new authorisation completes.

---

You can bypass this behaviour and force a new token to be issued by passing a `device_id` parameter when redirecting the
user to the authorisation page, eg:

```http
GET https://manager.hubrise.com/oauth2/v1/authorize?device_id=100&redirect_uri=https://YOUR-DOMAIN-HERE.com/oauth_callback&client_id=459691768564.clients.hubrise.com&scope=location[orders.write,customer_list.write,catalog.read] HTTP/1.1
```

If the provided `device_id` has never been authorised for the location, a new access token is returned. Otherwise,
the access token previously associated with this `device_id` is returned.
