# drabdude.github.io

Personal academic website of Arjun Sethi-Olowin — plain HTML/CSS, no build step.

- `index.html`, `research.html`, `cv.html`, `research/*.html` — pages
- `assets/css/style.css` — all styling (light/dark colors are the variables at the top)
- `assets/img/research/` — one image per research project
- `assets/pdf/Arjun_Sethi-Olowin_CV.pdf` — CV download

The live site is https://students.washington.edu/as12/ (UW student web hosting). To update it, from this folder:

```
rsync -rtv --exclude '.git*' --exclude '.github' --exclude '.nojekyll' --exclude 'README.md' --exclude '.DS_Store' --exclude 'redirect' ./ as12@vergil.u.washington.edu:student_html/
ssh as12@vergil.u.washington.edu 'chmod -R a+rX ~/student_html/*'
```

`redirect/` is what drabdude.github.io serves: pushing to `master` publishes it to `gh-pages`, and it forwards every old URL to the UW site.
