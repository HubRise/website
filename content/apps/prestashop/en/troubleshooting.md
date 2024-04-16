---
title: Troubleshooting
path_override: troubleshooting
position: 8
layout: documentation
meta:
  title: Troubleshooting | PrestaShop | HubRise
  description: Step-by-step guide to troubleshoot and resolve connection issues when linking PrestaShop to HubRise.
---

This guide provides troubleshooting steps to resolve common issues when connecting PrestaShop to HubRise. Most fixes here require advanced technical knowledge, and should be performed by a developer or system administrator.

## Invalid API Key When Connecting to HubRise {#invalid-api-key}

When attempting to establish a connection between PrestaShop and HubRise, you may encounter the following error message after entering the Website URL and API key:

`Invalid API key. Check your API key in the PrestaShop back office and try again.`

![Invalid API Key on PrestaShop Bridge](./images/007-prestashop-invalid-api-key.png)

Follow these steps to diagnose and resolve the issue.

### Confirm Your API Key

To verify your API key:

1. Open a new browser tab.

2. Enter the following URL: `https://[site_url]/api?ws_key=[api_key]` replacing `[site_url]` with your PrestaShop website URL and `[api_key]` with the API key you've entered.

   - If a browser login dialog appears, the key is incorrect. To find the correct API key, refer to [Connect to HubRise](/apps/prestashop/connect-hubrise).
   - Conversely, if a page with XML content loads without prompting for login, your key is correct. Proceed to the next step.

### Check that the Authorization Header is Accepted

If your key is correct, the issue is likely that your server is not configured to accept the `Authorization` header. To confirm, run the following command in a terminal:

```bash
curl -i --location --request GET 'https://<shop_domain>/api/shops/1' --header 'Authorization: Basic <base64 encoding of (api key + ":")>'
```

If the response is a 401 error, try the following equivalent request that does not use the `Authorization` header:

```bash
curl -i --location --request GET 'https://<shop_domain>/api/shops/1?ws_key=<api key>'
```

If this request works, ask your server administrator to enable the `Authorization` header. The fix will depend on the server used (Apache, Nginx, etc.) and the server configuration. The following section provides a common fix for Apache servers.

### Add or Edit the .htaccess File for Apache Servers

If your web server is Apache, which is typically used with PrestaShop, it may be configured to strip the `Authorization` header. To resolve this issue, add a rewrite rule to ensure that the header is passed to PrestaShop through a PHP environment variable:

1. Access your PrestaShop server via FTP or SSH.
2. Navigate to the `webservice` directory.
3. Create an `.htaccess` file in the `webservice` directory with the following code:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine on
     RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
   </IfModule>
   ```
4. Try to connect the PrestaShop Bridge again.
5. If this does not resolve the issue, check the `.htaccess` file in the PrestaShop root directory, and adjust the rewrite rules. While the actual fix may vary, the following example demonstrates a common adjustment.

   Old code:

   ```apache
   RewriteRule . - [E=REWRITEBASE:/]
   RewriteRule ^api(?:/(.*))?$ %{ENV:REWRITEBASE}webservice/dispatcher.php?url=$1 [QSA,L]
   ```

   New code:

   ```apache
   RewriteCond %{HTTP:Authorization} ^(.*)
   RewriteRule . - [E=HTTP_AUTHORIZATION:%1]

   RewriteRule . - [E=REWRITEBASE:/]
   RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
   RewriteRule ^api$ api/ [L]

   RewriteRule ^api/(.*)$ %{ENV:REWRITEBASE}webservice/dispatcher.php?url=$1 [QSA,L]
   ```

6. Save the changes and try to connect the PrestaShop Bridge again.

If the problem persists, or if you are using a different web server, contact HubRise support at support@hubrise.com for assistance.

## Errors When Pushing the Catalog {#push-catalog-errors}

When pushing the catalog, the following error may appear in the **Operations** tab:

```
{
  "errors": [
    {
      "code": 15,
      "message": "[PHP Unknown error #8192] Return type of Ramsey\\Collection\\AbstractArray::offsetGet($offset) should either be compatible with ArrayAccess::offsetGet(mixed $offset): mixed, or the #[\\ReturnTypeWillChange] attribute should be used to temporarily suppress the notice (/home/your_site/www/modules/ps_accounts/vendor/ramsey/collection/src/AbstractArray.php, line 87)"
    },
```

This error occurs because the `ramsey/collection` library used in the `ps_accounts` module has compatibility issues with PHP 8.1+. The fix was implemented between versions 8.1.1 and 8.1.5 of PrestaShop. To resolve the issue, upgrade PrestaShop to the latest version.

If you are unable to upgrade PrestaShop, you can try to manually fix the issue by adding [this line](https://github.com/ramsey/collection/blob/1.2.0/src/AbstractArray.php#L89) to the file indicated in the error message.

## Orders Not Syncing {#orders-not-syncing}

If PrestaShop Bridge is connected to HubRise, but orders are not syncing, check the following:

### In HubRise

- Open PrestaShop Bridge from the **CONNECTIONS** page.
- Ensure that it is fully configured. The **Setup in Progress** message (in red) should not appear in the top right corner.

### In PrestaShop

Check the installation of the HubRise module:

- Navigate to **Modules > Modules Manager**.
- Confirm that the HubRise module is listed, installed, and enabled. If the module is listed but not enabled, you will see an **Enable** option in the contextual menu. Click it to activate the module.
- Navigate to **Modules > Modules Manager**.
- Click **Configure** on the HubRise module.
- Ensure all mandatory fields are correctly filled out. If any fields are missing, complete them and click **Save**.

Check Webservice settings:

- Go to **Advanced Parameters > Webservice**.
- Look for a key named **HubRise integration key**. If the key does not exist, reinstall the HubRise module and check again.
- Select the key to view its configuration.
- Verify that **Enable webservice key** is set to **Yes**.
- Check that most permissions for `GET`, `PUT`, `POST`, and `DELETE` are enabled. In the opposite case, reinstall the HubRise module and check again.

If the problem persists after these checks, contact us at support@hubrise.com.
