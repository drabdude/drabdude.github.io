# drabdude.github.io

Personal academic website of Arjun Sethi-Olowin — plain HTML/CSS, no build step.

- `index.html`, `research.html`, `cv.html`, `research/*.html` — pages
- `assets/css/style.css` — all styling (light/dark colors are the variables at the top)
- `assets/img/research/` — one image per research project
- `assets/pdf/Arjun_Sethi-Olowin_CV.pdf` — CV download

Pushing to `master` runs `.github/workflows/deploy.yml`, which copies the site to the `gh-pages` branch that GitHub Pages serves.
