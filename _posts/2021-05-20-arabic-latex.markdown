---
layout: post
title:  "Using LaTeX to set Arabic song lyrics"
date:   2021-05-20 09:45:00 -0400
tags: 
 - arabic
 - tech
 - latex
description: Fighting toward a good-looking Arabic text document.
---
Thanks to issues of encoding, right-to-left text, cursive, and the mysteries of fonts, setting Arabic texts to create a document that looks good can be hard. I'm on a Mac and have tried a bunch of methods. Some work, some don't. They're all a pain.

For the last half year or so, I've also become moderately obsessed with LaTex, a typesetting system that's convoluted and powerful. I'll add more about this (the why and how) in a future post. (If you're interested, [this is the best starter that I've come across so far](https://www.learnlatex.org/en/){:target="_blank"}. The next step is the [not so short version](https://tobi.oetiker.ch/lshort/lshort.pdf){:target="_blank"}.) For now, I want to throw my two cents into the "how to get Arabic working" ring.

When struggling against this, I found some helpful answers to similar questions like [this one](https://tex.stackexchange.com/questions/239029/adding-arabic-text-to-an-english-document){:target="_blank"}, which I ended up bookmarking and coming back to repeatedly.

Eventually, I worked out a way to make this work (for me, using a Mac with `xelatex`). I'll outline some of the important parts here and then share an example TeX file and output PDF using lyrics from "Kan az-Zaman wa-Kan" by Fairouz. This shows both Arabic text in an English document and transliteration.

## Header settings

Parts of this draw on things I found around the internet, none of which worked "out of the box." Here's what I landed on. The header begins normally by setting the document up as expected. The `\documentclass{article}` and `\geometry{letter}` predefine the look of the final document and do some background work to keep the links in the document from overflowing.

```latex
\documentclass{article}
\usepackage{geometry}
\geometry{letterpaper}
```

The magic happens with these packages. The `setspace` package works with line spacing, but for some reason, leaving out prevents the system from finding the proper script within the arabic font. The `fontspec` and `polyglossia` packages allow for Arabic usage by telling LaTeX how to handle innumerable elements related to non-English type setting.

Setting the main and other languages defines defaults (within `polyglossia`) and the last line of the header defines which Arabic font will be used. Note that `xelatex` can make use of many system fonts, but you may need to spend some time in the FontBook program to get one working. Replace the `Al Nile` in this example with something from your system. Also `polyglossia` is an `xelatex` package. It's far easier (from what I can tell) than trying to do this with `latex` itself.

```latex
\usepackage{setspace}
\usepackage{fontspec}
\usepackage{polyglossia}
\setmainlanguage{english}
\setotherlanguage{arabic}
\newfontfamily\arabicfont[Script = Arabic]{Al Nile}
```

## Writing things out

Actually using the Arabic involves the `\textarabic` command. In this example, that looks like this:

```latex
\textarabic{كان الزمان و كان}
```

This places the Arabic text in line with the English, or whatever other language is set as the "main" language, above. In this example, I use the Arabic and a transliteration together in the title.

```latex
% in the header
\title{\textarabic{كان الزمان و كان} | Kān az-zamān wa-kān}

% other stuff, and then:
\begin{document}
\maketitle
```

The font in the transliteration is called "American Diacs." Instructions for setting that up are [here](https://org.uib.no/smi/ksv/JaghbubX.html). It installs as another input source/keyboard layout.

## Laying out the poetry

Because Arabic moves from right to left, it looks good to have it to the left side of a table, with the left-aligned English text next to it. This layout achieves a look that's similar to the common way in which Arabic poetry is centered on a page, which is a nice benefit.

The `tabular` table environment works well for this. The environment parameters here create a centered table with a right aligned column followed by two left aligned columns (for the transliteration and translation).

```latex
\begin{center}
\begin{tabular}{ r l l }
```

The Arabic needs the `textarabic` command and the `&` separates the columns. I've used tabs here to make it easier to visualize, but they are not necessary. Also, a web browser may not choose to set the Arabic in a monotype font, so who knows, it may not work anyhow! The `\\` breaks the row and begins a new one.

```latex
\textarabic{كان الزمان و كان}         & Kān az-zamān wa-kān           & Those were the days, there was \\
\textarabic{في دكانة بالفي}           & fi dukāni bālfay              & the shop in the shade \\
```

To show the divisions within the song text, I use `\\[0.5cm]` after the last line of a verse. This creates a slightly larger space.

```latex
\textarabic{أوعى تنسيني أوعى تنسيني}  & Awʿa tensīnī, awʿa tensīnī    & ``Never forget me, never forget me! \\
\textarabic{و تذكري حنا السكران}      & wa-tadhkarī Ḥannā as-skīrān   & And remember Henna the drunk!'' \\[0.5cm]
```

All that's left is closing the environments.

```latex
\end{tabular}
\end{center} 
\end{document}
```

## The full file

Since these kinds of split up demos are difficult to understand sometimes, here is the [full TeX file](/assets/kan-zaman-kan.tex) and the [output PDF](/assets/kan-zaman-kan.pdf). I'll also paste the TeX file content here. Send any suggestions, comments, or questions my way.

```latex
\documentclass{article}
\usepackage{geometry}
\geometry{letterpaper}

\usepackage{setspace}
\usepackage{fontspec}
\usepackage{polyglossia}
\setmainlanguage{english}
\setotherlanguage{arabic}
\newfontfamily\arabicfont[Script = Arabic]{Al Nile} % Replace 'Simplified Arabic' with a font from your system

\title{\textarabic{كان الزمان و كان} | Kān az-zamān wa-kān}
\author{As sung by Fairouz}
\date{}

\begin{document}
\maketitle

\noindent
Adapted from https://lyricstranslate.com/en/Kaan-az-zaman-These-were-days.html by Christopher Witulski and based on the recording at https://www.youtube.com/watch?v=eZBCGVAkZLI. 2021.

\begin{center}
\begin{tabular}{ r l l }
\textarabic{كان الزمان و كان}         & Kān az-zamān wa-kān           & Those were the days, there was \\
\textarabic{في دكانة بالفي}           & fi dukāni bālfay              & the shop in the shade \\
\textarabic{و بنيات و صبيان}          & wa bnayāt u-ṣabyān            & and boys and girls \\
\textarabic{نيجي نلعب عالمي}          & nayjī nlʿab ʿāl-may           & came to play by the water. \\
\textarabic{يبقى حنا السكران}         & Yabaʾ Ḥannā as-sikrān         & Drunk Henna remained \\
\textarabic{قاعد خلف الدكان}          & ʾāʿid khalf ad-dukān          & sitting by the shop \\
\textarabic{بغني و تحزن بنت الجيران}  & bghanī u-taḥzan bint al-jīrān & and sang, saddening the girl next door. \\[0.5cm]

\textarabic{أوعى تنسيني أوعى تنسيني}  & Awʿa tensīnī, awʿa tensīnī    & ``Never forget me, never forget me! \\
\textarabic{و تذكري حنا السكران}      & wa-tadhkarī Ḥannā as-skīrān   & And remember Henna the drunk!'' \\[0.5cm]

\textarabic{نحنا و العصافير}          & Naḥnā w-al-ʿṣāfīr             & We and some birds \\
\textarabic{كنا بالحي ندور}           & kunnā bil-ḥay ndūr            & used to wander the neighborhood. \\
\textarabic{صوب الدكان نطير}          & Ṣawwab id-dukān nṭīr          & We flew toward the shop \\
\textarabic{حاملين غمار زهور}         & ḥamlīn [a]ghamār zuhūr        & carrying bunches of flowers. \\ 
\textarabic{يبقى حنا السكران}         & Yabaʾ Ḥannā as-sikrān         & Drunk Hanna remained \\
\textarabic{ملهي و على الحيطان}       & milhī wa ʿala al-ḥayṭān       & distracted on the walls, \\ 
\textarabic{عم بيصور بنت الجيران}     & ʿam bīṣawwir bint al-jīrān    & drawing the girl next door. \\[0.5cm]

\textarabic{حلوة ببيت الجيران}        & Ḥalwa babīt al-jīrān          & The beauty in the next door house \\
\textarabic{راحت بليلة عيد}           & rāḥat bilīlat ʿaīd            & left on one Eid [holiday, festival] night \\
\textarabic{و انهدت الدكان}           & wa-nhadat ad-dukān            & and the shop was torn down \\
\textarabic{و اتعمر بيت جديد}         & w-ataʿamar bīt jadīd          & and a new house put up. \\ 
\textarabic{و بعدو حنا السكران}       & Yabaʾ Ḥannā as-sikrān         & Drunk Henna remained \\
\textarabic{على حيطان النسيان}        & ʿala ḥayṭān an-nasayān        & on the forgotten walls \\ 
\textarabic{عم بيصور بنت الجيران}     & ʿam bīṣawwir bint al-jīrān    & drawing the girl next door. \\

\end{tabular}
\end{center} 
\end{document}
```