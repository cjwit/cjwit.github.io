---
layout: post
title: Writing in VSCode/markdown using pandoc, Zotero, and LaTeX, part 3
date: 2021-05-20 16:42:00 -0400
tags: 
 - writing
 - tech
description: Formatting PDF files with LaTeX.
---

This post continues the discussion of my writing setup. For more on VSCode and Markdown, see [part 1]({% link _posts/2021-05-21-writing-setup-1.markdown %}). For more on Pandoc and connecting it to Zotero, see [part 2]({% link _posts/2021-05-21-writing-setup-2.markdown %}).

Pandoc uses LaTeX to create PDF files. LaTeX is the common name for a family of related tools that process TeX files. Learning the TeX "language" and all of its commands is a fairly significant project, but as a tool, LaTeX can handle typesetting and layout beautifully. If you are willing to assume that it's making intelligent choices (it usually is), then you can get a fair amount of customization from within Markdown and Pandoc alone.

The problem is that any move away from the default requires some knowledge of TeX. If this becomes necessary, [this site provides a good overview](https://www.learnlatex.org/en/){:target="_blank"} and [this book](https://tobi.oetiker.ch/lshort/lshort.pdf){:target="_blank"}, which promises to teach you in 139 minutes, fleshes out most of what you need. It's probably a week of reading, testing, fighting problems, and finind some successes. I've been learning this for an open publishing project (the [World Music Textbook](https://worldmusictextbook.org)) that needed some pretty PDF files. Making the first one was hard, but now it only takes me a few minutes to make a professional-looking PDF out of any new submission. I also use Pandoc and LaTeX for things like course syllabi and, more recently, [Arabic song lyrics]({% link _posts/2021-05-20-arabic-latex.markdown %}).

It's this utility and flexibility—along with the difficulty I have in remembering the commands and settings that I like—that led me to writing this post.

## How to create PDFs through Pandoc

The command to make a PDF file from a Markdown file using Pandoc is fairly simple. It reads the output type from the file extension you give, though you can also specify it explicitly. The `-o` specifies the output file name and the `-s` tells Pandoc to make it a "standalone" file.

```bash
pandoc input.md -s -o output.pdf
```

The other option is to use Pandoc to create a TeX file by giving the output file a `.tex` extension and then using some other LaTeX-oriented program (like XeLaTeX) to convert. This is how I handle the World Music Textbook files since I can just go in and make the changes I need directly during that intermediary step. But that's because I've fallen into this hole already.

## Metadata

Pandoc's LaTeX template and others make use of metadata to populate specific information. In this case, it handles and formats titles, authors, publication dates, and so on in specific ways. Pandoc's [User Guide section on YAML metadata blocks](https://pandoc.org/MANUAL.html#extension-yaml_metadata_block) has some details. To include metadata, begin a Markdown file with different fields between a line with `---` and another with `...` (or `---` again). Here's the example from the documentation. The title is in quotes because it contains a colon. Otherwise, it wouldn't need them. The pipe (`|`) after the abstract allows for multiple lines. I'm adding a bit of text after the metadata to better show the formatting and results. The `##` creates a heading and bullets are done with `*`. These are all Markdown things that are pretty easy to get the hang of. Check out a cheat sheet online for more.

```yaml
---
title:  'This is the title: it contains a colon'
author:
- Author One
- Author Two
keywords: [nothing, nothingness]
abstract: |
  This is the abstract.

  It consists of two paragraphs.
...

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## A heading

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

And some bullets:

* Thing 1
* Thing 2
* Thing 3
```

For a LaTeX file, this would produce something that looks like this (with whitespace trimmed off):

![latex metadata](/images/latex-meta.jpg)

## Customizing the look

LaTeX files have a look to them that is familiar in computer science circles, not unlike how people in the music world might recognize a score that was made on Finale.

Customizations come in the form of commands that are added to the TeX file headers. It's possible to add these directly into a TeX file by using Pandoc to create the TeX file instead of the PDF, making edits, and then using Pandoc or something else to make the PDF from the TeX file. I do this a bit when I need to make more complicated changes. (Typing in TeX itself is somewhat irritating since you need commands to create proper quotes and other typesetting things that are not worth worrying about. Having Pandoc do that work is simpler.)

But the easier way to make changes to an entire document is through the Pandoc `header-includes` option. [There are a bunch of variables that are specific to LaTeX](https://pandoc.org/MANUAL.html#variables-for-latex), but this one can actually be used when creating standalone HTML files and more. The important thing here is that it can be used to add some LaTeX "packages" or commands to change the entire document.

Take fonts as a simple example. (There is an option in Pandoc, but I'll do it this way to demo.) To change the font of a LaTeX document, you add a "package" that tells it to use a specific font set. If I add the following line to the YAML header above, then the new PDF looks different.

```yaml
header-includes: \usepackage{mathpazo}
```

![New font](/images/latex-font.jpg)

Fonts can be a pain, especially when doing work with other languages. Getting Arabic to format correctly was hard enough that it inspired me making this site [so that I had a good place to easily find my notes]({% link _posts/2021-05-20-arabic-latex.markdown %}). But setting the PDF engine (the actual program that does the conversion) to `xelatex` when running Pandoc can help since XeLaTeX can use system fonts and doesn't require installing LaTeX-specific packages. To do that, add `--pdf-engine=xelatex` to the command when running Pandoc.

Including a bunch of packages is also possible in the Markdown header. When I use this for syllabi, my `header-includes` uses a list to specify different lines:

```yaml
documentclass: article
colorlinks: true
toc: true

header-includes:
 - \usepackage{fancyhdr}
 - \pagestyle{fancy}
 - \rhead{\emph{MUCT 1250 Syllabus}}
 - \usepackage{tcolorbox}
 - \newtcolorbox{annotation}{colback=red!5!white, colframe=red!75!black}
 - \renewenvironment{quote}{\begin{annotation}}{\end{annotation}}
 - \usepackage{abstract}
 - \renewcommand{\abstractname}{About this document}

title: MUCT 1250 Exploring Music of World Cultures
subtitle: |
  | Christopher Witulski, PhD (cwituls@bgsu.edu, 419-372-8852)
  | 3 credits, online delivery, office hours by appointment
abstract: |
  | While some of this material appears in the online course shell, this document provides a detailed overview of course's structure and expectations. The contents listing below links to specific sections in the PDF file.
  
  | Be sure to review the first few pages that describe our class and the "Expectations for an Online Course" and "Classroom Policies" sections, both of which link to important campus resources.
```

Note that the spaces are just for my own organization (I group things together). The first three items there are LaTeX settings. 

* `documentclass` sets the defaults. There are many others, including `book`, `report`, and even `beamer`, which is for making slides.
* `colorlinks` colors links. There are a bunch of settings for changing the color if different types of links, even within the PDF: footnotes, citations, URLs, and so on can all be different.
* `toc` creates a table of contents. It turns things into links and with syllabi filling up with objectives and descriptions, they get pretty long. This makes it easier to navigate.

The `header-includes` bit has many parts here. The first three make use of the `fancyhdr` package to let me format headers and footers. This is really flexible and well documented online. It's also useful for creating books and professional-looking articles.

`tcolorbox` and the two commands after it turn block quotes into boxes so I can easily highlight things like required texts in the syllabus using the markdown syntax of `>` before a line.

Finally, the last two add an abstract to the document and retitle it "About this document" so I can explain a bit about the course and the very long syllabus. The abstract text is defined in the header as well, again with the pipe to allow multiple paragraphs. this shows up before the table of contents and gives some context as to the purpose of the syllabus (and tells people that the important stuff comes up in the online course shell itself).

This creates a document that starts out looking like this image.

![Syllabus](/images/latex-syllabus.jpg)

The `fancyhdr` lines automatically create headers on all pages but the first that include a current section title and the document title. It also gives control over page numbers (which show up in the footer here, so not in this image). The table is generated from the normal Markdown syntax and converted/formatted by LaTeX. Again, this image is without the top margin's whitespace.

![Syllabus header](/images/latex-syllabus-header.jpg)

That's about it for now. As I have time, I'll outline some other documents that I've formatted using LaTeX and highlight the packages and features that I have found to be useful. As always, thanks and please reach out with any suggestions, ideas, criticisms, updates, and so on.
