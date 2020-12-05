---
title: Products & side projects
description: Products I've crafted and shipped with ♥️ love
containerClass: "container-md"
---

I've been maintaining various types of projects:

- productivity tools; (e.g. [Next Step for Trello](https://adrienjoly.com/chrome-next-step-for-trello) and [Scribe bot for Telegram](https://github.com/adrienjoly/telegram-scribe-bot))
- education material and tools; (e.g. [Startup Tour](https://www.udemy.com/startuptour/?couponCode=AJNOW20), [gclass-cli](https://github.com/adrienjoly/classroom-assignments-cli), [énoncé](https://github.com/adrienjoly/enonce) and a [Node.js course](/teaching))
- and apps for music lovers and musicians. (e.g. [Openwhyd](https://openwhyd.org), [Album Shelf](https://github.com/adrienjoly/album-shelf) and [a chiptune synth.](https://github.com/adrienjoly/webmidi-launchkey-mini))

Most of them are [open source](https://github.com/adrienjoly/). And I developed many of them while I was experimenting [life as a Indie Hacker](https://hackernoon.com/12-months-to-become-an-indie-hacker-ad0c916c1f5f). If I had more time, I would probably bootstrap dozens of new projects, from my [list of ideas](/ideas).

Would these skills be valuable for your business? See [what services I can provide](/pro).

## Products I've been maintaining for a while

- 🎵 [Openwhyd](https://github.com/openwhyd/openwhyd) (*formerly known as Whyd*), an open-source and crowdfunded web app for music lovers to discover, collect and play music tracks found on popular streaming platforms: Youtube, Soundcloud, Deezer, Bandcamp...

- ☑️ <a href="https://adrienjoly.com/chrome-next-step-for-trello">Next Step for Trello</a>, an extension for Google Chrome that displays pending checklist items of each card, directly on the board view.

- 🚜 <a href="https://www.npmjs.com/package/pdfreader">pdfreader</a>, a `npm` module to read text and parse tables from PDF files, with automatic column detection, and rule-based parsing.

## Other side projects

- 💯 I'm developing [énoncé](https://github.com/adrienjoly/enonce) and [classroom-assignments-cli](https://github.com/adrienjoly/classroom-assignments-cli) to help me evaluate the understanding and progress of my students, fairly and efficiently.

- 🛰 With [a-frame-descent-vr](https://github.com/adrienjoly/a-frame-descent-vr), I'm learning how to create a VR version of "Descent" using the "a-frame" WebXR framework.

- 🤖 [Scribe bot](https://github.com/adrienjoly/telegram-scribe-bot), a virtual assistant which allows me to quickly take some notes, save ToDos and/or bookmarks through Telegram.

- 👾 [chiptune synth](https://github.com/adrienjoly/webmidi-launchkey-mini), exploring the use of WebMidi and WebAudio to perform "chiptune" music (inspired by vintage game consoles like Nintendo Entertainment System) live, using MIDI instruments. As explained in "[Make Game Boy music in JavaScript](https://www.youtube.com/watch?v=xsKB5bRKZ4Y&t=621s)" (10-minute video), I'm thinking of using this to give an [educational concert about chiptune music](/chips). Please contact me if you know any musicians who may like to collaborate!

- 💿 [album-shelf](https://github.com/adrienjoly/album-shelf), an living web page on which I maintain a collection of my favorite music albums. Made with Jekyll and Github pages.

- 🤖 <a href="https://github.com/adrienjoly/js-test">EVAL / JS-TEST</a>, an open-source suite of software tools (including quizzes and auto-graded code exercises) to help me evaluate my students more efficiently. (see my <a href="https://www.youtube.com/playlist?list=PLmzn1C-VN6G7DsJb9wn29Pv2XkrF8aI6Q">6  videos</a>)

- 💯 <a href="https://github.com/adrienjoly/classroom-submissions-to-pdf">Classroom submissions to PDF</a>, an open-source script that extracts codepen/jsfiddle/jsbin links from Google Classroom submissions, and converts them to PDF files, for paper-less annotation and grading. (<a href="https://www.youtube.com/watch?v=L7NQNe72Jec">demo video</a>)

- 📂 <a href="https://info.trello.com/power-ups/comment-editor">Comment Editor by AJ</a>, a Trello Power-up that adds WYSIWYG and outliner-like editing to comments, in order to take notes more efficiently.<br />Read "<a href="https://medium.com/@adrienjoly/using-trello-as-a-living-notebook-79cb22aab81f">Using Trello as a living notebook</a>", if you want to know how I use it.

- 💁 <a href="https://chrome.google.com/webstore/detail/contacts-for-google-inbox/onifklcfhbdjpkejffijcejbgoipcdmk?hl=en-US">Contacts for Google Inbox</a>, an extension for Google Chrome that allows to view and edit a sender's (or recipient's) contact details by just clicking on it.

- 🔗 <a href="https://chrome.google.com/webstore/detail/permalinks-for-google-inb/eijfpfnadnijllpfdkdikfamdijafala?hl=en-US">Permalinks for Google Inbox</a>, an extension for Google Chrome that gives the permalink/URL of all your emails, in order to refer to them from other pages.

- 🇫🇷 <a href="https://marketplace.visualstudio.com/items?itemName=adrienjoly.vscode-spellchecker-fr">FR Spellchecker</a>, a French spell-checking extension for Visual Studio Code.

- 📹 <a href="https://www.youtube.com/playlist?list=PLmzn1C-VN6G7FLdUJM3G82cG-Q69xJ2AY">22 live coding videos</a> that I streamed live on Twitch &amp; Youtube, while I was developing my products.

- 📜 <a href="https://www.getrevue.co/profile/aj-sideprojects">1 side project per week</a>, the newsletter I maintained to share my progress.

- 👐 <a href="https://spectrum.chat/wip">WIP / Work In Progress</a>, a benevolent community in which creators share progress on their projects to get constructive feedback, help, and praise.
    
- ✊ <a href="https://www.udemy.com/startuptour/?couponCode=AJNOW20">Startup Tour</a> (🇫🇷), a MOOC with ~3 hours of video content to help people turn their idea into a real Lean Startup.
  
- ✍️ <a href="https://hackernoon.com/12-months-to-become-an-indie-hacker-ad0c916c1f5f">12 months to become an Indie Hacker</a> and <a href="https://hackernoon.com/what-i-learned-while-working-as-an-indie-developer-for-2-years-53619fafa81f">What I learned while working as an indie developer for 2 years</a>, retrospectives of my entrepreneurial experience (and experiments).

{% for proj in site.data.side-projects %}
{% if proj.date != "(2017)" %}
- [{{ proj.title }}]({{ proj.url }}) {{ proj.date }}: {{ proj.desc }}
{% endif %}
{% endfor %}

> Last update was December 5th, 2020. [History](https://github.com/adrienjoly/adrienjoly.github.com/commits/master/prod)
>
> Follow [@adrienjoly](https://twitter.com/adrienjoly) on Twitter.
