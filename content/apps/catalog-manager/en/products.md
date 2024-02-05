---
title: Products
path_override: products
position: 5
layout: documentation
meta:
  title: Products | Catalog Manager | HubRise
  description: Instructions on how to create and edit products in Catalog Manager. Synchronise catalogs between your EPOS and your apps.
---

When you open a Catalog, the **Products** page in the **Edit** view is displayed.
This lists all your products grouped by category. To add a new category, click **New category** and enter a name.

For each product, in the product's details pane you can view and edit the following:

- Product name
- Description
- Images
- Variations, referred to as **SKUs**
- Option Lists

Variations are typically used to provide different versions of the base product, such as sizes or colours. Options allow you to specify optional additional items, such as extras.

---

**IMPORTANT NOTE:** Each variation has its own ref code and price which must be entered if you are connecting an EPOS. If a product has no variations, then the ref code for the base product needs to be entered.

---

![Catalog Manager Product List](./images/002-2x-product-list.png)

## Create a Product {#create}

To create a product, select the category or the product immediately above where the product should be located, click **New product** and enter a descriptive name for the product.

![Catalog Manager Create New Product](./images/009-2x-create-new-product.png)

After you have created the new product, you can add details to it and relate it to optional items and deals.

## Add or Edit Product Details

- In the **Description** field enter the product description.
- Specify **Tags**, if applicable. For more information, see [Product Tags](#tags).
- Specify **Allergens**, if the product contains any. HubRise provides a predefined list of allergens, which cannot be edited, to choose from.
- Add one or more photos of the product by clicking on the **+** icon, or by dragging and dropping files into the image area. For food ordering and delivery platforms, we recommend that images should be jpg or png, 1200x800 pixels or larger, with a ratio of 16:9.
- If the product has variations that a customer needs to choose from, select the **multiple SKUs** check box.
  Then, for each variation enter the **SKU Name**, **Price** and **Ref code**.
  If there are no variations, then enter the price and ref code for the product.
- You can include more variations by selecting **+ New SKU**.

![Catalog Manager Add Product Details](./images/010-2x-new-product-details.png)

### Product Tags {#tags}

Product tags are a flexible way to categorise products. They can be used for a variety of purposes, including:

- Identifying specific attributes, for example, **Vegetarian** or **Gluten Free**.
- Modifying ordering options, such as **Half & Half** to apply half-and-half pricing to a product, or **Deal only** to indicate that a product is only available as part of a deal.
- Customising product display, for example, to show an icon or label on specific products in a menu.

HubRise provides a default set of tags, generally recognised and supported by connected applications, including food ordering platforms. However, you can add your own tags by typing them in the **Tags** field. For information on which tags are recognised, consult the documentation or contact the support team of the connected application.

## Delete a Product

To delete a product, select it from the product list and click on the delete icon in the product details pane.

## Rearrange Products

You can rearrange the order of the items by using the drag handle on the right-hand side of the product entry.

![Catalog Manager Rearrange Products](./images/013-2x-move-product.png)

The order in which products are displayed in the Catalog Manager is maintained in the apps you push the catalog into.
