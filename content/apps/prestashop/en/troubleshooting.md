---
title: Troubleshooting
path_override: troubleshooting
position: 8
layout: documentation
meta:
  title: Troubleshooting | PrestaShop | HubRise
  description: Step-by-step guide to troubleshoot and resolve connection issues when linking PrestaShop to HubRise.
---

## Invalid API Key When Connecting to HubRise

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

### Add an .htaccess File for Apache Servers

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

If the problem persists, or if you are using a different web server, contact HubRise support at support@hubrise.com for assistance.
