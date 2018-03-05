---
layout: legacy
title: Projects
---

<h1>Recent projects</h1>

<ul class="items thumbs">
  <!-- listed from _data/projects.yaml -->
  {% include project-listing.html list=site.data.projects %}
</ul>

<div class="clear"></div>

<h1>Older projects</h1>

<ul class="items thumbs">
  <!-- listed from _data/older-projects.yaml -->
  {% include project-listing.html list=site.data.older-projects %}
</ul>

<div class="clear"></div>

<h1>Side-Projects (mostly open-source)</h1>

<ul class="items thumbs">
  <!-- listed from _data/side-projects.yaml -->
  {% include project-listing.html list=site.data.side-projects %}
</ul>

<div class="clear"></div>

<!--
<a class="button" href="https://www.getrevue.co/profile/aj-sideprojects?ref=adrienjoly_com_sideprojects" target="_blank">
  <span class="news"/>
  Receive my next side-projects by email (1 per week)
</a>
-->
