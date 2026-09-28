---
date: 2026-09-27
published: true
title: "Virtual Wind Tunnel"
description: "A product refresh, twelve years later: airflow simulation for anyone"
categories: app, ux, web, desktop, autodesk, simulation, cae, realtime, ai
disciplines: Product Design, UX, User Research, Information Architecture, Interaction Design, Content Design, Visual Design
media: Desktop App, Web App
ownership: Professional
featured: false
client: Autodesk (Flow Design)
redirect_from:
  - /projects/virtual-wind-tunnel/
  - /projects/autodesk-flow-design/
  - /projects/flowdesign
time_period: 2012–2014, 2026
thumbnail: "/experiments/slipstream.jpg"

summary: "I was design lead on Flow Design, Autodesk's virtual wind tunnel, from 2012 to 2014. In 2026 a language model built the hard technical part of that product as a launch-day demo, so I brought the user insight to the part it couldn't do. Slipstream is the result: building on years of unique insights, made for everyone."
role: Lead Designer (Flow Design) · Solo designer (Slipstream)
team: Autodesk (2012–2014) · Myself with Claude Code (2026)
outcomes:
  - value: "“Easiest CFD Ever”"
    label: "- ENGINEERING.com (Flow Design)"
  - value: "Super Bowl XLVIII"
    label: "“Wind simulation powered by Flow Design”"
  - value: "84 → 8"
    label: "controls in the demo, down to eight groups (Slipstream)"
  - value: "1 sentence"
    label: "answers: “Tucked: 24% less push than sitting up.”"

website:
  button_text: Try Slipstream →
  url: /sites/slipstream/

hero:
  section_layout: 1col
  images:
    - caption: A tucked cyclist in Slipstream, with smoke released in the centerline plane and colored by speed. The air parts over the helmet, slows to blue and violet behind the rider's back, and trails off as the wake.
      description: 'Slipstream side view of a tucked cyclist in a sheet of speed-colored streamlines, orange in the open wind and blue and violet in the slowed air behind the rider'
      url: '/projects/virtual-wind-tunnel/slip-hero-centerline.jpg'
      class: img-full-width
      width:
      height:

intro: |
  From 2012 to 2014 I was the design lead on [Flow Design](https://www.autodesk.com/products/flow-design/overview), a virtual wind tunnel that put airflow simulation in the hands of architects, product designers, and students instead of just analysts. A lot of good design thinking went into it. It's also an experimental Windows app from 2013, so a case study built on its screenshots doesn't complement that thinking well in 2026.

  In July 2026 Anthropic released a wind tunnel demo for Opus 5, and it impressed me. The model handled the technical side, a GPU fluid solver and a renderer that took my old team countless sprints, with apparent ease. What it clearly didn't have was any sense of who the tool should be built for, beyond a cool demo. On the other hand, I'd been collecting these exact types of user insights since 2008.

  So I brought that insight to the UX side and built Slipstream using the same tech. This is the story of Flow Design and Slipstream, serving as a modern refresh to an aging case study.

content_layout:
  - section_layout: 2col
    images:
      - caption: Flow Design, 2013. A pickup truck at highway speed, with flow lines and surface pressures.
        description: 'Autodesk Flow Design showing airflow and surface pressures on a pickup truck'
        url: '/projects/flow-design/flow-design-app.png'
        width:
        height:
      - caption: Slipstream, 2026. A tucked cyclist compared against the same rider sitting up. The card leads with the answer.
        description: 'Slipstream showing speed-colored smoke around a tucked cyclist, with the result card reading Tucked: 24% less push than sitting up'
        url: '/projects/virtual-wind-tunnel/slip-hero.jpg'
        width:
        height:

  - section_layout: text
    content: |
      ## The product bet

      Most people understand what a wind tunnel is. Almost nobody knows the first thing about computational fluid dynamics (CFD). Both products hypothesize that you can keep the CFD behind the scenes, and let people play with airflow in a relatable environment.

      I started thinking about this even before Flow Design. At Blue Ridge Numerics, [CFdesign](/projects/cfdesign/) was sold as ["upfront CFD"](https://www.digitalengineering247.com/article/cfdesign-v10-puts-computational-fluid-dynamics-software-upfront): simulation run early in the design process, from inside the CAD tool, by the engineer designing the part. The point of an upfront run isn't to predict exactly how a design will perform. It's to find out quickly whether this version is better than the last one. That's a comparison, and a comparison needs far fewer knobs than a prediction.

      As UX lead on six releases of [Autodesk CFD](/projects/autodesk-cfd/), I saw the other half. Our research found two personas: a full-time simulation analyst, and a design engineer who simulates at key points in a project. They need very different amounts of the same product. Flow Design was built for the latter, and for introducing CFD to students or people who had never simulated anything at all.

  - section_layout: text
    content: |
      ## 2012–2014: Flow Design

      Flow Design started for me as a "10 percent time" project with Autodesk's Emerging Products & Technologies team. It began as a simple 2D iOS app, grew into a cross-platform tech preview on Autodesk Labs called **Project Falcon**, and after its early success we commercialized it as Flow Design. I was the lead designer for the commercial releases: design strategy, user research, heuristic evaluation, user stories, wireframes and mockups, application layout, and visual design.

      We also built versions embedded directly in Inventor, Revit, and AutoCAD so product designers and architects could test airflow without leaving the tool they designed in.

  - section_layout: 2col
    images:
      - caption: 'Project Falcon wireframes: the navigation and display options, laid over a live result (circa 2012).'
        description: 'Project Falcon wireframe showing navigation and display option menus over a simulation of an aircraft'
        url: '/projects/flow-design/flow-design-wireframe-nav.png'
        width:
        height:
      - caption: 'Project Falcon wireframes: simulation and wind tunnel settings, and contextual controls (circa 2012).'
        description: 'Project Falcon wireframe with numbered callouts for simulation settings, wind tunnel settings, and flow line options'
        url: '/projects/flow-design/flow-design-wireframe-UI-components.png'
        width:
        height:

  - section_layout: video
    videoid: 2RBOtd-Z8O8

  - section_layout: text
    content: |
      ### What users told us

      The lightweight strategy worked. Flow Design exposed a lot of people to simulation who wouldn't have tried it otherwise, and the feedback was consistent:

      - *"SO, easy to use! exactly what I was looking for, just put the model in and point it at the wind"*
      - *"The most user friendly wind tunnel software by miles"*
      - *"Flow Design modeling package was the easiest to set up and allows you to quickly get the initial estimated results sufficient to quickly test hypotheses at an early stage, followed by modeling in professional packages"*

      ENGINEERING.com [called it](http://www.worldcadaccess.com/blog/2014/08/autodesk-flow-design-the-easiest-to-use-cfd-program-ever.html) the *"easiest-to-use CFD program ever."* Flow Design and Autodesk Simulation powered the Fox Weather Trax wind simulation on the Super Bowl XLVIII broadcast. On National Youth Science Day, elementary school students used it as part of a rocket-building activity. I volunteered at one of those events, and the kids simulated their rockets with no adult help. Years later I found it again [as a screenshot in the wild](https://limar.com/air-revolution/), used to test the bike helmets I was shopping for.

  - section_layout: 2col
    images:
      - caption: Flow Design powered the wind simulation on the Super Bowl XLVIII broadcast.
        description: 'Fox Weather Trax wind simulation during the Super Bowl XLVIII broadcast'
        url: '/projects/flow-design/flow-design-trax-super-bowl.png'
        width:
        height:
      - caption: Hands-on at National Youth Science Day. The kids needed no adult help.
        description: 'Students using Flow Design at National Youth Science Day'
        url: '/projects/flow-design/flow-design-kids.jpg'
        width:
        height:

  - section_layout: text
    content: |
      ## What aged, and what didn't

      Look at those screenshots today and they read as their era. The solver engine was most of the engineering and nearly all of the risk. It took a team of researchers, solver engineers, application engineers, product managers, and designers years to get right back then.

      What didn't age is what those users and the product experience taught us:

      1. **People don't learn from one number.** Engineers didn't simulate to get a figure. They simulated to choose between two ideas. CFdesign's tools for comparing designs and operating conditions, which I designed, existed for exactly that.
      2. **Setup is where people quit.** *"Just put the model in and point it at the wind."*
      3. **The analyst and everyone else need different amounts of the same product.** Not two products.
      4. **Say how far to trust it.** *"Initial estimated results sufficient to quickly test hypotheses at an early stage."* That's exactly what fast, coarse simulation is good for.
      5. **Make the order obvious.** A review of Autodesk Simulation CFD 2013 praised its ribbon for laying tools out *"from left to right in the general order that parallels the standard workflows expected."*

      Twelve years later, I got a chance to use all five on an engine I didn't have to build.

  - section_layout: text
    content: |
      ## 2026: the demo

      The wind tunnel Anthropic released alongside [Claude Opus 5](https://www.anthropic.com/news/claude-opus-5) is genuinely legit. It's a real lattice-Boltzmann fluid solver running on the GPU, in one HTML file, with no image assets at all; even the studio lighting is computed by a shader. The generated source reads like a careful colleague's work. Its comments argue about *why*, record bugs already fixed once, and warn you away from traps. Certainly a turning point for LLMs, in my mind.

      It was also built for an analyst. It opened on a red sports car, a drawer with 84 controls, 22 keyboard shortcuts, and a drag coefficient as its headline. And usability was an afterthought; even with the drawer shut, 83 invisible controls sat in the keyboard's tab order ahead of anything on screen.

      Worse, its headline number wasn't honest. On a cold load the drag coefficient showed up immediately and swung from `1.912` to `0.619`. That's understandable if you know how the simulation is working, but no doubt confusing to a novice. The tunnel also skipped the **blockage correction** every real facility applies: a model takes up space between the tunnel walls, so the air squeezes past it faster than it would outdoors and the drag reads high. The demo actually had the correction written and tested, but nothing called it. Connecting it took the calibration sphere from 14.4% error to under 1%.

  - section_layout: text
    content: |
      ## 2026: Slipstream

      Slipstream keeps the lattice-Boltzmann engine and rethinks everything a user touches. Each of the lessons from Flow Design became a decision:

      | What Flow Design taught me | What Slipstream does |
      |---|---|
      | People don't learn from one number | Five relatable models, each with two variations. **Pin to compare**, and the card answers the key question in one sentence |
      | Setup is where people quit | Pick a thing and it arrives ready, with its own wind, camera, and view based on the object scale |
      | Different amounts of the same product | **Simple** by default. **Advanced** keeps every control for anyone who wants to geek out |
      | Say how far to trust it | The headline says *in this tunnel*, with a real-world estimate under it |
      | Make the order obvious | Three verbs, one cluster each: pick, blow, look |

      The five pairs each ask one question a visitor might actually wonder about. Does tucking on a bike matter? Why does the wind break my umbrella? Why did vans get rounder noses? Why do skyscrapers round their corners? Why do storms lift roofs instead of pushing over walls?

      The answer comes in words you can feel (*about the weight of a house cat*), at wind speeds with names you can relate to (*Bike ride and Storm*). The drag coefficient, Reynolds number, and blockage correction are one click away under **Show the science**, and Advanced mode keeps every control a simulation nerd could want. Hiding controls isn't the same as deleting them. Some visitors will want to watch the Reynolds number move, switch on the oil film that shows where air tears away from a surface, or see how the simulation itself is tuned.

  - section_layout: 2col
    images:
      - caption: Simple mode on a first visit. Three numbered steps, one per cluster, gone the first time you touch any of them.
        description: 'Slipstream first-visit screen with three numbered callouts: pick something, set the wind, choose how to see the air'
        url: '/projects/virtual-wind-tunnel/slip-first-visit.jpg'
        width:
        height:
      - caption: Advanced mode, for anyone who wants to geek out. The same tunnel, the same state, and every control the original had.
        description: 'Slipstream in Advanced mode with the Controls drawer open'
        url: '/projects/virtual-wind-tunnel/slip-advanced.jpg'
        width:
        height:

  - section_layout: text
    content: |
      ### Only ask what the tool can answer

      Slipstream's grid is optimized enough to run on a phone, but this causes the force to read high on most shapes. Choosing what objects to use was a design decision, not an engineering one. A truck with and without a cab-roof fairing measured within 1–2%, inside the noise, because the resolution we're running can't see the fairing. So there's no truck. Every pair that made it ranks the right way around, and the page says plainly that most understate the real difference:

      | Pair | In this tunnel | In the real world |
      |---|---|---|
      | Cyclist, sitting up → tucked | 25% less force | about 40% less |
      | Van, square → rounded nose | 29% less | about 45% less |
      | Tower, sharp → rounded corners | 15% less | about 33% less |
      | Umbrella, cup → dome to wind | 12% less | about 3× less |

  - section_layout: 2col
    images:
      - caption: The Speed view on the square-fronted van. Only disturbed air is drawn, so the wake is the whole picture.
        description: 'Slipstream Speed view showing a colored wake behind a square-fronted van'
        url: '/projects/virtual-wind-tunnel/slip-van-speed.jpg'
        width:
        height:
      - caption: The Push view on a house in a storm. Red is where the air presses; the roof is being pulled, which is why storms take roofs.
        description: 'Slipstream Push view showing surface pressure on a house with a pitched roof'
        url: '/projects/virtual-wind-tunnel/slip-house-push.jpg'
        width:
        height:

  - section_layout: text-aside
    content: |
      ### Phones, this time

      We dropped tablets from Flow Design because nobody asked for them. The calculation runs the other way now. The thing people share is a link, links open on phones, and a phone GPU can run a real 3D fluid solver. So Slipstream works on a phone, and **Share** copies a link that opens on exactly your view, with your pinned results.
    images:
      - caption: The same answer on a phone. The pinned results fold away so the tunnel keeps most of the screen.
        description: 'Slipstream on a phone, showing a tucked cyclist with the result card reading Tucked: 24% less push than sitting up'
        url: '/projects/virtual-wind-tunnel/slip-phone.jpg'
        width:
        height:

  - section_layout: text
    content: |
      ## What got cheap, and what didn't

      What got cheap: the solver, the renderer, and about 28,000 lines of code. In 2012 that *was* the program, and it took most of the effort.

      What didn't get any cheaper: knowing that most people don't want a million settings, and that the ones who do aren't who a browser tool is for. Knowing that a number which swings 3× destroys the only claim a product makes. Choosing a tucked cyclist over a sports car. Cutting the truck because the grid couldn't see its fairing. All of that came from years of building simulation tools and watching people use them.

      The tools got a lot better at building the technical side of the product. They didn't get any better at knowing whether the thing is good, or who it's good for. That's the part I brought.

  - section_layout: text
    content: |
      ## Try it

      - [The cyclist, with both halves already pinned](/sites/slipstream/#p=ribbons&m=cyclist_tuck&w=11.111&c=cyclist,11.11,0,59.37,1.89,0.422~cyclist_tuck,11.11,0,44.98,2.02,0.299)
      - [The van's wake at highway speed](/sites/slipstream/#p=wake&m=van&w=25)
      - [The house in a storm, showing where the air presses and pulls](/sites/slipstream/#p=pressure&m=house&w=41.667)

      Give each one ten or twenty seconds for the air to settle before the number appears. That wait is the solver working, not the page loading.

  - section_layout: text
    content: |
      ## Credits

      Flow Design was a team effort at Autodesk, and I led its design from 2012 to 2014. Slipstream's lattice-Boltzmann solver, renderer, and geometry pipeline started as a demo generated by Claude Opus 5 and published by Anthropic in July 2026. I didn't write them. The product direction, the choice of pairs, the audits, and the design decisions are mine, and I built Slipstream as a solo builder, working with Claude Code. The rail's control styling is inspired by [DialKit](https://github.com/joshpuckett/dialkit) by Josh Puckett.
---
