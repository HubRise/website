---
title: Orders
path_override: orders
position: 4
layout: documentation
meta:
  title: Orders | Zelty | HubRise
  description: Instructions on managing the orders in your Zelty EPOS. Synchronise data between your EPOS and your apps.
---

Once HubRise is connected to Zelty and ref codes have been mapped, no further steps are needed. Your Zelty EPOS will automatically receive all orders sent to HubRise by other apps.

## Receive Orders

When you receive a new order in your EPOS, a notification will appear, and the order will be available in the order list.

To view the order list:

1. Navigate to **Tableau de bord** (Dashboard.)
1. Click on **Statistiques** (Statistics).
1. Select the **Tickets** tab (Ticket).

If you have correctly connected Zelty to HubRise and mapped all ref codes on other apps but orders are not automatically received, and you would like to investigate why, see [Troubleshooting](/apps/zelty/troubleshooting). You can also check logs for every transaction in HubRise. For more information, see the [Logs section](/docs/data#logs) of the HubRise user guide.

## Order Data

When the customer chooses to pay upon delivery or collection, no payment information should be sent to the Zelty EPOS, as doing so would close the transaction.
