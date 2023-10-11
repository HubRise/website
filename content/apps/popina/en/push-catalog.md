---
title: Push the Catalog
path_override: push-catalog
position: 4
layout: documentation
meta:
  title: Push the Catalog | Popina | HubRise
  description: Find out how to push the catalog from your Popina EPOS to HubRise, what information is sent to HubRise and what is not.
---

This page describes how to push your Popina catalog and what information is sent to HubRise.

## Push the Catalog to HubRise

To push your catalog to HubRise, follow these steps:

1. From your iPad, log in to your [Delivera back office](https://delivera-popina.web.app/).
2. From the menu, select **HubRise**.
3. Click **ENVOYER LA CARTE VERS HUBRISE**.

---

**IMPORTANT NOTE**: This operation replaces your current HubRise catalog.

---

Depending on how large your catalog is, it might take a few minutes for your HubRise catalog to be fully updated.

## Information Sent to HubRise

The following sections provide more details on how your Popina catalog is mapped to HubRise.

### Categories

The categories in the Popina catalog are mapped one-to-one to categories of products on HubRise.

Popina sends to HubRise the category name and ref code.

### Products and Skus

Popina does not support products with skus. For every item in the catalog, Popina creates a product with a single sku in HubRise with the following information (if available):

- Sku name
- Sku ref code
- Description
- Price
- Options

Images are not supported.

### Options

Popina supports single and multiple option groups. Options are associated with a ref code.

### Deals

Popina supports deals and sends this information to HubRise. Deals are associated with a ref code, and each deal line is attached to a label.

### Discounts

Popina supports discounts and sends this information to HubRise. Discounts are associated with a ref code, pricing effect, and price value.