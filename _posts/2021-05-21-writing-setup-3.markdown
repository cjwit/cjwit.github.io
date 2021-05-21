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

## Customizing the look

LaTeX files have a look to them that is familiar in computer science circles, not unlike how people in the music world might recognize a score that was made on Finale.

* YAML
* Using headers

## Outline

* How to convert (standalone, pandoc)
* How to edit TeX
* Useful stuff
* Arabic text link
* Syllabi

### Text boxes

```latex
\fcolorbox{black}{lightgray}{
  \parbox{\dimexpr\textwidth-2\fboxsep}{\centering
    Words and \emph{italics}

    Including a \href{https://cwitulski.com}{\textbf{homepage link}}
  }
}
```

That's about it. I'll add more as I come across it.
