---
title: Payment
position: 10
layout: documentation
meta:
  title: Payment | HubRise
  description: How to manage payments and quotes on HubRise.
---

Credit card payments can be set and tracked in the **SETTINGS** > **ACCOUNTS** > **Payment** section. Accounts with paid plans must have a credit card set as the payment method, or else the plan will not be processed. All payments will be debited in EUR, even if the Account currency setting is different.

## Account or Location Payment

For Accounts with multiple Locations, we recommend you set the Account to pay for all plans. It means one payment method to update and one invoice to manage for all your Locations.

Locations can be set to their own payment method rather than using the Account. This may be required for specific billing purposes or other business needs.

To change whether your Location uses your HubRise Account payment method, or whether the Location will use a separate payment method, follow these steps:

1. Go to **SETTINGS** > **ACCOUNTS**.
1. For users with multiple Accounts, select the Account containing the specific Location.
1. Click the Location to update.
1. Under **Payment**:
   - To set a location that uses its own payment method to use the same payment method as its Account, click **Make the account pay for the subscription**.
   - If the location uses the same payment method as the Account and you want it to have a separate payment method, click click **Make the location pay for it**.

<video controls title="Payment by Account or Location example">
 <source src="../images/042-en-settings-payment-byaccount-bylocation.webm" type="video/webm"/>
</video>

## Add a Payment Method

To add a payment method for an Account or Location:

1. Go to **SETTINGS** > **ACCOUNTS**.
   - To update the payment method for an Account, select the Account and scroll down to the Payment section.
   - To update the payment method for a Location, select the Account, then select the Location, and scroll down to the Payment section.
1. If there is no existing payment method, click **Add payment method**. If there is a previously set method, click **Change your payment method**.
1. Enter your credit card information. Credit cards must be valid to be accepted.
1. When finished, click **Save**.
   <video controls title="Add payment type"><source src="../images/040-en-settings-payment-add-payment-type.webm" type="video/webm"/></video>

## Process Pending Quotes

When a plan has been changed, the payment must be authorized before the credit card can be charged. Admin users will receive notifications reminding them to complete the payment process. For more information on notifications, see [Usage Plans](/docs/usage-plan/#usage-plans).

To process a payment from the notification:

1. Make sure a credit card is saved on your Account or Location. If not, see the instructions in [Add a Payment Method](#add-a-payment-method).
1. Click **View the earliest quote **link, then click **Pay**. To check on all unpaid quotes, click **check your account** from the notification.

<video controls title="Pay subscription example">
 <source src="../images/041-en-process-pending-quotes.webm" type="video/webm"/>
</video>

---

**Related FAQ**: <Link to="/docs/faqs/free-plan-quota-exceeded-what-happens/">What Happens If My Free Plan Quota Is Exceeded?</Link>, <Link to="/docs/faqs/quota-exceeded-one-location-how-do-i-pay/">My Quota is Exceeded and I Have One Location. How do I Pay?</Link>, <Link to="/docs/faqs/quota-exceeded-multiple-locations-with-different-payment-methods-how-do-i-pay/">My Quota is Exceeded and I Have Multiple Locations with Different Payment Methods. How do I Pay?</Link>, <Link to="/docs/faqs/pause-plan-during-setup-and-test-phases/">Can My Plan Be Paused During Setup and Test Phases?</Link>

---

## Payment History

Payments made to HubRise are listed in the **SETTINGS** > **ACCOUNTS** > **Payment** > **Payment history** link. Payments are listed in reverse historical order, with the most recent payments displayed first.

Select **Payment history** to display all payments made for the selected HubRise Account or Location. Each payment will display:

- **Date**: The date the payment was made.
- **Amount excl. VAT**: The amount of the payment excluding value-added tax (VAT). HubRise being headquartered in France, VAT only applies to companies based in France.
- **Description**: The purpose of the charge.
- **Payment Method**: The specific payment method used for this charge.

Admin users receive invoices via email. The invoice can also be saved as a PDF file by selecting the download icon <InlineImage width="15" height="14">![Download icon](../images/058-download.png)</InlineImage>.

![Invoice example](../images/043-en-2x-invoice-example.png)

Payment history for Accounts will group Location payments for the date.

![Payment history example](../images/044-en-payment-history.png)

The payment history for locations will display invoices paid by the Account and all of its Locations.

The first time you make a payment to a plan the payment is listed as an upgrade. Subsequent payments will be listed for the date of the plan period. Once you have a valid payment method saved, plans are billed automatically.
