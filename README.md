# Sergio García Genís — Research Portfolio

Personal academic & professional portfolio website for GitHub Pages.

## 🚀 Deploying to GitHub Pages

1. Create a new repository named `sergio-garcia-genis.github.io` (or any name).
2. Upload all files keeping this structure:

```
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── profile.jpg          ← your profile photo
    ├── Sergio_Garcia_CV.pdf ← your CV for download
    ├── gallery/             ← lab & results photos
    │   ├── dhm_fringe.jpg
    │   └── ...
    └── projects/            ← project cover images
        └── dhm_setup.jpg
```

3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**.
4. Your site will be live at `https://<your-username>.github.io/`.

---

## ✏️ Updating Content

All content is controlled from **`script.js`** — no HTML editing needed.

### Add a new project

Open `script.js` and add an object to the `PROJECTS` array:

```js
{
  date: "Jan 2026 – Present",
  title: "Your Project Title",
  company: "Institution or Company",
  desc: "Description. You can use <strong>HTML</strong> here.",
  tags: ["Tag1", "Tag2", "Tag3"],
  image: "assets/projects/photo.jpg",   // or "" for emoji placeholder
  imageAlt: "Photo description",
  emoji: "🔭"   // shown only when no image
}
```

### Add a publication or paper

Add an object to the `PUBLICATIONS` array:

```js
{
  year: "2026",
  title: "Full Paper Title",
  venue: "Journal of Optics / Conference / Institution",
  desc: "Brief abstract or description.",
  links: [
    { label: "DOI",  url: "https://doi.org/..." },
    { label: "PDF",  url: "assets/papers/paper.pdf" },
  ]
}
```

### Add gallery images

1. Copy your image to `assets/gallery/yourimage.jpg`.
2. Add an entry to the `GALLERY` array in `script.js`:

```js
{ src: "assets/gallery/yourimage.jpg", caption: "Phase map of sample X" }
```

---

## 🎨 Customising the look

All colours are CSS variables at the top of `style.css`:

```css
--accent:   #5ec4ff;   /* main cyan / laser blue */
--accent2:  #00e5b0;   /* secondary teal-green */
--bg:       #0a0e14;   /* page background */
```

Change these to restyle the entire site instantly.

---

## 📁 Asset checklist before going live

- [ ] `assets/profile.jpg` — your photo (square, min 400×400 px)
- [ ] `assets/Sergio_Garcia_CV.pdf` — downloadable CV
- [ ] Update LinkedIn URL in `index.html` (search `linkedin.com/in/`)
- [ ] Update GitHub URL in `index.html` (search `github.com/sergio`)
- [ ] Add gallery images and uncomment entries in `GALLERY`
- [ ] Add thesis PDF link in `PUBLICATIONS[0].links`
