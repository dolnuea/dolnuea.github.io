# dolnuea.github.io
My personal/portfolio website!

This project uses Vite + React, Tailwind CSS, Material UI, Motion library
font: https://www.dafont.com/mtheme.php?id=4

to run npx vite --port=4000

 dev
    vite
  build
    vite build
  lint
    eslint src --ext js,jsx --report-unused-disable-directives --max-warnings 0
  preview
    vite preview
  deploy
    npm run build && gh-pages -d dist