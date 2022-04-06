---
title: Understanding JSON Syntax
position: 4
layout: documentation
meta:
  title: Understanding JSON Syntax | How to Read HubRise logs
  description: Short introduction to JSON syntax in non-technical terms to better understand HubRise requests.
---

## Example of JSON Request

Consider again the original order: "One pizza margherita, with olives as optional toppings, and two bacon burgers, for a total amount of 20.45 euros, to be paid in cash upon collection."

For more details, see [A Practical Example](/docs/hubrise-logs/a-practical-example).

One possible translation of this order into JSON format is the following.

```json
{
  "items": [
    {
      "product": "pizza margherita",
      "quantity": 1,
      "options": [
        {
          "type": "topping",
          "name": "olives"
        }
      ]
    },
    {
      "product": "bacon burger",
      "quantity": 2,
      "options": []
    }
  ],
  "payment": {
    "total": "20.45 EUR",
    "type": "cash"
  },
  "service type": "collection"
}
```

## Indentation

The first thing to notice in the JSON request above is the indentation, that is the amount of blank spacing on the left before the start of the line.

At level 0 of indentation, there are the two curly brackets that mark the beginning and end of the request. At level 1 there are the items, payment and service type nodes. The higher the level of indentation, the deeper is the element in the structure of the JSON object. Notice that these levels coincide with those in the diagram presented before. For more details, see [Organising Information](/docs/hubrise-logs/organising-information).

Each level of indentation depends on the level hierarchically above. So, to know how many bacon burgers are present in the order, proceed as follows:

- Start from the items node.
- Move down one indentation level and find the objects in the items list.
- Find the object with the value bacon burger associated with the product key.
- Once you find that object, look for the quantity node inside.
- Read the value associated with the quantity node.

This trick might be enough to allow you to skim through any JSON request to find the values associated with a specific key.

## Technical Details

A few technical details might be useful to understand better how JSON works.

Curly brackets {} delimit the beginning and end of a JSON object, therefore they are always found as the very first and last lines of a request.

A JSON object contains one or more key-value pairs, where each pair is separated from the next by a comma, except for the last pair.

Every key must be a string, typically but not necessarily a valid English word, and must be surrounded by double quotation marks. Using a descriptive term helps a human to identify the content of information.

The value associated with a key can be any of the following options:

- A string
- A number
- A boolean (true or false)
- A JSON object
- A list of any of the above

The possibility of having JSON objects as values of a key allows the structuring of information in a hierarchy.

Lists are enclosed within square brackets [] and contain items separated by commas.
