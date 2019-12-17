**How to use the template (in french, sorry):** https://thomasrobertfr.github.io/chordettes-webpages/about/

## TL;DR and for english guys

### Jekyll

The website is compiled into HTML with Jekyll, see https://jekyllrb.com/  
After installing jekyll, type `jekyll serve` in a terminal set in the folder of this project to obtain a local version of the website. Once you're satisfied, you need to copy/paste the files in the `_site` folder into the `public_html` folder of the web server at LIRIS.

### Homepage

The homepage is constituted of the succession of blocks defined in the folder `_homepage`. Each file in `_homepage` is a block. At the start of each block is some metadata to define the style of the block and if it is a special block or just a text block.

Publications is a special block, generated from the list of publications defined in `_data/publications-home.yml`. Add your publications that you want to see on the homepage there.

The other blocks are simple content, open a file and change the content there. Text is written in HTML or Markdown.

### Publications page

The content of the publication page `_pages/publications.md` is produced automatically from the file `_data/publications.yml`. Add your publications there. Look at the other publications to get an idea of the format. The full format is 

```yaml
- title: "MANTRA: Minimum Maximum Latent Structural SVM for Image Classification and Ranking" # Titre (required)
  authors: T. Durand, N. Thome, M. Cord # Authors (required)
  year: 2015 # Year (required)
  type: conf # Type of publciations (required), choose among [conf, workshop, journal, book, bookchapter]
  in: ICCV # Conf or journal name
  additional: p. 123-234, chapter 12 # Add info shown in small
  image: images/publications/mantra.png # URL of the image to illustrate the publications
  # URLs for the paper. Can be only 1 url or more. For 1 url:
  url: /pdfs/publis/mantra.pdf
  # for more than one url:
  urls:
    - url: /pdfs/publis/mantra.pdf # URL
      title: Papier # Title of the link
      style: primary # Style of the button, choose amoung "default" (gray), "primary" (dark blue), "info" (light blue), "success" (green), "warning" (orange), "danger" (red)
    - url: /pdfs/publis/mantra.pdf # URL
      title: Papier # Title of the link
      style: primary # Style of the button, choose amoung "default" (gray), "primary" (dark blue), "info" (light blue), "success" (green), "warning" (orange), "danger" (red)
    # ...
  # BibTex (be careful to leave the | in the line below)
  bibtex: |
    @inproceedings{mantraICCV15,
      Author = {Thibaut Durand and Nicolas Thome and Matthieu Cord},
      Title = {MANTRA: Minimum Maximum Latent Structural SVM for Image Classification and Ranking},
      booktitle = {IEEE International Conference on Computer Vision (ICCV)},
      Year = {2015}
    }
```

### Pages

Each file in `_pages` will be considered as a page. If you want to add a new page, add a file there. A basic text page would look like this:

```md
---
layout: page
title: Title or your page
order: 5 # Optional value to choose in which order pages are shown in the menu bar on the left
intro: Type the text in the header, a sort of abstract. If you want none, remove the line
---

Type your content in Markdown or HTML
```


