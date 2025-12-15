---
layout: page-pv
title: Cursos de Panes Venezolanos
permalink: /cursos/
description: Cursos de panadería venezolana en casa
featured_image: /images/social.jpg
---

En los panes venezolanos habitan historias, gestos aprendidos y sabores que nos conectan con casa.
Nuestros cursos nacen del deseo de compartir ese conocimiento de manera clara, respetuosa y accesible, para que puedas comprender el proceso del pan más allá de seguir una receta.

Aquí encontrarás espacios de aprendizaje pensados para panaderos caseros y personas curiosas, donde la técnica se explica con calma, la tradición se honra y cada pan se construye con criterio, práctica y disfrute.

<div class="container py-4">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {% for curso in site.cursos %}
        <div class="col">
            <div class="card h-100 shadow-sm hover-card">
                <a href="{{ curso.url | relative_url }}" class="text-decoration-none text-dark">
                    <div class="position-relative">
                        <img src="{{ curso.featured_image | relative_url }}" 
                             class="card-img-top" 
                             alt="{{ curso.title }}"
                             style="object-fit: cover;">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title fw-bold" style="font-family: 'Alfa Slab One', serif;">{{ post.title }}</h5>
                        <p class="card-text text-muted" style="font-family: 'Poppins', sans-serif;">{{ post.subtitle }}</p>
                    </div>
                </a>
            </div>
        </div>
        {% endfor %}
    </div>
</div>

<style>
.hover-card {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
.hover-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0.5rem 1rem rgba(0,0,0,.15)!important;
}
.card-img-top {
    transition: transform 0.3s ease-in-out;
}
.hover-card:hover .card-img-top {
    transform: scale(1.05);
}
</style>

En Panes Venezolanos queremos compartir con la comunidad la mayor cantidad de contenido posible para que más personas puedan aprender a hacer panes venezolanos en casa, con respeto por la tradición y comprensión del proceso.

Nuestros cursos y contenidos reflejan nuestra manera de hacer pan: una visión construida a partir de la práctica, la experiencia y el deseo de preservar fórmulas, recetas y procedimientos que reproducen nuestros sabores y nuestros panes. No se trata de verdades absolutas, sino de un espacio abierto al aprendizaje continuo.

Creemos en la mejora constante. Todo el contenido está en revisión permanente y valoramos profundamente los aportes hechos desde el respeto, el intercambio positivo y el amor por el pan.