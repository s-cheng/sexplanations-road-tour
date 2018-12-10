---
layout: log
permalink: /log
---

<div>
    {% for post in site.data.tumblr.posts %}
    <div class="log__tumblr-post">
        <!-- <div>{{post.type}}</div> -->
        {% if post.type == 'text' %}
            <div class="heading-3">
                {{ post.title }}
            </div>
            <div class="log__tumblr-post-body">
                {{ post.body }}
            </div>
        {% elsif post.type == 'quote' %}
            <div class="quote-text log__tumblr-post-quote">
                " {{ post.text }} "
            </div>
            <div class="log__tumblr-post-quote-source">
                {{ post.source }}
            </div>
        {% elsif post.type == 'link' %}
            <div class="log__tumblr-post-heading">
                <a href="{{ post.url }}">{{ post.title }}</a>
            </div>
            <div class="log__tumblr-post-body">
                {{ post.description }}
            </div>
        {% elsif post.type == 'photo' %}
            {% for photo in post.photos %}
            <div class="log__tumblr-post-heading">
                {% if post.link_url %}
                <a href="{{ post.link_url }}">
                    <img src="{{ photo.original_size.url }}" class="log__tumblr-post-img" />
                </a>
                {% else %}
                <img src="{{ photo.original_size.url }}" class="log__tumblr-post-img" />
                {% endif %}
            </div>
            {% endfor %}
            <div class="log__tumblr-post-body">
                {{ post.caption }}
            </div>
        {% elsif post.type == 'answer' %}
            <div class="log__tumblr-post-question">
                {{ post.question }}
            </div>
            <div class="log__tumblr-post-asker">
                {% if post.asking_url %}
                <a href="{{ post.asking_url }}">
                    {{ post.asking_name }}
                </a>
                {% else %}
                {{ post.asking_name }}
                {% endif %}
            </div>
            <div class="log__tumblr-post-body">
                {{ post.answer }}
            </div>
        {% elsif post.type == 'video' %}
            <div class="log__tumblr-post-heading">
                {% for video in post.player %}
                    {% if video.width == 400 %}
                        <div class="log__tumblr-iframe-container">
                            <div class="iframe-container">
                                {{ video.embed_code }}
                            </div>
                        </div>
                    {% endif %}
                {% endfor %}
            </div>
            <div class="log__tumblr-post-body">
                {{ post.caption }}
            </div>
        {% elsif post.type == 'audio' %}
            <div class="log__tumblr-post-heading">
                {{ post.embed }}
            </div>
            <div class="log__tumblr-post-body">
                {{ post.caption }}
            </div>
        {% elsif post.type == 'chat' %}
            <div class="heading-3">
                {{ post.title }}
            </div>
            <div class="log__tumblr-post-body">
                {% for line in post.dialogue %}
                    <div class="log__tumblr-post-chat-line">
                        <strong>{{ line.label }}</strong> {{ line.phrase }}
                    </div>
                {% endfor %}
            </div>
        {% endif %}

        <a href="{{ post.post_url }}" class="log__tumblr-post-footer">
            <div>Posted {{ post.date | date: "%I:%M %p %D" }}</div>
            <div>{{ post.note_count }} notes</div>
        </a>
    </div>
    {% endfor %}
</div>
