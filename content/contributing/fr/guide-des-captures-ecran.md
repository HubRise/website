---
title: Screenshots Guide (en anglais)
position: 3
layout: documentation
meta:
  title: Screenshots Guide - HubRise
  description: Guidelines to include screenshots in the HubRise documentation.
---

[comment]: # "This page is a duplicate from .../contributing/en"

## General Recommendations

For website screenshots, always resize your browser width to 1200px before taking the capture.

Screenshots should ideally be taken on 4K High Definition screens.

## Referring to a screenshot

Screenshots should be placed after the first descriptive text in a section.

Screenshots of a user interface should not be referred to in the documentation unless they represent a specific example. No need for "_This screenshot…_".

Placing a screenshot or animated GIF may be accompanied by "_This example demonstrates_" or "_This example shows…._" if the example demonstrates non-standard behaviour.

## Source Screenshots

When working on a document, store source images in the **Screenshots** folder of the corresponding app in the Drive.

Screenshots should always be taken in both English and French when applicable. Follow the image file naming convention and add [screenshot] at the very beginning of the file name. For more information see [Image Naming Convention](#naming-convention).

## Naming Convention

Use the following naming convention: `[000]-[en]-2x-[description].[extension]`:

- `[000]` is a three digit sequence number. Not needed for icons and images that do not require localisation.
- `[en]` is the language acronym. `[en]` for English. `[fr]` for French. No need for language acronym if no text is localised within the image.
- `2x` to be included only if you screenshots are taken from a HD 4K screen. Screenshots should not be scaled. For more information, see [Image Shooting](#image-shooting).
- `[description]` is a placeholder for a short description.

For example if the image contains text within:

- `001-en-login-example.png`
- `001-fr-login-example.png`

For example if the image contains text within and the screen capture taken on a HD 4K screen:

- `001-en-2x-login-example.png`
- `001-fr-2x-login-example.png`

For example if the image does not contain any text and the screen capture was taken on a HD 4K screen:

- `001-2x-arrow-icon.png`

Also, add [screenshot] at the very beginning of the file name of the initial screenshots saved in the Drive for reference: `[screenshot]\_[000]-[en]-2x-[description].[extension]`.

## Image alt attributes

The image alt attributes should include the name of the app and a brief context, description. No full stop is required even if the description resembles a sentence.

For example: `![Create an account on HubRise](../images/064-en-2x-create-account.png)`
