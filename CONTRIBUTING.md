# Contributing Overview

This file includes useful commands for generating the files and images used for the HubRise web site.

## Recommendations

1. Capture images and movies at 720p (1280 \* 720) resolution.
1. Capture content such as browsers without the address or menu bar to hide URLs and other information that's not usually visible to the public.

## Required Software

Converting movie files into other formats uses the following programs. When possible, Open Source software is selected.

- ffmpeg - converts movie files. Installed with `apt-get install ffmpeg` (Linux) or `brew install ffmpeg` (Mac).
- gificle - used to convert movie files into animated gifs of fairly decent quality and size. Installed with `brew install gifsicle` (Mac)

## Converting raw movie files

Depending on how you capture your screen in movie format, you may have different movie files. For example QuickTime (Mac) captures `.mov` files.

Movie files work best as WEBM files. The latter will take a long time to convert, but offers excellent compression and quality, and is HTML5 compliant. The command below converts a mov file into webm format.

```bash
ffmpeg -i source.mov target.webm
```

### Converting to GIF

Converting a QuickTime Movie file to GIF requires two steps: Converting to GIF, and then compressing it. The following converts a QuickTime Movie file into a 15 frame per second GIF image, and then compresses it by adding some dithering and optimizing the frame transitions. Please note this assumes an environment such as bash or zsh, and uses the \ character as an escape character.

```bash
ffmpeg -i source.mov -r 15 -f gif - | gifsicle  > target.gif
```

## Using with Google Docs

In the director `google-doc-scripts` is the JavaScript file `doc-to-markdown.js`. This script will run and email the MarkDown file to the registered email account of the user running it.

## Working with Google Docs

To use the script with Google Docs, the following image types can be inserted directly into the Google Doc file:

- PNG
- JP(E)G
- GIF

As of this time, WEBM files can not be inserted into a Google Doc. The recommendation is to use GIF images instead to get an idea of how the document will look.

When inserting an image file into a Google doc do the following:

1. Insert the document. Don't worry about sizing, as the Google Doc will resize it to fit the margins. This will be handled later automatically by Gatsby.
2. Insert the name of the file without the extension into the image description. This is used later by the script below to properly create the file links.

This is run from the Google Doc you are working on through the following procedures:

## Installing the Script

1. Open the Google Doc file.
1. Select **Tools > Script Manager > New**.
1. Select **Blank Project** and paste the code from `doc-to-markdown.js` into it.
1. Save the script. Google may ask permission to run the new script on your documents. Grant if it does.

## Running the Script

1. From the Google Doc, select **Tools > Script Manager**.
1. Select the **ConvertToMarkdown** function.
1. Click run.
1. The converted doc will be mailed to you. Subject will be "[MARKDOWN_MAKER]...".
