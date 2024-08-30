---
layout: diary
permalink: /diary/
---
<div class="text">
    <h6 class="mt-1 ms-1 mx-auto">
        a small snapshot of various moments in a year. lots of
        ramblings here.<br /><br />
        {% for post in site.posts %}
            <a href="{{ post.url }}">{{ post.date | date: "%-d %b %Y"}}</a><br />
        {% endfor %}
    </h6>
</div>
