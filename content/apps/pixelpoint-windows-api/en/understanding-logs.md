---
title: Understanding Logs
path_override: understanding-logs
position: 4
layout: documentation
meta:
  title: Understanding Logs | PixelPoint Windows API | HubRise
  description: Instructions on how to read the output in the logs coming from PixelPoint Windows API. Synchronise data between your EPOS and your apps.
---

PixelPoint Windows API saves every order from HubRise in a temporary folder on the local server. For each order, there will be two files: The original order pulled from HubRise, in JSON format, and the order sent to PixelPoint, in XML format.

By comparing the two files, it is possible to troubleshoot failed orders and to understand the possible causes.

For a detailed description on how to read and troubleshoot JSON requests in HubRise, see [Understanding Logs in HubRise](/docs/hubrise-logs/overview).

To understand the PixelPoint logs in XML format, you need to know how to read XML files first.

## An XML Primer {#xml-primer}

XML is a format to store and transfer information organised in nodes of key-value pairs with a hierarchical structure. Each piece of information is divided into:

- The name or type of information (the _key_).
- The content of the information (the _value_).

Consider this example:

`<ProdNum>123456789</ProdNum>`

This node means that the key `ProdNum` is associated with the value `123456789`. Notice how the value is enclosed inside the key tags. You can think of it as a Russian doll structure: Each doll contains one or more dolls, and every half doll has a unique partner that makes the doll whole.

For more extensive explanations, see this [introduction on the XML format](https://www.w3schools.com/xml/xml_whatis.asp) by W3Schools.

## PixelPoint Request Log

The main nodes of a request appearing on PixelPoint Bridge are `RequestType`, `DebugMode`, `Transaction`, and `Member`.

The value for `RequestType` is always set to `10`. The `DebugMode` node only appears if debug mode is active and the value associated with this node will be `1` in this case.

The `Transaction` and `Member` nodes provide all the information about the order.

### The Transaction Node

The `Transaction` node and its subnodes are especially relevant to diagnose possible problems in the request. The main subnodes of interest are:

- `SaleTypeNum`: The service type associated with the order. For more information, see [Setting Service Types](/apps/pixelpoint-windows-api/map-ref-codes).

- `ScheduleTime`: If present, it indicates the date and time the order should be delivered or expected to be ready for collection. It is not present if the customer does not specify the time for collection, or if delivery is scheduled within 30 minutes of the order or as soon as possible.

- `Items`: Must contain at least one `Item` node. For each `Item` node, the following subnodes are generally present:

  - `ProdNum`: The unique product code that is associated with the product in your EPOS catalog. For more information, see [Mapping Ref Codes](/apps/pixelpoint-windows-api/map-ref-codes).
  - `CouponNum`: The unique product code associated with a discount in your EPOS catalog. `CouponNum` and `ProdNum` are mutually exclusive, therefore only one must be present inside the `Item` node.
  - `CostEach`: The cost of each `Item`.
  - `Quantity`: The product quantity ordered by the customer.
  - `ItemId`: A unique number inside the Transaction that is used to identify products from options, together with `ParentId`.
  - `ParentId`: A number that is used to identify products from options, together with `ItemId`.
  - `ComboItemId`: It is present when the product is part of a deal. The value associated with this key represents the code for the deal in your EPOS catalog.

- `Payment`: This node specifies the information about the payment. It is missing if the order is not paid online, so that the transaction remains open in the EPOS system. The transaction will be closed only when the customer pays upon delivery of collection. The following subnodes are generally present.

  - `MethodNumber`: The code associated with the payment method in the PixelPoint EPOS.
  - `AuthType`: This value is always `114`.
  - `Tender`: The total amount paid.

### Recognising Products and Options

To tell the difference between an actual product and an optional change in a PixelPoint request, you need to check the value for `ParentId` and compare it with the `ItemId` of the product:

- If `ParentId` and `ItemId` are the same, this is an actual product.
- If `ParentId` and `ItemId` are different, this is an optional change and `ParentId` specifies the `ItemId` of the main product.

### The Member Node

This node and its subnodes carry information about the customer that placed the order and the delivery address. The keys have self explanatory names like `FirstName`, `LastName`, `Email`, etc.
