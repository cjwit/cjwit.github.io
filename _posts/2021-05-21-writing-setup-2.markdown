---
layout: post
title: Writing in VSCode/markdown using pandoc, Zotero, and LaTeX, part 2
date: 2021-05-20 16:41:00 -0400
tags: 
 - writing
 - tech
description: Handling references with Zotero and Zotero's VSCode extension(s).
---

This post continues the discussion of my writing setup. For more on VSCode and Markdown, see [part 1]({% link _posts/2021-05-21-writing-setup-1.markdown %}).

## Handling references

Zotero is a great reference manager that's open and free. Better BibTeX is an extension for Zotero that creates keys that connect a plain text document to a Zotero library. [Installation directions are here](https://retorque.re/zotero-better-bibtex/installation/). Configuration can be a pain and this is one of the reasons for posts like these: I'm hoping that they help me when I need to do this again sometime, like on a new computer. 

Within Zotero's preferences, there is a Better BibTeX pane. Setting `Automatic export` to `On Change` is the important part, as is remembering where the exported library goes. Using `File>Export Library` brings up the dialog. Choose `Better BibLatTex` and keep the file path handy. I save things like this into a text file on my computer so that I can find them more easily. The `Export` pane of the preferences gives the choice of citation format.

The Citation Picker VSCode extension enables you to search and use citations from within VSCode itself. It requires Zotero to be open. When it is, hitting `Shift + Option + Z` (simultaneously) opens a small search bar. Find the resources that you need to cite (you can add more than one and do things like reference specific page numbers), then hit enter. The extension will add the list of references into a series well-formatted cite keys. These cite keys don't look like the final product: when Pandoc processes them (they start with @ signs), it will convert them into inline citations. It then collects them all, sorts them, and appends a reference list to the document, as well. This means that you may need to throw a header for the reference list at the end of the Markdown document, something like:

```markdown
## Works Cited
```

## Exporting with Pandoc

Pandoc is the tool that brings all of these things together and turns them into a useful workflow. It also happens to be one of those things with far more options than seem necessary. It's a command line tool that converts things from one format to another. The superpower is taking a Markdown file and processing it in innumerable ways. My standard practice is exporting to an HTML file, an MS Word document (to share, when editing is necessary), or creating a PDF (for course syllabi, notes, and so on). The documentation includes [a long list of example commands](https://pandoc.org/demos.html).

## Using templates and reference docs

Each of these is customizable with default document templates. I find them to be reasonable and I've come to appreciate how sticking within the defaults can keep me from getting too fancy for my own good with formatting. 

Since Pandoc is a command line tool, all of these commands that follow need to be entered into a terminal. There's a Terminal application on Macs and other options on Windows. VSCode also has a built-in terminal that does the same thing. You can find it (on the Mac, at least) by hitting `` ^` ``, or `control` and `` ` `` (backtick) at the same time.

[The documentation](https://pandoc.org/MANUAL.html#templates) is readable, but not the easiest to understand if you're just starting. Most formats have a template file (which you can  see using the command `pandoc -D *FORMAT*`). It's often easiest to use the default and then make any necessary formatting changes later. But it is possible to create your own template and use it instead. Adding custom headers to a standalone HTML file or something might make this worthwhile. That said, I use HTML output most often when writing content for online classes, which I then paste into an LMS like Canvas as snippets and not as complete HTML files. (Most of my actual web work is done using other systems like Jekyll that do that processing without Pandoc.)

The most glaring exception is Microsoft Word. Because of incompatibility issues, Pandoc uses a "reference doc" to create Word documents. The default here looks like a default Word doc if you don't change any formatting. Creating a blank Word document and defining all of the styles, however, can be a powerful shortcut. Since Pandoc uses the styles themselves and not just the "look" of the document, the reference doc can remain blank. Just modify each style settings (like footnotes, different header levels, titles, and so on) to streamline exporting book chapters as clean, double-spaced, Times New Roman documents with set margins or whatever, as determined by a publisher. To use the reference doc, point Pandoc toward it using the `--reference-doc` flag. I keep these in a folder, alongside my cheat sheet with Pandoc commands.

```bash
pandoc draft.md -s -o paper.docx --reference-doc=term-paper-reference-doc.docx --bibliography=/path/to/that/thing/you/saved/earlier/bibliography.bib
```

The last interesting bit of all this is just how much flexibility you get by using Pandoc to convert to PDF. It uses the LaTeX system, which is an entirely different hole that I fell into not long ago for another project. In the next post, I'll introduce that and share some useful commands. Again, mostly so I remember them.

## Useful LaTeX commands

I'll add to this list as I come across things that are helpful for PDF file exports (text boxes for syllabi and things like that).

## [Go to Part 3]({{ site.baseurl }}{% link _posts/2021-05-21-writing-setup-3.markdown %})

