# BoilerCube Website

This is a repository on github, meaning its a collection of files that will auto update our website. Once you choose commit changes to these files the site will change.

This repository contains the BoilerCube student organization website. The site is built with React + Vite and deployed automatically using Netlify.

GitHub is the single source of truth:
- You edit files in this repo
- You commit + push changes to GitHub
- Netlify automatically rebuilds and updates the live website

---

## How to add a new post to the Updates page

Posts for the Updates page are written as Markdown files (`.md`).

1) Create a new Markdown file in this folder:

src/content/posts/

Recommended naming format:
YYYY-MM-DD-short-title.md

Example:
2025-04-02-advisor-nagy.md

2) Copy this template into the new file and fill it in:

TEMPLATE START
---
title: "Post Title Here"
date: "YYYY-MM-DD"
summary: "One sentence summary of the update."
image: "example.jpg"
---

Write your post content here in normal text. You can use Markdown formatting like:

- Bullet points
- **Bold**
- *Italics*
- Links: [Text](https://example.com)


---
TEMPLATE END (Dont add these in)

## How to add images for Updates posts

All images used in Updates posts must be placed in:

public/posts/

Rules:
- Use real JPEG or PNG images (NOT HEIC/HEIF)
- Filenames must match exactly (case-sensitive)
- Avoid spaces in filenames

Example image location:
public/posts/competitionwin.jpg

To use that image as the post’s featured image, set this in the post frontmatter:
image: "competitionwin.jpg"

To show the image inside the body of the post, use:
![Alt text](/posts/competitionwin.jpg)


---

## Troubleshooting

If a post doesn’t show:
- Confirm the `.md` file is in: src/content/posts/
- Confirm the post frontmatter starts and ends with `---`
- Confirm the `date` is in YYYY-MM-DD format

If an image shows as a broken icon:
- Confirm the image file is in: public/posts/
- Confirm the filename matches exactly
- Confirm the image is a true JPEG/PNG (not HEIC renamed to .jpg)

---










# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# BoilerCube Website
