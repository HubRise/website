---
title: Video Guide
position: 4
layout: documentation
meta:
  title:
  description:
---

## Introduction

This guide includes useful commands for generating short videos that can be used when contributing the HubRise website.

## Recommendations for Videos

- Capture images and videos at 720p (1280x720 px) resolution.
- Capture content such as browsers without the address or menu bar to hide URLs and other information that is not usually visible to the public.

## Required Software

You should convert movie files into other formats using the following programs. When possible, the use of open source software is preferred.

- ffmpeg - converts movie files. It can be installed with `apt-get install ffmpeg` (Linux) or `brew install ffmpeg` (Mac). An executable file is available to download for Windows.
- gifsicle - used to convert movie files into animated gifs of fairly decent quality and size. It can be installed with `apt-get install gifsicle` (Linux) or `brew install gifsicle` (Mac).

## Converting raw movie files

Depending on how you capture your screen in movie format, you may have different movie files. For example QuickTime (Mac) captures `.mov` files.

Movie files work best as WEBM files. The latter will take a long time to convert, but offers excellent compression and quality, and is HTML5 compliant. The command below converts a mov file into webm format.

```bash
ffmpeg -i source.mov target.webm
```

## Converting to GIF

Converting a QuickTime Movie file to GIF requires two steps: Converting to GIF, and then compressing it. The following converts a QuickTime Movie file into a 15 frame per second GIF image, and then compresses it by adding some dithering and optimising the frame transitions. Please note this assumes an environment such as bash or zsh, and uses the backslash (\) character as an escape character.

```bash
ffmpeg -i source.mov -r 15 -f gif - | gifsicle  > target.gif
```

## Video Naming Convention

File naming convention for videos follow the exact same logic as images. To know how to name video files you create, refer to the screenshooting guide [Image Naming Convention](#image-naming-convention) section.
