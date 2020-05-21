---
title: Configuration
position: 3
layout: documentation
meta:
  title: LivePepper Connection to HubRise Configuration
  description: Instructions on how to configure LivePepper for optimal connection to HubRise and other platforms.
---

Once your LivePepper site is connected with a HubRise account, customer and order information will be pushed into HubRise automatically. For the connection to work with all apps in LivePepper, some configuration on the LivePepper side may be needed. This is particularly true for the connection with an EPOS.

Your LIvePepper menu can either be created directly in LivePepper, or imported from a previously existing HubRise catalog. To properly process orders from LivePepper to your EPOS, product codes are required for the following menu items:

- **Product Category** values including:
  - **Variants**: Variants are available differences in a product. For example: Pizza with thin crust versus pizza with hand tossed crust.
  - **Toppings**: Ingredients that customers can add to their product that are not available by default. For example, adding mushrooms to a cheeseburger. Toppings can be set at the product category or the product level.
  - **Options**: Options are differences in how products are delivered. For example: Adding utensils, sauces, cutting a pizza in squares instead of triangles, etc.
- **Products** and its attributes including:
  - **Ingredients**: Default ingredients within a recipe that customers can remove from their product. For example: Cheeseburger without the pickles.
  - **Price & Availability**: The options made available to the customer, usually in the form of sizes. For example: an 8" pizza versus a 12” pizza.
  - **Toppings**: Ingredients set at the product category or the product level.
- **Deals**: Deals offer customers savings based on an order. For example, if they order a pizza for €9 and a soda for €2 separately, it would be €11. A combo deal might offer customers if they buy a pizza and soda together it would be €9.

In some cases, the EPOS will also require codes to understand some of the LivePepper functionalities. Always refer to your EPOS documentation on the HubRise website for details.

- **Payment Methods**: How customers can pay for their orders.
- **S\*\***ervice Types\*\*: These define how orders are handled such as Delivery, Collection and Eat-In.
- **Delivery charge**: Delivery charges might apply.
- **IMPORTANT NOTE**: It is important that each POS code field available in LivePepper be mapped with the EPOS product codes. If the POS code is missing, the EPOS will not be unable to correctly process the order.

The POS Codes in LivePepper can be updated in two ways: manually, or imported from HubRise through a menu import.

## Import Catalog from HubRise

If you have already exported your products from your EPOS or other connected app to HubRise, the entire catalog can be imported from HubRise. This will include:

- Products with variants, options, prices, within their respective product categories.
- Deals.
- **IMPORTANT NOTE**: Importing a catalog from HubRise will replace the products in your LivePepper account. Verify that they are accurate before importing them.
- **IMPORTANT NOTE**: Once imported, the content and the structure of the menu you will see in LivePepper matches that of the menu imported in the HubRise catalog, nothing more, nothing less. The catalog cannot be edited in HubRise.

To import from a HubRise Catalog into LivePepper:

1. LivePepper must be connected to a HubRise Account and Location. For instructions on this process, see Getting Started(#/apps/livepepper/troubleshooting/).
2. From LivePepper, click **Menu > Import/Export**.
3. Scroll down to HubRise connection and click **Import**.
4. Authenticate your credentials and click **Import from HubRise**.
5. The import process will **remove your current products and replace them** with the ones from your HubRise catalog.

In this example, one of the sizes for the Coke offerings was removed from LivePepper, and then restored when imported from the connected HubRise catalog along with its POS code.

<video controls title="Import HubRise Catalog">
  <source src="../images/009-import-hubrise-catalog.webm" type="video/webm"/>
</video>

## Manual Catalog POS Code Mapping

The first step to updating the POS codes in LivePepper is to export a list of POS codes from your EPOS system. This may be exported as a CSV or Excel file. Whatever format they are exported to, the next step will be to manually map and copy those codes into LivePepper.

LivePepper support does support inserting those POS codes for you, if contracted to do so. See your LivePepper support representative for more information.

### Add POS Codes to Products

Products have different POS codes for each **Prices & Availability. **

To update the POS code for each product and its prices & availability:

1. Select the product to update.
2. For each value in the **Price & Availability** section, update the POS code.
3. Click **Save** when complete.

<video controls title="Update Product POS Code">
  <source src="../images/016-product-pos-code-update.webm" type="video/webm"/>
</video>

### Add POS Codes to Toppings, Variants, Ingredients, and Options

The process to add POS codes to **Toppings**, **Variants**, **Ingredients**, and **Options** is the same for product **Categories** and **Products**. The instructions below are specific to updating the POS codes for a product’s ingredients, and can be replicated for the items listed above.

To update the POS code for each product ingredient:

1. Select the product.
2. Select the **Ingredients** row.
3. Select the ingredient to update.
4. For each **Price & availability** option, enter the **POS code**.
5. If the ingredient is used in other products and they share the same POS code, they can be copied with the **Quick Copy** setting:
   1. From the dropdown select whether the Toppings apply to **All menu** items, or all products in a category.
   2. Click **Use POS codes above**. If the toppings share the same cost and availability, those options can be checked as well.
6. When finished, click **Save**.

<video controls title="Update Ingredients POS Code">
  <source src="../images/018-ingredients-pos-code-update.webm" type="video/webm"/>
</video>

### Add POS Codes to Deals

Deals provide discounts to a customer’s order. Correct POS codes are essential so orders that contain deals that can be properly transmitted to your EPOS systems and other apps connected to HubRise.

To add a POS Code to a deal:

1. Select **Deals** from the left navigation pane.
2. For the deal to update, select **Edit**.
3. Under **Advanced Settings**, set the POS code.
4. Click **Save** when finished.

<video controls title="Update Deals POS Code">
  <source src="../images/019-deals-pos-code-update.webm" type="video/webm"/>
</video>
\*IMPORTANT NOTE: Depending on your EPOS, Deals may be transmitted to the EPOS without a POS code required. Verify that your Deals are properly set up to comply with your EPOS requirements.

## Add POS Codes to Payment Methods

POS codes may be required for each **Online payment **and **On delivery payment** methods setup in LivePepper. Refer to your connected EPOS documentation on the HubRise website to verify.

To add a POS Code to a Payment Method:

1. Select **Settings** > **Payment settings**.
2. Click the payment method to update.
3. Click the edit icon ![Edit Icon](../images/023-edit-icon.png).
4. Enter the **POS code**.
5. Click **Save**.

<video controls title="Add POS Code to Payment Method">
  <source src="../images/024-payment-method-add-pos-code.webm" type="video/webm"/>
</video>

## Add POS Codes to Service Type

Service Type such as Delivery, Collection or Eat in might require a POS code entry. Refer to your connected EPOS documentation on the HubRise website to verify. Service Types must be added by your LivePepper support representative. It cannot be done from the LivePepper back office.

## Add a POS Code to a Delivery charge:

If delivery charges apply for the service offered a POS code might be required. Refer to your connected EPOS documentation on the HubRise website to verify.

To add a POS Code to a Delivery charge:

1. Select **Settings** > **Delivery Settings**.
2. Add the POS code to the Delivery charge POS code.
3. Click **Save** when complete.

<video controls title="Add POS to Delivery Method">
  <source src="../images/025-delivery-method-add-pos.webm" type="video/webm"/>
</video>

## Export Menu to HubRise Catalog

If needed, your LivePepper menu can be exported to your HubRise account catalog to be shared with other connected Apps.

- **IMPORTANT NOTICE**: Exporting your menu from LivePepper to a HubRise catalog will replace the entire catalog. Verify the values are correct before exporting.

To export your LivePepper products to a HubRise catalog:

1. LivePepper must be connected to a HubRise Account and Location. For instructions on this process, see [Getting Started](/apps/livepepper/getting-started/).
2. From LivePepper, click **Menu > Import/Export**.
3. The HubRise connection will be listed. Click **Export**.
4. The HubRise catalog will be updated.

<video controls title="Export to HubRise Catalog">
  <source src="../images/006-export-to-hubrise-catalog.webm" type="video/webm"/>
</video>
