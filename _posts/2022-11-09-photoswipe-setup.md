---
layout: post
title:  "PhotoSwipe on a Jekyll Site"
date: 2022-11-09 10:00:00
categories: blog
author: Ryan Arnaudin
blurb: Getting PhotoSwipe lightbox gallery setup on my Jekyll blog
image: images/black-thumbnail.jpg
priority: 0.6
---
These are notes on setting up the lightbox gallery on my site, which may help others, or me in the future.

## Requirements

This site uses Jekyll and currently has two types of pages with image sets: portfolio projects and blog posts. I'd also like to add galleries.

During my site's first refresh, I wrapped all inline images with a link tag to open them at full size in a new tab. This allowed visitors to view detailed versions of a design mockup, but the experience was not ideal. My wishlist for improvements included:

-   Images must open on the same page without navigating away.
-   Users must be able to navigate through all visuals on a page.
-   Users must be able to quickly return to the full page contents.
-   Must be responsive and touch-friendly.

Nice-to-have:

-   Multiple "galleries" per page (blogs).
-   Zoom in/out within lightbox to inspect large images.
-   Show captions.

## Solution

A few minutes of research showed that [PhotoSwipe](https://photoswipe.com/) meets the critical requirements and more. I thought this would be a quick win, but I soon encountered two problems:

1.  It requires a specific HTML layout that was at odds with mine, and perhaps incompatible with `figure` and/or `figcaption`?
2.  You need to pass image dimensions to the script.

I was back to the drawing board, but there were pointers on the forums to a [jQuery wrapper](https://github.com/ergec/jQuery-for-PhotoSwipe) that worked around these issues. Since I was already using jQuery, getting it running from there took minimal effort.

![Lightbox gallery working on my site](/images/posts/personal-site/site-documentation-gallery-working.png){:.img-center}
*The PhotoSwipe lightbox is running on my project pages.*

## Customizing 

I made a few basic customizations:

1.  Tweak the default UI options, like hiding the share and full-screen elements.
2.  I hacked my sticky header to hide it when the lightbox opens because it wasn't working. This is potentially buggy and may need more work.

    ![Hack for hiding sticky header](/images/posts/personal-site/site-documentation-header-photoswipe.png){:.img-center}

3.  I wanted to exclude certain images and group others in separate galleries. I added `data-fancybox-group="gallery1"` to my standard image layout using the wrapper's functionality. This added all images to `gallery1` for left/right navigation. I added a `gallery` image property to accomplish this.

    -   By default, all images on a page will be added to the lightbox gallery `gallery1`.
    -   Set `gallery` to `none` to exclude certain images from lightbox galleries.
    -   To create multiple custom lightbox galleries per page, set `gallery` to a desired name per image.

    ![Gallery Liquid code](/images/posts/personal-site/site-documentation-image-property.png){:.img-center}
    
    ![Gallery Liquid code](/images/posts/personal-site/site-documentation-galleries.png){:.img-center}

## To do

1.  Ironically, I don't have this working on blog posts yet, as I prioritized getting my portfolio projects up. Check out a project like [Brightidea](https://ryanarnaudin.com/projects/brightidea/) to see it in action.
2.  I want to show the image captions in the lightbox, but it seems like a lot of work (for me) for not much impact.
3.  Add a gallery page type for photo & image galleries.
