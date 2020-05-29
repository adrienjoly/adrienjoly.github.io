---
title: Posts
---

> Also check out my [talks](/talks), [research publications](https://scholar.google.fr/citations?user=BI3HXcsAAAAJ) and [homepage](/).

## ⭐️ Top Blog Posts

{% assign featured_posts = site.data.posts | where: "featured", true %}
{% for post in featured_posts %}
- [{{ post.title }}]({{ post.url }})<br/>
  <small style="color:gray;">{{ post.date | date: "%b %-d, %Y" }}, {{ post.source }}</small>
{% endfor %}

## Recent Blog Posts

{% for post in site.data.posts %}
- [{{ post.title }}]({{ post.url }})<br/>
  <small style="color:gray;">{{ post.date | date: "%b %-d, %Y" }}, {{ post.source }}</small>
{% endfor %}

## Older Blog Posts

{% for post in site.data.posts-older %}
- [{{ post.title }}]({{ post.url }})<br/>
  <small style="color:gray;">{{ post.date | date: "%b %-d, %Y" }}, {{ post.source }}</small>
{% endfor %}

> Last update was May 29th, 2020. [History](https://github.com/adrienjoly/adrienjoly.github.com/commits/master/talks)
>
> Follow [@adrienjoly](https://twitter.com/adrienjoly) on Twitter.
