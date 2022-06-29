---
title: Food Delivery Platforms
position: 5
layout: documentation
meta:
  title: Food Delivery Platforms | PAR PixelPoint Windows API | HubRise
  description: Instructions on how to integrate your PAR PixelPoint EPOS with the main food delivery platforms. Synchronise data between your EPOS and your apps.
---

To connect PAR PixelPoint Windows API to Deliveroo, Uber Eats, or Just Eat, contact Slowey Systems at [support@slowey.ie](mailto:support@slowey.ie). You can include [support@hubrise.com](mailto:support@hubrise.com) in copy of the email. 

Each service type you provide on food delivery platforms must be associated with the correct PixelPoint EPOS code. On PixelPoint, the exact values of these codes depend on the particular setup of the restaurant. They need to be checked in the EPOS.


## Deliveroo

If you plan to integrate your PixelPoint Windows API with Deliveroo, the ref codes on your EPOS must match those on Deliveroo.
We have two sets of ref codes to map, ref code on the menu and on the HubRise Deliveroo Bridge.

To map product ref codes on the menu, follow these steps:

1. Update every item on your Deliveroo menu so that the ref codes match those in your PAR PixelPoint EPOS. To learn how to modify the ref codes on Deliveroo, see the [Deliveroo Map Ref Codes documentation](/apps/deliveroo/map-ref-codes/).
1. Request a spreadsheet with your Deliveroo menu from your Deliveroo account manager.
1. Send a copy of the spredsheet to Slowey Systems at [support@slowey.ie](mailto:support@slowey.ie). They will check that all the ref codes on Deliveroo match those in your PAR PixelPoint EPOS, and they will contact you in case of errors.
1. Correct any possible remaining mismatch in your Deliveroo menu before the integration goes live.

To map ref codes on the bridge, you will connect Deliveroo Bridge, an app included in your HubRise subscription. For more information about Deliveroo Bridge, see the [Deliveroo Bridge documentation](/apps/deliveroo).

To correctly receive your orders, specify the following values in the Deliveroo Bridge configuration page. To learn how to view and modify the configuration page for Deliveroo Bridge, see the [Deliveroo Configuration page](/apps/deliveroo/configuration).

| Section        | Name                                  | Ref code                                          |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Service types  | Deliveroo fulfilled ref code          | numbers in the `1000`-`1010` range                |
| Service types  | Restaurant fulfilled ref code         | numbers in the `1000`-`1010` range                |
| Service types  | Takeaway ref code                     | numbers in the `1000`-`1010` range                |
| Service types  | Send orders delivered by Deliveroo as | `delivery orders`                                 |
| Discounts      | Offer ref code                        | check the EPOS                                    |
| Charges        | Delivery charge ref code              | check the EPOS                                    |
| Charges        | Surcharge ref code                    | check the EPOS                                    |
| Payments       | Deliveroo payment ref code            | check the EPOS                                    |
| Payments       | Cash payment ref code                 | (leave empty)                                     |
| Order statuses | Mark orders as Accepted               | `when their HubRise status changes to "Accepted"` |


## Just Eat

If you plan to integrate your PixelPoint Windows API with Just Eat, the ref codes on your EPOS must match those on Just Eat. For this we push a HubRise Catalog into Just Eat, and map ref code on Just Eat Flyt Bridge.

To push a HubRise Catalog into Just Eat, follow these steps:
1. Push the PixelPoint Windows API menu into a HubRise Catalog.
1. Edit the PixelPoint menu using the HubRise Catalog Manager. 

To map ref codes on the bridge, you will connect Just Eat Flyt Bridge, an app included in your HubRise subscription. For more information about Just Eat Flyt Bridge, see the [Just Eat Flyt Bridge documentation](/apps/just-eat-flyt).

To correctly receive your orders, specify the following values in the Just Eat Flyt Bridge configuration page. To learn how to view and modify the configuration page for Just Eat Flyt Bridge, see the [Just Eat flyt Configuration page](/apps/just-eat-flyt/configuration).

Depending on your needs, you may have to create some products in PixelPoint Windows API. If you don't use these features, you can skip creating the products and leave the corresponding fields empty.

| Section        | Name                                     | Ref code                                                            |
| -------------- | ---------------------------------------- | ------------------------------------------------------------------- |
| Service types  | Just Eat delivery ref code               | numbers in the `1000`-`1010` range                                  |
| Service types  | Restaurant delivery ref code             | numbers in the `1000`-`1010` range                                  |
| Service types  | Takeaway ref code                        | numbers in the `1000`-`1010` range                                  |
| Service types  | Send orders delivered by the platform as | `delivery orders`                                                   |
| Discounts      | Discount ref code                        | check the EPOS                                                      |
| Charges        | Delivery charge ref code                 | check the EPOS                                                      |
| Charges        | Service charge ref code                  | check the EPOS                                                      |
| Charges        | Bag fee ref code                         | check the EPOS                                                      |
| Charges        | Driver tip ref code                      | check the EPOS                                                      |
| Charges        | Other charge ref code                    | check the EPOS                                                      |
| Payments       | Online payment ref code                  | check the EPOS                                                      |
| Payments       | Cash payment ref code                    | (leave empty)                                                       |
| Order statuses | Mark orders as Accepted                  | `when their HubRise status changes to "Accepted"`                   |


## Uber Eats

If you plan to integrate your PixelPoint Windows API with Uber Eats, the ref codes on your EPOS must match those on Uber Eats.
We have two sets of ref codes to map, ref code on the menu and on the HubRise Uber Eats Bridge.

To map product ref codes on the menu, follow these steps:

1. Update every item on your Uber Eats menu so that the ref codes match those in your PAR PixelPoint EPOS. To learn how to modify the ref codes on Uber Eats, see the [Uber Eats documentation](/apps/uber-eats/map-ref-codes/).
1. Request a spreadsheet with your Uber Eats menu from the Uber Eats support team.
1. Send a copy of the spredsheet to Slowey Systems at [support@slowey.ie](mailto:support@slowey.ie). They will check that all the ref codes on Uber Eats match those in your PAR PixelPoint EPOS, and they will contact you in case of errors.
1. Correct any possible remaining mismatch in your Uber Eats menu before the integration goes live.

To map ref codes on the bridge, you will connect Uber Eats Bridge, an app included in your HubRise subscription. For more information about Uber Eats Bridge, see the [Uber Eats Bridge documentation](/apps/uber-eats).

To correctly receive your orders, specify the following values in the Uber Eats Bridge configuration page. To learn how to view and modify the configuration page for Uber Eats Bridge, see the [Uber Eats Configuration page](/apps/uber-eats/configuration).

Depending on your needs, you may have to create some products in PixelPoint. If you don't use these features, you can skip creating the products and leave the corresponding fields empty.

| Section        | Name                                         | Ref code or value                                                   |
| -------------- | -------------------------------------------- | ------------------------------------------------------------------- |
| Service types  | Uber delivery ref code                       | numbers in the `1000`-`1010` range                                  |
| Service types  | Restaurant delivery ref code (\*)            | numbers in the `1000`-`1010` range                                  |
| Service types  | Takeaway ref code                            | numbers in the `1000`-`1010` range                                  |
| Service types  | Eat-in ref code                              | numbers in the `1000`-`1010` range                                  |
| Service types  | Send orders delivered by Uber Eats as        | `delivery orders`                                                   |
| Special items  | Disposable items ref code                    | Create a product with price = 0 in PixelPoint and use its **Code**. |
| Discounts      | Discount ref code                            | check the EPOS                                                      |
| Charges        | Delivery charge ref code                     | check the EPOS                                                      |
| Charges        | Small order fee ref code                     | check the EPOS                                                      |
| Charges        | Tip ref code                                 | check the EPOS                                                      |
| Payments       | Payment ref code                             | check the EPOS                                                      |
| Order statuses | Mark orders as Accepted                      | `when their HubRise status changes to "Accepted"`                   |
| Menu           | Enable preparation notes on individual items | Untick the checkbox                                                 |

Preparation notes on individual items are not supported by PAR PixelPoint. 

(\*) BYOC - Bring Your Own Courier
