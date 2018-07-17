---
title: Posts
layout: legacy
---

# Blog Posts

{% for post in site.data.posts %}
- [{{ post.title }}]({{ post.url }})<br/>
  <small style="color:gray;">{{ post.date | date: "%b %-d, %Y" }}, {{ post.source }}</small>
{% endfor %}
