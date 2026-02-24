---
layout: default
title: Blog
permalink: /blog/
---

<div class="page-header">
  <h1 class="page-title">Blog</h1>
</div>

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <p class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</p>
    <h2 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    {% if post.excerpt %}
    <p class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p class="empty-state">No posts yet — check back soon.</p>
{% endif %}
