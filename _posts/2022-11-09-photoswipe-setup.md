---
layout: post
title:  "PhotoSwipe Setup on a Jekyll Site"
date: 2022-11-09 10:00:00
categories: blog
author: Ryan Arnaudin
blurb: Getting PhotoSwipe lightbox gallery setup on my Jekyll blog
image: images/black-thumbnail.jpg
priority: 0.6
---
These are notes to remind me how I set up the lightbox gallery here on my site. However, it may help guide others attempting to do the same.

## Requirements

This site is built with Jekyll and currently I use two types of pages that contain image sets: portfolio projects and blog posts. At some point, I would also like to add image galleries. 

On the first pass of my site refresh, I automatically wrapped all inline images with a link tag so that when clicked they would open at full size in a new tab. This allowed visitors to view detailed versions of a design mockup, for example, but the experience was far from ideal. My wishlist for improvements included:

- Images must open in a lightbox on the same page
- Users must be able to left/right arrow through everything on the page
- Users must be able to quickly exit the lightbox by clicking off, hitting *esc*, or going back
- Must be responsive
- Multiple galleries per page is a nice-to-have (blogs)
- Zoom in/out within lightbox is a nice-to-have
- Show captions in the lightbox is a nice-to-have

## Solution

A few minutes of research showed that [PhotoSwipe](https://photoswipe.com/) accomplishes all of the critical requirements and more. I thought this was going to be a quick win, but I soon encountered two problems:

1. It requires a specific HTML layout that was at odds with mine... and perhaps not compatible with <code>figure</code> and/or <code>figcaption</code> at all?
2. Image dimensions need to be passed to the script

It seemed like I was back to the drawing board, but fortunately there were pointers to a [jQuery wrapper](https://github.com/ergec/jQuery-for-PhotoSwipe) that worked around the issues. Since I was already using jQuery, getting it running took minimal effort. 

![Lightbox gallery working on my site](/images/posts/personal-site/site-documentation-gallery-working.png){:.img-center}
*The PhotoSwipe lightbox up and running on my project pages*

## Customizing 

I then made a handful of basic customizations:

1. Small tweaks in the default UI options, such as hiding the share & full-screen elements
2. My sticky header wasn't playing nice, so implemented a hack to hide it when the lightbox opens. This is buggy and needs more work.

    ![Hack for hiding sticky header](/images/posts/personal-site/site-documentation-header-photoswipe.png){:.img-center}

3. I wanted to exclude certain images and group others in separate galleries. Using the wrapper's functionality, I had already added <code>data-fancybox-group="gallery1"</code> to my standard image layout. This added all images to <code>gallery1</code> so they could be navigated with left/right. I ended up adding a <code>gallery</code> image property to accomplish this. 
- By default (no property specified), all images on a page will be added to the lightbox gallery <code>gallery1</code>.
- Set <code>gallery</code> to <code>none</code> to exclude certain images from lightbox galleries
- To create any number of custom lightbox galleries per page, set <code>gallery</code> to a desired name per image

    ![Gallery Liquid code](/images/posts/personal-site/site-documentation-image-property.png){:.img-center}
    
    ![Gallery Liquid code](/images/posts/personal-site/site-documentation-galleries.png){:.img-center}

## To do

1. Ironically, I don't have this working on blog posts yet as I have prioritized getting my portfolio projects up. Check out a project like [Brightidea](/projects/brightidea/) to see it in action. 
2. I'd like to figure out a way to show the image captions in the lightbox, but this seems like potentially a lot of work for not much impact.
3. Add a gallery page type for photo & image galleries.
