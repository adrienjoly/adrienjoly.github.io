---
title: Ideas
---

> Ideas are worthless; only execution matter! => Feel free to *steal* any of my ideas!
> 
> Check out my practical tips and references on how to bring an idea to execution, and create a successful startup: [Startup Noob Guide](http://bit.ly/startupnoob).

## Concepts I'd like to prototype

- A stream of honest and passionate updates from people we care about (join the discussion on [Pitchcard](https://www.pitchcard.io/cards/a-stream-of-honest-and-passionate-updates-from-people-we-care-about))
- intent-based smartphone UI (i.e. no apps)
- human communication with granular control of invasiveness
- self-training tools for education
- mix ToDos, notes and journaling
- evolving yellow pages desc. based on facts
- minimal multiplayer games

Please contact me if you're working on any of these topics, or if you would like to discuss!

## Recent ideas

- A good todo-list app ✅📲 (similar to [Swipes Personal](https://softwarerecs.stackexchange.com/questions/56985/alternative-to-swipesapp-swipes-personal)) for web and mobile that would be subscription-based if you want sync to work out of the box, and free to use if you setup your own back-end.

- A mobile (web) app to quickly take notes and update tasks in any card of my personal Trello board.
  - Potential technical enabler: [open source markdown viewer and editor](https://hashnode.com/post/i-created-an-open-source-online-markdown-viewer-and-editor-cjxnae7td002yt6s1p88x9ssn)

- A service to help me keep a history of the people I know, and make them sercheable from my inbox, by sending me a daily email listing what contacts I added or updated in my Google Contacts that day.
  - Potential technical enabler: [People API - Google Developers](https://developers.google.com/people/api/rest/v1/people)

## Older ideas

<!-- generated using wunderlist-to-md.js, from https://github.com/adrienjoly/ideas -->

<link rel="stylesheet" href="tweet-btn.css">
<style>
  .hashtag{ color: #0366d6 }
  .vote-button{ display:inline-block; opacity:0.5; }
</style>

<!-- listed from _data/ideas-older.yaml -->
<ul>
  {% for item in site.data.ideas-older %}
    <li id="{{ forloop.index }}">
      {% for tag in item.tags %}
        <span class="hashtag">#{{ tag }}</span>
      {% endfor %}
      {{ item.idea }}
      <div class="vote-button">
        <div class="btn-o" data-scribe="component:button" style="width: 61px;">
          <a href="https://twitter.com/intent/tweet?original_referer=https%3A%2F%2Fadrienjoly.com%2Fideas%2F&amp;ref_src=twsrc%5Etfw&amp;related=adrienjoly&amp;text=Idea%3A%20{% for tag in item.tags %}%23{{ tag | url_encode }}%20{% endfor %}{{ item.idea | url_encode }}&amp;tw_p=tweetbutton&amp;url=https%3A%2F%2Fadrienjoly.com%2Fideas%23{{ forloop.index }}&amp;via=adrienjoly" class="btn" onclick="window.open(this.href);return false;">
            <i></i>
            <span class="label">Tweet</span>
          </a>
        </div>
      </div>
    </li>{% endfor %}
</ul>
