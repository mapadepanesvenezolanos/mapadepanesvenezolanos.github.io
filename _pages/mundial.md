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

		{% for post in mundial_posts %}

		<div class="listing-item">

			<a class="listing-item__link" href="{{ post.url | relative_url }}">

				<div class="listing-item__image">
					<img src="{{ post.featured_image | relative_url }}" alt="{{ post.title }}" class="mundial-cover" loading="lazy">
				</div>

			</a>

		</div>

		{% endfor %}

	</div>

<style>
.mundial-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}

.mundial-card {
  display: flex;
  flex-direction: column;
}

.mundial-cover {
  width: 100%;
  height: 280px;
  object-fit: contain;
  object-position: center;
  display: block;
}

@media (max-width: 900px) {
  .mundial-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .mundial-grid {
    grid-template-columns: 1fr;
  }
}
</style>

</section>
