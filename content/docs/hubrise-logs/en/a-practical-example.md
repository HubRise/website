---
title: A Practical Example
position: 3
layout: documentation
meta:
  title: A Practical Example | How to Read HubRise logs
  description: Example of an order and its corresponding JSON request.
---

JSON objects can describe complex data models by combining several elements in a hierarchical structure. The following scenario describes a sample order and the relative JSON request, and is a simplified version of a real order you can find in the HubRise back office.

## A Sample Order

Someone places the following order in your system: "One pizza margherita, with olives as optional toppings, and two bacon burgers, for a total amount of 20.45 euros, to be paid in cash upon collection."

How can you organise this request in a rational way, such that information is arranged in a hierarchical structure?

There are three main pieces of information at the top of the structure:

- The items in the order
- The payment information
- The service type

### Items

The items in the order can be described as a list of JSON objects, each with its own key-value pairs inside. In this case, there are two items, each defined as an object containing the following information:

- The name of the product
- The quantity
- The optional changes

Notice that they both have the same structure but different values.

The optional changes can then be structured as a list of JSON objects, each describing a different optional change. For the pizza, there is only one optional change in the list, with type "topping" and name “olives”. For the burgers, no optional changes are present, and the associated list is therefore empty.

### Payment

The payment information can be structured as an object that contains the following information:

- The total amount to be paid.
- The payment method chosen by the customer.

### Service type

The last node at the top level of the order is the service type chosen by the customer. In this case it is represented by a key-value pair with value "cash".

## Information Structure

We broke down the original order into three main nodes of information, and for each of them we listed the various features that they must have. We organised information in a hierarchical way.

To make the structure of the order even clearer, we can draw the following diagram.
![JSON Information Structure](../images/003-en-2x-sample-order.png)

The main nodes at the top of the order are "items", “payment”, and “service type”. From each of the nodes stems a connection to increasingly detailed levels of information.

For example, to know how much the total order costs, you can start from the payment node, go down one level to the total node and read the value associated with it: 20.45 EUR.
