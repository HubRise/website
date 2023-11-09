---
title: "Inventory Management Updates: Bridging Locations and Catalogs"
path_override: inventory-updates
date: 2023-11-01
author: Antoine Monnier
meta:
  title: Inventory management updates | Blog | HubRise
  description: HubRise's latest updates in Inventory Management, designed to streamline interactions between inventories, catalogs, and locations. Delve into on-site inventory interaction via OrderLine, the new 'until' field for nuanced stock control, and our enhanced Shopify Bridge for large inventory syncs.
excerpt: We've introduced catalog variants. This new feature allows you to manage a single catalog across multiple sales channels and locations, while maintaining the flexibility to customise prices and availability for each channel and location.
---

[//]: # "Photo credits: TODO"

At HubRise, we are committed to continuously refining our platform to align with the operational realities and emerging needs of the restaurant and retail sectors. Our recent updates to the Inventory Management module reflect this unwavering commitment. Let's delve into these updates that fundamentally streamline the interaction between inventories, catalogs, and locations.

### Decoupling Inventory from Catalogs

In our previous structure, inventories were intrinsically tied to catalogs under a defined API framework. However, recognizing the operational nuance between catalogs and inventory in real-world scenarios, we've made a pivotal change. Inventories are now exclusively linked to locations, which has prompted an update to our API routes. For instance, the old route `GET /catalogs/:id/location/inventory` has transitioned to a more intuitive `GET /location/inventory`. Similarly, `PUT/PATCH /catalogs/:id/location/inventory` has been updated to `PUT/PATCH /location/inventory`, making the interaction more straightforward and location-centric.

### OrderLine: On-Site Inventory Interaction

OrderLine, our adept order management tool designed for tablets, has been enriched with a feature allowing in-location viewing and modification of inventory data. This update empowers staff within locations to have real-time insights into stock levels and make necessary adjustments on-the-go, fostering a more dynamic and responsive inventory management framework.

### Introducing the "Until" Field for Zero Stock Scenarios

A notable addition is the `until` field in the body of `PUT inventory` requests. This field comes into play when the stock level is set to zero (`"stock": "0"`). When employed, it specifies a date (in ISO 8601 format) post which the stock for the particular SKU will revert to null, signifying an infinite stock. This feature provides a more nuanced control over stock levels, especially during temporary stock-out scenarios.

```json
[
  {
    "sku_ref": "EGG",
    "stock": "0",
    "until": //date in iso8601
  }
]
```

### Shopify Bridge: Scaling Inventory Synchronization

With an eye on scalability, the synchronization of inventory data via our Shopify Bridge has received a substantial boost. Particularly beneficial for large inventory updates, an asynchronous process has been introduced to ensure seamless sync operations, regardless of the inventory size. This enhancement significantly elevates the capacity and efficiency of inventory synchronization between HubRise and Shopify.

### Reflecting on the Old Inventory API

The earlier framework maintained a close nexus between inventories and catalogs at specific locations. An inventory was essentially a reflection of stock levels of different SKUs or options in a catalog, unique to each location. This association was automatic, with no provision for creating or deleting inventories. However, with the evolved framework, the focus has shifted towards a more location-centric inventory management, enhancing adaptability and real-world alignment.

These updates underscore our dedication to offering a robust, intuitive, and scalable platform for our users. As we transition to this enhanced framework, we are setting new benchmarks in seamless integration and efficient operations in the hospitality and retail landscapes.
