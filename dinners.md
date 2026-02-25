---
layout: default
title: Dinner Log
permalink: /dinners/
---

<div class="page-header">
  <h1 class="page-title">Dinner Log</h1>
  <p class="page-subtitle">What I ate for dinner, most nights.</p>
</div>

{% assign dinners = site.dinners | sort: 'date' | reverse %}
{% if dinners.size > 0 %}
<ul class="dinner-list">
  {% for dinner in dinners %}
  <li>
    <span class="dinner-date">{{ dinner.date | date: "%b %-d, %Y" }}</span>
    <span class="dinner-meal">{{ dinner.meal }}</span>
    {% if dinner.notes %}<span class="dinner-notes">— {{ dinner.notes }}</span>{% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p class="empty-state">No entries yet.</p>
{% endif %}
