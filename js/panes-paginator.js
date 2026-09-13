(function () {
  'use strict';

  var STORAGE_KEY = 'panes-per-page';
  var select;
  var items;
  var wrapper;
  var nav;
  var state = { page: 1 };

  function apply() {
    var perPage = select.value;
    var pages = panesPaging.totalPages(items.length, perPage);

    if (state.page > pages) state.page = pages || 1;

    var visible = panesPaging.slice(items, state.page, perPage);
    var visiblePos = {};
    visible.forEach(function (el) { visiblePos[el.getAttribute('data-pos')] = true; });

    items.forEach(function (el) {
      el.style.display = visiblePos[el.getAttribute('data-pos')] ? '' : 'none';
    });

    renderNav(pages);
  }

  function renderNav(pages) {
    if (!wrapper) return;
    if (pages <= 1) {
      wrapper.hidden = true;
      return;
    }
    wrapper.hidden = false;
    if (!nav) return;

    var html = '';
    html += '<div class="pagination__left">';
    html += state.page > 1
      ? '<a class="pagination__link" href="#" data-page="' + (state.page - 1) + '">← Anterior</a>'
      : '';
    html += '</div>';

    html += '<div class="pagination__center">';
    html += '<span class="pagination__info">Página ' + state.page + ' de ' + pages + ' · ' + items.length + ' panes</span>';
    html += '</div>';

    html += '<div class="pagination__right">';
    html += state.page < pages
      ? '<a class="pagination__link" href="#" data-page="' + (state.page + 1) + '">Ver más panes →</a>'
      : '';
    html += '</div>';

    nav.innerHTML = html;
  }

  function restoreSelection() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && select.querySelector('option[value="' + saved + '"]')) {
        select.value = saved;
      }
    } catch (e) {}
  }

  function onSelectChange() {
    try { localStorage.setItem(STORAGE_KEY, select.value); } catch (e) {}
    window.location.reload();
  }

  function onNavClick(event) {
    var link = event.target.closest ? event.target.closest('[data-page]') : null;
    if (!link) return;
    event.preventDefault();
    state.page = parseInt(link.getAttribute('data-page'), 10);
    apply();
    if (nav && nav.scrollIntoView) nav.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function init() {
    select = document.getElementById('panes-per-page-select');
    if (!select) return;

    items = Array.prototype.slice.call(document.querySelectorAll('#listing-wrap .listing-item'));
    wrapper = document.getElementById('panes-pagination-wrapper');
    nav = document.getElementById('panes-pagination');

    restoreSelection();
    select.addEventListener('change', onSelectChange);
    if (nav) nav.addEventListener('click', onNavClick);
    apply();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();