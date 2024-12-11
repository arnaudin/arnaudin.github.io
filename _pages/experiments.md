---
layout: page
title: Experiments
permalink: /experiments/
sitemap: false
# priority: 0.9
---
<div class="projects-intro-wrapper">
    <p class="projects-intro type-level-1">Experiments</p>
</div>

<div class="projects-intro-wrapper">
    <p class="projects-intro type-level-3">Nothing to see here right now...</p>
    <a href="{{ site.url }}" class="projects-intro type-level-3">Go home</a> 
    <br>
</div>

<div class="projects">
    {% for experiment in site.experiments reversed limit:include.limit %}
    <div class="generic-page-wrapper">
      <article class="project-listing">
          <div class="thumbnail-wrapper">
              <a href="{{ project.url | prepend: site.baseurl }}">
                  <div class="thumbnail-description-wrapper">
                      <img src="{{ project.thumbnail | prepend: site.image_serve_path }}" alt="{{ project.title }}" width="600" height="450">
                      <p class="thumbnail-description">
                          <span>{{ project.description }}</span>
                      </p>
                  </div>
                  <h3 class="project-name" aria-hidden="true">{{ project.title }}</h3>
              </a>
          </div>
      </article>
    {% endfor %}
</div>







