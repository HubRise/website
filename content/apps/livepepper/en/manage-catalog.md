---
title: Manage Catalog
position: 3
layout: documentation
meta:
  title: LivePepper Connection to HubRise Configuration
  description: Instructions on how to configure LivePepper for optimal connection to HubRise and other platforms.
---

Once your LivePepper site is connected with a HubRise account, order information will be pushed into HubRise automatically.

For other connected apps to properly process orders sent to HubRise, you will need a menu on both systems with matching product ref codes for each and every item in the menu, including product variants, toppings and options as well as ingredients, product sizes and deals. The easiest way to achieve this is to import the EPOS menu from a HubRise catalog.

---

**IMPORTANT NOTE**: Refer to your connected EPOS documentation on the HubRise website to verify that your EPOS can push a menu into HubRise. If it cannot, you will need to map product ref codes manually in LivePepper. For instructions, see [Add EPOS Ref Codes to Products](/apps/livepepper/map-ref-codes/#add-epos-ref-codes-to-products).

---

## Catalog Import

If you have already exported your products from your EPOS or other connected app to HubRise, the entire catalog can be imported from HubRise. This will include:

- Products with variants, options, prices, within their respective product categories.
- Deals.

---

**IMPORTANT NOTE**: Importing a catalog from HubRise will replace the products in your LivePepper Menu. You can edit the menu in LivePepper after the import. Catalogs cannot be edited in HubRise.

---

To import from a HubRise Catalog into LivePepper:

1. LivePepper must be connected to a HubRise Account and Location. For instructions on this process, see [Connect HubRise](/apps/livepepper/#connect-hubrise/).
1. From LivePepper, click **Menu** > **Import** / **Export**.
1. Scroll down to HubRise connection and click **Import**.
1. Authenticate your credentials and click **Import from HubRise**.
1. The import process will remove your current products and replace them with the ones from your HubRise catalog.

In this example, one of the sizes for the Coke offerings was removed from LivePepper, and then restored when imported from the connected HubRise catalog along with its EPOS ref code.

<video controls title="Import HubRise Catalog">
  <source src="../images/009-import-hubrise-catalog.webm" type="video/webm"/>
</video>

## Catalog Export

If needed, your LivePepper menu can be exported to your HubRise account catalog to be shared with other connected Apps.

To export your LivePepper products to a HubRise catalog:

1. LivePepper must be connected to a HubRise Account and Location. For instructions on this process, see [Connect HubRise](/apps/livepepper/#connect-hubrise/).
2. From LivePepper, click **Menu** > **Import** / **Export**.
3. The HubRise connection will be listed. Click **Export**.
4. The HubRise catalog will be updated.

<video controls title="Export to HubRise Catalog">
  <source src="../images/006-export-to-hubrise-catalog.webm" type="video/webm"/>
</video>
