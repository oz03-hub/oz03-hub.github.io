# ozelyilmazel.com

Personal website built with [Jekyll](https://jekyllrb.com) and hosted on GitHub Pages.

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `/` | Biography and news/accomplishments |
| Projects | `/projects` | Projects, publications, and CV download |
| Blog | `/blog` | Personal blog posts |
| Dinner Log | `/dinners` | Nightly dinner tracking |

## Local Development

Requires Ruby (managed by mise — `ruby 4.0.1`).

```bash
# First time: install gems
bundle install

# Start dev server with live reload
bundle exec jekyll serve --livereload

# Build static output only
bundle exec jekyll build
```

Site is served at `http://localhost:4000`.

## Project Structure

```
.
├── _config.yml          # Site-wide settings and author info
├── _layouts/            # HTML templates (default, page, post, dinner)
├── _includes/           # Partials (head, nav, footer)
├── _sass/
│   ├── _variables.scss  # ← Color theme and typography (edit here to restyle)
│   ├── _base.scss       # Typography, links, code
│   └── _layout.scss     # Nav, cards, page sections, responsive rules
├── assets/css/main.scss # Sass entry point
├── _posts/              # Blog posts
├── _dinners/            # Dinner log entries (Jekyll collection)
├── public/
│   └── OzelYilmazel.pdf # CV — linked from Projects and Home pages
├── index.html           # Home page
├── projects.md          # Projects page
├── blog.md              # Blog listing page
└── dinners.md           # Dinner log listing page
```

## Changing the Color Theme

All colors and fonts are CSS custom properties in `_sass/_variables.scss`. Edit the variables under `:root` and the whole site updates on rebuild. Key variables:

```scss
--color-primary      // links, active nav, buttons
--color-accent       // tags, secondary highlights
--color-nav-bg       // navigation bar background
--color-bg-subtle    // card/panel backgrounds
--color-text         // main body text
--color-text-muted   // secondary/meta text
```

## Adding Content

### Blog post

Create `_posts/YYYY-MM-DD-slug.md`:

```markdown
---
title: "Your Post Title"
date: 2026-03-01
---

Post body goes here.
```

### Dinner entry

Create `_dinners/YYYY-MM-DD.md`:

```markdown
---
date: 2026-03-01
meal: Grilled salmon
notes: with roasted vegetables  # optional
---
```

## Deployment (GitHub Pages)

1. Create a GitHub repo named `<username>.github.io` (or any name for a project page).
2. Push this directory to the `main` branch.
3. In repo **Settings → Pages**, set source to **Deploy from a branch** → `main` / `/ (root)`.
4. GitHub builds and deploys automatically on every push — no CI config needed.

If using a custom domain, add a `CNAME` file at the repo root containing the domain (e.g. `yilmazel.com`), then configure DNS per GitHub's instructions.
