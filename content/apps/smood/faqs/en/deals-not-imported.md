---
title: Why Are My Deals Not Imported?
path_override: deals-not-imported
position: 1
layout: documentation
meta:
  title: Deals Not Imported | Smood FAQs | HubRise
  description: Find out why your deals are not imported in Smood, and how to fix it.
---

In Smood, deals from HubRise are treated as single products with options. This can create limitations on the level of customisation available for your deals.

For example, if a deal includes a pizza, customers won't have the ability to customise their pizza toppings. This is because Smood discards these options when importing the deal.

Additionally, a deal from HubRise won't be imported into Smood if the deal includes a product with a mandatory option. For instance, if one of the products in your deal requires customers to pick a specific choice (such as "choose your sauce"), Smood wouldn't know which choice to assign for that product. In order to preserve the user experience, it simply won't import the deal.

To solve this issue, you need to ensure that none of the products used in your deals have mandatory options. Put simply, you shouldn't have any "min selections" set on these products. This change will allow Smood to correctly import your deals.

For more information, see [technical reference, deals section](/apps/smood/pull-catalog#deals).
