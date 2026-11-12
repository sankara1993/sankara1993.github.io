# Aravind's Corner: blog redesign

A custom Jekyll design for aravindsankar.com. No theme: everything lives in `_layouts`, `_includes` and `assets`. Posts are still Markdown files in `_posts`, so the publishing routine does not change.

## Put it on a `redesign` branch of sankara1993.github.io

1. In the `sankara1993.github.io` repository, open the branch dropdown (it says `main`), type `redesign`, and choose **Create branch: redesign from main**.
2. With `redesign` selected, choose **Add file → Upload files**, drag in everything *inside* this unzipped folder (including the folders that start with `_`), and commit to `redesign`.
3. Still on `redesign`, open `assets/css/main.scss` and delete it (the trash icon, or "Delete file" in the three-dot menu). It belongs to the old theme and would break the build. `_includes/head/custom.html` can be deleted too.
4. Leave the `CNAME` file alone. It keeps aravindsankar.com pointed at the site.

Your live site does not change yet: GitHub Pages is still publishing `main`.

## Go live, and roll back

- **Go live:** Settings → Pages → under "Build and deployment", change the branch from `main` to `redesign` and save. The new design replaces the current site in a couple of minutes.
- **Roll back:** change that same setting back to `main`.
- If the site does not update, open the **Actions** tab and look at the latest "pages build and deployment" run for the error.

## Everyday edits

After going live, make edits on the `redesign` branch (or merge it into `main` and switch Pages back to `main`).

| To change | Edit |
| --- | --- |
| A new post | Add `_posts/YYYY-MM-DD-title.md` with `title`, `categories`, `tags` and a one-sentence `excerpt` |
| Homepage headline | The `hero__title` line in `_layouts/home.html` |
| Menu links | `_data/navigation.yml` |
| Topic filter buttons on the Blog page | `_data/topics.yml` |
| "The route so far" on the homepage | `_data/route.yml` |
| Race log on the homepage | `_data/races.yml` |
| Homepage intro and the line under it | `intro` and `author.bio` in `_config.yml` |
| Colors and fonts | The `:root` block at the top of `assets/css/site.css` |

Every post needs the front matter block between two `---` lines at the top. Without it, Jekyll skips the file.
