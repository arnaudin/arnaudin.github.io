---
date: 2022-12-8
published: true
title: "Thangs: The Redesign Exercise"
description: "The Thangs take-home I did before joining Physna, and how it held up"
categories: web, side project
media: Web
ownership: Personal
sitemap: false
client:
time_period: 2022
thumbnail: "/projects/thangs/thangs-final-logged-out.png"

summary: "A two-day take-home redesign of the Thangs landing and model pages, done before I joined Physna, and a look at how the model page held up four years later."

content_layout:
  - section_layout: text
    content: |
      Before I joined Physna, I had a two-day take-home to redesign two Thangs pages, with no clarifying questions allowed. A month later I was the [design-team-of-one](/blog/design-team-of-one/) there.

      This page is the exercise as I submitted it in December 2022, with a [look back from 2026](#looking-back) at the end.

      ## <a name="Requirements"></a>Prompt

      Redesign the Thangs (1) [Landing](https://thangs.com/) and (2) [Model](https://thangs.com/designer/3dprintbunny/3d-model/Starry%20Christmas%20Bauble%20Display%20Tree-523430) pages, with a focus on visual enhancement.
      
      **User Persona**
      
      Thangs is focused on 3D creators / designers who love to explore, download and remix models to create an incredible 3D world (both virtual and physical).

      *Additional clarifying questions were explicitly prohibited.*

      ## Key Insights

      The following insights came from conversations and research, and drove the design decisions:

      1. **Top-level KPI(s):** The company is focused on growth
        - Convert new users to signups
        - Encourage existing users to log in, upload/remix files, install apps
        - Engage the network to incentivize users to return, e.g. likes, comments, etc.
      1. **Strategic:** Aim to be "the Google of 3D"
        - Search is central, geometric search is differentiating 
        - Simple, fast, powerful
        - Raises the question of an ad-driven business model (e.g. sponsored cards, results)
      1. **Customer focus:** these pages and the prompt are mainly about consumption (vs. creation and editing areas)
        - As a maker I want to find new models that I can print at home
        - As a creator I want to discover base models so that I can remix my own derivative creations
        - As a designer I want to explore what is trending & popular in the community so that I can find inspiration for my designs

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

      1. The top theme is simplification; much of the base was kept, with unnecessary elements and noise removed to focus the experience
          1. Simplify and reduce card-views
          1. Simplify nav bar; use sidebar and bottom sheet menus
          1. Simplify header area
      1. Reconfigure model layouts for top-down information hierarchy
          1. The title currently truncates early, so let it run full width
          1. Group social/creator features below or beside the main model view, since they're secondary
          1. Display fewer related models, with a link to search for more; comments were getting pushed way down the page

      ### Logged Out

      1. All paths lead to log in or sign up
          1. Promote *Sign up* button to primary action (yellow)
          1. Reduce visual competition to focus on *Sign up* button
          1. *Sign up **for free*** to reinforce the free service, and gain more visual prominence via size
      2. Header hero focuses exclusively on search - Thangs wants to be the *Google of 3D*
          1. Simple and powerful, the world of 3D at your fingertips
          1. Reduce competition for attention
          1. New functionality: enhance suggestions when clicking into the search box (e.g. borrow from *Explore*)
          1. (Thangs Sync can instead be emphasized in the top navigation bar with color and/or badge)
      3. Sign-up prompt: similar to what happens when I try to follow/like/comment, a sign-up modal should pop up after scrolling ~2 pages of models. It should be dismissible, but this will help convert new users and remind existing users to log in while casually browsing.

      ### Logged In

      1. Give the user a more app-like experience
          1. Screen space is optimized for engagement; more models shown above the fold
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
      ## Process: Behind the Curtain

      This was a two-day take-home, so this is a brief process capture.

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
      Given the time constraints this is a bit thrown together, but I still made a number of refinements:
      - Colors are refined slightly, but mainly borrow from the existing brand/site
          - Easy to update now that they're tokenized and componentized in Figma (see above)
          - Blacks: replaced most of the hard blacks (#000000) with dark grays and the complementary midnight blue-violet (#232530); my suggestion would be to use black very rarely in the consumer-facing apps and consider reserving this for enterprise Physna
      - Responsiveness: two breakpoints, small mobile and large desktop; in reality there are intermediate breakpoints to consider
      - Button styles: several small inconsistencies or gaps, including missing hover/active/focus states, variants that can be realigned/combined, consistency between pages and states
      - Typography: stuck with Montserrat but cleaned up minor inconsistencies, e.g. different styles between section headers
      

      ### Future Considerations
      - Button states: filled in some gaps with hover states, but the site is still missing some hover/focus/active states
      - Accessibility: I kept my mockups as accessible as possible, but didn't have time to do a larger audit

      ## Questions and Ideas

      This project was tightly time-boxed but very open-ended, so it raises many questions worth exploring:

      1. What are the critical milestones and measures that get someone to stay? For example, Facebook's 7 friends in 10 days.
      1. How to balance printing and AR? Different personas, needs, and workflows.
      1. What is the role of the mobile app in the workflow? Closely related to the previous question.
      1. The header currently adjusts based on OS and screen size; what else could be done to optimize for different contexts?
      1. Branding: how rigid are the names, colors, etc.? Enterprise vs. consumer experiences? I softened a few things in my mocks but could go further.

  - section_layout: text
    content: |
      ## Next Steps

      The next step would be to keep evolving the designs (I only showed one variant here) and start prototyping more interactions.

  - section_layout: 1col
    videos:
      - caption: "Since everything is componentized in Figma, setting up a clickable prototype is just one step away"
        description: 'Since everything is componentized in Figma, setting up a clickable prototype is just one step away'
        url: '/projects/thangs/thangs-desktop-vid.mp4'
  
  - section_layout: 1col
    images:
      - caption: "A small sampling of explorations that went into this redesign"
        description: 'A small sampling of explorations that went into this redesign'
        url: '/projects/thangs/thangs-design-exploration.png'
        width:
        height:

  - section_layout: text
    content: |
      ## <a name="looking-back"></a>Looking Back from 2026

      Nearly four years later, the live page for the same model sits close to where this exercise pointed. Some of that is work I shipped over the next two years. Some came from the team after I left. Either way, the direction held up.

      <!-- TODO: note which of these you shipped yourself in 2023–24 vs. what came after. -->

  - section_layout: 2col
    images:
      - caption: "2022: the exercise's model page (logged in), with colors swapped to test the underlying styles"
        description: 'Model page from the 2022 redesign exercise, with alternate colors'
        url: '/projects/thangs/thangs-color-swap.png'
        width:
        height:
      - caption: "2026: the live model page for the same model (logged out, captured October 2026)"
        description: 'The live Thangs model page for the same model in October 2026'
        url: '/projects/thangs/thangs-model-page-2026.png'
        width:
        height:

  - section_layout: text
    content: |
      ### What lined up

      - **Top-down hierarchy with a full title.** The model name is no longer truncated. It leads the side column, with stats, actions, creator, and download stacked beneath it.
      - **Search in the top nav.** There's no hero on the model page, and search lives in the nav bar.
      - **Social actions grouped and secondary.** Like, Share, and Save sit in one compact row under the title instead of competing with the download.
      - **One primary action.** A single blue Download button, with the other download options folded into its menu.
      - **Fewer, more focused related models.** A short "More models" grid in the side column instead of a long list pushing everything else down the page.
      - **No hard blacks.** The mock softened them to a midnight blue-violet. Today's page goes further and is light throughout.

      ### What went another way

      - **Photos before 3D.** The page now opens on photos of printed results, with the interactive 3D view one thumbnail away. For a marketplace selling things to print, that's the right call.
      - **The landing page.** The search-first "Google of 3D" hero didn't last. Today's home page leads with three commerce paths (Digital Store, Bundle, and Print Store), a shift from search engine toward marketplace.
      - **The yellow sign-up button.** Primary actions stayed blue.

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
</style>

