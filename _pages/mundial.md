---
layout: page-pv
title: Ruta al Mundial del Pan en Francia (Mondial du Pain - France)
permalink: /mundial/
description: Campeonato Nacional de Panadería Venezuela en la ruta al Mondial du Pain (France)
featured_image: /images/social.jpg
---

<section class="listing">

	<div class="content-wrap listing-wrap">
	 
	    {% assign mundial_posts = site.mundial | sort: "date" | reverse %}

		{% for post in mundial_posts reversed %}

		<div class="listing-item">

			<a class="listing-item__link" href="{{ post.url | relative_url }}">

				<div class="listing-item__image">
					<img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" loading="lazy" class="mundial-post-image">
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

<style>
  .mundial-post-image {
    width: 100%;
    max-width: 520px;
    height: auto;
    object-fit: cover;
    display: block;
    margin: 0 auto;
  }
</style>

</section>
