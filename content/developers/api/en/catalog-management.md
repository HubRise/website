---
title: Catalog Management
position: 5
layout: documentation
meta:
  title: Catalog Management | API | HubRise
  description:
---

## 1. Catalogs

Catalogs can be created at account or location level.

Account-level catalogs are accessible by all the locations of the account. They are useful when several locations share a common catalog of products.

Catalogs are identified by their name. Catalog names must be unique for any account or location. For instance, two locations can have two different location-level catalogs with the same name. But a location and its holding account cannot have two catalogs with the same name.

### 1.1. Retrieve Catalog

<CallSummaryTable
  endpoint="GET /catalogs/:id"
  accessLevel="location, account"
/>

The response either contains a `location_id` (location level catalog) or an `account_id` (account level catalog) field.

<details>

<summary>Example request</summary>

`GET /catalogs/87yu4`

#### Response:

```json
{
  "id": "87yu4",
  "location_id": "3r4s3-1",
  "name": "Web",
  "created_at": "2020-06-25T11:43:51+02:00",
  "data": {
    "categories": [...],
    "products": [...],
    "options_lists": [...],
    "deals": [...],
    "discounts": [...],
    "charges": [...]
  }
}
```

</details>

### 1.2. List Catalogs

Return the catalogs a location has access to, including the account-level and location-level catalogs.

<CallSummaryTable
  endpoint="GET /locations/:location_id/catalogs"
  shortEndpoint="GET /location/catalogs (location only)"
  accessLevel="location, account"
/>

Return the account-level catalogs of an account:

<CallSummaryTable
  endpoint="GET /accounts/:account_id/catalogs"
  shortEndpoint="GET /account/catalogs (account only)"
  accessLevel="account"
/>

Catalogs returned by the location level form of this request can be either location or account level catalogs:

- For retrieval, this makes no practical difference. Both types of catalogs can be handled in the same way since the URL construction scheme is identical, eg: `/catalogs/:id`.

- For update and delete operations, an account access token is required to modify an account level catalog. A `401` (unauthorized request) error code is returned otherwise.

The `data` field of the catalogs is not returned by this request. To retrieve the actual content of catalogs, use the `/catalogs/:id` endpoint for each catalog.

<details>

<summary>Example request</summary>

`GET /locations/3r4s3-1/catalogs`

#### Response:

```json
[
  {
    "id": "87yu4",
    "name": "Web",
    "created_at": "2020-06-25T11:43:51+02:00"
  },
  {
    "id": "sdm3b",
    "name": "Common menu",
    "created_at": "2020-05-19T13:23:10+02:00"
  }
]
```

</details>

### 1.3. Create Catalog

Creates a new catalog. The products, categories, options, etc. of the catalog can be passed along in the request.

To create a location-level catalog, use this request:

<CallSummaryTable
  endpoint="POST /locations/:location_id/catalogs"
  shortEndpoint="POST /location/catalogs (location only)"
  accessLevel="location, account"
/>

To create an account-level catalog:

<CallSummaryTable
  endpoint="POST /accounts/:account_id/catalogs"
  shortEndpoint="POST /account/catalogs (account only)"
  accessLevel="account"
/>

#### Request parameters:

| Name                                          | Type                          | Description              |
| --------------------------------------------- | ----------------------------- | ------------------------ |
| `name`                                        | string                        | The name of the catalog. |
| `data.categories` <Label type="optional" />   | [Category](#categories)[]     | List of categories.      |
| `data.products` <Label type="optional" />     | [Product](#products)[]        | List of products.        |
| `data.option_lists` <Label type="optional" /> | [OptionList](#option-lists)[] | List of option lists.    |
| `data.deals` <Label type="optional" />        | [Deal](#deals)[]              | List of deals.           |
| `data.discounts` <Label type="optional" />    | [Discount](#discounts)[]      | List of discounts.       |
| `data.charges` <Label type="optional" />      | [Charge](#charges)[]          | List of charges.         |

<details>

<summary>Example request</summary>

`POST /accounts/3r4s3/catalogs`

```json
{
  "name": "In Store",
  "data": {
    "categories": [
      {
        "name": "Cars",
        "ref": "CARS"
      },
      {
        "name": "Electric cars",
        "ref": "ECARS",
        "parent_ref": "CARS"
      }
    ],
    "products": [
      {
        "name": "Tesla model S",
        "ref": "TESLA_S",
        "category_ref": "ECARS",
        "skus": [
          {
            "ref": "TS_55",
            "name": "55 Kwh",
            "price": "80000.00 USD",
            "option_list_refs": ["TES_COL"]
          },
          {
            "ref": "TS_85",
            "name": "85 Kwh",
            "price": "110000.00 USD",
            "option_list_refs": ["TES_COL"]
          }
        ]
      }
    ],
    "option_lists": [
      {
        "ref": "TES_COL",
        "name": "Tesla Color",
        "type": "single",
        "options": [
          {
            "name": "White",
            "ref": "TES_COL_W"
          },
          {
            "name": "Vantablack",
            "ref": "TES_COL_B",
            "price": "4500.00 USD"
          }
        ]
      }
    ]
  }
}
```

</details>

### 1.4. Update Catalog

Update a catalog.

If the `data` field is passed, the whole catalog content is cleared and recreated from the passed data.

<CallSummaryTable
  endpoint="PUT /catalogs/:id"
  accessLevel="account"
/>

<details>

<summary>Example request</summary>

`PUT /catalogs/87yu4`

```json
{
  "name": "Crouch End menu",
  "data": {
    "categories": [...],
    "products": [...]
  }
}
```

#### Response:

```json
{
  "id": "87yu4",
  "name": "Crouch End menu",
  "created_at": "2020-06-28T18:23:10+02:00",
  "data": {
    "categories": [...],
    "products": [...]
  }
}
```

</details>

### 1.5. Delete Catalog

Delete a catalog and all its content (ie categories, products, ...).

<CallSummaryTable
  endpoint="DELETE /catalogs/:id"
  accessLevel="location, account"
/>

<details>

<summary>Example request</summary>

`DELETE /catalogs/87yu4`

</details>

## 2. Categories

The categories of a catalog form a tree: categories without a `parent_id` are the main categories. The other categories are their children, grandchildren, etc. Every product belongs to a category. Deals can also optionally belong to a category.

The tree is sorted. Categories and products are retrieved in the same order as they were uploaded in the catalog creation/update.

### 2.1. Category in Catalog Upload

#### Parameters:

| Name                                    | Type     | Description                                                                                                     |
| --------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------- |
| `ref`                                   | string   | The unique ref of the category. Must be unique among all categories of the catalog.                             |
| `parent_ref` <Label type="optional" />  | string   | If not present, the category will be considered as a root category.                                             |
| `name`                                  | string   | The name of the category.                                                                                       |
| `description` <Label type="optional" /> | string   | The description of the category.                                                                                |
| `tags` <Label type="optional" />        | string[] | List of tags. A tag is a free text used to describe some particular characteristics of a product or a category. |
| `image_ids` <Label type="optional" />   | string[] | List of image ids attached to the category.                                                                     |

#### Example:

```json
{
  "ref": "SPIZ",
  "parent_ref": "PIZ",
  "name": "Spicy Pizzas",
  "description": "Awesome spicy pizzas",
  "tags": ["spicy"]
}
```

### 2.2. Retrieve Category

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/categories/:id"
  accessLevel="location, account"
/>

| Name          | Type             | Description                                                                                                     |
| ------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| `id`          | string           | The id of the category.                                                                                         |
| `ref`         | string           | The ref of the category.                                                                                        |
| `parent_id`   | string or `null` | The id of the parent category, or `null` if the category is a root category.                                    |
| `name`        | string           | The name of the category.                                                                                       |
| `description` | string or `null` | The description of the category.                                                                                |
| `tags`        | string[]         | List of tags. A tag is a free text used to describe some particular characteristics of a product or a category. |

#### Example request:

`GET /catalogs/87yu4/categories/lsndh`

```json
{
  "id": "lsndh",
  "ref": "SPIZ",
  "parent_id": "dadj5",
  "name": "Spicy Pizzas",
  "description": "Awesome spicy pizzas",
  "tags": ["spicy"]
}
```

### 2.3. List Categories

Return the categories of the catalog. Categories are returned in a deep first traversal order (category 1, then category 1's children, then category 2, then category 2's children, etc.)

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/categories"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/categories`

```json
[
  {
    "id": "lsndh",
    "ref": null,
    "parent_id": "dadj5",
    "name": "Cocktails",
    "description": "Awesome cocktails",
    "tags": ["alcohol"]
  },
  ...
]
```

## 3. Products

A product belongs to a category. A product has one or several skus.

### 3.1. Product in Catalog Upload

#### Parameters:

| Name                                    | Type           | Description                                                                                                     |
| --------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------- |
| `ref` <Label type="optional" />         | string         | The ref of the product.                                                                                         |
| `category_ref`                          | string         | The ref of the parent category.                                                                                 |
| `name`                                  | string         | The name of the product.                                                                                        |
| `description` <Label type="optional" /> | string         | The description of the product.                                                                                 |
| `tags` <Label type="optional" />        | string[]       | List of tags. A tag is a free text used to describe some particular characteristics of a product or a category. |
| `image_ids` <Label type="optional" />   | string[]       | List of image ids attached to the product                                                                       |
| `skus`                                  | [Sku](#skus)[] | List of skus of this product. A product must contain at least one sku.                                          |

#### Example:

```json
{
  "ref": "REG",
  "category_ref": "PIZ",
  "name": "Regina",
  "tags": ["pizza", "vegetarian"],
  "image_ids": ["clom9"],
  "skus": [
    {
      "name": "Small",
      "ref": "REG-SM",
      "price": "10.30 EUR",
      "option_list_refs": ["SAUCE", "PIZZA_TOPPINGS"]
    }
  ]
}
```

### 3.2. Retrieve Product

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/products/:id"
  accessLevel="location, account"
/>

| Name          | Type             | Description                               |
| ------------- | ---------------- | ----------------------------------------- |
| `id`          | string           | The id of the product.                    |
| `ref`         | string or `null` | The ref of the product.                   |
| `category_id` | string           | The id of the parent category.            |
| `name`        | string           | The name of the product.                  |
| `description` | string or `null` | The description of the product.           |
| `tags`        | string[]         | List of tags.                             |
| `image_ids`   | string[]         | List of image ids attached to the product |
| `skus`        | [Sku](#skus)[]   | List of skus of this product.             |

#### Example request:

`GET /catalogs/87yu4/products/abg5a`

```json
{
  "id": "abg5a",
  "category_id": "lsndh",
  "name": "Margarita",
  "skus": [
    {
      "id": "sb65k",
      "name": "Small",
      "ref": "MAR-SM",
      "price": "9.80 EUR",
      "option_list_ids": ["e2sfj"]
    },
    {
      "id": "xps5s",
      "name": "Large",
      "ref": "MAR-LG",
      "price": "16.80 EUR"
    }
  ]
}
```

### 3.3. List Products

Retrieve the list of products in the catalog.

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/products"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/products`

```json
[
  {
    "id": "abg5a",
    "category_id": "lsndh",
    "name": "Margarita"
    ...
  },
  ...
]
```

## 4. Skus

Skus ("Stock Keeping Unit") is a distinct type of item for sale, such as a product or service, and all attributes associated with the item type that distinguish it from other item types, such as the size.

A product contains one or several skus. A sku is always attached to a product.

### 4.1. Sku in Catalog Upload

#### Parameters:

| Name                                         | Type                                                       | Description                                                                                                             |
| -------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ref` <Label type="optional" />              | string                                                     | The ref of the sku, which will be passed along in orders.                                                               |
| `name` <Label type="optional" />             | string                                                     | The name of the sku. Skus belonging to a same product must have unique names. One sku per product can have a null name. |
| `restrictions` <Label type="optional" />     | [Restrictions](#restrictions)                              | An optional set of conditions that must be matched for the sku to be available.                                         |
| `price`                                      | [Money](/developers/api/general-concepts/#monetary-values) | The price of the sku.                                                                                                   |
| `price_overrides`                            | [PriceOverrides](#price-overrides)                         | Price overrides in different contexts, such as a specific service type.                                                 |
| `option_list_refs` <Label type="optional" /> | string[]                                                   | The refs of the option lists this sku is attached to.                                                                   |
| `tags` <Label type="optional" />             | string[]                                                   | List of tags.                                                                                                           |

#### Example:

```json
{
  "ref": "MAR-SM",
  "name": "Small",
  "restrictions": {
    "end_time": "13:30"
  },
  "price": "9.80 EUR",
  "price_overrides": [
    {
      "service_types": ["delivery"],
      "price": "12.30 EUR"
    }
  ],
  "option_list_refs": ["SAUCE", "PIZZA_TOPPINGS"],
  "tags": ["hidden"]
}
```

### 4.2. Retrieve Sku

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/products/:product_id/skus/:id"
  accessLevel="location, account"
/>

| Name              | Type                                                       | Description                                                         |
| ----------------- | ---------------------------------------------------------- | ------------------------------------------------------------------- |
| `id`              | string                                                     | The id of the sku.                                                  |
| `ref`             | string or `null`                                           | The ref of the sku.                                                 |
| `name`            | string or `null`                                           | The name of the sku.                                                |
| `product_id`      | string                                                     | The id of the sku's parent product.                                 |
| `restrictions`    | [Restrictions](#restrictions)                              | Set of conditions that must be matched for the sku to be available. |
| `price`           | [Money](/developers/api/general-concepts/#monetary-values) | The price of the sku.                                               |
| `price_overrides` | [PriceOverrides](#price-overrides)                         | Price overrides in different contexts.                              |
| `option_list_ids` | string[]                                                   | The ids of the option lists this sku is attached to.                |
| `tags`            | string[]                                                   | List of tags.                                                       |

#### Example request:

`GET /catalogs/87yu4/products/abg5a/skus/sb65k`

```json
{
  "id": "sb65k",
  "ref": "MAR-SM",
  "name": "Small",
  "product_id": "abg5a",
  "restrictions": {
    "end_time": "13:30"
  },
  "price": "9.80 EUR",
  "price_overrides": [],
  "option_list_ids": ["e2sfj"],
  "tags": ["hidden"]
}
```

### 4.3. List Skus

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/products/:product_id/skus"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/products/abg5a/skus`

```json
[
  {
    "id": "sb65k",
    "ref": "MAR-SM",
    "name": "Small"
    ...
  }
]
```

## 5. Option Lists

An option list can be attached to one or several skus. It has one or several options.

An option list is either of type `single` (a single option must be applied to a sku) or `multiple` (zero, one or several options can be applied to a sku).

### 5.1. Option List in Catalog Upload

#### Parameters:

| Name                             | Type                 | Description                                                                  |
| -------------------------------- | -------------------- | ---------------------------------------------------------------------------- |
| `ref`                            | string               | The ref of the option list. Must be unique among the catalog's option lists. |
| `name`                           | string               | The name of the option list.                                                 |
| `type`                           | string               | Either `single` or `multiple`.                                               |
| `tags` <Label type="optional" /> | string[]             | List of tags.                                                                |
| `options`                        | [Option](#options)[] | A list of options. An option list must contain at least one option.          |

#### Example:

```json
{
  "ref": "COL",
  "name": "Color",
  "type": "single",
  "tags": ["style"],
  "options": [
    {
      "name": "Blue",
      "ref": "BLU",
      "price": "0.00 EUR",
      "default": true
    },
    {
      "name": "Red",
      "ref": "RED",
      "price": "1.00 EUR"
    }
  ]
}
```

If the list type is `single`, one single option should be set as default. A default option will be chosen arbitrarily otherwise.

### 5.2. Retrieve Option List

Retrieve an option list and the possible choices (options).

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/option_lists/:id"
  accessLevel="location, account"
/>

| Name                             | Type                 | Description                    |
| -------------------------------- | -------------------- | ------------------------------ |
| `id`                             | string               | The id of the option list.     |
| `ref`                            | string               | The ref of the option list.    |
| `name`                           | string               | The name of the option list.   |
| `type`                           | string               | Either `single` or `multiple`. |
| `tags` <Label type="optional" /> | string[]             | List of tags.                  |
| `options`                        | [Option](#options)[] | A list of options.             |

#### Example request:

`GET /catalogs/87yu4/option_lists/e2sfj`

```json
{
  "id": "e2sfj",
  "ref": "SAU-SM",
  "name": "Sauce",
  "type": "single",
  "options": [
    {
      "id": "m9d6e",
      "name": "BBQ",
      "ref": "BBQ",
      "price": "2.50 EUR"
    },
    ...
  ]
}
```

### 5.3. List Option Lists

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/option_lists"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/option_lists`

```json
[
  {
    "id": "e2sfj",
    "ref": "SAU-SM",
    "name": "Sauce"
    ...
  },
  ...
]
```

## 6. Options

### 6.1. Option in Catalog Upload

#### Parameters:

| Name                                | Type                                                       | Description                                                                                       |
| ----------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `ref` <Label type="optional" />     | string                                                     | The ref of the option.                                                                            |
| `name`                              | string                                                     | The name of the option.                                                                           |
| `price`                             | [Money](/developers/api/general-concepts/#monetary-values) | The price of the option. Should be set to `0.00 EUR` (adjust the currency) if the option is free. |
| `price_overrides`                   | [PriceOverrides](#price-overrides)                         | Price overrides in different contexts, such as a specific service type.                           |
| `default` <Label type="optional" /> | boolean                                                    | Whether this option is on by default. Default is `false`.                                         |
| `tags` <Label type="optional" />    | string[]                                                   | List of tags.                                                                                     |

#### Example:

```json
{
  "name": "Blue",
  "ref": "BLU",
  "price": "250.00 EUR",
  "price_overrides": [
    {
      "start_date": "2020-08-20",
      "price": "280.00 EUR"
    }
  ],
  "default": false
}
```

### 6.2. Retrieve Option

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/option_lists/:option_list_id/options/:id"
  accessLevel="location, account"
/>

| Name              | Type                                                       | Description                            |
| ----------------- | ---------------------------------------------------------- | -------------------------------------- |
| `id`              | string                                                     | The id of the option.                  |
| `ref`             | string or `null`                                           | The ref of the option.                 |
| `option_list_id`  | string                                                     | The id of the option list.             |
| `name`            | string                                                     | The name of the option.                |
| `price`           | [Money](/developers/api/general-concepts/#monetary-values) | The price of the option.               |
| `price_overrides` | [PriceOverrides](#price-overrides)                         | Price overrides in different contexts. |
| `default`         | boolean                                                    | Whether this option is on by default.  |
| `tags`            | string[]                                                   | List of tags.                          |

#### Example request:

`GET /catalogs/87yu4/option_lists/e2sfj/options/m9d6e`

```json
{
  "id": "m9d6e",
  "ref": "BBQ",
  "option_list_id": "e2sj3",
  "name": "BBQ",
  "price": "2.50 EUR"
}
```

### 6.3. List Options

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/option_lists/:option_list_id/options"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/option_lists/e2sfj/options`

```json
[
  {
    "id": "m9d6e",
    "ref": "BBQ",
    "option_list_id": "e2sj3",
    "name": "BBQ",
    "price": "2.50 EUR"
  },
  ...
]
```

## 7. Deals

### 7.1. Deal in Catalog Upload

#### Parameters:

| Name                                                | Type                                                       | Description                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref` <Label type="optional" />                     | string                                                     | The ref of the deal.                                                                                                                                                                                                                                                                                          |
| `category_ref` <Label type="optional" />            | string                                                     | The [category](#categories) this deal will appear in.                                                                                                                                                                                                                                                         |
| `name`                                              | string                                                     | The deal name.                                                                                                                                                                                                                                                                                                |
| `description` <Label type="optional" />             | string                                                     | The description of the deal.                                                                                                                                                                                                                                                                                  |
| `restrictions` <Label type="optional" />            | [Restrictions](#restrictions)                              | An optional set of conditions that must be matched for the deal to be available.                                                                                                                                                                                                                              |
| `coupon_codes` <Label type="optional" />            | string[]                                                   | The coupon codes that trigger this deal.                                                                                                                                                                                                                                                                      |
| `tags` <Label type="optional" />                    | string[]                                                   | List of tags.                                                                                                                                                                                                                                                                                                 |
| `image_ids` <Label type="optional" />               | string[]                                                   | List of image ids attached to the deal.                                                                                                                                                                                                                                                                       |
| `lines`                                             | array                                                      | List of deal lines. A deal should contain at least one line, with at least one sku.                                                                                                                                                                                                                           |
| `lines.skus`                                        | array                                                      | The skus eligible for this line. Skus are referenced by their `ref`.                                                                                                                                                                                                                                          |
| `lines.skus.ref`                                    | string                                                     | The `ref` of the eligible sku. Skus with no `ref` cannot be included in deals.                                                                                                                                                                                                                                |
| `lines.skus.extra_charge` <Label type="optional" /> | [Money](/developers/api/general-concepts/#monetary-values) | An optional extra charge applied when the sku is selected.                                                                                                                                                                                                                                                    |
| `lines.pricing_effect`                              | string                                                     | One of: `unchanged`, `fixed_price`, `price_off`, `percentage_off`.                                                                                                                                                                                                                                            |
| `lines.pricing_value` <Label type="optional" />     | depends                                                    | The presence and value of this field depends on `pricing_effect`. It is a [Money](/developers/api/general-concepts/#monetary-values) for `fixed_price` and `price_off`, a [decimal](/developers/api/general-concepts/#decimal-values) between "0" and "100" for `percentage_off`, and `null` for `unchanged`. |
| `lines.label` <Label type="optional" />             | string                                                     | A label describing the type of skus that can be selected in this line.                                                                                                                                                                                                                                        |

#### Example:

```json
{
  "ref": "DDRINK",
  "name": "Buy a Small Pizza, Get A Coke for 0.50€ (1€ for Coke XXL)",
  "restrictions": {
    "dow": "123-5--",
    "start_time": "07:00",
    "end_time": "13:30",
    "end_date": "2020-02-02",
    "min_order_amount": "20.00 EUR"
  },
  "tags": ["upselling", "landing-page"],
  "lines": [
    {
      "label": "Pizza",
      "skus": [{ "ref": "REG-SM" }, { "ref": "CAL-SM" }],
      "pricing_effect": "unchanged"
    },
    {
      "label": "Drink",
      "skus": [{ "ref": "COK33" }, { "ref": "COK50", "extra_charge": "0.50 EUR" }],
      "pricing_effect": "fixed_price",
      "pricing_value": "0.50 EUR"
    }
  ]
}
```

### 7.2. Retrieve Deal

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/deals/:id"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/deals/zee1f`

```json
{
  "id": "zee1f",
  "ref": "BOGOF",
  "name": "Buy a Small Pizza, Get One Free",
  "description": "Choose two of our small pizza, the second one is on us! (1€ extra for Calzone)",
  "lines": [
    {
      "skus": [
        { "id": "cksp8", "ref": "REG-SM", "extra_charge": null },
        { "id": "12c35", "ref": "CAL-SM", "extra_charge": null }
      ],
      "pricing_effect": "unchanged"
    },
    {
      "skus": [
        { "id": "cksp8", "ref": "REG-SM", "extra_charge": null },
        { "id": "12c35", "ref": "CAL-SM", "extra_charge": "1.00 EUR" }
      ],
      "pricing_effect": "free"
    }
  ]
}
```

### 7.2. List Deals

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/deals"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/deals`

```json
[
  {
    "id": "zee1f",
    "ref": "BOGOF",
    "name": "Buy a Small Pizza, Get One Free",
    "description": "Choose two of our small pizza, the second one is on us! (1€ extra for Calzone)",
    "lines": [...]
  },
  ...
]
```

## 8. Discounts

A discount is a reduction of the order total price.

### 8.1. Discount in Catalog Upload

#### Parameters:

| Name                                      | Type                          | Description                                                                                                                                                                                                                    |
| ----------------------------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ref` <Label type="optional" />           | string                        | The ref of the discount.                                                                                                                                                                                                       |
| `name`                                    | string                        | The name of the discount.                                                                                                                                                                                                      |
| `description` <Label type="optional" />   | string                        | The description of the discount.                                                                                                                                                                                               |
| `restrictions` <Label type="optional" />  | [Restrictions](#restrictions) | An optional set of conditions that must be matched for the discount to be available.                                                                                                                                           |
| `coupon_codes` <Label type="optional" />  | string[]                      | The coupon codes that trigger the discount.                                                                                                                                                                                    |
| `pricing_effect`                          | string                        | One of: `price_off`, `percentage_off`.                                                                                                                                                                                         |
| `pricing_value` <Label type="optional" /> | depends                       | Depends on `pricing_effect`. It is a [Money](/developers/api/general-concepts/#monetary-values) for `price_off`, and a [decimal](/developers/api/general-concepts/#decimal-values) between "0" and "100" for `percentage_off`. |
| `image_ids` <Label type="optional" />     | string[]                      | List of image ids attached to the discount.                                                                                                                                                                                    |

#### Example:

```json
{
  "ref": "25OFF",
  "name": "25% off your order",
  "restrictions": {
    "min_order_amount": "30.00 EUR"
  },
  "pricing_effect": "percentage_off",
  "pricing_value": "25"
}
```

### 8.2. Retrieve Discount

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/discounts/:id"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/discounts/av1up`

```json
{
  "id": "av1up",
  "ref": "5OFF",
  "name": "5€ off your order",
  "restrictions": {
    "dow": "123----"
  },
  "pricing_effect": "price_off",
  "pricing_value": "5.00 EUR"
}
```

### 8.3. List Discounts

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/discounts"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/discounts`

```json
[
  {
    "id": "av1up",
    "ref": "5OFF",
    "name": "5€ off your order",
    "pricing_effect": "price_off",
    "pricing_value": "5.00 EUR"
  },
  ...
]
```

## 9. Charges

A charge is an additional fee billed to the customer. Examples of charges include delivery charge and tip.

### 9.1. Charge in Catalog Upload

#### Parameters:

| Name                              | Type                                                       | Description                                                    |
| --------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| `ref` <Label type="optional" />   | string                                                     | The ref of the charge.                                         |
| `name`                            | string                                                     | The name of the charge.                                        |
| `type`                            | string                                                     | One of: `delivery`, `payment_fee`, `tip`, `tax` or `other`.    |
| `price` <Label type="optional" /> | [Money](/developers/api/general-concepts/#monetary-values) | The charge price. Should be omitted if the charge is variable. |

#### Example:

```json
{
  "ref": "DEL1",
  "name": "Delivery < 15 km",
  "type": "delivery",
  "price": "1.50 EUR"
}
```

### 9.2. Retrieve Charge

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/charges/:id"
  accessLevel="location, account"
/>

#### Parameters:

| Name    | Type                                                                 | Description                                                 |
| ------- | -------------------------------------------------------------------- | ----------------------------------------------------------- |
| `id`    | string                                                               | The id of the charge.                                       |
| `ref`   | string or `null`                                                     | The ref of the charge.                                      |
| `name`  | string                                                               | The name of the charge.                                     |
| `type`  | string                                                               | One of: `delivery`, `payment_fee`, `tip`, `tax` or `other`. |
| `price` | [Money](/developers/api/general-concepts/#monetary-values) or `null` | The charge amount, or `null` for variable amount.           |

#### Example request:

`GET /catalogs/87yu4/charges/fjes3`

```json
{
  "id": "fjes3",
  "ref": "DEL1",
  "name": "Delivery < 15 km",
  "type": "delivery",
  "price": "1.50 EUR"
}
```

### 9.3. List Charges

Retrieve the list of charges in the catalog.

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/charges"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/charges`

```json
[
  {
    "id": "fjes3",
    "ref": "DEL1",
    "name": "Delivery < 15 km",
    "type": "delivery",
    "price": "1.50 EUR"
  },
  ...
]
```

## 10. Restrictions

A `restrictions` map can be used in [Sku](#skus), [Discount](#discounts) and [Deal](#deals) resources.

It defines a set of conditions for a particular item to be available.

#### Parameters:

| Name                                         | Type                                                        | Description                                                                                                   |
| -------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `dow` <Label type="optional" />              | [DOW](/developers/api/general-concepts/#days-of-the-week)   | Available on certain days of the week.                                                                        |
| `start_time` <Label type="optional" />       | string                                                      | Available from a certain time of the day. Format: `HH:MM`.                                                    |
| `end_time` <Label type="optional" />         | string                                                      | Available until a certain time of the day. Format: `HH:MM`.                                                   |
| `start_date` <Label type="optional" />       | [Date](/developers/api/general-concepts/#dates-and-times)   | Available from a certain date.                                                                                |
| `end_date` <Label type="optional" />         | [Date](/developers/api/general-concepts/#dates-and-times)   | Available until a certain date.                                                                               |
| `service_types` <Label type="optional" />    | string[]                                                    | Available for the specified service types. One or several values among: `delivery`, `collection` or `eat_in`. |
| `min_order_amount` <Label type="optional" /> | [Money](/developers/api/general-concepts/#monetary-values)  | Available for order equal or greater than.                                                                    |
| `max_per_order` <Label type="optional" />    | [decimal](/developers/api/general-concepts/#decimal-values) | Max number of items per order.                                                                                |
| `max_per_customer` <Label type="optional" /> | [decimal](/developers/api/general-concepts/#decimal-values) | Max number of items per customer.                                                                             |

All the fields above are optional. Fields with a `null` value are ignored. All conditions must be met simultaneously for an item to be available.

#### Example:

```json
"restrictions": {
  "dow": "123-5--",
  "start_time": "07:00",
  "end_time": "13:30",
  "end_date": "2020-02-02",
  "service_types": ["collection", "eat_in"],
  "min_order_amount": "20.00 EUR",
  "max_per_order": "1"
}
```

## 11. Price Overrides

A `price_overrides` is an array of rules that can be used in [Skus](#skus) and [Options](#options) to override the price in different contexts.

The structure of a rule is described below.

#### Parameters:

| Name                                      | Type                                                       | Description                                                                                                 |
| ----------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `dow` <Label type="optional" />           | [DOW](/developers/api/general-concepts/#days-of-the-week)  | Applies on certain days of the week.                                                                        |
| `start_time` <Label type="optional" />    | string                                                     | Applies from a certain time of the day. Format: `HH:MM`.                                                    |
| `end_time` <Label type="optional" />      | string                                                     | Applies until a certain time of the day. Format: `HH:MM`.                                                   |
| `start_date` <Label type="optional" />    | [Date](/developers/api/general-concepts/#dates-and-times)  | Applies from a certain date.                                                                                |
| `end_date` <Label type="optional" />      | [Date](/developers/api/general-concepts/#dates-and-times)  | Applies until a certain date.                                                                               |
| `service_types` <Label type="optional" /> | string[]                                                   | Applies for the specified service types. One or several values among: `delivery`, `collection` or `eat_in`. |
| `price`                                   | [Money](/developers/api/general-concepts/#monetary-values) | The new price if the rule matches.                                                                          |

All the fields above are optional, except `price`. Fields with a `null` value are ignored.

All conditions must be met simultaneously for a rule to match. When several rules match, the price of the last matching rule applies.

#### Example:

```json
"price_overrides": [
  {
    "service_types": ["collection"],
    "price": "20.00 EUR"
  },
  {
    "end_time": "15:00",
    "price": "15.00 EUR"
  },
]
```

Assuming the default price is `25.00 EUR`:

- If the item is ordered for delivery after 15:00, the price is `25.00 EUR`
- If the item is ordered for collection after 15:00, the price is `20.00 EUR`
- If the item is ordered for delivery or collection before 15:00, both rules match. The last matching rule applies, so the price is `15.00 EUR`.

## 12. Images

Images can be attached to products and deals, via their `image_ids` fields.

Images must be uploaded before catalog data, since the images' `id`s must be passed in the products and deals. Upload sequence is as follows:

1. create an empty catalog: `POST /catalogs` or reuse an existing catalog
1. upload images: `POST /catalogs/:catalog_id/images`
1. upload catalog data: `PUT /catalogs/:catalog_id`

There is no endpoint to delete an image: when an image is left unattached for 30 days in a row, it is automatically removed.

### 12.1. Create Image

Upload an image.

The `Content-Type` header must contain the image MIME type (eg `image/png`).

The image data is passed in the request body.

Image data must not exceed 1 Mb per image. There are no constraints on the image size or resolution, or on the number of images per catalog.

<CallSummaryTable
  endpoint="POST /catalogs/:catalog_id/images"
  accessLevel="location, account"
/>

#### Example request:

`POST /catalogs/3ncct/images`

```http
Content-Type: image/jpeg
Request body: [insert image data]
```

Response:

```json
{
  "id": "zxdxw",
  "type": "image/jpeg",
  "size": 126934,
  "md5": "39857d16289e814484f4229ca40cc2b1",
  "seconds_before_removal": 2592000
}
```

### 12.2. Retrieve Image

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/images/:id"
  accessLevel="location, account"
/>

#### Parameters:

| Name                     | Type    | Description                                                                                                                                      |
| ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                     | string  | The id of the image.                                                                                                                             |
| `type`                   | string  | The MIME type of the image. Example values: `image/jpeg`, `image/png`.                                                                           |
| `size`                   | integer | Image size in bytes.                                                                                                                             |
| `md5`                    | string  | MD5-hash of the image data.                                                                                                                      |
| `seconds_before_removal` | integer | Time left before this image is removed. For unattached images only. This field is null if the image is attached to at least one product or deal. |

#### Example request:

`GET /catalogs/ldof9/images/tsll2`

```json
{
  "id": "tsll2",
  "type": "image/jpeg",
  "size": 240330,
  "md5": "39857d16289e814484f4229ca40cc2b1",
  "seconds_before_removal": 33102
}
```

### 12.3. Retrieve Image Data

Return the image data. The reply's `Content-Type` header contains the MIME image type.

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/images/:id/data"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/ldof9/images/tsll2/data`

```http
Content-Type: image/jpeg
Response body: image data
```

### 12.4. List Images

Retrieve the list of images in the catalog.

<CallSummaryTable
  endpoint="GET /catalogs/:catalog_id/images"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/images`

```json
[
  {
    "id": "tsll2",
    "type": "image/jpeg",
    "size": 240330,
    "md5": "39857d16289e814484f4229ca40cc2b1",
    "seconds_before_removal": 33102
  },
  {
    "id": "mpsml"
    ...
  }
]
```

## 13. Inventories

Inventories keep track of the stock of every sku or option in a catalog, for a particular location.

An **inventory** is a set of inventory entries. An **inventory entry** is the stock of a particular sku or option.

An inventory is specific to a particular location. If several locations share the same catalog, each location will have its own inventory.

Inventories cannot be created or deleted. An inventory is automatically associated to each pair of _catalog_ and _location_, where _location_ has access to _catalog_.

### 13.1. Retrieve Inventory

Returns the list of inventory entries of the inventory.

<CallSummaryTable
  endpoint="GET /catalogs/:id/locations/:id/inventory"
  shortEndpoint="GET /catalogs/:id/location/inventory (location only)"
  accessLevel="location, account"
/>

#### Example request:

`GET /catalogs/87yu4/locations/3r4s3-1/inventory`

```json
[
  {
    "sku_id": "ab19d",
    "sku_ref": "COKE",
    "stock": "3"
  },
  {
    "sku_id": "sb65k",
    "sku_ref": "PEPSI",
    "stock": "0"
  },
  {
    "option_id": "a8da5",
    "option_ref": "EGG",
    "stock": "1"
  }
]
```

In the above example:

- the sku `ab19d` has 3 items available
- the sku `sb65k` is out of stock
- the option `a8da5` has 1 item available

The skus and options' `ref`s are also provided for convenience in the reply.

An inventory is an empty set by default. Every sku or option not specified in the inventory set has **unlimited** supply.

### 13.2. Update Inventory

Overwrites the inventory. The request body has the same format as the [Retrieve inventory](#retrieve-inventory) response body.

Each entry consists of:

- either a `sku_id` or `option_id` key (_select by id_), or a `sku_ref` or `option_ref` key (_select by ref_)
- and a `stock` key

`stock` must be a positive [decimal](/developers/api/general-concepts/#decimal-values) (with up to 3 decimal places). `0` means **out of stock**. An entry with a `null` stock is ignored.

A _select by id_ entry affects a single sku or option. A _select by ref_ entry can affect several skus/options at the same time. The latter form provides a convenient way to update an inventory without storing ids.

<CallSummaryTable
  endpoint="PUT /catalogs/:id/locations/:id/inventory"
  shortEndpoint="PUT /catalogs/:id/location/inventory (location only)"
  accessLevel="location, account"
/>

#### Example request:

`PUT /catalogs/87yu4/location/inventory`

```json
[
  {
    "sku_id": "ab19d",
    "stock": "5"
  },
  {
    "option_ref": "EGG",
    "stock": "0"
  }
]
```

### 13.3. Patch inventory

Updates a selected set of entries. Leave the other entries unchanged.

The request body has the same format as [Update inventory](#update-inventory). A `null` stock indicates that the entry must be removed from the inventory, ie the stock is unlimited.

Unlike the `PUT` method which returns the full inventory, the `PATCH` method only returns the modified entries, to keep the response small and useful.

<CallSummaryTable
  endpoint="PATCH /catalogs/:id/locations/:id/inventory"
  shortEndpoint="PATCH /catalogs/:id/location/inventory (location only)"
  accessLevel="location, account"
/>

#### Example request:

If we have the following inventory:

```json
[
  {
    "sku_id": "ab19d",
    "sku_ref": "COKE",
    "stock": "3"
  },
  {
    "option_id": "a8da5",
    "option_ref": "EGG",
    "stock": "1"
  }
]
```

And apply this operation:

`PATCH /catalogs/87yu4/location/inventory`

```json
[
  {
    "sku_ref": "COKE",
    "stock": null
  },
  {
    "sku_id": "a5f4e",
    "stock": "2"
  }
]
```

The resulting inventory is:

```json
[
  {
    "option_id": "a8da5",
    "option_ref": "EGG",
    "stock": "1"
  },
  {
    "sku_id": "a5f4e",
    "sku_ref": null,
    "stock": "2"
  }
]
```

Note that just like in the PUT operation, you can use _select by id_ or _select by ref_ entries in the PATCH operation.
