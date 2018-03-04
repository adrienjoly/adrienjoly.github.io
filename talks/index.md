---
title: Talks
---

{% for talk in site.data.talks %}
- [{{ talk.title }}]({{ talk.url }})<br/>
  <small style="color:gray;">{{ talk.date | date: "%b %-d, %Y" }}, {{ talk.event }}</small>
{% endfor %}

Previous talks and slides: [Slideshare](https://fr.slideshare.net/adrienjoly/presentations)

<!-- inspiration: https://raw.githubusercontent.com/romsson/romain.vuillemot.net/master/talks.md -->
