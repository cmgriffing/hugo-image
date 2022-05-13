# Hugo Image

This is a repo for getting Gatsby-Image like preloaders into a Hugo website.

It is a simple set of shortcodes that make adding a blur-up or pixellated preloader a snap.

## Usage

To use this in your Hugo project, you will need to copy and paste the shortcode files into your project structure.

The folder to do so is at `/layouts/shortcodes`.

Once you have pasted the shortcode files, you will need to add the shortcodes to the relevant content files.

example: /content/posts/testing/index.md

```markdown
---
title: "Testing"
date: 2022-05-12T16:31:36-07:00
draft: false
---

An exmaple of a remote image path:
{{<hugo-image src="https://www.fillmurray.com/460/301">}}

An example of a Global Resource in the `assets` folder:
{{<hugo-image src="images/460x300-global.jpeg" resourceType="global">}}

An example of a Page resource in the content's folder:
{{<hugo-image src="460x300.jpg">}}

These are needed to get the styling and scripting working:
{{<hugo-image-script>}}
{{<hugo-image-style>}}
```

### Configuration

The following props can be passed to the `hugo-image` shortcode:

- src - required - This is the path to the image to process. It can be remote, global, or a page resource.

- pixelHeight - optional - This is the height in pixels to make the img element. Helps fight page shifting. Uses actual image height by default.

- pixelWidth - optional - This is the width in pixels to make the img element. Helps fight page shifting. Uses actual image width by default.

- resourceType - optional - "page" | "global" - This determines where the image asset is loaded from. Default will look in Page folder. Defaults to "page".

- preloaderType - optional - "blurred" | "pixellated" - This determines which preloader type is used. Defaults to "blurred".

## Why?

Most of the existing approaches to lazy loaded images with Hugo involve using the `loading="lazy"` HTML attribute. This works in several browsers, but at the time of this writing, Safari requires a feature to be enabled in browser settings.

The browser based lazy load also does not give a pleasing preloaded image. It is empty space until the image loads.

## Roadmap

- figure out how to include script and style shortcodes at a global level
- add file for render hook to process markdown images

## License

Copyright 2022 Chris Griffing

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
