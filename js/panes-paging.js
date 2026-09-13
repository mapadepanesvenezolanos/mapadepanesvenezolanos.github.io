(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof window !== 'undefined') {
    window.panesPaging = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function totalPages(total, perPage) {
    if (total <= 0) return 0;
    if (perPage === 'todos') return 1;
    return Math.ceil(total / perPage);
  }

  function slice(items, page, perPage) {
    if (!Array.isArray(items) || items.length === 0) return [];
    if (perPage === 'todos') return items.slice();
    var start = (page - 1) * perPage;
    return items.slice(start, start + perPage);
  }

  return {
    totalPages: totalPages,
    slice: slice
  };
});