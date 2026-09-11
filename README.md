# aravindsankar.com

Source for my personal site, built with [Jekyll](https://jekyllrb.com/) and the
[Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, hosted
free on GitHub Pages.

## Before you push this for the first time

1. Create the repo as `sankara1993.github.io` on GitHub (this exact name is what makes GitHub Pages serve it automatically).
2. Drop a headshot at `assets/images/avatar.jpg` (optional but nice).
3. See the full setup walkthrough doc for how to publish this to
   `https://aravindsankar.com` via GitHub Pages + your Squarespace DNS panel.

## Adding a new class post

Create a file in `_posts/` named `YYYY-MM-DD-a-short-title.md`:

```markdown
---
title: "Title of the post"
categories:
  - Course Name
tags:
  - optional-tag
---

Your writeup in Markdown here.
```

Commit and push — GitHub Pages rebuilds the site automatically in ~1 minute.

## Local preview (optional)

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000
