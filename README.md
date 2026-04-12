# Sergio García Genís — Scientific Portfolio

White / black / grey scientific editorial design. Built for GitHub Pages.

---

## 🚀 Deploy to GitHub Pages

1. Create a repository — recommended name: `sergio-garcia-genis.github.io`
2. Upload all files preserving this folder structure:

```
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg              ← your photo (square, min 400 × 400 px)
    ├── Sergio_Garcia_CV.pdf     ← downloadable CV
    ├── research/                ← images for Focus Areas section
    │   ├── dhm_fringes.jpg
    │   ├── phase_map.jpg
    │   └── ...
    ├── thesis/                  ← figures for the Thesis blog
    │   ├── setup_photo.jpg
    │   ├── fringes.jpg
    │   └── ...
    ├── projects/                ← project cover images
    │   └── dhm_setup.jpg
    └── gallery/                 ← photo grid
        ├── optical_bench.jpg
        └── ...
```

3. Go to **Settings → Pages → Source → Deploy from branch → `main` → `/ (root)`**
4. Site will be live at `https://sergio-garcia-genis.github.io/`

---

## ✏️ Updating content — only edit `script.js`

### Add a research image (Focus Areas)

```js
// In FOCUS_AREAS array:
{
  title: 'Digital Holographic Microscopy',
  image: 'assets/research/dhm_fringes.jpg',  // ← add path here
  ...
}
```

### Add a figure to the Thesis blog

Three block types available:

```js
// Plain text section
{ type: 'text', heading: 'Section Title', body: 'Text content...' }

// Single figure with caption
{ type: 'figure',
  src:     'assets/thesis/fig1.jpg',
  alt:     'Alt text for accessibility',
  label:   'Fig. 1',
  caption: 'Caption describing the figure.' }

// Two figures side by side
{ type: 'figure-row', figures: [
    { src: 'assets/thesis/a.jpg', alt: '...', label: 'Fig. 2a', caption: '...' },
    { src: 'assets/thesis/b.jpg', alt: '...', label: 'Fig. 2b', caption: '...' },
]}
```

### Add a paper / future publication

```js
// In FUTURE_WORK array:
{
  status:      'progress',       // 'planned' | 'progress' | 'review' | 'published'
  statusLabel: 'In Progress',
  year:        '2026',
  title:       'Your paper title',
  venue:       'Optics Express',
  desc:        'Brief description of the work.',
  links: [
    { label: 'Preprint', url: 'https://arxiv.org/abs/...' },
    { label: 'DOI',      url: 'https://doi.org/...' },
  ],
  collab: 'Collaborating institution',
}
```

### Add gallery photos

```js
// In GALLERY array:
{ src: 'assets/gallery/photo.jpg', caption: 'Short description' }
```

---

## 🎨 Change colours

All tokens live at the top of `style.css`:

```css
:root {
  --white:    #ffffff;
  --off:      #f6f6f4;    /* alt section background */
  --grey-500: #8e8d87;    /* secondary text         */
  --grey-900: #1c1c1a;    /* headings               */
  --black:    #0e0e0c;    /* hero + contact bg      */
}
```

---

## ✅ Pre-launch checklist

- [ ] `assets/profile.jpg` — your photo
- [ ] `assets/Sergio_Garcia_CV.pdf` — downloadable CV
- [ ] Update LinkedIn URL in `index.html` (search `linkedin.com/in/`)
- [ ] Update GitHub URL in `index.html` (search `github.com/sergio`)
- [ ] Set `image:` paths in `FOCUS_AREAS`
- [ ] Set `src:` paths in `THESIS.sections` figures
- [ ] Fill `GALLERY` array (uncomment example lines)
- [ ] Update `FUTURE_WORK` status dots as papers progress
