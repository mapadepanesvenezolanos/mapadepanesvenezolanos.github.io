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
					<img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}">
				</div>

			</a>

		</div>

		{% endfor %}

	</div>

</section>
