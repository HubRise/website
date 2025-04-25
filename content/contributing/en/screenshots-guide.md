---
title: Screenshots Guide
path_override: screenshots-guide
position: 4
layout: documentation
meta:
  title: Screenshots Guide | HubRise
  description: Guidelines to include screenshots in the HubRise documentation.
---

[comment]: # "This page has been duplicated in .../contributing/fr"

## General Recommendations

For website screenshots, always resize your browser width to 1200px before taking the capture.

Screenshots should ideally be taken on 4K High Definition screens.

## Referring to a screenshot

Screenshots should be placed after the first descriptive text in a section.

Screenshots of a user interface should not be referred to in the documentation unless they represent a specific example. No need for "_This screenshot…_".

Placing a screenshot or animated GIF may be accompanied by "_This example demonstrates_" or "_This example shows…._" if the example demonstrates an unexpected behaviour.

## Screenshots handling

Screenshots should always be taken in both English and French when applicable.
They will have the same file name regardless of their language and will be saved in their respective `en` or `fr` folders. Always follow the image [naming convention](#naming-convention).

## Naming Convention {#naming-convention}

Use the following naming convention: `[000]-[description].[extension]` or `[000]-2x-[description].[extension]`.

- `[000]` is a three-digit sequence number.
- `2x` to be included only if your screenshots are taken from a HD 4K screen. Screenshots should not be scaled.
- `[description]` is a placeholder for a short description.

For example:

- `001-login-example.png`
- `001-2x-login-example.png`

## Image alt attributes

The image alt attributes should include the name of the app and a brief context, description. No full stop is required even if the description resembles a sentence.

For example: `![Create an account on HubRise](../images/064-en-2x-create-account.png)`
