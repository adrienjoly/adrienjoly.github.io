---
title: Recent posts & other publications
---

## Research publications

👉 [Adrien Joly on Google Scholar](https://scholar.google.fr/citations?user=BI3HXcsAAAAJ)

## Blog Posts

{% for post in site.data.posts %}
- [{{ post.title }}]({{ post.url }})<br/>
  <small style="color:gray;">{{ post.date | date: "%b %-d, %Y" }}, {{ post.source }}</small>
{% endfor %}

## Older Blog Posts

{% for post in site.data.posts-older %}
- [{{ post.title }}]({{ post.url }})<br/>
  <small style="color:gray;">{{ post.date | date: "%b %-d, %Y" }}, {{ post.source }}</small>
{% endfor %}

> Last update was September 30th, 2018. [History](https://github.com/adrienjoly/adrienjoly.github.com/commits/master/talks)
>
> Follow [@adrienjoly](https://twitter.com/adrienjoly) on Twitter.
