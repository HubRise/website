---
title: Introduction to API Requests
position: 5
layout: documentation
meta:
  title: Introduction to API Requests | How to Read HubRise logs
  description: Short introduction to API request in non-technical terms to better understand HubRise requests.
---

## Overview

API requests are at the core of the communication between different systems. In non-technical terms, they convey the necessary information to push or pull data from a system and modify its state. For example, an online ordering system connected to HubRise can use API requests to send the details about a new order to HubRise.

The actual content of the request is a JSON object with key-value pairs of information that follow a predefined syntax. For more information, see [Organising Information](/docs/hubrise-logs/organising-information) and [Understanding JSON Syntax](/docs/hubrise-logs/understanding-json-syntax). However, an API request is more than just its content.

## Components of API Requests

Every API interaction involves two computers: One that sends a request, and another that receives the request and returns a response. Request and response are therefore the two main parts of an API exchange.

The request has the following components.

- HTTP method
- URL
- Headers
- Body

When considered together, the HTTP method and the URL are called the endpoint of a request.

The response has the following components.

- Code, a three-digit number
- Headers
- Body

Before analysing these components in detail and how they appear in HubRise, consider a simple analogy.

## A simple analogy

Imagine you want to send a letter to your electricity company: You may want to change the current contract, get information about a specific bill or cancel the contract altogether.

The letter you send to the electricity company would be the request. In this analogy, the content of the letter is the request body, and would include all your personal information in a structured JSON.

The header of the letter is akin to the request headers, and it contains the metadata of the request. It might include, for example, a customer reference, which plays an analogous role to the authentication token, or references to previous letters as in the case of pagination cursors.

Continuing with the analogy, the address you put on your letter is the domain part of the URL. It specifies where you want to send your letter, in this case to your electricity company.

The action you want to perform with the content of the letter, such as cancelling your contract, would be specified by the endpoint.

Finally, when you send a letter, you generally receive something back: The response. The electricity company either acknowledges the successful receipt of the request or, if the letter cannot be delivered, the post office will notify you the reason for the missed delivery. This would be the response code.
