---
title: Integration guide
position: 3
layout: documentation
meta:
  title:
  description:
---

## Supported features

- Tags on products
- Options
- Deals
- Pictures: on products, but not on deals

Not supported:

- Tags on options

## Menu setup

If a code is missing or not recognized (on a sku, deal, etc.), the order is rejected with an error 422 (as of Dec. 2019, My Order Box is considering changing their policy to accept such orders).

### Options

HubRise and My Order Box use different terminology:

| HubRise      | My Order Box  |
| ------------ | ------------- |
| option_lists | Options       |
| options      | Option values |

`Options` in My Order Box are of two types: `Add-on` or `Reference`

My Order Box relies on the following naming convention:

- if an `Option`'s name starts with the word `Toppings`, it is sent as a unique `option_ist` in HubRise, with one `option` per `Option Value`. The `option_ist`'s name is "Toppings".
- otherwise the `Option` is sent as a separate `option_list` in HubRise

If an `Option` is of the toppings type, its `Option Values` which are made as Default in My Order Box are grouped together and sent to HubRise in a new `option_list`, whose name is "Ingredients".
