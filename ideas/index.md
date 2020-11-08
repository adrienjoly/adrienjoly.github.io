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
  .hashtag{ color: #d0d0d0; }
  .vote-button {
    display: inline-block;
    opacity: 0.2;
    vertical-align: text-top;
    margin-left: 8px;
  }
  .vote-button:hover {
    opacity: 0.5;
  }
  .ideas p { display: inline; }
</style>

<!-- listed from _data/ideas.yaml -->
{% for group in site.data.ideas %}
### {{ group.goal }}
<ul class="ideas">
  {% for item in group.ideas %}
    <li>
      {% for tag in item.tags %}
        <span class="hashtag">#{{ tag }}</span>
      {% endfor %}
      {{ item.idea | markdownify }}
    </li>
  {% endfor %}
</ul>
{% endfor %}
