---
layout: page-pv
title: Blog de Panes Venezolanos
permalink: /blog/
description: Reflexiones y curiosidades sobre los Panes Venezolanos
featured_image: /images/social.jpg
---

<section class="listing">

	<div class="content-wrap listing-wrap">

		{% for post in site.blog reversed %}

		<div class="listing-item">

			<a class="listing-item__link" href="{{ post.url | relative_url }}">

				<div class="listing-item__image">
					<img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}">
				</div>

				<div class="listing-item__content listing-item__content--{{ site.data.settings.grid_settings.content_alignment }}">
					<div class="listing-item__info">
						<h2 class="listing-item__title">{{ post.title }}</h2>
						<p class="listing-item__subtitle">{{ post.subtitle }}</p>
					</div>
				</div>

			</a>

		</div>

		{% endfor %}

	</div>

</section>
