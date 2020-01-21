---
title: Quick Start
position: 1
layout: documentation
meta:
  title:
  description:
---

## 1. Setting up an OAuth client

First of all, you need to create an account. It's free and it takes a minute. Once you are there, click on "Developer", and create an OAuth 2.0 client. Download the client secret JSON, which should look like:

```json
{
  "client_id": "459691768564.clients.hubrise.com",
  "client_secret": "c9ba1790673172ddcdee071c551d98dee4d0d6fc696c"
}
```

The client's **id** and **secret** uniquely identify your application. A client can access several HubRise accounts, so you will generally need to create only one client.

## 2. Requesting authorization

To access a HubRise account, you need the account owner approval. Open a web browser with this URL:

```http
https://manager.hubrise.com/oauth2/v1/authorize?
  redirect_uri=https://myapp.com/oauth_callback&
  client_id=459691768564.clients.hubrise.com&
  scope=location[orders.write,customer_list.write,catalog.read]
```

If you try it, don't forget to encode the query parameters. Or just copy this link and replace the `client_id` with yours.

HubRise authenticates the user, prompts him to choose the location, account, catalog and customer list he's willing to connect, and obtain consent to access the requested scope. If the user is not logged in, he will be able to sign in or create an account.

HubRise server sends the result of the authorization to the provided URL. If the user approves the request, then the response contains an authorization code that looks like:

```http
https://myapp.com/oauth_callback?code=ffae0047c4d6b9e02f95e76a3f6a32...
```

Now let's see how we get an access token from the returned code.
