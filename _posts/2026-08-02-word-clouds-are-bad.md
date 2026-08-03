---
layout: post
title: "I Stopped Placing Words and Started Setting Type"
date: 2026-08-02 09:00:00
categories: blog
author: Ryan Arnaudin
blurb: Twenty-five years of live music, on one wall. I'd tried this before with off-the-shelf word cloud libraries and it always looked like clip art. The fix wasn't tweaking and tuning...it was rethinking how to place words.
image: images/posts/band-cloud/wall-ink.jpg
priority: 0.6
published: true
---
I've wanted to build this for years...every band I've seen live, over twenty-five years, on a single wall.

Ever since my friends and I started driving, live music has been a hobby and escape, so I wanted something I could look at that would bring those nights back to me. Not just a spreadsheet row, or disjointed cell-phone pictures, but a complete view.

I tried it more than once over several years with various word cloud libraries and threw the result away every time.

{% include figure.html url="/posts/band-cloud/wall-ink.jpg" caption="My wall. Band names bleed off the sides on purpose...it's part of the mechanism, not an accident." class="img-full-width" eager=true %}

## Why they all look the same

A word cloud package places the biggest word, then spirals outward from the center looking for a gap the next word fits into, and gives up after so many tries. When generated purely programmatically, it's often crude, with words orbiting in a blob. Holes open where nothing happened to fit. Irregular names and placement mean a tradeoff between excessive whitespace and too much cropping. No amount of tuning font ranges or padding guarantees a reliably good-looking cloud.

The breakthrough was to stop thinking about placement and start thinking about it as an exercise in typesetting.

## Pack past the edge, then pull it back

First, no vertical text or head-tilting angles. Rows get packed to a target **7% wider than the container**, then scaled and gap-justified back to land exactly on it. A row physically cannot end short. There's nowhere for a hole to open, and names run off the sides because the row was overfull before it was corrected. This turned out to be the thing that makes it read as a wall instead of a diagram.

One binary search then sets a single global type scale, taking the larger of two bounds: the smallest scale whose rows stack past the fold, and a legibility floor. On a laptop the first wins and the whole wall lands in one screen. On a phone the floor wins, the wall grows taller, and you naturally scroll. Built with a system of rules, not breakpoints.

Coverage is a property of the algorithm rather than of tuning. Everything after that is texture: rows shuffle, sizes gradate continuously instead of in tiers, words float in whatever vertical slack their row has, and wide names tilt by however much slack is left over.

## The part I didn't expect to need

Every load composes a new arrangement, which means one good render proves nothing about the next one. So I came up with an auditor that reshuffles the layout fifty times and reports the **worst** case of pairwise glyph overlap and horizontal coverage, band by band.

It actually caught two bugs that I didn't notice on visual review. Tilted words were clipping the row above them. And the leftover final row, short by construction, was landing mid-wall, where it looks like a hole. Pinned to the bottom it reads as the ragged last line of a justified column, which is just ordinary typesetting. Both looked fine on my screen.

{% include figure.html url="/posts/band-cloud/detail.jpg" caption="Click a name and the nights come back: dates, venues, festivals, and who else was on the bill." class="img-full-width" %}

## The data is a memory, so it's labeled like one

The source is a spreadsheet that I've added to for years, ever since I first came up with this idea. It's simple, but over time I've been inconsistent in how I've added to it...some exact dates, some "November 2023," some just a year or estimated time range. The build reads all of it, and anything coarser than a day gets labeled *approx.* in the UI, so a vague memory or unvalidated show doesn't fail or get assigned false precision. Two undated rows at the same venue never merge into a shared night either.

Underneath, on initial build it's nearly 300 bands across 200-ish nights, about 60 venues, back to 2001. Most of the bands (~80%) I've seen exactly once. That's the real shape of going to shows (unless you're a Phish fan), and it's why the layout reshuffles on every load. The bands I've seen repeatedly stay large, because that count is the only information on the page, and everyone else trades places and gets their turn at being featured.

That's the whole point, really. Supporting bands who are sharing their art and expression is worth doing, and this is what I have to show for it...a functional art piece where those nights keep going. Clicking the right name can transport me back to a Tuesday night in 2009.

Next I want to pull in the photos and videos still buried in my archives, so the nights come back with sights and sound.

Despite all the time I spent figuring out how to get this right, the implementation stays simple. No framework, no dependencies, no runtime requests. Static HTML, CSS, and ES modules, plus self-hosted open-license type.

**👉 [See the wall](/shows/)**.

Click any name, or hit `/` to search for a band or venue. The code is MIT on [GitHub as band-cloud](https://github.com/arnaudin/band-cloud); the show history is obviously unique to me, so the repo builds against invented sample data.
