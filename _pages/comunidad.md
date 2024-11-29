---
layout: page-pv
title: Comunidad de Panaderos Venezolanos
permalink: /comunidad/
description: Aportes de la comunidad de panaderos venezolanos.
featured_image: /images/social.jpg
---

En esta página encontrarás todos los integrantes de la Comunidad de Panaderos que han querido contribuir con contenido, fórmulas, recetas y procedimientos sobre Panes Venezolanos.

Cada creador lo hace con la ilusión de aportar y compartir con la mejor intención. Si consideras que algún contenido merece alguna revisión o tienes alguna duda, comunícate con el creador directamente.

<div class="container py-4">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {% for post in site.comunidad %}
        <div class="col">
            <div class="card h-100 shadow-sm hover-card">
                <a href="{{ post.url | relative_url }}" class="text-decoration-none text-dark">
                    <div class="position-relative">
                        <img src="{{ post.featured_image | relative_url }}" 
                             class="card-img-top" 
                             alt="{{ post.title }}"
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

Los amigos panarras queremos permitir a la comunidad realizar sus aportes sin censura. Respetamos los aportes de cada creador y los mantenemos intactos.

Los amigos panarras no somos responsables por faltas u omisiones o errores, apoyamos la comunidad y abrimos esta ventana para dar a conocer nuestros panes y preservar las fórmulas, recetas y procedimientos que reproducen nuestros sabores y nuestros panes. Si hay algo que mejorar, sabremos apreciar los aportes en positivo, todo el contenido es mejorable y está en revisión continuamente.