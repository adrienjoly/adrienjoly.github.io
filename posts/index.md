---
title: Recent posts & other publications
---

## Blog Posts

{% for post in site.data.posts %}
- [{{ post.title }}]({{ post.url }})<br/>
  <small style="color:gray;">{{ post.date | date: "%b %-d, %Y" }}, {{ post.source }}</small>
{% endfor %}

📌 Research publications: [Adrien Joly on Google Scholar](https://scholar.google.fr/citations?user=BI3HXcsAAAAJ)

> Last update was August 18th, 2018. [History](https://github.com/adrienjoly/adrienjoly.github.com/commits/master/talks)
>
> Follow [@adrienjoly](https://twitter.com/adrienjoly) on Twitter.
