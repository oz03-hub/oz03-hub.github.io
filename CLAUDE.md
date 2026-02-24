# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website hosted on GitHub Pages. Built with Jekyll (GitHub Pages' native static site generator) for blog and log support without a build pipeline.

## Site Structure & Requirements

- **Home** (`/`) — Biography page that includes news
- **Projects** (`/projects`) — Project showcase with a link to download the CV (`/public/OzelYilmazel.pdf`)
- **Blog** (`/blog`) — Personal blog with individual posts
- **Dinner Log** (`/dinners`) — Nightly dinner tracking (date, what was eaten)

## Technology

- **Jekyll** — GitHub Pages runs Jekyll natively; no local build step needed for deployment
- **Theme** — Minima (Jekyll default) or a custom `_layouts/` + `_includes/` setup
- Posts live in `_posts/` (YYYY-MM-DD-title.md format)
- Dinner entries can be Jekyll collections (`_dinners/`) or a simple `_posts/` category

## Common Commands

```bash
# Install dependencies (one-time, requires Ruby/Bundler)
bundle install

# Serve locally with live reload
bundle exec jekyll serve --livereload

# Build static output to _site/
bundle exec jekyll build
```

## Key Files

| Path | Purpose |
|------|---------|
| `_config.yml` | Site-wide config (title, baseurl, plugins) |
| `_posts/` | Blog posts (Markdown, YAML front matter) |
| `_dinners/` | Dinner log entries (if using Jekyll collections) |
| `public/OzelYilmazel.pdf` | CV — linked from the Projects page |
| `Gemfile` | Ruby dependencies (jekyll, plugins) |

## Deployment

Push to the `main` (or `gh-pages`) branch of the GitHub repo. GitHub Pages auto-builds and deploys Jekyll sites — no CI/CD config needed. Set source in repo Settings → Pages.
