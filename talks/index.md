---
title: Adrien Joly's talks
---

HTML:

<ul>
  {% for talk in site.data.talks %}
    <li>
      <a href="{{ talk.permalink }}">
        {{ talk.title }}
      </a>
    </li>
  {% endfor %}
</ul>

MD:

{% for talk in site.data.talks %}
- [{{ talk.title }}]({{ talk.permalink }})
{% endfor %}
