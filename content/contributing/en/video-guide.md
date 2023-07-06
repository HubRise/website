---
title: Video Guide
position: 5
layout: documentation
meta:
  title: Video Guide | HubRise
  description:
---

[comment]: # "This page has been duplicated in .../contributing/fr"

## General Recommendations

- Capture images and videos at 720p (1280x720 px) resolution.
- Capture content such as browsers without the address or menu bar to hide URLs and other information that is not usually visible to the public.

## Recommended Software

To convert movie files into other formats, you can use the following open-source programs:

- **ffmpeg**. To convert movie files to any video format. It can be installed with `apt-get install ffmpeg` (Linux) or `brew install ffmpeg` (Mac). An executable file is available to download for Windows.
- **gifsicle**. To convert movie files into animated gifs of fairly decent quality and size. It can be installed with `apt-get install gifsicle` (Linux) or `brew install gifsicle` (Mac).

## Converting raw movie files

Depending on how you capture your screen in movie format, you may have different movie files. For example QuickTime (Mac) captures `.mov` files.

Movie files work best as WEBM files. The latter will take a long time to convert, but offers excellent compression and quality, and is HTML5 compliant. The command below converts a mov file into webm format.

```bash
ffmpeg -i source.mov target.webm
```

## Converting to GIF

Converting a QuickTime Movie file to GIF requires two steps: converting to GIF, and then compressing it.

The following command converts a QuickTime Movie file into a 15 frame per second GIF image, and then compresses it by adding some dithering and optimising the frame transitions. This snippet assumes an environment such as bash or zsh, and uses the backslash (\) character as an escape character.

```bash
ffmpeg -i source.mov -r 15 -f gif - | gifsicle  > target.gif
```

## Naming Convention

File naming convention for videos follow the exact same logic as images. For more information, see [Image Naming Convention](/contributing/screenshots-guide/#naming-convention).
