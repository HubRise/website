---
title: Understanding Logs
path_override: understanding-logs
position: 8
layout: documentation
meta:
  title: Understanding Logs | PixelPoint Bridge | HubRise
  description: Instructions on how to read the output in the logs coming from PixelPoint Bridge. Synchronise data between your EPOS and your apps.
---

The logs page on PixelPoint Bridge is divided into two parts: Request and Response. The former displays the information sent from HubRise to PixelPoint, the latter the response sent from the PAR PixelPoint EPOS back to PixelPoint Bridge.

To understand the logs in PixelPoint Bridge, you need to know how to read XML files first.

## An XML Primer {#xml-primer}

XML is a format to store and transfer information organised in nodes of key-value pairs with a hierarchical structure. Each piece of information is divided into:

- The name or type of information (the _key_).
- The content of the information (the _value_).

Consider this example:

`<ProdNum>123456789</ProdNum>`

This node means that the key `ProdNum` is associated with the value `123456789`. Notice how the value is enclosed inside the key tags. You can think of it as a Russian doll structure: Each doll contains one or more dolls, and every half doll has a unique partner that makes the doll whole.

For more extensive explanations, see this [introduction on the XML format](https://www.w3schools.com/xml/xml_whatis.asp) by W3Schools.

## PixelPoint Request Log

The main nodes of a request appearing on PixelPoint Bridge are `RequestType`, `EOITransfer` and `DebugMode`.

The value for `RequestType` is always set to `10`, while each node of `EOITransfer` contains the following subnodes with an increasing order of specific details about the request:

- `EOIAuthenticationToken`
- `Transaction`
- `Member`

Finally, the `DebugMode` node only appears if debug mode is selected from the Configuration page and the value associated with this node will be `1` in this case.

### The EOIAuthenticationToken Node

This node has a single value that represents the PixelPoint API token saved in PixelPoint Bridge. For more information, see [Connect to HubRise](/apps/pixelpoint-bridge/connect-hubrise).

### The Transaction Node

The `Transaction` node and its subnodes are especially relevant to diagnose possible problems in the request. The main subnodes of interest are:

- `SaleTypeNum`: The service type associated with the order. For more information, see [Setting Service Types](apps/pixelpoint-bridge/map-ref-codes#service-types).

- `ScheduleTime`: If present, it indicates the date and time the order should be delivered or expected to be ready for collection. It is not present if the customer does not specify the time for collection, or if delivery is scheduled within 30 minutes of the order or as soon as possible.

- `Items`: Must contain at least one `Item` node. For each `Item` node, the following subnodes are generally present:

  - `ProdNum`: The unique product code that is associated with the product in your EPOS catalog. For more information, see [Mapping Ref Codes](/apps/pixelpoint-bridge/map-ref-codes).
  - `CouponNum`: The unique product code associated with a discount in your EPOS catalog. `CouponNum` and `ProdNum` are mutually exclusive, therefore only one must be present inside the `Item` node.
  - `CostEach`: The cost of each `Item`.
  - `Quantity`: The product quantity ordered by the customer.
  - `ItemId` and `ParentId`: Integer numbers used together to identify products from options. For more information, see [Recognising Products and Options](/apps/pixelpoint-bridge/understanding-logs#products-and-options).
  - `ComboItemId`: It is present when the product is part of a deal. The value associated with this key represents the code for the deal in your EPOS catalog. For more information, see Setting the Product Catalog.
  - `PriceApplied`: This value is always `13`.

  Note that discounts and charges (except for customer's tips) are also encoded in separate `Item` nodes.

- `Payment`: This node and its subnodes specify the information about the payment. It is missing if the order is not paid online, so that the transaction remains open in the EPOS system. The transaction will be closed only when the customer pays upon delivery of collection. The following subnodes are generally present:

  - `MethodNumber`: The code associated with the payment method in the PixelPoint EPOS.
  - `AuthType`: This value is always `114`.
  - `Tender`: The total amount paid (minus the optional `Tip`).
  - `Tip`: The amount of tip left by the customer, if different from 0. The tip is only present for online payments, but not for cash payments.

- `CustomRecFooter`: When the order is paid upon delivery, the `Payment` node is not created and the payment method name is encoded in this node.

### Recognising Products and Options {#products-and-options}

To tell the difference between an actual product and an optional change in a PixelPoint request, you need to check the value for `ParentId` and compare it with the `ItemId` of the product:

- If `ParentId` and `ItemId` are the same, this is an actual product.
- If `ParentId` and `ItemId` are different, this is an optional change and `ParentId` specifies the `ItemId` of the main product.

### Recognising Half and Half Products

Half and half products are encoded in the PixelPoint request as a group of different `Item` nodes.

- The first `Item` node of the group can be recognised because the `Description` node has the value `Half half`.
- The following (optional) nodes refer to options associated with the entire product, for example `Extra sauce` or `Extra cheese`. Their `ParentId` will be the same as the `ItemId` of the main Half and Half node.
- The two "halves" are encoded as separate `Item` nodes, even if they are two halves of the same product, with `ParentId` pointing to the main `Item` node of the group. The `Quantity` node has value `0.5`.
- Toppings and ingredients have the `ParentId` value pointing to the `ItemId` value of the respective half. Their `Quantity` value is `0.5` and they are passed as forced answers to the EPOS.

### The Member Node

This node and its subnodes carry information about the customer that placed the order and the delivery address. The keys have self explanatory names like `FirstName`, `LastName`, `Email`, etc.
