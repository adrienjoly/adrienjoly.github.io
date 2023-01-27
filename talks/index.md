---
title: Talks
description: A list of talks I've given to meetups and other events.
---

> 📌 Also check out my [blog posts](/posts) and [teaching](/teaching) interventions.

## Talks

{% for talk in site.data.talks %}
- [{{ talk.title }}]({{ talk.url }})<br/>
  <small style="color:gray;">{{ talk.date | date: "%b %-d, %Y" }}, {{ talk.event }}</small>
{% endfor %}

📌 Previous talks and slides: [Slideshare](https://fr.slideshare.net/adrienjoly/presentations)

<!-- inspiration: https://raw.githubusercontent.com/romsson/romain.vuillemot.net/master/talks.md -->

> Last update was {{ site.data.talks[0].date | date: "%b %-d, %Y" }}. [History](https://github.com/adrienjoly/adrienjoly.github.com/commits/master/talks)
>
> Follow [@adrienjoly](https://twitter.com/adrienjoly) on Twitter.
