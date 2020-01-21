---
title: Integration guide
position: 3
layout: documentation
meta:
    title:
    description:
---

## Menu setup

This app is a _push-only_ integration, therefore iKentoo product and option codes must be copied manually from iKentoo into your menu.

### iKentoo menu export

You can find the codes from the iKentoo back-office. You can also view an export of your menu in a browser and fetch the codes from here:

- open this URL in your browser: https://pos.ikentoo.com/integration/1/menus?businessLocationId=xyz - replace "xyz" by the business location id
- enter your iKentoo email and password when prompted

### Code matching

- **Product/sku codes**:

  - iKentoo back-office: open the "Items" page. For every product/sku copy the code from the "Code" column: ![](../images/integration_sku_codes.png)
  - Menu export: use the `item_sku` fields of the export

-
