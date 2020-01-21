---
title: Authentication
position: 2
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
- An **authorization server**: Hubrise OAuth API, which issues an access token to the client. It is hosted at: http://manager.hubrise.com/oauth2/v1
- A **resource server**: Hubrise API, which provides access your user data. It is hosted at: http://api.hubrise.com/v1

Although it seems complicated at first, OAuth actually makes things simpler for both you and your users, and it dramatically reduces security risks for everyone:

- Your application doesn't need to store your users' passwords
- You can pick which permissions to request from a user. For example, users can grant your application access to their order list, without also needing to grant access to their customer list.
- Users can easily revoke the access they grant a potentially insecure application, without needing to reset their password.

## 2. OAuth scopes

A _scope_ controls the set of resources an access token is able to retrieve or modify. When a user is prompted to authorize a client, he will be able to review the scope requested by the application before allowing access. Therefore it's recommended to require a carefully chosen scope, to avoid being rejected by the user.

A scope is a commma-separated list of:

- 0 or 1 **access-level set of permissions**
- and **general permissions** (eg. `profile`, or `profile_with_email`)

An **access-level set of permissions** is made of:

- an access-level keyword: `location` or `account`
- followed by a comma separated list of permissions between square brackets. Each permission is made of:
  - a resource: `orders`, `customer_list`, `all_customer_lists`, `catalog` or `all_catalogs`
  - a `.` character
  - access rights: `read` or `write`

#### Examples of valid scopes:

- `profile_with_email`: access to the user profile including email
- `location[orders.write,customer_list.write]`: allows to create orders and customers for a chosen location
- `account[customer_list.read],profile`: access to the user profile and to the customers from a chosen customer list

## 3. Web application workflow

### 3.1. Request authorization

When your application needs to access a user's data, it should redirect him to HubRise's OAuth server:

```http
GET https://manager.hubrise.com/oauth2/v1/authorize?redirect_uri=https://myapp.com/oauth_callback&client_id=459691768564.clients.hubrise.com&scope=location[orders.write,customer_list.write,catalog.read] HTTP/1.1
```

HubRise authenticates the user, prompts him to choose the location, account, catalog and customer list he's willing to connect, and obtain consent to access the requested scope. If the user is not logged in, he will be able to sign in or create an account.

HubRise server sends the result of the authorization to the provided URL. If the user approves the request, then the response contains an authorization code that looks like:

```http
https://myapp.com/oauth_callback?code=ffae0047c4d6b9e02f95e76a3f6a32...
```

If the authorization fails, then the URL is called with an error message:

```http
https://myapp.com/oauth_callback?error=access_denied
```

Or:

```http
https://myapp.com/oauth_callback?error=expired
```

### 3.2. Get an access token

After receiving an authorization code, your application can retrieve an access token:

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
  "location_id": "3r4s3-1",
  "catalog_id": "psmlf",
  "customer_list_id": "xab66"
}
```

### 3.3. Connect to the API

Now that your application has an access token, it can call the API on behalf of the user. Calls to the API need to include a `X-Access-Token` HTTP header.

Here is a call to get location details:

```http
GET https://api.hubrise.com/v1/location HTTP/1.1
X-Access-Token: b9922a78d3ffab6b95e9d72e88
```

## 4. Installed app workflow

This workflow is for native apps, as opposed to web apps. Non-SaaS POS systems should use this workflow.

The main difference with the Web app workflow is that the authorization code is displayed in the browser, and the user needs to copy/paste the code into the application.

You will need to embed the client secret into your application, which obviously means that it is not treated as a secret in this context.

The authorization request is made by opening a browser with this URL:

```http
https://manager.hubrise.com/oauth2/v1/authorize?
  redirect_uri=urn:ietf:wg:oauth:2.0:oob&
  client_id=407408718192.clients.hubrise.com&
  scope=location[orders.write,customer_list.write,catalog.read]
```

The special value of `redirect_uri` tells HubRise's OAuth server that the code should be displayed in the browser, rather than being sent to a callback URL.

If the user grants access to your application, the result will be a dialog where the user will be instructed to copy/paste the indicated authorization code into your application. Your application needs to provide a field for the user to paste the code. From there, your application can request an access token in the same way as a web application.
