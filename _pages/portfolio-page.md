---
title: "Portfolio"
permalink: /portfolio-page/
layout: single
classes: wide
author_profile: true
---

Projects I've worked on. Your old site listed a **Cyclistic Case Study** and a **Strava Activity** analysis (both Google Data Analytics Certificate–style projects) — placeholders for both are included below. Send the writeups/files and I'll fill these in properly.

<div class="portfolio-grid">
{% for project in site.portfolio %}
  <div class="portfolio-card">
    <h3 class="portfolio-card__title">{{ project.title }}</h3>
    <p class="portfolio-card__excerpt">{{ project.excerpt }}</p>
    <a href="{{ project.url | relative_url }}" class="portfolio-card__link">View Project &rarr;</a>
  </div>
{% endfor %}
</div>
