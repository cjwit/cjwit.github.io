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

## Outline

* What it is
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
