---
title: "Portfolio"
permalink: /portfolio-page/
layout: single
classes: wide
author_profile: true
---

Welcome! This is where I share the projects I’m working on, mostly at the intersection of data, analytics, and the things I love outside of work. Take a look around, and check back often as I add more.

<div class="portfolio-grid">
{% for project in site.portfolio %}
  <div class="portfolio-card">
    <h3 class="portfolio-card__title">{{ project.title }}</h3>
    <p class="portfolio-card__excerpt">{{ project.excerpt }}</p>
    <a href="{{ project.url | relative_url }}" class="portfolio-card__link">View Project &rarr;</a>
  </div>
{% endfor %}
</div>
