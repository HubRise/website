---
title: Authentication
position: 4
layout: documentation
meta:
  title:
  description:
---

## 1. Introduction to OAuth 2.0

Before your application can access HubRise data, the user needs to give your application permission. The HubRise API uses the OAuth 2.0 protocol for this purpose. This is the same method that services like Twitter and Facebook use to let applications post on your behalf.

The OAuth 2.0 flow is a series of interactions between:

- A **resource owner**: the HubRise user
- A **client**: your application, ie a program or a website making protected requests on behalf of the user
- An **authorisation server**: HubRise OAuth API, which issues an access token to the client. It is hosted at: http://manager.hubrise.com/oauth2/v1
- A **resource server**: HubRise API, which provides access your user data. It is hosted at: http://api.hubrise.com/v1

Although it seems complicated at first, OAuth actually makes things simpler for both you and your users, and it dramatically reduces security risks for everyone:

- Your application doesn't need to store your users' passwords
- You can pick which permissions to request from a user. For example, users can grant your application access to their order list, without also needing to grant access to their customer list.
- Users can easily revoke the access they grant a potentially insecure application, without needing to reset their password.

## 2. OAuth scopes

A _scope_ controls the set of resources an access token can read and write. Users can see the scope before granting access to an application. It's recommended for application developers to limit the scope to what is strictly necessary to avoid being denied access.

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

- `profile_with_email`: access to the user profile including email
- `location[orders.write,customer_list.write]`: allows creating orders and customers for a chosen location
- `account[customer_list.read],profile`: access to the user profile and to the customers from a chosen customer list

## 3. Web application workflow

### 3.1. Request authorisation

When your application needs to access a user's data, it should redirect him to HubRise's OAuth server:

```http
GET https://manager.hubrise.com/oauth2/v1/authorize?redirect_uri=https://<<YOUR DOMAIN HERE>>/oauth_callback&client_id=459691768564.clients.hubrise.com&scope=location[orders.write,customer_list.write,catalog.read] HTTP/1.1
```

HubRise authenticates the user, prompts him to choose the location, account, catalog and customer list he's willing to connect, and obtain consent to access the requested scope. If the user is not logged in, he will be able to sign in or create an account.

HubRise server sends the result of the authorisation to the provided URL. If the user approves the request, then the response contains an authorisation code that looks like:

```http
https://<<YOUR DOMAIN HERE>>/oauth_callback?code=ffae0047c4d6b9e02f95e76a3f6a32...
```

Once issued, the authorisation code is valid for 10 minutes.

If the authorisation fails, HubRise calls the URL with an error message passed as a parameter:

```http
https://<<YOUR DOMAIN HERE>>/oauth_callback?error=access_denied
```

Or:

```http
https://<<YOUR DOMAIN HERE>>/oauth_callback?error=expired
```

### 3.2. Get an access token

With the authorisation code obtained, your application can now formally establish a connection. This step is necessary to get an access token and start sending requests to the API. 

```http
POST https://manager.hubrise.com/oauth2/v1/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded
---
code=ffae0047c4d6b9e02f95e76a3f&
client_id=407408718192.clients.hubrise.com&
client_secret=*********
```

To which HubRise responds:

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

The response includes an `access_token`, which allows you to access your user's data. You must save this token, and include it in all API requests.

The response also returns the ids and names of the resources your connection has access to. You should also save these identifiers and make sure your user can easily access them. They are a convenient way for the user to check that the connection is bound to the right resources. 

### 3.3. Connect to the API

Now that your application has an access token, it can call the API on behalf of the user. Calls to the API must include a `X-Access-Token` HTTP header.

For example, here is a call to get the location details:

```http
GET https://api.hubrise.com/v1/location HTTP/1.1
X-Access-Token: b9922a78d3ffab6b95e9d72e88
```

Note that you don't need to specify the location's id, because your connection is already bound to one location.

## 4. Installed app workflow

This workflow is for native apps, as opposed to web apps. Non-SaaS EPOS systems should use this workflow.

The main difference with the Web app workflow is that the authorisation code is displayed in the browser, and the user needs to copy/paste the code into the application.

You will need to embed the client secret into your application, which obviously means that it is not treated as a secret in this context.

The authorisation request is made by opening a browser with this URL:

```http
https://manager.hubrise.com/oauth2/v1/authorize?
  redirect_uri=urn:ietf:wg:oauth:2.0:oob&
  client_id=407408718192.clients.hubrise.com&
  scope=location[orders.write,customer_list.write,catalog.read]
```

The special value of `redirect_uri` tells HubRise's OAuth server that the code should be displayed in the browser, rather than being sent to a callback URL.

If the user grants access to your application, the result will be a dialog where the user will be instructed to copy/paste the indicated authorisation code into your application. Your application needs to provide a field for the user to paste the code. From there, your application can request an access token in the same way as a web application.

## 5. Connection reuse

The `access_token` returned by `GET /oauth2/v1/token` is specific to a client and a location. Reauthorizing the same location several times always
returns the same initial token.

**Important**: if a different catalog (or customer list) is selected when reauthorizing the location, the token will no
longer allow access to the former catalog (or customer list) when the new authorisation completes.

You can bypass this behaviour and force a new token to be issued by passing a `device_id` parameter when redirecting the
user to the authorisation page, eg:

```http
GET https://manager.hubrise.com/oauth2/v1/authorize?device_id=100&redirect_uri=https://YOUR-DOMAIN-HERE.com/oauth_callback&client_id=459691768564.clients.hubrise.com&scope=location[orders.write,customer_list.write,catalog.read] HTTP/1.1
```

If the provided `device_id` has never been authorised for the location, a new access token is returned. Otherwise,
the access token previously associated with this `device_id` is returned.
