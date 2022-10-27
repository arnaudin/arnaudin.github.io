---
layout: post
title:  "Developing an Airfoil App for Fusion 360"
date:   2016-01-10 19:00:00
categories: blog
author: Ryan Arnaudin
permalink: /projects/airfoilapp/
blurb: An app for Fusion 360 that creates airfoils from a NACA number. 
priority: 0.6
---
I developed an open-source app to generate sketch profiles of NACA airfoils in Autodesk® Fusion 360™. This is available as code that can be used directly as a script in Fusion, or as a packaged add-in from the app store. 

The way this came about is that I was working on a customer CFD application that required models consisting of various airfoils. It would have been tedious to build all these by hand, so I started looking for an automated solution. I discovered a [python script](https://github.com/dgorissen/naca) to generate points along the profile of an airfoil from its NACA number, but nothing to create sketches or models within CAD. 

Fusion 360 apps were relatively new, so I thought it would be a fun exercise to wrap dgorissen's script in a Fusion app. I built a simple UI, drew up some graphics, and packaged an app for anyone to use! 

![Fusion Airfoil App Screenshot](/images/posts/airfoil-app/airfoil-app-screenshot.jpg)

[Fork on Github](https://github.com/arnaudin/fusion360-airfoil-generator)

[Download for free for Fusion](https://apps.autodesk.com/FUSION/en/Detail/Index?id=1569210467479959341&appLang=en&os=Win64)

This airfoil app has been a *featured app* and a *most popular app* in the Fusion app store with over 1100 downloads as of December 2016.

A 3D extrusion of the airfoil sketch gets us a wing:
![Fusion Airfoil App Rendering](/images/posts/airfoil-app/airfoil-app-rendering.png)
