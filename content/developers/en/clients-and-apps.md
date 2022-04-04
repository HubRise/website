# Clients and Apps

As a developer of Hubrise integration you can choose from two types of integrations: Client and App.
Client is a small brother of App with limited functionality but easier configuration. App is an enhanced version of Client that can be listed in the Hubrise App Store (currently requires a manual approval from Hubrise team).

The rule of thumb is: choose App if you are building a public integration that you'd like to share with other Hubrise users. And choose Client if your integration is specific to your own needs or you don't want to share it with others.

After creating App or Client you will get your unique client_id and client_secret that should be used in the OAuth flow [link](/developers/authentication#get-an-access-token).

Client configuration is minimal and only requires you to define the name.
On top of Client - App adds two settings "groups": App Listing Settings and App Connection Settings.

### App Listing Settings

These options are mostly related to how your App Listing appears in Hubrise App Store.
You can define multilingual summary, description and banner to help your users have the right expectations about your integration.

### App Connection Settings

These settings affect your integration "lifecycle" which can be broken down into 3 stages:

- Installation
- Usage
- Disconnection

#### Installation

When Hubrise user decides to install your App, after clicking the "Connect" button, we initiate the [Request Authotization OAuth flow](/developers/authentication#request-authorization) by redirecting him to the first OAuth step. To be able to do this we require you to define the following settings:

- `Account Scope`: is the [OAuth scope](/developers/authentication#oauth-scopes) that will be requested when a user installs the App for the whole Account (leave blank if your App operates on Location level only)
- `Location Scope`: is the [OAuth scope](/developers/authentication#oauth-scopes) that will be requested when a user installs the App for a specific Location (leave blank if you App operates on Account level only)
- `Connect URL`: this is the OAuth redirect_url. A user will be redirected to this URL once the OAuth Authorization is approved. We expect you to complete the OAuth flow by [exchanging oauth_code for oauth_token](/developers/authentication#get-an-access-token) once the user gets to this URL.

Note: after completing this process we suggest you to redirect the user to your App's dashboard. You should now have the user's token and he can start working with your App.

#### Usage

When the Installation Oauth flow is completed the App will appear in the "Connections" list of the Account/Location.

The user now can click the "Open" button to access your App's dashboard at any time. The value your put in `Open URL` should link a user to your dashboard. To identify that the App is already installed we append `app_instance_id`(see below) to the URL.

Note: this does not guarantee that the user is still authenticated on your side. Depending on the way you authenticate users you might want to initiate the OAuth flow again to get the access_token again for authentication purpose. Specifically for this use case we allow [Connection Reuse](/developers/authentication/#connection-reuse)

#### Disconnection

The user may decide to uninstall your App and click the "Disconnect" link when viewing the "Connections" list. This will immediately "block" all tokens that were granted to your App. We will notify you about this event sending a request to `Disconnect callback URL`.

## App Instance ID

Another important difference of App is that each approved Oauth Connection is associated with a unique identifier called `app_instance_id`. You can think of it as an ID of each installation of your app. We suggest to store it just next to the access_token.

This param is appended to all important payloads that your App receive from Hubrise (for example in open_url query params, access_token response JSON and all callback params). You can use this value to easily identify an instance of your App installation/connection.

One of the possible use cases is Uninstallation Stage: when you receive this callback you need to find the exact record in your database, for example, to stop all associated processes. The way to do it is by querying your database for the "app_instance_id" of uninstalled Connection (that you should have been stored during installation).

Caution: you **must not** rely on `app_instance_id` to authenticate users because this value can be guesstimated. Instead, we suggest you to use our OAuth flow to make sure the current user can access this App Instance.

## Connection Reuse

// Move the section here?

### Authorizing access to App Instance

In some cases, it might be useful to easily check if the current user has access to specific App Instance. You can do this by starting the Oauth flow with `app_instance_id` appended like this:

```
GET https://manager.hubrise.com/oauth2/v1/authorize?redirect_uri=https://<<YOUR DOMAIN HERE>>/oauth_callback&client_id=459691768564.clients.hubrise.com&app_instance_id=qwerty
```

In most cases, this redirect will be "invisible" for the user because our Oauth flow skips the Authorization Screen if the user has previously granted the same permission to your App.

### Multi-user authorization

In Hubrise, users have role-based access to different Account/Locations. From time to time these roles can be changed or get removed at all. To support up to date access level for multiple users in your App you can rely on our Oauth. Below are a few suggestions from our Developers Team.

#### Do not mix `profile` scope with your main "resources" scope

GOOD: `scope=location[orders.write]`
BAD: `scope=profile,location[orders.write]`

This will allow different users to "reuse" existing connection.

#### Example

John installs your App with `scope=location[orders.write]`. We assume your app sets cookies for John's session to easily recognize him later.

Then imagine Mark, another user of the same Location, comes to Hubrise Connections List and clicks "Open" next to the installed app.
Now Mark is being redirected to your `Open URL` without any cookies set for your domain yet. Your app should reject him accessing your dashboard right away. Instead, redirect Mark to the Oauth Authorization screen using `app_instance_id` (at this point you can get it from Mark's query params).
Our system will see that the same `scope` is already approved for the same `app_instance_id` (by John) which allows us to "Invisibly" (without waiting for approval) redirect Mark to the `redirectS_uri`. Once you complete the Oauth flow by exchanging `code` for `access_token` you can now be sure that Mark is allowed to access this specific App Instance.

Most likely Mark did not even notice that you have just reauthorized him.
We suggest using this technique as often as needed to provide a safe and painless user experience.

Note: since the roles can be removed, you should have a proper expiration date of your session. Reauthorizing users at least once per day seems optimal for us.

Note: if you need to access personal information of each user (to display full name in your header, for example) we suggest you to initiate another OAuth flow with `scope=profile`. This will create a new token which is associated to the current user only. In this case, we suggest you to store these different tokens separately: one (with `location` scope) is shared across the users, another (with `profile` scope) is only associated with the specific user.
