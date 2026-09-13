# Selector de cantidad de panes en la página principal

## Objective
Permitir al usuario elegir cuántos panes ver en la página principal (por ejemplo 10, 20, 40 o Todos), con paginación en el navegador, reemplazando la cantidad fija actual (20 por página vía `jekyll-paginate`).

## Contexto actual
- `index.html` recorre `paginator.posts` con `paginate: 20` (fijo en `_config.yml`, línea 83) y muestra una paginación del servidor (páginas `/page2/`, `/page3/`, …).
- Hay 57 panes (`_posts/`), es decir hoy se reparten en 3 páginas servidas estáticamente.
- El sitio se publica como estático (GitHub Pages): **no es posible** re-paginar en el servidor en tiempo real.

## Requirements
1. Mostrar un selector (`<select>`) en la sección de listado con opciones 10 / 20 / 40 / Todos, con valor por defecto **20** (comportamiento actual) — priority: high
2. Al cambiar la selección, el listado se actualiza al instante mostrando esa cantidad por página — priority: high
3. Paginación cliente (← Anterior, números de página, Siguiente →) cuando el total excede la cantidad elegida — priority: high
4. Persistir la elección en `localStorage` y restaurarla al recargar — priority: medium
5. Fallback sin JavaScript: se muestran **todos** los panes (progressive enhancement, sin dependencia del paginador del servidor) — priority: medium
6. Mantener el markup existente de `.listing-item` (imagen lazy, título, subtítulo) sin cambios visuales — priority: medium

## Architecture
- **Decisión:** la paginación se hace 100% en el navegador. `index.html` deja de depender de `paginator.posts` y recorre `site.posts` (los 57 panes entran al HTML, las imágenes ya cargan con `loading="lazy"`). El JS paga/oculta tarjetas sin hacer `fetch` adicional.
- **Decisión:** la paginación del servidor (`.pagination-wrapper`) se elimina de la página principal; `paginate`/`paginate_path` de `_config.yml` se conservan (fallback/no-JS y sin romper `jekyll-paginate`).
- **Decisión:** la lógica pura (cálculo de páginas/rodajas) vive en un módulo UMD (`js/panes-paging.js`) para poder probarse con `node --test` y usarse en el navegador.
- **Fuera de alcance:** `js/filters.js` (filtros por región/tipo) no está conectado a `index.html` hoy y su markup (`data-region`/`data-tipo`) no se renderiza; no depende de esta tarea y se deja para otra iteración.

### Files to create
- `js/panes-paging.js` — lógica pura UMD: `totalPages(total, perPage)`, `slice(items, page, perPage)`. `module.exports` para Node, `window.panesPaging` para el navegador.
- `js/panes-paginator.js` — controlador: lee el selector, aplica `panesPaging`, muestra/oculta `.listing-item`, renderiza la navegación de páginas, guarda en `localStorage` (clave `panes-per-page`) y escucha `change`.
- `_includes/panes-per-page.html` — UI del selector (etiqueta + `<select>`) y contenedor de paginación cliente; se incluye desde `index.html`.
- `tests/panes-paging.test.js` — pruebas `node --test` del módulo puro (red → green).

### Files to modify
- `index.html` — `{% for post in site.posts %}` en lugar de `paginator.posts`; quitar `.pagination-wrapper`; insertar `{% include panes-per-page.html %}` (con marcado `<noscript>`); cargar `panes-paging.js` + `panes-paginator.js`.
- `css/filters.scss` (o `_sass/_includes/_listing.scss`) — estilos mínimos para el selector y la paginación cliente, reusando la estética actual.
- `_config.yml` — opcionalmente comentar `paginate`/`paginate_path` documentando que la paginación ahora es cliente (no borrar por compatibilidad de plugin).

## TDD Flow
1. Escribir `tests/panes-paging.test.js`:
   - `totalPages(57, 20) === 3`, `totalPages(5, 10) === 1`, `totalPages(0, 10) === 0`.
   - `slice([...57], 1, 20)` devuelve 20 elementos; página 3 devuelve los 17 restantes.
   - `totalPages(N, 'todos')` devuelve 1 y `slice` devuelve el arreglo completo.
   - Ejecutar `node --test tests/` → **FAIL** (el módulo no existe).
2. Implementar `js/panes-paging.js` → **PASS**.
3. Implementar `js/panes-paginator.js` y el include → verificación manual.
4. Refactor (si aplica) → los tests siguen en verde.

## Verification
- [ ] `node --test tests/` pasa (rojo primero, verde después)
- [ ] `bundle exec jekyll build` genera el sitio sin errores
- [ ] Manual (dev server): cambiar el selector a 10 / 20 / 40 / Todos reenumerando la lista y la paginación al instante
- [ ] Recargar la página restaura la última selección (localStorage)
- [ ] Con JS deshabilitado se ven los 57 panes (fallback `<noscript>`)
- [ ] Navegación ⬅/➡ y números de página funcionan; el total de páginas coincide con `site.posts.size / opción`
- [ ] Se ve bien en móvil (reusa los estilos de `.listing` y `.pagination`)
- [ ] Documentación actualizada (`_README.md`) y revisar si conviene crear `AGENTS.md` con el comando `/plan`
- [ ] Preguntar al usuario si desea commit y push