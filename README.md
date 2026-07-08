# arnaudin.github.io / ryanarnaudin.com

Personal homepage and portfolio of Ryan Arnaudin — product designer in Austin, TX.

## About

A static site built with [Jekyll](https://jekyllrb.com/) 4.4 and deployed to GitHub Pages via GitHub Actions (`.github/workflows/jekyll.yml`; Pages source must be set to "GitHub Actions").

The design is fully custom (2026 redesign) — a text-first, editorial layout with a technical/blueprint voice. The site was originally bootstrapped in 2022 from [himatt.com](https://github.com/MattGreyDesign/himatt.com) (GPL v3), though essentially none of it remains.

- **Typefaces** (self-hosted variable fonts in `fonts/`): [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) for display, [Inter](https://rsms.me/inter/) for body, [IBM Plex Mono](https://www.ibm.com/plex/) for metadata/labels.
- **Libraries**: [Sass](https://sass-lang.com/) (Dart Sass via jekyll-sass-converter 3), [PhotoSwipe](https://photoswipe.com/) for image lightboxes, [Headspace](https://github.com/gdub22/headspace) for the hide-on-scroll header, [Normalize.css](https://github.com/necolas/normalize.css). No client-side frameworks.
- **Forms**: the contact form posts to [FormKeep](https://formkeep.com/), protected by reCAPTCHA v3 (token fetched at submit time).
- **Easter egg**: type `blueprint` anywhere (or use the footer switch) to flip the site into blueprint mode — white linework on cobalt paper. The theme is a single palette-layer swap in `_sass/site/base/_variables.scss` / `_blueprint.scss`.

## Local development

```sh
bundle install
bundle exec jekyll serve --port 4001
```

Notes:

- `_config.yml` changes require a server restart; everything else hot-rebuilds.
- Locally, `/projects/` shows a WEBrick directory listing of built case studies — handy for browsing. In production GitHub Pages returns a 404 there (no index page exists by design).
- A hidden style guide lives at `/styleguide/` (not indexed, not linked).

## Content architecture

- `_projects/` — case studies (a Jekyll collection, output at `/projects/:path/`). Front matter drives everything: `summary`, `role`, `outcomes` (stat row), and a `content_layout` list of sections (`text`, `1col`, `2col`, `video`, …) rendered by `_includes/layout.html`. Start new case studies from `_projects/z-empty-template.md`.
- `_posts/` — blog posts, published at `/blog/:title/`.
- `_pages/` — top-level pages (home/work, about, process, writing index, contact).
- `_drafts/` — unpublished drafts and archived content; never built (the local server doesn't run with `--drafts`).

## Images

After adding or changing images, run:

```sh
./tools/optimize-images.sh
```

It generates (requires `cwebp` — `brew install webp`):

- a `.webp` next to every `.png`/`.jpg`/`.jpeg` under `images/` (capped at 1600px wide; favicons skipped),
- a `.900w.webp` variant for images wider than 1400px (mobile srcset),
- `_data/image_dims.yml` — the width/height index the templates use for `srcset`, layout-shift-free `<img>` tags, and PhotoSwipe zoom targets.

GIFs are indexed for dimensions only (no WebP conversion). Templates lazy-load everything except the first image of a page, which gets `fetchpriority="high"`.

The site-wide social-share fallback image lives at `images/site/og-default.png` (1200×630); pages with a `thumbnail` in front matter use that instead. `robots.txt` blocks `/images` in general but allows share images (`/images/site/`, `*-thumbnail*`) so link previews work.

## Licenses

### Source code

Under the [GNU General Public License v3.0](LICENSE), you can adapt and use the source code of this site (but not its content) for personal and commercial use, so long as you retain the same license for your own project.

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=flat-square)](https://www.gnu.org/licenses/gpl-3.0)

### Content

© Ryan Arnaudin

Unauthorized use and/or duplication and adaptation of this material (all images, text, and media files) without express and written permission from this site's author and/or owner is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to Ryan Arnaudin and linked to ryanarnaudin.com with appropriate and specific direction to the original content.
