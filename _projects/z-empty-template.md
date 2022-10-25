---
date: 1969-4-20
published: false
title: "Title"
description: "Description"
categories: app, ux, brand, mobile
disciplines: UX, App design, Information Architecture, Branding
media: Mobile App
ownership: Personal 
client:
time_period: Dates
thumbnail: "/black-thumbnail.png"
redirect_from: /projects/previous-name

website:
  button_text: Visit the site
  url: https://google.com

intro: |
  Intro

  Text

content_layout:
  - section_layout: text
    content: |
      Some text

      Goes here
  
  - section_layout: 1col
    images:
      - caption:
        description: 'Description'
        url: '/black-thumbnail.png'
        width:
        height:

  - section_layout: 1col
    images:
      - caption:
        description: 'Description'
        url: '/black-thumbnail.png'
        width:
        height:
        class: img-center

  - section_layout: 1col
    images:
      - caption:
        description: 'Description'
        url: '/black-thumbnail.png'
        width:
        height:
        class: img-full-width

  - section_layout: 1col-narrow
    images:
      - caption:
        description: 'Front cover'
        url: '/black-thumbnail.png'
        width:
        height:

  - section_layout: 2col
    images:
      - caption:
        description: 'Front cover'
        url: '/black-thumbnail.png'
        width:
        height:
      - caption:
        description: 'Back cover'
        url: '/black-thumbnail.png'
        width:
        height:

  - section_layout: 5col-7col
    images:
      - caption:
        description: 'Image 1'
        url: '/black-thumbnail.png'
        border: light
        width:
        height:
      - caption:
        description: 'Image 2'
        url: '/black-thumbnail.png'
        positioning: nudge-down-5
        width:
        height:

  - section_layout: 3col
    images:
      - caption:
        description: 'Image 1'
        url: '/black-thumbnail.png'
        width:
        height:
        class: 

      - caption:
        description: 'Image 2'
        url: '/black-thumbnail.png'
        width:
        height:

      - caption:
        description: 'Image 3'
        url: '/black-thumbnail.png'
        width:
        height:
---
<!-- Button examples -->

<!--inline-->
{% include button.html link="https://www.flickr.com/photos/arnaudin" text="Flickr @arnaudin" %}

<br/>
<!--centered-->
<p class="text-center">
    {% include button.html link="https://www.google.com/" text="Learn More" %}