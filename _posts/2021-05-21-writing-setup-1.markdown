---
layout: post
title: Writing in VSCode/markdown using pandoc, Zotero, and LaTeX, part 1
date:   2021-05-20 16:40:00 -0400
tags: 
 - writing
 - tech
description: A broad overview of one way to make writing both way too complex and very simple.
---

I prepared this document as a series of notes for my future self, when I forget how I set all this up. If you found your way here, feel free to reach out at [chris.witulski@gmail.com](mailto:chris.witulski@gmail.com) with any questions, comments, or (more likely) suggestions. Importantly, this is just an overview. It's not a tutorial, which means that while it may be helpful for getting an idea of how things connect and seeing what has worked well for me, it will not replace the need to read lots of documentation, fight many battles, throw a few things across the room when something doesn't work, and so on.

This is based on a handful of other similar resources from around the internet, but with one main difference. I love [Scrivener](https://www.literatureandlatte.com/scrivener/overview), but I'm also increasingly enjoying plain text editors. The main feature I use in Scrivener (which I used to write two books, so for large projects) is its organizational structure. Specifically, I love the word count targets for individual small sections. They just fit the way I work.

But plain text editors like VSCode and Atom are so easy to "fall" into. Both have a Zen mode and using them with a simple [Markdown](https://guides.github.com/features/mastering-markdown/) markup for formatting makes my writing more efficient. It lets me obsess about formatting some other time, likely when I'm procrastinating. Which happens a lot.

The huge number of extensions for both programs also give extraordinary flexibility. For writers, working with [Zotero](https://www.zotero.org/) without having to actually use Zotero is pretty nice. Piping everything through [Pandoc](https://pandoc.org/) to automatically format a document and populate citations/reference lists is a pain to set up, but makes life far easier once it's working.

My goal here is to leave notes to myself for when I forget how this all works and need to set it up again someday:

- How I mimic a tiny bit of Scrivener's functionality using a custom VSCode extension
- How to connect Zotero and BetterBibTex
- How to get Pandoc to export plain text files into well-formatted articles
- Any formatting commands (in Latex) that I find useful and want to remember for the future

## VSCode and markdown

[VSCode](https://code.visualstudio.com/) is an open source plain text editor from Microsoft. It seems to have quickly become the standard, in part because of its extensibility. Unlike Atom (also open source, but from Github, which is now also owned by Microsoft), VSCode seems a bit less writer friendly "out of the box." That's probably just because it's newer, and when I think about it, I had found a bunch of pages listing useful Atom packages for writing. So that wasn't really "out of the box" either. 

I do my writing in a format called [Markdown](https://guides.github.com/features/mastering-markdown/), which is a simple and powerful-enough plain text format that other systems can understand and reformat easily. The link has more of an introduction. For a sample, [see this document in Markdown here](https://raw.githubusercontent.com/cjwit/cjwit.github.io/_posts/2021-05-21-writing-setup.markdown).

## Useful VSCode extensions for writing

Since VSCode is so extensible, it's worth listing some useful extensions that are available through the "Marketplace" tab within the program.

![VSCode Marketplace](/images/marketplace.png){:class="small"}

- **Code Spell Checker:** obvious! I use this spell checker because it allows for `camelCase` and so-called `kabob-case` checking as well, instead of just looking at whole words. This is useful for coding, but may not be necessary for others. It is also easy to add words to a global or project-specific dictionary
- **Citation Picker for Zotero:** this works with Zotero and will come up later
- **Markdown Checkboxes:** lets me make quick task lists in my notes, and check them off
- **Markdown Table Formatter:** formats markdown tables so they're easier to read
- **markdownlint:** finds and fixes markdown issues (though many of the rules are kind of annoying and I've turned them off)
- Selection Word Count and Section Word Count Targets are two others that I'll get to in a second.

With Atom, I had also installed some things that make distraction-free writing easier, but VSCode has a "Zen mode" built in that works quite well. If anyone has a suggestion for something that matches the Atom `typewriter` patch, let me know. It keeps the current line at the middle of the page instead of the bottom. It seems like a little thing, but it helps with neck issues.

## Organizing with word counts

So I recently built my first two VSCode extensions. Both are available through the VSCode marketplace, as well. They begin to replace elements of my favorite features from Scrivener. [Selection Word Count](https://marketplace.visualstudio.com/items?itemName=witulski.selection-word-count){:target="_blank"} adds to a standard word count to give the count of a highlighted selection. I know, MS Word does this and so do many other things. But VSCode doesn't and I had not found an extension that does. I guess others haven't either since this really simple adjustment to a word count demo that I found online  has over 750 installs at this point.

![Section Word Count Targets](/images/section-word-count.png)

The second, [Section Word Count Targets](https://marketplace.visualstudio.com/items?itemName=witulski.section-word-count-targets) searches for the last section heading to see if it has a target word count. If it does, the extension calculates the word count of the current section (between the closest headers) and calculates progress as a percentage of the target. Targets need to be typed into the end of the heading in the format `(Target: 300)` so that the extension can find and parse them, but that's an easy thing to do. It's also simple to go back and delete those after the draft is largely finished. If there are so many headings that this is a chore, VSCode's support of *regular expressions* in search can ease the process. It looks scary, but entering the regular expression `\(Target:\s[0-9]+\)$` into the search bar will find all of these and, from there, they can be replaced with nothing.[^regex]

[^regex]: To explain this string in more detail, `\(Target:\s[0-9]+\)$` searches for the text `(Targets: xxx)`, where the `x` characters are digits. The backslashes (`\`) tell VSCode to treat the next character as it is instead of using it for some other purpose, so here the parentheses are parentheses and do not signify a group. The `\s` represents a white space and the `$` says that this string should be at the end of a line.

![Searching for all targets](/images/regex.png)

With these two extensions alongside the list above, VSCode becomes a decently powerful writing system. There are some further steps, though, to get everything working. The biggest relate to setting up Zotero to handle references and exporting formatted documents using pandoc.

With this basic set up underway for using Markdown in VSCode, the next steps are handling references with Zotero and using Pandoc to turn the Markdown text into pretty much anything.

## [Go to Part 2]({{ site.baseurl }}{% link _posts/2021-05-21-writing-setup-2.markdown %})
