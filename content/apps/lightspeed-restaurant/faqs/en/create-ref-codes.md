---
title: How Do I Create Ref Codes In Lightspeed?
path_override: create-ref-codes
position: 3
layout: documentation
meta:
  title: Create Ref Codes | Lightspeed Restaurant | HubRise
  description: Instructions to create Lightspeed Restaurant ref codes needed for your EPOS to work with other connected apps, like online ordering platforms.
---

If you connect Lightspeed Restaurant to delivery platforms such as Deliveroo, Uber Eats, and Just Eat, or any online ordering solutions, you need to create special service types, payments, charges, and discounts for every solution you support.
To simplify troubleshooting, we recommend that you use the specific codes provided for [Food Ordering Platforms](/apps/lightspeed-restaurant/food-ordering-platforms) and for [Online Ordering Solutions](/apps/lightspeed-restaurant/online-ordering-solutions).

To create the ref codes in your Lightspeed account, you have two options:

1. You can contact Lightspeed support and ask them to include the codes in your back office for you.
1. You can include the ref codes in your back office autonomously. In this case, follow the procedures below.

## Service Types

Service types are called **Account profiles** on Lightspeed. To create a service type, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Account profiles**.
1. Click **Add an account profile**, then click **OK**.
1. In the **Base details** section, specify the ref code for your service type in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the service types you support on solutions you intend to connect.

The following account profile codes are typically used, but may vary depending on the specific Lightspeed setup:

- `PICKUP`, for takeaway orders.
- `DELIVERY`, for delivery orders.
- `LOCAL`, for eat-in orders.

Other specific service type ref codes must be used when you connect Lightspeed Restaurant for [Food Ordering Platforms](/apps/lightspeed-restaurant/food-ordering-platforms) such as Deliveroo, Uber Eats, and Just Eat or for white label [Online Ordering Solutions](/apps/lightspeed-restaurant/online-ordering-solutions).

## Discounts

To create a discount that is compatible with the HubRise data model, follow these steps:

1. From your Lightspeed back office, select **Menu management**, then select **Items**.
1. Click on the **Create** dropdown, and select **Single item**.
1. In the **New item** page, enter the following values:
   - In the **Item name** field, enter the name of the discount.
   - Click **Change price type**, then select **Manually-entered negative price** and click **Confirm**.
   - To use a specific ref code, click **Add custom SKU** and enter a ref code. Alternatively, a ref code will be automatically generated.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the discounts you support on every solution.

## Deals

To create a deal that is compatible with the HubRise data model, follow these steps:

1. From your Lightspeed back office, select **Menu management**, then select **Items**.
1. Click on the **Create** dropdown, and select **Single item**.
1. In the **New item** page, enter the following values:
   - In the **Item name** field, enter the name of the deal.
   - Click **Change price type**, then select **No price** and click **Confirm**.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the deals you support on every solution.

## Charges

To create a charge, you need to create an item by following these steps:

1. From your Lightspeed back office, select **Menu management**, then select **Items**.
1. Click on the **Create** dropdown, and select **Single item**.
1. In the **New item** page, enter the following values:
   - In the **Item name** field, enter the name of the charge.
   - Click **Change price type**, then select **Manually-entered price** and click **Confirm**.
   - To use a specific ref code, click **Add custom SKU** and enter a ref code. Alternatively, a ref code will be automatically generated.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the charges you support on every solution. 

## Payment Methods

To create a payment method, follow these steps:

1. From your Lightspeed back office, select **Configuration**, then select **Settings** > **Payment methods**.
1. Click **Add a payment method**.
1. In the **Add new payment method** page, specify the ref code for your payment method in the **Code** field.
1. Fill in the other sections in the page as needed, then click **Save**.
1. Repeat the process for all the payment methods you support on every solution.
