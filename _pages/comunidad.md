---
layout: page-pv
title: Comunidad de Panaderos Venezolanos
permalink: /comunidad/
description: Aportes de la comunidad de panaderos venezolanos.
featured_image: /images/social.jpg
---

En esta página encontrarás todos los integrantes de la Comunidad de Panaderos que han querido contribuir con contenido, fórmulas, recetas y procedimientos sobre Panes Venezolanos.

Cada creador lo hace con la ilusión de aportar y compartir con la mejor intención. Si consideras que algún contenido merece alguna revisión o tienes alguna duda, comunícate con el creador directamente.

<section class="listing" style="margin-bottom: 40px;">
	<div class="content-wrap listing-wrap">
		{% for post in site.comunidad %}
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

Los amigos panarras queremos permitir a la comunidad realizar sus aportes sin censura. Respetamos los aportes de cada creador y los mantenemos intactos.

Los amigos panarras no somos responsables por faltas u omisiones o errores, apoyamos la comunidad y abrimos esta ventana para dar a conocer nuestros panes y preservar las fórmulas, recetas y procedimientos que reproducen nuestros sabores y nuestros panes. Si hay algo que mejorar, sabremos apreciar los aportes en positivo, todo el contenido es mejorable y está en revisión continuamente.