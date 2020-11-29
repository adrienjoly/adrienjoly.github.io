---
title: Ideas
description: Ideas are worthless. Execution matters! => Feel free to steal any of my ideas!
---

> Ideas are worthless. Execution matters! => Feel free to *steal* any of my ideas!
> 
> Check out my practical tips and references on how to bring an idea to execution, and create a successful startup: [Startup Noob Guide](http://bit.ly/startupnoob).

## Goals I'd love to contribute to

Please contact me if you're excited or curious about any of these topics. I'd be happy to discuss!

<link rel="stylesheet" href="tweet-btn.css">
<style>
  .hashtag {
    color: #b7b7b7;
  }
  .ideas p {
    display: inline;
  }
  ul.ideas > li {
    margin-top: 1.25em;
  }
</style>

<!-- listed from _data/ideas.yaml -->
{% for group in site.data.ideas %}
### {{ group.goal }}
<ul class="ideas">
  {% for item in group.ideas %}
    <li>
      {{ item.idea | markdownify }}
      {% for tag in item.tags %}
        <span class="hashtag">#{{ tag }}</span>
      {% endfor %}
    </li>
  {% endfor %}
</ul>
{% endfor %}

> Last update was November 22th, 2020. [History](https://github.com/adrienjoly/adrienjoly.github.com/commits/master)
>
> Follow [@adrienjoly](https://twitter.com/adrienjoly) on Twitter.
