---
title: Ideas
---

> Ideas are worthless; only execution matter! => Feel free to *steal* any of my ideas!
> 
> Check out my practical tips and references on how to bring an idea to execution, and create a successful startup: [Startup Noob Guide](http://bit.ly/startupnoob).

## Ideas I'd love to experiment with, so day

Please contact me if you're excited or curious about any of these topics. I'd be happy to discuss!

<link rel="stylesheet" href="tweet-btn.css">
<style>
  .hashtag{ color: #0366d6 }
  .vote-button{ display:inline-block; opacity:0.5; }
  .older-ideas p { display:inline }
</style>

<!-- listed from _data/ideas-older.yaml -->
{% for group in site.data.ideas-older %}
### Goal: {{ group.goal }}
<ul class="older-ideas">
  {% for item in group.ideas %}
    <li id="{{ forloop.index }}">
      {% for tag in item.tags %}
        <span class="hashtag">#{{ tag }}</span>
      {% endfor %}
      {{ item.idea | markdownify }}
      <div class="vote-button">
        <div class="btn-o" data-scribe="component:button" style="width: 61px;">
          <a href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fadrienjoly.com%2Fideas%2F&amp;ref_src=twsrc%5Etfw&amp;related=adrienjoly&amp;text=Idea%3A%20{% for tag in item.tags %}%23{{ tag | url_encode }}%20{% endfor %}{{ item.idea | url_encode }}&amp;tw_p=tweetbutton&amp;url=https%3A%2F%2Fadrienjoly.com%2Fideas%23{{ forloop.index }}&amp;via=adrienjoly" class="btn" onclick="window.open(this.href);return false;">
            <i></i>
            <span class="label">Tweet</span>
          </a>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
{% endfor %}
