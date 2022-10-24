---
date: 2018-4-11
published: true
title: "Netfabb"
description: "Professional-grade simulation of metal 3D printing and additive manufacturing processes"
categories: app, desktop, autodesk, simulation, manufacturing, cae
disciplines: UX, Interation Design, Visual Design, User Research, Market Research
media: Windows App
ownership: Professional
client: Autodesk
time_period: 2016-2018
thumbnail: "/projects/netfabb/netfabb-thumbnail.jpg"

content_layout:
  - section_layout: text
    content: |
      [Autodesk Netfabb](https://www.autodesk.com/products/netfabb/overview) is a suite of tools for streamlining and optimizing additive manufacturing processes. 
      
      As Lead Designer I supported new features and redesigns within Netfabb Simulation Utility for the 2017 and 2018 releases. For a full list of _What's New_ by version:
        
      - [What's New in Autodesk® Netfabb 2017](http://help.autodesk.com/view/NETF/2017/ENU/?guid=GUID-6EAF21B6-F2E0-4F1A-AB42-ABFC119133AB)
      - [What's New in Autodesk® Netfabb 2018](http://help.autodesk.com/view/NETF/2018/ENU/?guid=GUID-66C2312A-BE6C-4513-9865-BC2ADDF78B9E)
      
  - section_layout: 1col-narrow
    images:
      - caption: 'Netfabb Simulation Utility displaying part displacement results for an additive manufacturing process (i.e. warpage due to heat-induced stresses)'
        description: 'Netfabb Simulation Utility displaying part displacement results'
        url: '/projects/netfabb/netfabb-simulation-utility-app-results.png'
        width:
        height:

  - section_layout: text
    content: |
      **Role:** I served as *Lead Designer* for Netfabb Simulation Utility versions 2017 and 2018. This is a new desktop application within the Netfabb suite that enables engineers to simulate professional-grade metal printing processes in order to [predict distortion](https://blogs.autodesk.com/netfabb/2018/10/30/netfabb-simulation-research-validation-distortion-compensation/), [alleviate support structure failure](https://blogs.autodesk.com/netfabb/2018/06/12/netfabb-simulation-research-validation-support-failure-prediction/), and [avoid potential damage](https://blogs.autodesk.com/netfabb/2018/06/12/netfabb-simulation-research-validation-moving-source/) to machines & hardware. Metal printing is inherently expensive and time-consuming, so using simulation to avoid errors is a major cost saver for our customers. 
  
      Being a new product built on acquired technology, I was deeply involved in market, industry, and user research. This also enabled me to get closer exposure to product management, as I was more involved in strategic planning and formulating the product roadmap than in previous roles. Our small team had freedom to work closely with early adopters in the space, moving fast to test our hypotheses in working code as part of a tight feedback loop with real users who were running weekly test builds.

      The types of complex and expensive 3D printed parts that might be simulated in Netfabb:

  - section_layout: 2col
    images:
      - caption: 
        description: 
        url: '/projects/netfabb/netfabb-part1.jpeg'
        positioning: 
        width:
        height:
      - caption: 
        description:
        url: '/projects/netfabb/netfabb-gm-parts.png'
        positioning: 
        width:
        height:

  - section_layout: text
    content: |
      ## Mini Case Study - Improving Results Animations

      We are simulating a manufacturing process that occurs over time as the part heats and cools, displacements and stresses change over time. Thus animating and scrubbing through the manufacturing timeline become critical to understanding part quality. As you can see below, the v1 animation controls were quite barebones and stretched the usability of the UI elements:

  - section_layout: 2col
    images:
      - caption: 'This gif illustrates the before-state of the animation toolbar'
        description: 'Simulation Utility animation panel prior to redesign'
        url: '/projects/netfabb/netfabb-animate.gif'
        positioning: 
        width:
        height:

  - section_layout: text
    content: |
      I looked for inspiration from time-based interfaces in audiovisual apps like YouTube, Vimeo, and Spotify that all of our users would be familiar with. There are also precidents in simulation & manufacturing software, though typically these involve removing material to create a part (CNC & CAM), versus the additive manufacturing we are modeling:

  - section_layout: 1col-narrow
    images:
      - caption: 'Sources of inspiration for timelines & time-based interfaces; common patterns and familiaries emerged'
        description: 'Sources of inspiration for timelines & time-based interfaces'
        url: '/projects/netfabb/netfabb-inspiration.png'
        width:
        height:

  - section_layout: 1col-narrow
    images:
      - caption: 'Sketching out design concepts to integrate new timeline controls in the Netfabb UI'
        description: 'Sketching out design concepts to integrate new timeline controls in the Netfabb UI'
        url: '/projects/netfabb/netfabb-timeline-sketches.png'
        width:
        height:

  - section_layout: 2col
    images:
      - caption: 'Feedback and insights related to timeline and animation using a LUMA "Bullseye Diagram" for prioritization synthesis'
        description: 'Feedback and insights related to the timeline & animation'
        url: '/projects/netfabb/netfabb-user-research-synthesized.png'
        positioning: 
        width:
        height:
      - caption: 'Mockup of a new additive manufacturing timeline with key events highlighted; this version integrates the best of our findings and feedback'
        description: 'Mockup of a new additive manufacturing timeline with key events highlighted; this version integrates key findings and feedback'
        url: '/projects/netfabb/netfabb-timeline.gif'
        positioning: 
        width:
        height:

  - section_layout: text
    content: |
      We ended up sequencing the updates into three phases:

  - section_layout: 3col
    images:
      - caption: 'Phase 1: Functional updates to the existing panel; this UI is easy to update, and backend improvements are needed to complete the experience'
        description: 'Phase 1 improvements'
        url: '/projects/netfabb/netfabb-updates-phase1.png'
        width:
        height:
      - caption: 'Phase 2: Adds a simple in-canvas timeline showing progress & key events, while maintaining ribbon controls'
        description: 'Phase 2 improvements'
        url: '/projects/netfabb/netfabb-updates-phase2.png'
        width:
        height:
      - caption: 'Phase 3: In-canvas controls and interactions replace the ribbon panel; nice-to-have improvements included as feasible'
        description: 'Phase 3 improvements'
        url: '/projects/netfabb/netfabb-updates-phase3.png'
        width:
        height:

  - section_layout: 2col
    images:
      - caption: 'Since the manufacturing process occurs bottom-up vertically, I also explored a vertical timeline to mirror this model; power-users responded incredibly well to this concept, but it was not as immediately intuitive as the standard horizontal layout'
        description: 'Vertical timeline'
        url: '/projects/netfabb/netfabb-vertical-bar.png'
        positioning: 
        width:
        height:
      - caption: 'I ended up leaving Autodesk as this was being handed off to development, so did not see the fully implemented version'
        description: 'Netfabb Simulation Utility displaying part displacement results'
        url: '/projects/netfabb/netfabb-animation-results.png'
        width:
        height:
        
  # - section_layout: 1col-narrow
  #   images:
  #     - caption: 'Netfabb Simulation Utility displaying part displacement results (i.e. warpage due to manufacturing)'
  #       description: 'Netfabb Simulation Utility displaying part displacement results'
  #       url: '/projects/netfabb/netfabb-sun-blade.png'
  #       width:
  #       height:

  - section_layout: text
    content: |
      ### Impact

      Simulating the manufacturing process has already saved our customers millions of dollars in lost time, expended materials, and damaged machinery. As available compute resources continue to increase and additive manufacturing reaches maturity in more industries, we expect this impact to continue to grow superlinearly. 

---
