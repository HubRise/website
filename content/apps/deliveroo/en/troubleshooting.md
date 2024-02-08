---
title: Troubleshooting
path_override: troubleshooting
position: 9
layout: documentation
meta:
  title: Troubleshooting | Deliveroo Bridge | HubRise
  description: Troubleshooting Deliveroo Bridge connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

## Menu Issues

### Menu Does Not Update

When you publish the menu, if it does not update on your Deliveroo page and there is no error in the bridge, it might be because of a Deliveroo caching issue.

To fix the problem, make a small change to the menu, for example, changing the name of a product, and publish the menu again.

### Invalid Site Assignment

When you publish the menu, you may see the following error in the Deliveroo Bridge response:

```
{
  "error": "invalid site assignment: one or more sites IDs are missing from the current site_ids array. Before removing a site from a menu, please reassign the site to another menu to avoid this error. Invalid site_ids: XXXXX"
}
```

This error is a bug in Deliveroo that they are working on. The temporary workaround is to create a new menu in Deliveroo.

To create a new menu, follow these steps:

- In Deliveroo Bridge, open the **Configuration** tab.
- In the **Catalog** section, choose a new name for the **Menu ID**. This name must be different from the name of the menu that caused the error.
- Click **Save**.
- Open the **Actions** tab to publish the catalog.

If you are still having issues after attempting the workaround, contact support@hubrise.com.

## Orders Not Received {#orders-not-received}

When Deliveroo Bridge is configured correctly, and you do not receive Deliveroo orders on HubRise, you may be experiencing one of the following issues.

### Missing Ref Codes

If an item with no ref code is added to an order, Deliveroo will fail to send the entire order, and nothing is received on HubRise.

To solve the issue, make sure that all the products in your Deliveroo menu have a corresponding ref code. To learn how to add ref codes to your Deliveroo products, see [Map Ref Codes](/apps/deliveroo/map-ref-codes).

### Orders Rejected by Deliveroo

When auto-accept is not enabled, every order needs to be accepted manually on the Deliveroo tablet, otherwise it will be rejected by Deliveroo and not received on HubRise.

To avoid this, we recommend enabling auto-accept. For more information, see [Can I Stop Using the Deliveroo Tablet?](/apps/deliveroo/faqs/deliveroo-tabletless).
