---
date: 2015-01-10
published: true
title: "Autodesk CFD"
description: "Professional yet easy-to-use computational fluid dynamics (CFD) tools for engineers"
categories: app, desktop, autodesk, simulation, cae
disciplines: UX, Interation Design, Visual Design, User Research
media: Windows App
ownership: Professional
client: Autodesk
time_period: 2011-2017
thumbnail: "/projects/autodesk-cfd/cfd-thumbnail.jpg"

content_layout:
  - section_layout: text
    content: |
      Autodesk CFD is a professional yet easy-to-use computational fluid dynamics (CFD) tool for engineers; in other words, an approachable way to simulate fluid flow and heat transfer to understand how designs will perform in the real world. It is used to simulate everything from pumps & valves, to electronics cooling, to aero & hydrodynamics, to HVAC systems in buildings. Our product is designed with the belief that simulating design performance virtually, early, and often in the product lifecycle results in cheaper and better performing real-world designs, with faster time to market.

  - section_layout: 1col
    images:
      - caption: 'Autodesk Simulation CFD 2013 shown in simulation setup mode'
        description: 'Preparing to simulate a valve assembly in Autodesk CFD'
        url: '/projects/autodesk-cfd/cfd-valve-setup.png'
        width:
        height:

  - section_layout: text
    content: |
      ## Role and Responsibilities

      I was the UX Design Lead for Autodesk's computational fluid dynamics (CFD) apps from 2011 until 2017, supporting the following successful releases:
      
      - Autodesk Simulation CFD 2012
      - Autodesk Simulation CFD 2013
      - Autodesk Simulation CFD 2014
      - Autodesk Simulation CFD 2015
      - Autodesk CFD 2016
      - Autodesk CFD 2017

      In this role I owned user experience and product design, supporting most new development initiatives. Responsibilities include:
      
      - User research
      - Product design strategy, planning, & facilitation
      - UI, interaction design, and prototyping
      - Visual Design
      - Front-end development (XAML-based WPF UIs)
      - Usability testing
      - Design evangelism and cultural evolution
      
      An example of a large scale, post-acquisition UI overhaul follows.

  - section_layout: text
    content: | 
      # Case Study: UI Modernization

  - section_layout: 1col-narrow
    images:
      - caption: 'Before: Autodesk CFD had inhereted a pretty standard Windows UI (for the time) consisting of application-level menus and 24px docking toolbars. As the software had grown, the toolbars had become a mix of file operations, view controls, selection methods, commands, and mode toggles. There were two primary modes that were not strongly differentiated, and a few secondary. The left-docked "Design Study Bar" worked quite well with a top-down approach but felt discontinuous from the other UI. The "in canvas" controls felt like they had been layered in as an afterthought.'
        description: 'Classic CFdesign layout before redesign'
        url: '/projects/autodesk-cfd/cfd-classic-menu-ui.png'
        width:
        height:

  - section_layout: text
    content: |
      ### User Research and Synthesis

  - section_layout: 2col
    images:
      - caption: In the field performing interviews and enthographic research to learn about user workflows
        description: 'In the field performing interviews and enthographic research'
        url: '/projects/autodesk-cfd/cfd-ethnographic-research.jpg'
        width:
        height:
      - caption: 'We generalized & mapped our learnings to diagrams that would inform the updated software workflows; these broke down by simulation setup, results processing, reporting, and design comparison (intentionally blurred)'
        description: 'Workflow analysis for results and reporting, to inform redesign'
        url: '/projects/autodesk-cfd/cfd-redesign-workflow-for-results.png'
        width:
        height:

  - section_layout: 2col
    images:
      - caption: 'From 20+ interviews, we identified two primary personas with distinct needs and goals: a full-time simulation analyst and a design engineer who used simulation infrequently at key points in their design process (intentionally blurred)'
        description: 'Persona synthesized from over 20 user interviews, for the infrequent simulation user (intentionally blurred)'
        url: '/projects/autodesk-cfd/cfd-persona-clark.png'
        width:
        height:
      - caption: 'I conducted a deep-dive card sort with several users to better understand how they related various modes, commands, and operations'
        description: 'A card sort to better understand how users related various commands and operations'
        url: '/projects/autodesk-cfd/cfd-card-sort.png'
        width:
        height:

  - section_layout: text
    content: |
      ### Interface and Interaction Design

      The following images show the general process: starting from low-fi sketches exploring broad design concepts, to digital wireframes, to mockups, to actual UI prototyping, and finally to polishing the icons and visual design.

  - section_layout: 1col-narrow
    images:
      - caption: High-level UI component architecture; blue-numbered components were part of the redesign while green-lettered were untouched components
        description: 'Thinking high-level about UI component architecture'
        url: '/projects/autodesk-cfd/cfd-high-level-components.png'
        width:
        height:

  - section_layout: 1col-narrow
    images:
      - caption: Office 2010 had popularized a new ribbon toolbar paradigm and Autodesk had embraced it in the flagship products. Microsoft and Autodesk research showed major usability improvements across the board, so this is the direction we embarked on. Here, I started with low fidelity sketches to explore broad concepts and constraints including left-to-right vs. free-form flows, mode selection at different levels, context tabs vs. context panels, and high-level layouts. 
        description: 'Starting low fidelity to explore broad concepts and constraints'
        url: '/projects/autodesk-cfd/cfd-ribbon-sketch.jpg'
        width:
        height:

  - section_layout: 1col-narrow
    images:
      - caption: 'Through dozens and dozens of cycles, I was refining the more promising designs and validating iterations with internal subject matter experts from services & support. The primary modes were split by ribbon tab, e.g. Setup, Results, Manage. Each tab generally followed a left-to-right flow, with sub-modes centered in the ribbon toolbar. Each sub-mode activated a context panel (green) with commands and controls exclusive to that mode.'
        description: 'Refining the more promising designs and validating iterations with internal experts'
        url: '/projects/autodesk-cfd/cfd-ribbon-wireframe.png'
        width:
        height:  

  - section_layout: 1col-narrow
    images:
      - caption: 'Once we started building the ribbon in software, prototyping and rapid iteration were made easy with Microsoft Expression Blend. The WPF framework enabled me to design the ribbon layout, microinterations, and behaviors while engineering worked on connecting functionality within the application. I could simply export updated XAML files to a folder in the installation directory to see my updates immediately working in code.'
        description: 'Prototyping and rapidly iterating ribbon UI layouts'
        url: '/projects/autodesk-cfd/cfd-ribbon-prototype.png'
        width:
        height:

  - section_layout: 2col
    images:
      - caption: Prototyping interactions and evaluating visual design
        description: 'Prototyping interactions and evaluating visual design'
        url: '/projects/autodesk-cfd/cfd-ribbon-button-prototype.png'
        width:
        height:
      - caption: 'Prototyping responsiveness, element prioritization, and resize interactions'
        description: 'Prototyping responsiveness, element prioritization, and resize interactions'
        url: '/projects/autodesk-cfd/cfd-ribbon-responsiveness.png'
        width:
        height:

  - section_layout: 2col
    images:
      - caption: Iterating on visual design based on user testing, feedback, and design principles
        description: 'Iterating on visual design based on user testing, feedback, and design principles'
        url: '/projects/autodesk-cfd/cfd-ribbon-visual.png'
        width:
        height:
      - caption: Nearing final v1 designs after internal use and testing the prototypes with real users
        description: 'Nearing a final design after testing the prototypes with users'
        url: '/projects/autodesk-cfd/cfd-ribbon-testing.png'
        width:
        height:

  - section_layout: text
    content: |
      ### Feedback and Additional Work

      This project was a resounding success that made our application easier to learn and use. We ended up finishing ahead of schedule thanks to an incredible engineering team and great tooling from Microsoft. In the end, nothing is as satisfying as positive user feedback:

        > I've used a lot of software since entering the product research field. Some were not too difficult to figure out, while others did require a bit of study to get running. Autodesk Simulation CFD 2013 is one of the easiest I've encountered.
        > <br><br>
        > Anyone fresh into a new piece of software can feel a bit out of sorts, but CFD is laid out in my favorite manner: a progressive ribbon. By this I mean a ribbon layout that works from left to right in the general order that parallels the standard workflows expected.
        > <br><br>
        > The interesting thing to note here is that I never studied how to manipulate planes in CFD. I just followed my instincts, and the tools were there. Nice job usability.
        > <br><br>
        > John Evans, [designandmotion.com](https://designandmotion.net/autodesk/simulation-cfd-getting-up-to-speed-fast/)

      This particular project serves as a broad example of my approach and my varied, technical skillset as a designer. I have designed a majority of the new and redesigned features in the products listed above, so am happy to answer additional questions and requests. For a list of what's new in each release, see the Autodesk Knowledge Network articles:

        - [What's New in Autodesk® CFD 2017](https://knowledge.autodesk.com/support/cfd/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/SimCFD-WhatsNew/files/GUID-E68DA961-6B90-41D7-AFA0-FD771EDB60F9-htm.html)
        - [What's New in Autodesk® CFD 2016](https://knowledge.autodesk.com/support/cfd/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/SimCFD-WhatsNew/files/GUID-A27F10AE-67C6-45CB-959F-0F2074F4D131-htm.html)
        - [What's New in Autodesk® Simulation CFD 2015](https://knowledge.autodesk.com/support/cfd/learn-explore/caas/CloudHelp/cloudhelp/2017/ENU/SimCFD-WhatsNew/files/GUID-2426C8BE-99E3-4775-9691-6D788E46F365-htm.html)
        - [What's New in Autodesk® Simulation CFD 2014](https://knowledge.autodesk.com/support/cfd/learn-explore/caas/CloudHelp/cloudhelp/2014/ENU/SimCFD/files/GUID-6DF7343A-F2F7-4270-9B1D-26C486338C5C-htm.html)
        - [What's New in Autodesk® Simulation CFD 2013](https://knowledge.autodesk.com/support/cfd/learn-explore/caas/CloudHelp/cloudhelp/2015/ENU/SimCFD-WhatsNew/files/GUID-8739DAC9-3B71-4092-A5C7-EC06B95DE2B0-htm.html)
        - [Autodesk® Simulation CFD 2012 has been Released](https://designandmotion.net/design-2/manufacturing-design/simulation-cfd-released/)

      For earlier work, check out my post about [CFdesign](/projects/cfdesign/).
---
