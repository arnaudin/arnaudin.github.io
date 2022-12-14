---
date: 2022-12-8
published: true
title: "Thangs Redesign Case Study"
description: "A fun, simple site that generates excuses for not cycling"
categories: web, side project
media: Web
ownership: Personal 
client:
thumbnail: "/projects/coyote-bomb-squad/cbs-thumbnail.jpg"

content_layout:
  - section_layout: text
    content: |
      ## <a name="Requirements"></a>Prompt

      Redesign the Thangs (1) [Landing](https://thangs.com/) and (2) [Model](https://thangs.com/designer/3dprintbunny/3d-model/Starry%20Christmas%20Bauble%20Display%20Tree-523430) pages, with a focus on visual enhancement.
      
      **User Persona**
      
      Thangs is focused on 3D creators / designers who love to explore, download and remix models to create an incredible 3D world (both virtual and physical)

      *Additional clarifying questions were explicitly prohibited

      ## Key Insights 

      The following insights were gleaned from conversations and research, so will be used to drive design decisions:

      1. **Top-level KPI(s):** Company is focused on growth
        - Convert new users to signups
        - Encourage existing users to log in, upload/remix files, install apps
        - Engage the network to incentivize users to return, e.g. likes, comments, etc.
      1. **Strategic:** Aim to be "the Google of 3D"
        - Search is central, geometric search is differentiating 
        - Simple, fast, powerful
        - Begs the question of ad-driven business model (e.g. sponsored cards, results)
      1. **Customer focus:** these particular pages & the prompt are centrally for consumption (vs. creation & editing areas)
        - As a maker I want to find new models that I can print at home
        - As a creator I want to discover base models so that I can remix my own derivative creations
        - As a designer I want to explore what is trending & popular in the community so that I can get inspiration for my designs

      ## Results

      (At the highest level, there is a distinction between **logged in** and **logged out**.)

      ### Logged Out
  
  - section_layout: 1col
    images:
      - caption: "Desktop and mobile web redesign for logged-out state"
        description: 'Desktop and mobile web redesign for logged-out state'
        url: '/projects/thangs/thangs-final-logged-out.png'
        width:
        height:
        class: img-full-width

  - section_layout: text
    content: |
      ### Logged In

  - section_layout: 1col
    images:
      - caption: "Desktop and mobile web redesign for logged-in state"
        description: 'Desktop and mobile web redesign for logged-in state'
        url: '/projects/thangs/thangs-final-logged-in.png'
        width:
        height:
        class: img-full-width

  - section_layout: text
    content: |
      ## Summary of Major Changes

      ### General

      1. The top theme is simplification; much of the base was maintained with unnecessary elements and noise eliminated to focus the experience
          1. Simplify and reduce card-views
          1. Simplify nav bar; use sidebar and bottom sheet menus
          1. Simplify header area
      1. Reconfigure model layouts for top-down information hierarchy
          1. Currently, title is truncated early so let it flow full width
          1. Group social/creator functionality below/beside main model view as it is secondary
          1. Display fewer related models, with a link to search for more; comments were getting pushed way down the page

      ### Logged Out

      1. All paths lead to log in or sign up 
          1. Promote *Sign up* button to primary action (yellow)
          1. Reduce visual competition to focus on *Sign up* button
          1. *Sign up **for free*** to reinforce the free service, and gain more visual prominence via size
      2. Header hero focuses exclusively on search - Thangs wants to be the *Google of 3D*
          1. Simple and powerful, the world of 3D at your fingertips 
          1. Reduce competition for attention
          1. New Functionality: enhance suggestions when clicking into the search box (e.g. borrow from *Explore*)
          1. (Thangs Sync can instead be emphasized in the top navigation bar with color and/or badge)
      3. Sign-up prompt - similar to when I try to follow/like/comment, after scrolling ~2 pages of models, modal signup form should pop up. It should be dismissable, but this will help convert new users and remind existing users to log in while casually browsing.

      ### Logged In

      1. Give the user a more app-like experience
          1. Screen space is optimized engagement; more models shown above the fold
          1. No hero header; search moves into top nav even on landing page, with drawer menu
          1. On mobile, prompt to install app above top nav; this works on all pages and doesn't take as much vertical space as the hero
      2. [Not Visualized] Consider a sticky header when scrolling down the page to preserve access to search and top 1-2 actions such as download/like

  - section_layout: 1col
    images:
      - caption: "Before and after with high-level annotations; best viewed on desktop, or tap to zoom"
        description: 'Before and After summary'
        url: '/projects/thangs/before-after.png'
        width:
        height:
        class: img-full-width

  - section_layout: text
    content: |
      ## Process - Behind the Curtains

      This was a quick turnaround project, so this is just a brief process capture.

      ### Requirements

      [Covered above.](#Requirements)

      ### Brainstorming & Ideation

  - section_layout: 2col
    images:
      - caption: "Concept sketch: 'The Google of 3D' with search front and center, free signup emphasized, and more engaging content higher up on the page due to smaller hero header."
        description: 'Concept sketch: The Google of 3D with search front and center, free signup emphasized, and more engaging content higher up on the page due to smaller hero header.'
        url: '/projects/thangs/thangs-sketch-google.png'
        width:
        height:

      - caption: "Concept sketch: live 3D view in hero header alongside search to illustrate the product strengths"
        description: 'Concept sketch: live 3D view in hero header alongside search to illustrate the product strengths'
        url: '/projects/thangs/thangs-sketch-live3D.png'
        width:
        height:

  - section_layout: 2col
    images:
      - caption: "Concept sketches: Mobile"
        description: 'Concept sketches Mobile'
        url: '/projects/thangs/thangs-sketch-mobile.png'
        width:
        height:
      - caption: "Quick brainstorm of needs & actions per page"
        description: 'Quick brainstorm of needs & actions per page'
        url: '/projects/thangs/thangs-sketch-needs.png'
        width:
        height:

  - section_layout: text
    content: |
      ### Minimum Viable Design System

  - section_layout: 2col
    images:
      - caption: "Creating styles and tokens in Figma made it easy to compose and explore mockup variations"
        description: 'Creating styles and tokens in Figma made it easy to compose and explore mockup variations'
        url: '/projects/thangs/thangs-design-styles.png'
        width:
        height:

      - caption: "Creating base components in Figma made it easy to compose and explore mockup variations"
        description: 'Creating base components in Figma made it easy to compose and explore mockup variations'
        url: '/projects/thangs/thangs-design-system.png'
        width:
        height:

  - section_layout: text
    content: |
      Given the time constraints this is a bit thrown together, but even so I was able to make numerous refinements:
      - Colors are refined slightly, but mainly borrow from the existing brand/site
          - Can easily be updated now they are componentized & stylized in Figma (see below)
          - Blacks - replaced most of the hard blacks (#000000) with dark greys and the complementing midnight blue-violet (#232530); my suggestion would be to use black very rarely in the consumer-facing apps and consider reserving this for enterprise
      - Responsiveness: 2 breakpoints for small mobile & large desktop; in reality there are additional intermediate points to consider
      - Button Styles - several small inconsistencies or gaps including: missing hover/active/focus states, variants that can be realigned/combined, consistency between pages & states
      - Typography - stuck with Montserrat but cleaned up minor inconsistencies, e.g. different styles between section headers
      

      ### Future Considerations
      - Button states - Filled in some gaps with hover states, but the site is still missing some hover/focus/active
      - Accessibility - I kept my mockups as accessible as possible, but didn't have time to do a larger audit

      ## Questions and Ideas

      This project was extremely time-bounded while very open-ended, so raises many additional questions that could be explored:

      1. What are the critical milestones and measures that get someone to stay? For example Facebook's 10 friends in 7 days.
      1. How to balance printing and AR? Different personas, needs, and workflows...
      1. What is the role of the mobile app in the workflow? Very related to previous question.
      1. The header currently adjusts based on OS and screen size; what else could be done to optimize for different contexts?
      1. Branding -- how rigid are the names, colors, etc.? Enterprise vs. consumer experiences? I softened a few things a bit in my mocks but could go further

  - section_layout: text
    content: |
      ## Thanks for Reading!

      Next step would be to continue evolving the designs (I only showed one variant here) and start prototyping more interactions.

  - section_layout: 1col
    images:
      - caption: "Since everything is componentized in Figma, setting up a clickable prototype is just one step away"
        description: 'Since everything is componentized in Figma, setting up a clickable prototype is just one step away'
        url: '/projects/thangs/thangs-desktop-vid.gif'
        width:
        height:
        class: 
  
  - section_layout: 2col
    images:
      - caption: "A small sampling of explorations that went into this redesign"
        description: 'A small sampling of explorations that went into this redesign'
        url: '/projects/thangs/thangs-design-exploration.png'
        width:
        height:
        class: 
      - caption: "Trying out new colors is as simple as swapping the underlying styles"
        description: 'Trying out new colors is as simple as swapping the underlying styles'
        url: '/projects/thangs/thangs-color-swap.png'
        width:
        height:
        class: 
      
---
<style>
ol li ul {
  list-style: none;
  padding: 0;
  margin: 0; }
ol li ul li {
    padding-left: 1rem;
    text-indent: -0.7rem;
  }

ol li ul li::before {
    content: "👉 ";
    padding-right: 0.5rem;
  }
}
</style>

