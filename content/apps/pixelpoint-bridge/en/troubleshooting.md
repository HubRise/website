---
title: Troubleshooting
position: 9
layout: documentation
meta:
  title: Troubleshooting | PixelPoint Bridge | HubRise
  description: Troubleshooting PixelPoint Bridge connection with HubRise for your EPOS and other apps to work as a cohesive whole. Connect apps and synchronise your data.
---

Analysing the logs associated with an order is the first action to perform when troubleshooting. The following sections describe a few typical sources of errors.

## PixelPoint Response Log

The response log in PixelPoint Bridge is very useful to understand what has gone wrong in the order. As for requests, information in the response logs is encoded in [XML format](/apps/pixelpoint-bridge/understanding-logs/#an-xml-primer).

The most important piece of information is the `ErrorNum` node. This value is either `0` if the order is successful, or `-1` if there has been an error. The resulting response log will be different depending on this value.

### Successful Orders

If the order is successful, the response log will present the following fields:

- `ErrorNum`: This value is `0` if the order is successful.
- `Transaction`:
  - `Status`: Inside the `Transaction` node, if its value is `3`, the transaction has been closed.
- `Payment`: This node and its subnodes are only present if the payment is completed online.
  - `Status`: Inside the `Payment` node, if its value is `3`, the payment has been processed.

### Failed Orders

- `ErrorNum`: This value is `-1` if there has been an error.
- `Exception`: If it is present, it gives information about internal errors in the PixelPoint system.
- `SubErrorNum`: If it is present, it provides the HTTP error code of the associated request.
- `EOITransfer`: If it is present, it gives additional information in plain English about the error.

## Typical Error Cases

### Wrong API Token

A wrong API token used in PixelPoint Bridge is generally associated with the following error in the response body.

```
<ErrorNum>-1</ErrorNum>
<SubErrorNum>401</SubErrorNum>
<EOITransfer>
   <EOIMessage>Access Token Denied</EOIMessage>
</EOITransfer>

```

### Connection Issues with the Store

If there are issues with the connection to the store, the following error appears in the response body.

```
<ErrorNum>-1</ErrorNum>
<SubErrorNum>401</SubErrorNum>
<EOITransfer>
   <EOIMessage>Order Rejected. Reason: Store is disconnected</EOIMessage>
</EOITransfer>

```

## HubRise vs PixelPoint Requests

Possible issues can be due to a mismatch of configuration between the PAR PixelPoint EPOS and HubRise. To verify this, you need to compare the requests on HubRise with those on PixelPoint Bridge. The information about an order that appears in the PixelPoint Bridge logs is also visible in the HubRise back office, under **DATA** > **ORDERS**.

PixelPoint requests are in [XML format](/apps/pixelpoint-bridge/understanding-logs/#an-xml-primer), while the HubRise API uses JSON. One of the duties of the Bridge app is to translate one format into the other.

Besides, they also use different keys to refer to the same value. The following table summarises how to map the API keys from HubRise to PixelPoint. When investigating a problem with support teams, you might want to use their respective API key to avoid confusion.

A table has been created to help map keys from HubRise to PixelPoint. For more information, see [HubRise vs PixelPoint Terms](/apps/pixelpoint/hubrise-pixelpoint-terms/).

## PAR PixelPoint Support

PAR PixelPoint support team can be contacted at [partnersupport@partech.com](mailto:partnersupport@partech.com) for issues with the configuration of the EPOS.
